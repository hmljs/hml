import {
    has,
    get,
    set,
    defineProperties,
    generateMethodDescriptor,
    createInstance,
    Error,
    CONSTRUCT,
    INSTANCE,
} from "./_constant";
import {
    WeakMap,
} from "./WeakMap";
/**
 * 
 */
export var Reflect = (function () {
    /**
     * 
     * @param {object} argc 
     */
    function _delete(argc) {
        return _interims.delete(argc);
    }
    /**
     * 
     * @param {object} argc 
     * @param {Hml.PropertyExpr} expr 
     */
    function _has(argc, expr) {
        return _interims.has(argc) ? has(_interims.get(argc), expr) : false;
    }
    /**
     * 
     * @param {object} argc 
     * @param {Hml.PropertyExpr} expr 
     */
    function _get(argc, expr) {
        return _interims.has(argc) ? get(_interims.get(argc), expr) : (function () { throw new Error("Illegal invocation"); }());
    }
    /**
     * 
     * @param {object} argc 
     * @param {Hml.PropertyExpr} expr 
     * @param {any} value
     */
    function _set(argc, expr, value) {
        var _instance;
        if (_interims.has(argc)) {
            _instance = _interims.get(argc);
        } else {
            _interims.set(argc, _instance = {});
        }
        return set(_instance, expr, value);
    }
    /**
     * 
     * @param {object} argc 
     * @param {Hml.PropertyExpr} expr 
     * @param {Hml.NoParametersFunc} initialize 
     */
    function _once(argc, expr, initialize) {
        var _instance;
        if (_interims.has(argc)) {
            _instance = _interims.get(argc);
        } else {
            _interims.set(argc, _instance = {});
        }
        if (has(_instance, expr)) {
            return get(_instance, expr);
        }
        return set(_instance, expr, initialize.call(argc));
    }
    /**
     * 
     * @param {Hml.FuncClass} argc 
     * @param {any} value 
     */
    function _single(argc, value) {
        return _has(argc, INSTANCE) ? _get(argc, INSTANCE) : _set(argc, INSTANCE, value ? _construct(createInstance(argc), value) : createInstance(argc));
    }
    /**
     * 
     * @param {object} argc 
     * @param {*} value 
     */
    function _construct(argc, value) {
        return _set(argc, CONSTRUCT, value), argc;
    }
    /**
     * 
     * @param {object} argc 
     */
    function _isConstruct(argc) {
        return _has(argc, CONSTRUCT);
    }
    /**
     * 
     * @param {object} argc 
     */
    function _take(argc) {
        return _get(argc, CONSTRUCT);
    }
    /**
     * 
     */
    var _interims = new WeakMap();
    /**
     * 
     */
    return defineProperties({}, {
        delete: generateMethodDescriptor(_delete),
        has: generateMethodDescriptor(_has),
        get: generateMethodDescriptor(_get),
        set: generateMethodDescriptor(_set),
        once: generateMethodDescriptor(_once),
        single: generateMethodDescriptor(_single),
        construct: generateMethodDescriptor(_construct),
        isConstruct: generateMethodDescriptor(_isConstruct),
        take: generateMethodDescriptor(_take),
    });
}());