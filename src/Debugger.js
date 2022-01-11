import {
    generateClass,
    generateMethodDescriptor,
    defineProperties,
    createInstance,
    BASE,
    MEAN,
    NOOP,
} from "./_constant";
/**
 * 
 */
export var Debugger = (function () {
    /**
     * 
     * @param {Hml.InstanceOwnPropertyDescriptorMap<Hml.Debugger>} properties 
     */
    function _init(properties) {
        return createInstance(Debugger, properties);
    }
    /**
     * 
     */
    return defineProperties(generateClass(BASE, {
        logger: generateMethodDescriptor(MEAN),
    }, NOOP), {
        init: generateMethodDescriptor(_init),
    });
}());