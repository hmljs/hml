import {
    skrinkSerializer,
    http,
} from "./_constant";
import {
    _createListener,
} from "./_createListener";
/**
 * 
 */
export var _createServer = (function () {
    /**
     * 
     */
    return skrinkSerializer(
        /**
         * 
         * @param {Hml.ServerOptions=} opts 
         */
        function (opts) {
            return http.createServer(_createListener(opts));
        }
    );
}());