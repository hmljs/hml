import {
    skrinkSerializer,
} from "./_constant";
import {
    TokenGenerator,
} from "./TokenGenerator";
/**
 * 
 */
export var _createTokenGenerator = (function () {
    /**
     * 
     */
    return skrinkSerializer(
        /**
         * 
         * @param {Hml.TokenGeneratorOptions=} opts 
         */
        function (opts) {
            return TokenGenerator.init(opts);
        }
    );
}());