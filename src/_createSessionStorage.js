import {
    skrinkSerializer,
} from "./_constant";
import {
    SessionStorage,
} from "./SessionStorage";
/**
 * 
 */
export var _createSessionStorage = (function () {
    /**
     * 
     */
    return skrinkSerializer(
        /**
         * 
         * @param {Hml.SessionStorageOptions=} opts 
         */
        function (opts) {
            return SessionStorage.init(opts);
        }
    );
}());