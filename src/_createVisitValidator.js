import {
    skrinkSerializer,
} from "./_constant";
import {
    VisitValidator,
} from "./VisitValidator";
/**
 * 
 */
export var _createVisitValidator = (function () {
    /**
     * 
     */
    return skrinkSerializer(
        /**
         * 
         * @param {Hml.VisitValidatorOptions=} opts 
         */
        function (opts) {
            return VisitValidator.init(opts);
        }
    );
}());