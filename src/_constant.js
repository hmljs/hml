/**
 * 
 * @param {any} argc 
 */
 export function className(argc) {
    return Object.prototype.toString.call(argc).slice(8, -1);
}
/**
 * 
 * @param {ReadonlyArray<number>} argc 
 */
export function fromCharCode(argc) {
    var r = "";
    for (var
        i = 0,
        l = argc.length;
        i < l;
        i++
    ) {
        var n = argc[i];
        if (n <= 0xFFFF) {
            r += String.fromCharCode(n);
        } else {
            r += String.fromCharCode(((n - 0x10000) >> 10) + 0xD800, ((n - 0x10000) % 0x400) + 0xDC00);
        }
    }
    return r;
}
/**
 * 
 * @param {ArrayLike<any>} argc 
 * @param {number=} start 
 * @param {boolean=} flatten 
 * @param {boolean=} compact 
 */
export function sliceArguments(argc, start, flatten, compact) {
    var r = Array.prototype.slice.call(argc, start || 0);
    if (flatten) {
        r = (function flat(argc) {
            var r = [];
            for (var
                i = 0,
                l = argc.length;
                i < l;
                i++
            ) {
                var n = argc[i];
                if (isArray(n)) {
                    r = r.concat(flat(n));
                } else {
                    r.push(n);
                }
            }
            return r;
        }(r));
    }
    if (compact) {
        r = r.filter(isValid);
    }
    return r;
}
/**
 * 
 * @param {any} argc 
 * @param {any=} prototype 
 */
export function setPrototypeOf(argc, prototype) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(argc, prototype) : argc;
}
/**
 * 
 * @param {Hml.Proto} argc 
 * @param {PropertyDescriptorMap=} properties 
 */
export function createInstance(argc, properties) {
    return Object.create(argc.prototype, properties || {});
}
/**
 * 
 * @param {any} argc 
 * @param {PropertyKey} property 
 */
export function hasOwnProperty(argc, property) {
    return !isNullOrUndefined(argc) && Object.prototype.hasOwnProperty.call(argc, property);
}
/**
 * 
 * @param {any} argc 
 * @param {PropertyKey} property 
 * @param {PropertyDescriptor} descriptor 
 */
export function defineProperty(argc, property, descriptor) {
    return Object.defineProperty(argc, property, descriptor);
}
/**
 * 
 * @param {any} argc 
 * @param {PropertyDescriptorMap} properties 
 */
export function defineProperties(argc, properties) {
    return Object.defineProperties(argc, properties);
}
/**
 * 
 * @param {Hml.FuncUnion} constructor 
 */
export function skrinkSerializer(constructor) {
    return (
        /**
         * @this {any}
         */
        function () {
            return constructor.apply(this, arguments);
        }
    );
}
/**
 * 
 * @param {string} argc 
 */
export function divideExpression(argc) {
    var t = "";
    var r = [];
    for (var
        i = 0,
        e = 0,
        o = 0,
        a = 48,
        b = 57,
        inSquare = false,
        isNumber = false,
        l = argc.length;
        i < l;
        i++
    ) {
        var c = argc.charAt(i);
        if (c === "\\") {
            if (i + 1 < l && (argc.charAt(i + 1) === "." ||
                argc.charAt(i + 1) === "[" ||
                argc.charAt(i + 1) === "]")) {
                t += argc.charAt(++i);
            } else {
                t += c;
            }
        } else if (c === ".") {
            if (t) {
                r.push(t);
                t = "";
            }
        } else if (c === "[") {
            if (t) {
                r.push(t);
                t = "";
            }
            inSquare = true;
            isNumber = false;
        } else if (c === "]") {
            if (!isNumber) {
                throw new Error("Must have number in []: " + argc);
            }
            inSquare = false;
            r.push(o);
            o = 0;
        } else if (inSquare) {
            e = c.charCodeAt(0);
            if (e < a || e > b) {
                throw new Error("Only number 0-9 could inside []:" + argc);
            }
            isNumber = true;
            o = 10 * o + e - a;
        } else {
            t += c;
        }
    }
    if (t) {
        r.push(t);
    }
    if (r.length === 0) {
        throw new Error("Path can not be empty");
    }
    return r;
}
/**
 * 
 * @param {any} argc 
 */
export function getOwnPropertyDescriptors(argc) {
    return Object.getOwnPropertyDescriptors ? Object.getOwnPropertyDescriptors(argc) : Object.getOwnPropertyNames(argc).reduce(function (o, i) {
        return defineProperty(o, i, generateNormalDescriptor(Object.getOwnPropertyDescriptor(o, i), true));
    }, {});
}
/**
 * 
 * @param {any} argc 
 * @param {boolean=} enumerable 
 */
export function generateNormalDescriptor(argc, enumerable) {
    return {
        configurable: true,
        enumerable: !!enumerable,
        writable: true,
        value: argc,
    };
}
/**
 * 
 * @param {Hml.NoParametersFunc} argc 
 * @param {boolean=} enumerable 
 */
