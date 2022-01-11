import {
    generateClass,
    generateGetterDescriptor,
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
export var Location = (function () {
    /**
     * 
     * @param {Hml.InstanceOwnPropertyDescriptorMap<Hml.Location>} properties
     */
    function _init(properties) {
        return createInstance(Location, properties);
    }
    /**
     * 
     */
    return defineProperties(generateClass(BASE, {
        protocol: generateGetterDescriptor(MEAN),
        host: generateGetterDescriptor(MEAN),
        pathname: generateGetterDescriptor(MEAN),
        search: generateGetterDescriptor(MEAN),
        hash: generateGetterDescriptor(MEAN),
        href: generateGetterDescriptor(MEAN),
    }, NOOP), {
        init: generateMethodDescriptor(_init),
    });
}());