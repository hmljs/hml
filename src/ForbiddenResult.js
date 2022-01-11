import {
    generateClass,
    generateGetterDescriptor,
} from "./_constant";
import {
    NoneResult,
} from "./NoneResult";
import {
    Reflect,
} from "./Reflect";
/**
 * 
 */
export var ForbiddenResult = (function () {
    /**
     * 
     * @this {Hml.ForbiddenResult}
     */
    function _status() {
        return Reflect.take(this).status;
    }
    /**
     * 
     */
    return generateClass(
        function () {
            Reflect.construct(this, {
                status: 403,
            });
        },
        {
            status: generateGetterDescriptor(_status),
        }, NoneResult);
}());