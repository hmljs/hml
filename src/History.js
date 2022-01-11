import {
    __global__,
    __window__,
    generateClass,
    generateGetterDescriptor,
    generateMethodDescriptor,
    defineProperties,
    createInstance,
    BASE,
    MEAN,
    NOOP,
    VOID,
} from "./_constant";
import {
    _COM_BACKEND_HISTORY_PROPERTIES,
} from "./_COM_BACKEND_HISTORY_PROPERTIES";
import {
    _COM_BROWSER_HISTORY_PROPERTIES,
} from "./_COM_BROWSER_HISTORY_PROPERTIES";
/**
 * 
 */
export var History = (function () {
    /**
     * 
     * @param {Hml.InstanceOwnPropertyDescriptorMap<Hml.History>=} properties
     */
    function _init(properties) {
        return createInstance(History, properties || (__global__ ? _COM_BACKEND_HISTORY_PROPERTIES : VOID) || (__window__ ? _COM_BROWSER_HISTORY_PROPERTIES : VOID));
    }
    /**
     * 
     */
    return defineProperties(generateClass(BASE, {
        location: generateGetterDescriptor(MEAN),
        length: generateGetterDescriptor(MEAN),
        state: generateGetterDescriptor(MEAN),
        go: generateMethodDescriptor(MEAN),
        back: generateMethodDescriptor(MEAN),
        forward: generateMethodDescriptor(MEAN),
        navigate: generateMethodDescriptor(MEAN),
        redirect: generateMethodDescriptor(MEAN),
    }, NOOP), {
        init: generateMethodDescriptor(_init),
    });
}());