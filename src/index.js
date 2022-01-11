import {
    __global__,
    __window__,
    defineProperties,
    generateMethodDescriptor,
    generateNormalDescriptor,
    has,
    get,
    set,
    keys,
    values,
    uuid,
    hash,
    atob,
    btoa,
    glob,
    uniq,
    omit,
    pick,
    clone,
    merge,
    defaults,
    isArray,
    isClass,
    isNumber,
    isString,
    isBoolean,
    isFunction,
    isBigInt,
    isSymbol,
    isObject,
    isInstanceOf,
    isDataView,
    isFormData,
    isBuffer,
    isRegExp,
    isDate,
    isNull,
    isUndefined,
    isNullOrUndefined,
    isNullOrEmptyString,
    isNullOrEmptyObject,
    isBasic,
    isEqual,
    isValid,
    UNDEFINED,
    NOOP,
    VOID,
} from "./_constant";
import {
    HttpError,
} from "./HttpError";
// import {
//     Promise,
// } from "./Promise";
// import {
//     WeakMap,
// } from "./WeakMap";
// import {
//     Backend,
// } from "./Backend";
// import {
//     Browser,
// } from "./Browser";
// import {
//     Version,
// } from "./Version";
import {
    History,
} from "./History";
// import {
//     Pattern,
// } from "./Pattern";
// import {
//     Cookies,
// } from "./Cookies";
// import {
//     Queries,
// } from "./Queries";
// import {
//     Formats,
// } from "./Formats";
import {
    Router,
} from "./Router";
// import {
//     Ajax,
// } from "./Ajax";
// import {
//     Core,
// } from "./Core";
// import {
//     Path,
// } from "./Path";
// import {
//     Intl,
// } from "./Intl";
// import {
//     Plat,
// } from "./Plat";
// import {
//     Lazy,
// } from "./Lazy";
/**
 * 
 */
(function (exports) {
    if (typeof module !== UNDEFINED) {
        return module.exports = exports;
    }
    if (__global__) {
        // @ts-ignore
        __global__.Hml = exports;
    }
    if (__window__) {
        // @ts-ignore
        __window__.Hml = exports;
    }
}(
    defineProperties({}, {
        // ajax: generateNormalDescriptor(Ajax.init()),
        // core: generateNormalDescriptor(Core.init()),
        // path: generateNormalDescriptor(Path.init()),
        // intl: generateNormalDescriptor(Intl.init()),
        NOOP: generateNormalDescriptor(NOOP),
        Router: generateNormalDescriptor(Router),
        // WeakMap: generateNormalDescriptor(WeakMap),
        // Promise: generateNormalDescriptor(Promise),
        HttpError: generateNormalDescriptor(HttpError),
        // Backend: generateNormalDescriptor(__global__ ? Backend.init() : VOID),
        // Browser: generateNormalDescriptor(__window__ ? Browser.init() : VOID),
        // version: generateNormalDescriptor(Version.init()),
        history: generateNormalDescriptor(History.init()),
        // pattern: generateNormalDescriptor(Pattern.init()),
        // cookies: generateNormalDescriptor(Cookies.init()),
        // queries: generateNormalDescriptor(Queries.init()),
        // formats: generateNormalDescriptor(Formats.init()),
        // useRef: generateNormalDescriptor(Plat.useRef),
        // useScope: generateNormalDescriptor(Plat.useScope),
        // useTarget: generateNormalDescriptor(Plat.useTarget),
        // useEffect: generateNormalDescriptor(Plat.useEffect),
        // createElement: generateNormalDescriptor(Plat.createElement),
        // redactElement: generateNormalDescriptor(Plat.redactElement),
        // debounce: generateNormalDescriptor(Lazy.debounce),
        // throttle: generateNormalDescriptor(Lazy.throttle),
        // nextTick: generateNormalDescriptor(Lazy.nextTick),
        // setTimeout: generateNormalDescriptor(Lazy.setTimeout),
        // setInterval: generateNormalDescriptor(Lazy.setInterval),
        // setImmediate: generateNormalDescriptor(Lazy.setImmediate),
        // forceUpdate: generateNormalDescriptor(Lazy.forceUpdate),
        has: generateMethodDescriptor(has),
        get: generateMethodDescriptor(get),
        set: generateMethodDescriptor(set),
        keys: generateMethodDescriptor(keys),
        values: generateMethodDescriptor(values),
        uuid: generateMethodDescriptor(uuid),
        hash: generateMethodDescriptor(hash),
        atob: generateMethodDescriptor(atob),
        btoa: generateMethodDescriptor(btoa),
        glob: generateMethodDescriptor(glob),
        uniq: generateMethodDescriptor(uniq),
        omit: generateMethodDescriptor(omit),
        pick: generateMethodDescriptor(pick),
        clone: generateMethodDescriptor(clone),
        merge: generateMethodDescriptor(merge),
        defaults: generateMethodDescriptor(defaults),
        isArray: generateMethodDescriptor(isArray),
        isClass: generateMethodDescriptor(isClass),
        isNumber: generateMethodDescriptor(isNumber),
        isString: generateMethodDescriptor(isString),
        isBoolean: generateMethodDescriptor(isBoolean),
        isFunction: generateMethodDescriptor(isFunction),
        isBigInt: generateMethodDescriptor(isBigInt),
        isSymbol: generateMethodDescriptor(isSymbol),
        isObject: generateMethodDescriptor(isObject),
        isInstanceOf: generateMethodDescriptor(isInstanceOf),
        isDataView: generateMethodDescriptor(isDataView),
        isFormData: generateMethodDescriptor(isFormData),
        isBuffer: generateMethodDescriptor(isBuffer),
        isRegExp: generateMethodDescriptor(isRegExp),
        isDate: generateMethodDescriptor(isDate),
        isNull: generateMethodDescriptor(isNull),
        isUndefined: generateMethodDescriptor(isUndefined),
        isNullOrUndefined: generateMethodDescriptor(isNullOrUndefined),
        isNullOrEmptyString: generateMethodDescriptor(isNullOrEmptyString),
        isNullOrEmptyObject: generateMethodDescriptor(isNullOrEmptyObject),
        isBasic: generateMethodDescriptor(isBasic),
        isEqual: generateMethodDescriptor(isEqual),
        isValid: generateMethodDescriptor(isValid),
    })
));