import {
    defineProperties,
    skrinkSerializer,
    generateMethodDescriptor,
} from "./_constant";
/**
 * 
 */
export var Router = (function () {
    /**
     * 
     */
    function _Router() { }
    /**
     * 
     */
    function _Redirect() { }
    /**
     * 
     */
    function _Link() { }
    /**
     * 
     */
    function _View() { }
    /**
     * 
     */
    return defineProperties(skrinkSerializer(_Router), {
        Redirect: generateMethodDescriptor(_Redirect),
        Link: generateMethodDescriptor(_Link),
        View: generateMethodDescriptor(_View),
    });
}());