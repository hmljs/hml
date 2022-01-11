import {
    omit,
    clone,
    merge,
    isArray,
    isString,
    sliceArguments,
    skrinkSerializer,
    typescript,
    acorn_core,
    acorn_walk,
    path,
    fs,
    DEVELOPMENT,
    JSON,
    NULL,
    UTF8,
} from "./_constant";
/**
 * 
 */
export var _COM_HTTP_COMPILER = (function () {
    /**
     * 
     * @param {string} content
     * @param {string} filename 
     */
    function _tsTranspile(content, filename) {
        var compilerOptions = {
            allowJs: true,
            esModuleInterop: true,
            inlineSources: DEVELOPMENT,
            inlineSourceMap: DEVELOPMENT,
            emitDecoratorMetadata: true,
            experimentalDecorators: true,
            allowSyntheticDefaultImports: true,
            target: typescript.ScriptTarget.ES5,
            module: typescript.ModuleKind.AMD,
            jsxFactory: "Hml.createElement",
            jsx: typescript.JsxEmit.React,
        };
        var tsconfigResolve = path.resolve("tsconfig.json");
        if (fs.existsSync(tsconfigResolve) &&
            fs.statSync(tsconfigResolve).isFile()) {
            try {
                compilerOptions = merge(compilerOptions, omit(
                    typescript.convertCompilerOptionsFromJson(
                        JSON.parse(
                            fs.readFileSync(tsconfigResolve, UTF8)
                        ).compilerOptions,
                        filename
                    ).options,
                    "module"
                ));
            } catch (_) {
                // DO NOTHING
            }
        }
        return typescript.transpile(content, compilerOptions, filename);
    }
    /**
     * 
     * @param {string} content
     * @param {string} filename 
     */
    function _jsTranspile(content, filename) {
        /**
         * 
         * @param {any} name 
         */
        function addDependency(name) {
            if (isString(name) && name.length > 0) {
                if (dependencies.indexOf(name) === -1) {
                    dependencies.push(name);
                }
            }
        }
        /**
         * 
         * @param {string} name 
         */
        function defineVariable(name) {
            rename[name] = NULL;
            if (define.indexOf(name) === -1) {
                define.push(name);
            }
        }
        /**
         * 
         * @param {string} name 
         * @param {string} data 
         */
        function deleteVariable(name, data) {
            rename[name] = rename[data] || data;
            var location = define.indexOf(name);
            if (location !== -1) {
                define.splice(location, 1);
            }
        }
        /**
         * 
         * @param {import("estree").Node | Array<import("estree").Node> | null | undefined} node 
         * @param {Hml.NoReturnsFunc<[import("estree").Node]>} callback 
         */
        function invokeCallback(node, callback) {
            if (isArray(node)) {
                node.forEach(function (node) {
                    callback(node);
                });
            } else if (node) {
                callback(node);
            }
        }
        /**
         * 
         * @param {import("estree").Node} node 
         * @param {Hml.NoReturnsFunc<[string]>} callback 
         */
        function resolvePattern(node, callback) {
            switch (node.type) {
                case "Identifier":
                    callback(node.name);
                    break;
                case "ArrayPattern":
                    node.elements.forEach(function (node) {
                        if (node) {
                            resolvePattern(node, callback);
                        }
                    });
                    break;
                case "ObjectPattern":
                    node.properties.forEach(function (node) {
                        if (node.type === "Property") {
                            resolvePattern(node.value, callback);
                        }
                        if (node.type === "RestElement") {
                            resolvePattern(node.argument, callback);
                        }
                    });
                    break;
                case "RestElement":
                    resolvePattern(node.argument, callback);
                    break;
                case "AssignmentPattern":
                    resolvePattern(node.left, callback);
                    break;
            }
        }
        /**
         * 
         * @param {import("estree").Node} node 
         */
        function getRenameIdentifier(node) {
            var name;
            switch (node.type) {
                case "Identifier":
                    name = rename[node.name] || node.name;
                    if (define.indexOf(node.name) === -1) {
                        return name;
                    }
                    break;
                case "ThisExpression":
                    name = rename["this"];
                    if (name) {
                        return name;
                    }
                    break;
                case "MemberExpression":
                    name = getNameByExpression(node);
                    if (name && name.free) {
                        return name.identifier;
                    }
                    break;
            }
        }
        /**
         * 
         * @param {import("estree").Node} node 
         */
        function getNameByExpression(node) {
            var list = [];
            var free = false;
            var name;
            while (node.type === "MemberExpression") {
                if (node.computed) {
                    if (node.property.type === "Literal") {
                        list.push(node.property.value);
                    } else {
                        break;
                    }
                } else {
                    if (node.property.type === "Identifier") {
                        list.push(node.property.name);
                    } else {
                        break;
                    }
                }
                node = node.object;
            }
            switch (node.type) {
                case "Identifier":
                    name = node.name;
                    free = define.indexOf(name) === -1;
                    list.push(rename[name] || name);
                    break;
                case "ThisExpression":
                    if (name = rename["this"]) {
                        free = true;
                        list.push(name);
                    } else {
                        free = false;
                        list.push("this");
                    }
                    break;
                default:
                    return NULL;
            }
            var prefix = "";
            for (var
                i = list.length - 1;
                i > 0;
                i--
            ) {
                prefix += list[i] + ".";
            }
            return {
                free: free,
                expression: prefix + "*",
                identifier: prefix + list[0],
            };
        }
        /**
         * 
         * @param {Array<import("estree").Node | string>} argv 
         * @param {Hml.NOOP} callback 
         */
        function inScope(argv, callback) {
            var _rename = rename;
            var _define = define;
            rename = clone(_rename);
            define = clone(_define);
            rename["this"] = NULL;
            argv.forEach(function (node) {
                if (isString(node)) {
                    defineVariable(node);
                } else {
                    resolvePattern(node, defineVariable);
                }
            });
            callback();
            rename = _rename;
            define = _define;
        }
        /**
         * 
         * @param {import("estree").VariableDeclarator} node 
         * @param {null} state 
         * @param {Hml.NoReturnsFunc<[import("estree").Node]>} callback 
         */
        function VariableDeclarator(node, state, callback) {
            if (esm || amd) {
                return;
            }
            resolvePattern(node.id, defineVariable);
            if (node.init && node.id.type === "Identifier") {
                var name = getRenameIdentifier(node.init);
                if (name) {
                    deleteVariable(node.id.name, name);
                    return;
                }
            }
            invokeCallback(node.id, callback);
            invokeCallback(node.init, callback);
        }
        /**
         * 
         * @param {import("estree").AssignmentExpression} node 
         * @param {null} state 
         * @param {Hml.NoReturnsFunc<[import("estree").Node]>} callback 
         */
        function AssignmentExpression(node, state, callback) {
            if (esm || amd) {
                return;
            }
            var info = getNameByExpression(node.left);
            if (info && info.free && (
                info.expression === "module.*" ||
                info.expression === "module.exports.*" ||
                info.expression === "exports.*"
            )) {
                cjs = true;
            }
            var name = getRenameIdentifier(node.right);
            if (name && node.left.type === "Identifier") {
                deleteVariable(node.left.name, name);
            } else if (node.left.type === "Identifier") {
                invokeCallback(node.right, callback);
                defineVariable(node.left.name);
                invokeCallback(node.left, callback);
            } else {
                invokeCallback(node.right, callback);
                invokeCallback(node.left, callback);
                resolvePattern(node.left, function (name) {
                    rename[name] = NULL;
                });
            }
        }
        /**
         * 
         * @param {import("estree").ImportExpression} node 
         * @param {null} state 
         * @param {Hml.NoReturnsFunc<[import("estree").Node]>} callback 
         */
        function ImportExpression(node, state, callback) {
            if (esm || amd) {
                return;
            }
            if (node.source.type === "Literal") {
                addDependency(node.source.value);
            }
            invokeCallback(node.source, callback);
        }
        /**
         * 
         * @param {import("estree").CallExpression} node 
         * @param {null} state 
         * @param {Hml.NoReturnsFunc<[import("estree").Node]>} callback 
         */
        function CallExpression(node, state, callback) {
            if (esm || amd) {
                return;
            }
            var name = getRenameIdentifier(node.callee);
            if (name === "define") {
                amd = true;
                return;
            }
            if (name === "require") {
                cjs = true;
                if (node.arguments.length === 1 &&
                    node.arguments[0].type === "Literal") {
                    addDependency(node.arguments[0].value);
                    return;
                }
            }
            invokeCallback(node.callee, callback);
            invokeCallback(node.arguments, callback);
        }
        /**
         * 
         * @param {import("estree").ClassDeclaration} node 
         * @param {null} state 
         * @param {Hml.NoReturnsFunc<[import("estree").Node]>} callback 
         */
        function ClassDeclaration(node, state, callback) {
            if (esm || amd) {
                return;
            }
            if (node.id) {
                defineVariable(node.id.name);
            }
            invokeCallback(node.superClass, callback);
            invokeCallback(node.body, callback);
        }
        /**
         * 
         * @param {import("estree").FunctionDeclaration} node 
         * @param {null} state 
         * @param {Hml.NoReturnsFunc<[import("estree").Node]>} callback 
         */
        function FunctionDeclaration(node, state, callback) {
            if (esm || amd) {
                return;
            }
            if (node.id) {
                defineVariable(node.id.name);
            }
            invokeCallback(node.params, callback);
            inScope(sliceArguments([node.params, node.id], 0, true, true), function () {
                invokeCallback(node.body, callback);
            });
        }
        /**
         * 
         */
        function ModuleDeclaration() {
            esm = true;
        }
        /**
         * 
         */
        var esm = false;
        /**
         * 
         */
        var amd = false;
        /**
         * 
         */
        var cjs = false;
        /**
         * @type {Record<string, string | null | undefined>}
         */
        var rename = {};
        /**
         * @type {string[]}
         */
        var define = [];
        /**
         * @type {string[]}
         */
        var dependencies = [];
        /**
         * 
         */
        acorn_walk.recursive(
            acorn_core.parse(content, {
                ecmaVersion: "latest",
                sourceType: "module",
                locations: false,
                ranges: false,
            }),
            NULL,
            {
                // @ts-ignore
                VariableDeclarator: VariableDeclarator,
                // @ts-ignore
                AssignmentExpression: AssignmentExpression,
                // @ts-ignore
                ImportExpression: ImportExpression,
                // @ts-ignore
                CallExpression: CallExpression,
                // @ts-ignore
                ClassDeclaration: ClassDeclaration,
                // @ts-ignore
                FunctionDeclaration: FunctionDeclaration,
                // @ts-ignore
                ImportDeclaration: ModuleDeclaration,
                // @ts-ignore
                ExportNamedDeclaration: ModuleDeclaration,
                // @ts-ignore
                ExportDefaultDeclaration: ModuleDeclaration,
                // @ts-ignore
                ExportAllDeclaration: ModuleDeclaration,
            }
        );
        if (esm) {
            return _tsTranspile(content, filename);
        }
        if (cjs) {
            return "define(" + JSON.stringify(["require", "exports", "module"].concat(dependencies)) + ",function(require,exports,module){\n" + content + "\n});";
        }
        return content;
    }
    /**
     * 
     */
    return skrinkSerializer(
        /**
         * 
         * @param {string} content
         * @param {string} filename 
         */
        function (content, filename) {
            var extname = path.extname(filename).slice(1).toLowerCase();
            if (extname === "ts" || extname === "tsx" || extname === "jsx") {
                return _tsTranspile(content, filename);
            }
            if (extname === "js" || extname === "mjs") {
                return _jsTranspile(content, filename);
            }
            return content;
        }
    );
}());