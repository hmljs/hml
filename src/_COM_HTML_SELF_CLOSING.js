import {
    skrinkSerializer,
} from "./_constant";
/**
 * 
 */
export var _COM_HTML_SELF_CLOSING = (function () {
    /**
     * 
     */
    var _COM_HTML_SELF_CLOSING = {
        area: true,
        base: true,
        br: true,
        col: true,
        embed: true,
        hr: true,
        img: true,
        input: true,
        keygen: true,
        link: true,
        menuitem: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true,
    };
    /**
     * 
     */
    return skrinkSerializer(
        /**
         * 
         * @param {string} argc 
         */
        function (argc) {
            return _COM_HTML_SELF_CLOSING[argc] || false;
        }
    );
}());