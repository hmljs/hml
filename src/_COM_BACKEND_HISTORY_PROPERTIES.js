import {
    generateGetterDescriptor,
    generateMethodDescriptor,
    Object,
    MEAN,
} from "./_constant";
/**
 * 
 */
export var _COM_BACKEND_HISTORY_PROPERTIES = (function () {
    /**
     * 
     */
    return Object.freeze({
        location: generateGetterDescriptor(MEAN),   // TODO: Implement it.
        length: generateGetterDescriptor(MEAN),     // TODO: Implement it.
        state: generateGetterDescriptor(MEAN),      // TODO: Implement it.
        go: generateMethodDescriptor(MEAN),         // TODO: Implement it.
        back: generateMethodDescriptor(MEAN),       // TODO: Implement it.
        forward: generateMethodDescriptor(MEAN),    // TODO: Implement it.
        navigate: generateMethodDescriptor(MEAN),   // TODO: Implement it.
        redirect: generateMethodDescriptor(MEAN),   // TODO: Implement it.
    });
}());