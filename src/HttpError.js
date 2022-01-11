import {
    generateClass,
    generateGetterDescriptor,
    Error,
} from "./_constant";
import {
    Reflect,
} from "./Reflect";
/**
 * 
 */
export var HttpError = (function () {
    /**
     * 
     * @this {Hml.HttpError}
     */
    function _name() {
        return Reflect.take(this).name;
    }
    /**
     * 
     * @this {Hml.HttpError}
     */
    function _message() {
        return Reflect.take(this).message;
    }
    /**
     * 
     * @this {Hml.HttpError}
     */
    function _status() {
        return Reflect.take(this).status;
    }
    /**
     * 
     */
    return generateClass(
        /**
         * 
         * @param {number} status 
         * @param {string=} message 
         */
        function (status, message) {
            Reflect.construct(this, {
                name: "HttpError",
                message: message,
                status: status,
            });
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this);
            }
        },
        {
            name: generateGetterDescriptor(_name),
            message: generateGetterDescriptor(_message),
            status: generateGetterDescriptor(_status),
        }, Error);
}());