export function generateGetterDescriptor(argc, enumerable) {
    return {
        configurable: true,
        enumerable: !!enumerable,
        get: skrinkSerializer(argc),
    };
}
/**
 * 
 * @param {Hml.FuncBasic} argc 
 * @param {boolean=} enumerable 
 */
export function generateMethodDescriptor(argc, enumerable) {
    return generateNormalDescriptor(skrinkSerializer(argc), enumerable);
}
/**
 * 
 * @param {string} description 
 */
export function generatePropertyExpr(description) {
    return [Symbol ? Symbol(description) : "[[" + description + "." + hash(uuid()).toString(36) + "]]"];
}
/**
 * 
 * @param {Hml.FuncBasic} constructor 
 * @param {PropertyDescriptorMap} properties 
 * @param {Hml.Proto} superClass 
 */
export function generateClass(constructor, properties, superClass) {
    return (function (constructor) {
        return constructor.prototype = defineProperties(createInstance(superClass, {
            constructor: generateNormalDescriptor(constructor),
        }), properties), setPrototypeOf(constructor, superClass);
    }(skrinkSerializer(constructor)));
}
/**
 * 
 * @param {ReadonlyArray<number>} argc 
 * @param {number} sourceBit 
 * @param {number} targetBit 
 */
export function bitConvert(argc, sourceBit, targetBit) {
    var r = [];
    var z = 0;
    var l = argc.length;
    for (var
        i = 0;
        i < l;
        i++
    ) {
        if (argc[i] !== 0) {
            break;
        }
        z++;
    }
    z = Math.min(z, l - 1);
    while ((l = argc.length) > 0) {
        var quotient = [];
        var remainder = 0;
        for (var
            i = 0;
            i < l;
            i++
        ) {
            var total = argc[i] + remainder * sourceBit;
            var digit = Math.floor(total / targetBit);
            remainder = Math.floor(total % targetBit);
            if (digit > 0 || quotient.length > 0) {
                quotient.push(digit);
            }
        }
        r.push(remainder);
        argc = quotient;
    }
    for (var
        i = 0;
        i < z;
        i++
    ) {
        r.push(0);
    }
    return r.reverse();
}
/**
 * 
 * @param {string} argc 
 */
export function decodeBase(argc) {
    var r = [];
    for (var
        i = 0,
        l = argc.length;
        i < l;
        i++
    ) {
        r.push(ATOB_CHARS[argc.charCodeAt(i) - 43]);
    }
    return r;
}
/**
 * 
 * @param {ReadonlyArray<number>} argc 
 */
export function encodeBase(argc) {
    var r = [];
    for (var
        i = 0,
        l = argc.length;
        i < l;
        i++
    ) {
        r.push(BTOA_CHARS.charAt(argc[i]));
    }
    return r.join("");
}
/**
 *
 * @param {ReadonlyArray<number>} argc
 */
export function decodeUTF8(argc) {
    return Buffer ? Buffer.from(argc).toString(UTF8) : (function () {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
        ) {
            var n = argc[i];
            if (n <= 0x7F) {
                r.push(
                    ((argc[i++] & 0x7F) << (0 * 6)));
            } else if (n >= 0xC0 && n <= 0xDF) {
                r.push(
                    ((argc[i++] & 0x1F) << (1 * 6)) |
                    ((argc[i++] & 0x3F) << (0 * 6)));
            } else if (n >= 0xE0 && n <= 0xEF) {
                r.push(
                    ((argc[i++] & 0x0F) << (2 * 6)) |
                    ((argc[i++] & 0x3F) << (1 * 6)) |
                    ((argc[i++] & 0x3F) << (0 * 6)));
            } else if (n >= 0xF0 && n <= 0xF7) {
                r.push(
                    ((argc[i++] & 0x07) << (3 * 6)) |
                    ((argc[i++] & 0x3F) << (2 * 6)) |
                    ((argc[i++] & 0x3F) << (1 * 6)) |
                    ((argc[i++] & 0x3F) << (0 * 6)));
            } else if (n >= 0xF8 && n <= 0xFB) {
                r.push(
                    ((argc[i++] & 0x03) << (4 * 6)) |
                    ((argc[i++] & 0x3F) << (3 * 6)) |
                    ((argc[i++] & 0x3F) << (2 * 6)) |
                    ((argc[i++] & 0x3F) << (1 * 6)) |
                    ((argc[i++] & 0x3F) << (0 * 6)));
            } else if (n >= 0xFC) {
                r.push(
                    ((argc[i++] & 0x01) << (5 * 6)) |
                    ((argc[i++] & 0x3F) << (4 * 6)) |
                    ((argc[i++] & 0x3F) << (3 * 6)) |
                    ((argc[i++] & 0x3F) << (2 * 6)) |
                    ((argc[i++] & 0x3F) << (1 * 6)) |
                    ((argc[i++] & 0x3F) << (0 * 6)));
            } else {
                i++;
            }
        }
        return fromCharCode(r);
    }());
}
/**
 *
 * @param {string} argc
 */
