import {
    generateClass,
    generateGetterDescriptor,
    NOOP,
} from "./_constant";
import {
    Reflect,
} from "./Reflect";
/**
 * 
 */
export var FileResult = (function () {
    /**
     * 
     * @this {Hml.FileResult}
     */
    function _path() {
        return Reflect.take(this).path;
    }
    /**
     * 
     * @this {Hml.FileResult}
     */
    function _filename() {
        return Reflect.take(this).filename;
    }
    /**
     * 
     * @this {Hml.FileResult}
     */
    function _mimetype() {
        return Reflect.take(this).mimetype;
    }
    /**
     * 
     */
    return generateClass(
        /**
         * 
         * @param {Buffer | import("stream").Readable} path 
         * @param {string=} filename 
         * @param {string=} mimetype 
         */
        function (path, filename, mimetype) {
            Reflect.construct(this, {
                path: path,
                filename: filename,
                mimetype: mimetype,
            });
        },
        {
            path: generateGetterDescriptor(_path),
            filename: generateGetterDescriptor(_filename),
            mimetype: generateGetterDescriptor(_mimetype),
        }, NOOP);
}());