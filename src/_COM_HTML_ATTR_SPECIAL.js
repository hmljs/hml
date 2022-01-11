import {
    skrinkSerializer,
} from "./_constant";
/**
 * 
 */
export var _COM_HTML_ATTR_SPECIAL = (function () {
    /**
     * 
     */
    var _COM_HTML_ATTR_SPECIAL = {
        async: 2,
        autofocus: 2,
        autoplay: 2,
        checked: 2,
        className: 3,
        controls: 2,
        default: 2,
        defaultValue: 4,
        defaultChecked: 2,
        defer: 2,
        disabled: 2,
        hidden: 2,
        htmlFor: 4,
        innerHTML: 4,
        innerText: 4,
        textContent: 4,
        loop: 2,
        multiple: 2,
        muted: 2,
        noValidate: 2,
        formNoValidate: 2,
        open: 2,
        readOnly: 2,
        required: 2,
        reversed: 2,
        scoped: 2,
        selected: 2,
        style: 1,
        value: 4,
        children: -1,
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
            return _COM_HTML_ATTR_SPECIAL[argc] || 0;
        }
    );
}());