export function encodeUTF8(argc) {
    return Buffer ? Array.from(Buffer.from(argc, UTF8)) : (function () {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
        ) {
            var n = argc.charCodeAt(i++);
            if (n >= 0xD800 &&
                n <= 0xDBFF) {
                if (i < l) {
                    n = ((n - 0xD800) * 0x400) + (argc.charCodeAt(i++) - 0xDC00) + 0x10000;
                }
            }
            if (n <= 0x0000007F) {
                r.push(n & 0x7F);
            } else if (n >= 0x00000080 && n <= 0x000007FF) {
                r.push(((n >> (1 * 6)) & 0x1F) | 0xC0);
                r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
            } else if (n >= 0x00000800 && n <= 0x0000FFFF) {
                r.push(((n >> (2 * 6)) & 0x0F) | 0xE0);
                r.push(((n >> (1 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
            } else if (n >= 0x00010000 && n <= 0x001FFFFF) {
                r.push(((n >> (3 * 6)) & 0x07) | 0xF0);
                r.push(((n >> (2 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (1 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
            } else if (n >= 0x00200000 && n <= 0x03FFFFFF) {
                r.push(((n >> (4 * 6)) & 0x03) | 0xF8);
                r.push(((n >> (3 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (2 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (1 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
            } else if (n >= 0x04000000 && n <= 0x7FFFFFFF) {
                r.push(((n >> (5 * 6)) & 0x01) | 0xFC);
                r.push(((n >> (4 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (3 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (2 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (1 * 6)) & 0x3F) | 0x80);
                r.push(((n >> (0 * 6)) & 0x3F) | 0x80);
            }
        }
        return r;
    }());
}


/**
 * 
 * @param {any} argc 
 * @param {Hml.PropertyExpr} expr 
 */
export function has(argc, expr) {
    var t = argc;
    for (var
        i = 0,
        s = isArray(expr) ? expr : divideExpression(expr),
        l = s.length;
        i < l;
        i++
    ) {
        if (!hasOwnProperty(t, s[i])) {
            return false;
        }
        t = t[s[i]];
    }
    return true;
}
/**
 * 
 * @param {any} argc 
 * @param {Hml.PropertyExpr} expr 
 * @param {any=} defaultValue 
 */
export function get(argc, expr, defaultValue) {
    var t = argc;
    for (var
        i = 0,
        s = isArray(expr) ? expr : divideExpression(expr),
        l = s.length;
        i < l;
        i++
    ) {
        if (isNullOrUndefined(t)) {
            t = VOID;
            break;
        }
        t = t[s[i]];
    }
    if (isNullOrUndefined(t) && arguments.length > 2) {
        t = defaultValue;
    }
    return t;
}
/**
 * 
 * @param {any} argc 
 * @param {Hml.PropertyExpr} expr 
 * @param {any} value 
 */
export function set(argc, expr, value) {
    var t = argc, p;
    for (var
        i = 0,
        m = argc,
        s = isArray(expr) ? expr : divideExpression(expr),
        l = s.length;
        i < l;
        i++
    ) {
        var n = s[i];
        if (isNumber(n)) {
            if (!isArray(m)) {
                if (i === 0) {
                    throw new Error("Target must be an array");
                } else {
                    // @ts-ignore
                    m = t[p] = [];
                }
            }
        } else {
            if (!isObject(m)) {
                if (i === 0) {
                    throw new Error("Target must be an object");
                } else {
                    // @ts-ignore
                    m = t[p] = {};
                }
            }
        }
        p = n;
        t = m;
        m = t[p];
    }
    // @ts-ignore
    return t[p] = value;
}
/**
 * 
 * @param {any} argc 
 * @param {boolean=} inherit 
 */
export function keys(argc, inherit) {
    var r = [];
    for (var n in argc) {
        if (inherit || hasOwnProperty(argc, n)) {
            r.push(n);
        }
    }
    return r;
}
/**
 * 
 * @param {any} argc 
 * @param {boolean=} inherit 
 */
export function values(argc, inherit) {
    var r = [];
    for (var n in argc) {
        if (inherit || hasOwnProperty(argc, n)) {
            r.push(argc[n]);
        }
    }
    return r;
}
/**
 * 
 * @param {boolean=} pure 
 */
export function uuid(pure) {
    var r = "";
    for (var
        i = 0;
        i < 12;
        i++
    ) {
        r += i === 2 || i === 4 || i === 6 || i === 8 ? pure ? "" : "-" : (((1 + Math.random()) * 0x10000) | 0).toString(16).slice(1);
    }
    return r;
}
/**
 * 
 * @param {string} argc 
 * @param {number=} seed 
 */
export function hash(argc, seed) {
    /**
     * 
     * @param {number} m 
     * @param {number} n 
     */
    function mult(m, n) {
        return ((m & 0xFFFF) * n) + ((((m >>> 16) * n) & 0xFFFF) << 16);
    }
    /**
     * 
     * @param {number} m 
     * @param {number} n 
     */
    function rotl(m, n) {
        return (m << n) | (m >>> (32 - n))
    }
    var l = argc.length;
    var m = l % 4;
    var n = l - m;
    var c1 = 0xCC9E2D51;
    var c2 = 0x1B873593;
    var h1 = seed || 0;
    var k1 = 0;
    for (var
        i = 0;
        i < n;
    ) {
        var e1 = (argc.charCodeAt(i++) & 0xFF);
        var e2 = (argc.charCodeAt(i++) & 0xFF) << 8;
        var e3 = (argc.charCodeAt(i++) & 0xFF) << 16;
        var e4 = (argc.charCodeAt(i++) & 0xFF) << 24;
        k1 = e1 | e2 | e3 | e4;
        k1 = mult(k1, c1);
        k1 = rotl(k1, 15);
        k1 = mult(k1, c2);

        h1 ^= k1;
        h1 = rotl(h1, 13);
        h1 = mult(h1, 5) + 0xE6546B64;
    }
    k1 = 0;
    switch (m) {
        case 3:
            k1 ^= (argc.charCodeAt(i + 2) & 0xFF) << 16;
        case 2:
            k1 ^= (argc.charCodeAt(i + 1) & 0xFF) << 8;
        case 1:
            k1 ^= (argc.charCodeAt(i) & 0xFF);
            k1 = mult(k1, c1);
            k1 = rotl(k1, 15);
            k1 = mult(k1, c2);
            h1 ^= k1;
    }
    h1 ^= l;
    h1 ^= h1 >>> 16;
    h1 = mult(h1, 0x85EBCA6B);
    h1 ^= h1 >>> 13;
    h1 = mult(h1, 0xC2B2AE35);
    h1 ^= h1 >>> 16;
    return h1 >>> 0;
}
/**
 * 
 * @param {string} argc 
 * @param {boolean=} urlSafeEncoding 
 */
export function atob(argc, urlSafeEncoding) {
    return urlSafeEncoding ? decodeUTF8(bitConvert(decodeBase(argc), 62, 256)) : Buffer ? Buffer.from(argc, BASE64).toString(UTF8) : (function (atob) {
        return decodeURIComponent(escape(atob(argc)));
    }(globalThis.atob || function (argc) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
        ) {
            var e1 = ATOB_CHARS[argc.charCodeAt(i++) - 43];
            var e2 = ATOB_CHARS[argc.charCodeAt(i++) - 43];
            var e3 = ATOB_CHARS[argc.charCodeAt(i++) - 43];
            var e4 = ATOB_CHARS[argc.charCodeAt(i++) - 43];
            var n1 = ((e1 & 0xFF) << 2) | (e2 >> 4);
            var n2 = ((e2 & 0x0F) << 4) | (e3 >> 2);
            var n3 = ((e3 & 0x03) << 6) | (e3 >> 0);
            r.push(n1);
            if (e3 !== 64) {
                r.push(n2);
            }
            if (e4 !== 64) {
                r.push(n3);
            }
        }
        return fromCharCode(r);
    }));
}
/**
 * 
 * @param {string} argc 
 * @param {boolean=} urlSafeEncoding 
 */
export function btoa(argc, urlSafeEncoding) {
    return urlSafeEncoding ? encodeBase(bitConvert(encodeUTF8(argc), 256, 62)) : Buffer ? Buffer.from(argc, UTF8).toString(BASE64) : (function (btoa) {
        return btoa(unescape(encodeURIComponent(argc)));
    }(globalThis.btoa || function (argc) {
        var r = [];
        for (var
            i = 0,
            l = argc.length;
            i < l;
        ) {
            var n1 = argc.charCodeAt(i++);
            var n2 = argc.charCodeAt(i++);
            var n3 = argc.charCodeAt(i++);
            var e1 = n1 >> 2;
            var e2 = ((n1 & 0x03) << 4) | (n2 >> 4);
            var e3 = ((n2 & 0x0F) << 2) | (n3 >> 6);
            var e4 = n3 & 0x3F;
            if (isNaN(n2)) {
                e3 = 64;
            }
            if (isNaN(n3)) {
                e4 = 64;
            }
            r.push(e1);
            r.push(e2);
            r.push(e3);
            r.push(e4);
        }
        return encodeBase(r);
    }));
}
/**
 * 
 * @param {string} argc 
 */
export function glob(argc) {
    var r = "";
    for (var
        i = 0,
        c = 0,
        p = "",
        n = "",
        g = false,
        l = argc.length;
        i < l;
        i++
    ) {
        var t = argc.charAt(i);
        switch (t) {
            case "/":
            case "$":
            case "^":
            case ".":
            case "(":
            case ")":
            case "=":
            case "!":
            case "|":
                r += "\\" + t;
                break;
            case "?":
                r += ".";
                break;
            case "[":
            case "]":
                r += t;
                break;
            case "{":
                g = true;
                r += "(";
                break;
            case "}":
                g = false;
                r += ")";
                break;
            case ",":
                if (g) {
                    r += "|";
                } else {
                    r += "\\" + t;
                }
                break;
            case "*":
                c = 1;
                p = argc.charAt(i - 1);
                while (argc.charAt(i + 1) === "*") {
                    c++;
                    i++;
                }
                n = argc.charAt(i + 1);
                if (c > 1
                    && (p === "/" || isNullOrEmptyString(p))
                    && (n === "/" || isNullOrEmptyString(n))) {
                    r += "((?:[^/]*(?:/|$))*)";
                    i++;
                } else {
                    r += "([^/]*)";
                }
                break;
            default:
                r += t;
                break;
        }
    }
    return new RegExp("^" + r + "$", "i");
}
/**
 * 
 * @param {ReadonlyArray<number>} argc 
 */
export function uniq(argc) {
    var r = [];
    for (var
        i = 0,
        l = argc.length;
        i < l;
        i++
    ) {
        var n = argc[i];
        if (r.indexOf(n) === -1) {
            r.push(n);
        }
    }
    return r;
}
/**
 * 
 * @param {any} argc 
 */
export function omit(argc) {
    var r = {};
    var p = sliceArguments(arguments, 1, true);
    for (var n in argc) {
        if (p.indexOf(n) === -1) {
            r[n] = argc[n];
        }
    }
    return r;
}
/**
 * 
 * @param {any} argc 
 */
export function pick(argc) {
    var r = {};
    var p = sliceArguments(arguments, 1, true);
    for (var n in argc) {
        if (p.indexOf(n) !== -1) {
            r[n] = argc[n];
        }
    }
    return r;
}
/**
 * 
 * @param {any} argc 
 * @param {boolean=} deep 
 * @param {boolean=} onlyValid 
 */
export function clone(argc, deep, onlyValid) {
    return merge(isArray(argc) ? [] : {}, argc, deep, onlyValid);
}
/**
 * 
 * @param {any} arg1 
 * @param {any} arg2 
 * @param {boolean=} deep 
 * @param {boolean=} onlyValid 
 */
export function merge(arg1, arg2, deep, onlyValid) {
    var t = [
        [arg1, NULL, arg2]
    ];
    while (t.length > 0) {
        var o = t.pop();
        // @ts-ignore
        var p = o[0];
        // @ts-ignore
        var k = o[1];
        // @ts-ignore
        var v = o[2];
        var s = p;
        if (!isNullOrUndefined(k)) {
            if (!isObject(p[k])) {
                p[k] = isArray(v) ? [] : {};
            }
            s = p[k];
        }
        for (var n in v) {
            var d = v[n];
            if (deep && isObject(d)) {
                t.push([s, n, d]);
            } else if (!onlyValid || isValid(d)) {
                s[n] = d;
            }
        }
    }
    return arg1;
}
/**
 * 
 * @param {any} argc 
 */
export function defaults(argc) {
    for (var
        i = 0,
        s = sliceArguments(arguments, 1, true, true),
        l = s.length;
        i < l;
        i++
    ) {
        merge(argc, s[i], false, true);
    }
    return argc;
}
/**
 * 
 * @param {any} argc 
 * @returns {argc is any[]}
 */
export function isArray(argc) {
    return Array.isArray(argc);
}
/**
 * 
 * @param {any} argc 
 * @returns {argc is Hml.FuncClass}
 */
export function isClass(argc) {
    return isFunction(argc) && !hasOwnProperty(argc, "arguments");
}
/**
 * 
 * @param {any} argc 
 * @returns {argc is number}
 */
export function isNumber(argc) {
    return typeof argc === "number" || isInstanceOf(argc, Number);
}
/**
 * 
 * @param {any} argc 
 * @returns {argc is string}
 */
export function isString(argc) {
    return typeof argc === "string" || isInstanceOf(argc, String);
}
/**
 * 
 * @param {any} argc 
 * @returns {argc is boolean}
 */
export function isBoolean(argc) {
    return typeof argc === "boolean" || isInstanceOf(argc, Boolean);
}
/**
 * 
 * @param {any} argc 
 * @returns {argc is Hml.FuncBasic}
 */
export function isFunction(argc) {
    return typeof argc === "function";
}
/**
 * 
 * @param {any} argc 
 * @returns {argc is bigint}
 */
export function isBigInt(argc) {
    return typeof argc === "bigint" || className(argc) === "BigInt";
}
/**
 * 
 * @param {any} argc 
 * @returns {argc is symbol}
 */
export function isSymbol(argc) {
    return typeof argc === "symbol" || className(argc) === "Symbol";
}
/**
 * 
 * @param {any} argc 
 * @param {boolean=} strict
 * @returns {argc is object}
 */
export function isObject(argc, strict) {
    return strict ? className(argc) === "Object" : !isNull(argc) && typeof argc === "object";
}
/**
 * 
 * @param {any} argc 
 * @param {Hml.FuncUnion} constructor 
 */
export function isInstanceOf(argc, constructor) {
    return !isNullOrUndefined(constructor) && argc instanceof constructor;
}
/**
 * 
 * @param {any} argc 
 * @returns {argc is DataView}
 */
export function isDataView(argc) {
    return isInstanceOf(argc, globalThis.DataView) || className(argc) === "DataView";
}
/**
 * 
 * @param {any} argc 
 * @returns {argc is FormData}
 */
export function isFormData(argc) {
    return isInstanceOf(argc, globalThis.FormData) || className(argc) === "FormData";
}
/**
 * 
 * @param {any} argc 
 * @returns {argc is Buffer}
 */
export function isBuffer(argc) {
    return Buffer ? Buffer.isBuffer(argc) : false;
}
/**
 * 
 * @param {any} argc 
 * @returns {argc is RegExp}
 */
export function isRegExp(argc) {
    return isInstanceOf(argc, RegExp);
}
/**
 * 
 * @param {any} argc 
 * @returns {argc is Date}
 */
export function isDate(argc) {
    return isInstanceOf(argc, Date);
}
/**
 * 
 * @param {any} argc 
 * @returns {argc is null}
 */
export function isNull(argc) {
    return argc === NULL;
}
/**
 * 
 * @param {any} argc 
 * @returns {argc is undefined}
 */
export function isUndefined(argc) {
    return argc === VOID;
}
/**
 * 
 * @param {any} argc 
 * @returns {argc is null | undefined}
 */
export function isNullOrUndefined(argc) {
    return isNull(argc) || isUndefined(argc);
}
/**
 * 
 * @param {any} argc 
 * @returns {argc is null | undefined | ""}
 */
export function isNullOrEmptyString(argc) {
    return isNullOrUndefined(argc) || argc === "";
}
/**
 * 
 * @param {any} argc 
 * @returns {argc is null | undefined | Hml.NilObject}
 */
export function isNullOrEmptyObject(argc) {
    return isNullOrUndefined(argc) || keys(argc, true).length === 0;
}
/**
 * 
 * @param {any} argc 
 * @returns {argc is number | string | boolean | bigint | symbol | null | undefined}
 */
export function isBasic(argc) {
    return isNumber(argc) || isString(argc) || isBoolean(argc) || isBigInt(argc) || isSymbol(argc) || isNullOrUndefined(argc);
}
/**
 * 
 * @param {any} arg1 
 * @param {any} arg2 
 */
export function isEqual(arg1, arg2) {
    if (arg1 === arg2) {
        return true;
    }
    if (isNumber(arg1) && isNumber(arg2)) {
        return (isNaN(arg1) && isNaN(arg2)) || arg1.valueOf() === arg2.valueOf();
    }
    if (isString(arg1) && isString(arg2)) {
        return arg1.valueOf() === arg2.valueOf();
    }
    if (isBigInt(arg1) && isBigInt(arg2)) {
        return arg1.valueOf() === arg2.valueOf();
    }
    if (isSymbol(arg1) && isSymbol(arg2)) {
        return arg1.valueOf() === arg2.valueOf();
    }
    if (isBoolean(arg1) && isBoolean(arg2)) {
        return arg1.valueOf() === arg2.valueOf();
    }
    if (isDate(arg1) && isDate(arg2)) {
        return arg1.valueOf() === arg2.valueOf();
    }
    if (isRegExp(arg1) && isRegExp(arg2)) {
        return arg1.source === arg2.source && arg1.flags === arg2.flags;
    }
    if (isArray(arg1) && isArray(arg2)) {
        return arg1.length === arg2.length && arg1.every(function (v, i) { return isEqual(v, arg2[i]); });
    }
    if (isObject(arg1) && isObject(arg2)) {
        return (function (key1, key2) { return key1.length === key2.length && key1.every(function (i) { return key2.indexOf(i) !== -1; }) && key1.every(function (i) { return isEqual(arg1[i], arg2[i]); }); }(keys(arg1), keys(arg2)));
    }
    return false;
}
/**
 * 
 * @param {any} argc 
 */
export function isValid(argc) {
    return isNumber(argc) ? isFinite(argc) : isDate(argc) ? isFinite(argc.getTime()) : !isNullOrUndefined(argc);
}


export var NULL = null;
export var VOID = void 0;
export var BASE = skrinkSerializer(function () { throw new Error("Illegal constructor"); });
export var MEAN = skrinkSerializer(function () { throw new Error("Not implemented"); });
export var NOOP = skrinkSerializer(function () { /** DO NOTHING */ });


/**
 * @type {"undefined"}
 */
export var UNDEFINED = "undefined";


export var __global__ = typeof global !== UNDEFINED ? global : VOID;
export var __window__ = typeof window !== UNDEFINED ? window : VOID;
export var globalThis = __global__ || __window__ || self;


export var localStorage = globalThis.localStorage;
export var navigator = globalThis.navigator;
export var document = globalThis.document;
export var location = globalThis.location;
export var history = globalThis.history;
export var console = globalThis.console;
export var process = globalThis.process;


export var JSON = globalThis.JSON;
export var Math = globalThis.Math;
export var Date = globalThis.Date;
export var Array = globalThis.Array;
export var Error = globalThis.Error;
export var Number = globalThis.Number;
export var String = globalThis.String;
export var Boolean = globalThis.Boolean;
export var Function = globalThis.Function;
export var RegExp = globalThis.RegExp;
export var Object = globalThis.Object;
export var Symbol = globalThis.Symbol;
export var Buffer = globalThis.Buffer;
export var Event = globalThis.Event;
export var isNaN = globalThis.isNaN;
export var isFinite = globalThis.isFinite;
export var parseInt = globalThis.parseInt;
export var setTimeout = globalThis.setTimeout;
export var setInterval = globalThis.setInterval;
export var setImmediate = globalThis.setImmediate || globalThis.requestAnimationFrame || function (argc) {
    return setTimeout(argc, 1000 / 60);
};
export var clearTimeout = globalThis.clearTimeout;
export var clearInterval = globalThis.clearInterval;
export var clearImmediate = globalThis.clearImmediate || globalThis.cancelAnimationFrame || function (argc) {
    return clearTimeout(argc);
};
export var decodeURIComponent = globalThis.decodeURIComponent;
export var encodeURIComponent = globalThis.encodeURIComponent;
export var unescape = globalThis.unescape;
export var escape = globalThis.escape;


/**
 * @type {NodeRequire | undefined}
 */
var __REQUIRE__ = typeof require !== UNDEFINED ? require : VOID;


export var fs = __REQUIRE__ ? __REQUIRE__("fs") : VOID;
export var path = __REQUIRE__ ? __REQUIRE__("path") : VOID;
export var zlib = __REQUIRE__ ? __REQUIRE__("zlib") : VOID;
export var http = __REQUIRE__ ? __REQUIRE__("http") : VOID;
export var https = __REQUIRE__ ? __REQUIRE__("https") : VOID;
export var crypto = __REQUIRE__ ? __REQUIRE__("crypto") : VOID;
export var stream = __REQUIRE__ ? __REQUIRE__("stream") : VOID;
export var acorn_core = __REQUIRE__ ? __REQUIRE__("acorn") : VOID;
export var acorn_walk = __REQUIRE__ ? __REQUIRE__("acorn-walk") : VOID;
export var typescript = __REQUIRE__ ? __REQUIRE__("typescript") : VOID;


/**
 * @type {"br"}
 */
export var BR = "br";
/**
 * @type {"gzip"}
 */
export var GZIP = "gzip";
/**
 * @type {"deflate"}
 */
export var DEFLATE = "deflate";
/**
 * @type {"hex"}
 */
export var HEX = "hex";
/**
 * @type {"sha1"}
 */
export var SHA1 = "sha1";
/**
 * @type {"utf8"}
 */
export var UTF8 = "utf8";
/**
 * @type {"ascii"}
 */
export var ASCII = "ascii";
/**
 * @type {"base64"}
 */
export var BASE64 = "base64";
/**
 * @type {"pending"}
 */
export var PENDING = "pending";
/**
 * @type {"rejected"}
 */
export var REJECTED = "rejected";
/**
 * @type {"fulfilled"}
 */
export var RESOLVED = "fulfilled";


export var X_REAL_IP = "X-Real-IP";
export var X_RESPONSE_URL = "X-Response-Url";
export var X_REQUESTED_WITH = "X-Requested-With";
export var X_FORWARDED_HOST = "X-Forwarded-Host";
export var X_FORWARDED_PROTO = "X-Forwarded-Proto";

export var FORMAT_BYTE_CONTENT = "application/octet-stream";
export var FORMAT_FORM_CONTENT = "application/x-www-form-urlencoded";
export var FORMAT_JSON_CONTENT = "application/json";
export var FORMAT_MULT_CONTENT = "multipart/form-data";

export var HEADER_ACCEPT_RANGES = "Accept-Ranges";
export var HEADER_ACCEPT_ENCODING = "Accept-Encoding";
export var HEADER_ACCEPT_LANGUAGE = "Accept-Language";
export var HEADER_ACCESS_CONTROL_ALLOW_CREDENTIALS = "Access-Control-Allow-Credentials";
export var HEADER_ACCESS_CONTROL_ALLOW_HEADERS = "Access-Control-Allow-Headers";
export var HEADER_ACCESS_CONTROL_ALLOW_METHODS = "Access-Control-Allow-Methods";
export var HEADER_ACCESS_CONTROL_ALLOW_ORIGIN = "Access-Control-Allow-Origin";
export var HEADER_ACCESS_CONTROL_MAX_AGE = "Access-Control-Max-Age";
export var HEADER_CONTENT_DISPOSITION = "Content-Disposition";
export var HEADER_CONTENT_ENCODING = "Content-Encoding";
export var HEADER_CONTENT_LENGTH = "Content-Length";
export var HEADER_CONTENT_RANGE = "Content-Range";
export var HEADER_CONTENT_TYPE = "Content-Type";
export var HEADER_IF_NONE_MATCH = "If-None-Match";
export var HEADER_IF_MODIFIED_SINCE = "If-Modified-Since";
export var HEADER_WWW_AUTHENTICATE = "WWW-Authenticate";
export var HEADER_CACHE_CONTROL = "Cache-Control";
export var HEADER_LAST_MODIFIED = "Last-Modified";
export var HEADER_LOCATION = "Location";
export var HEADER_EXPIRES = "Expires";
export var HEADER_COOKIE = "Cookie";
export var HEADER_ORIGIN = "Origin";
export var HEADER_RANGE = "Range";
export var HEADER_ETAG = "Etag";
export var HEADER_HOST = "Host";

export var CSRF_IDENT = "X-CID";
export var HTTP_IDENT = "X-SID";
export var ATOB_CHARS = [62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, 64, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
export var BTOA_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

export var DEFAULT_PROTOCOL = location ? location.protocol : "file:";
export var DEFAULT_HOSTNAME = location ? location.host : "";

export var PHASE_CAPTURING = Event ? Event.CAPTURING_PHASE : 1;
export var PHASE_AT_TARGET = Event ? Event.AT_TARGET : 2;
export var PHASE_BUBBLING = Event ? Event.BUBBLING_PHASE : 3;

export var DEVELOPMENT = process ? process.env.NODE_ENV === "development" : false;
export var BEHAVIOR = document ? "scrollBehavior" in document.documentElement.style : false;
export var PASSIVE = (function (passive) {
    try {
        if (__window__) {
            __window__.addEventListener("passive", NOOP, defineProperty({}, "passive", generateGetterDescriptor(function () { return passive = true; })));
        }
    } catch (_) {
        // DO NOTHING
    }
    return passive;
}(false));

export var REQ = generatePropertyExpr("REQ");
export var RES = generatePropertyExpr("RES");
export var BODY = generatePropertyExpr("BODY");
export var HOST = generatePropertyExpr("HOST");
export var RANGE = generatePropertyExpr("RANGE");
export var METHOD = generatePropertyExpr("METHOD");
export var SEARCH = generatePropertyExpr("SEARCH");
export var LENGTH = generatePropertyExpr("LENGTH");
export var ORIGIN = generatePropertyExpr("ORIGIN");
export var ADDRESS = generatePropertyExpr("ADDRESS");
export var COOKIES = generatePropertyExpr("COOKIES");
export var HEADERS = generatePropertyExpr("HEADERS");
export var PATHNAME = generatePropertyExpr("PATHNAME");
export var PROTOCOL = generatePropertyExpr("PROTOCOL");
export var MIMETYPE = generatePropertyExpr("MIMETYPE");
export var BOUNDARY = generatePropertyExpr("BOUNDARY");
export var ENCODING = generatePropertyExpr("ENCODING");
export var LANGUAGE = generatePropertyExpr("LANGUAGE");
export var LOCATION = generatePropertyExpr("LOCATION");
export var INSTANCE = generatePropertyExpr("INSTANCE");
export var SETTINGS = generatePropertyExpr("SETTINGS");
export var CONSTRUCT = generatePropertyExpr("CONSTRUCT");
export var EVENT_CAPTURE = generatePropertyExpr("EVENT_CAPTURE");
export var EVENT_GENERAL = generatePropertyExpr("EVENT_GENERAL");
export var EVENT_OBSERVE = generatePropertyExpr("EVENT_OBSERVE");
export var STOP_AFTERWARD = generatePropertyExpr("STOP_AFTERWARD");
export var STOP_IMMEDIATE = generatePropertyExpr("STOP_IMMEDIATE");
export var TICK_PREVENTED = generatePropertyExpr("TICK_PREVENTED");
export var STATE = generatePropertyExpr("STATE");
export var VALUE = generatePropertyExpr("VALUE");
export var THROW = generatePropertyExpr("THROW");
export var QUEUE = generatePropertyExpr("QUEUE");