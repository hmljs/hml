import {
    hash,
    uuid,
    generateClass,
    generateMethodDescriptor,
    generateNormalDescriptor,
    defineProperty,
    hasOwnProperty,
    globalThis,
    NOOP,
    VOID,
} from "./_constant";
/**
 * 
 */
export var WeakMap = (function () {
    return globalThis.WeakMap || (function () {
        /**
         * 
         * @this {any}
         * @param {object} key 
         */
        function _delete(key) {
            return hasOwnProperty(key, this.k) ? delete key[this.k] : false;
        }
        /**
         * 
         * @this {any}
         * @param {object} key 
         */
        function _has(key) {
            return hasOwnProperty(key, this.k);
        }
        /**
         * 
         * @this {any}
         * @param {object} key 
         */
        function _get(key) {
            return hasOwnProperty(key, this.k) ? key[this.k] : VOID;
        }
        /**
         * 
         * @this {any}
         * @param {object} key 
         * @param {any} value
         */
        function _set(key, value) {
            return defineProperty(key, this.k, generateNormalDescriptor(value)), this;
        }
        /**
         * 
         */
        return generateClass(
            /**
             * 
             * @param {ReadonlyArray<[object, any]>=} entries 
             */
            function (entries) {
                defineProperty(this, "k", generateNormalDescriptor("[[" + hash(uuid()).toString(36) + "]]"));
                if (entries) {
                    for (var
                        i = 0,
                        l = entries.length;
                        i < l;
                        i++
                    ) {
                        this.set(entries[i][0], entries[i][1]);
                    }
                }
            },
            {
                delete: generateMethodDescriptor(_delete),
                has: generateMethodDescriptor(_has),
                get: generateMethodDescriptor(_get),
                set: generateMethodDescriptor(_set),
            }, NOOP);
    }());
}());