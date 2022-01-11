import {
    generateGetterDescriptor,
    generateMethodDescriptor,
    location,
    history,
    Object,
    LOCATION,
} from "./_constant";
import {
    Location,
} from "./Location";
import {
    Reflect,
} from "./Reflect";
/**
 * 
 */
export var _COM_BROWSER_HISTORY_PROPERTIES = (function () {
    /**
     * 
     */
    return Object.freeze({
        location: generateGetterDescriptor(
            /**
             * 
             * @this {any}
             */
            function () {
                return Reflect.once(this, LOCATION, function () {
                    return Location.init({
                        protocol: generateGetterDescriptor(function () {
                            return location.protocol;
                        }),
                        host: generateGetterDescriptor(function () {
                            return location.host;
                        }),
                        pathname: generateGetterDescriptor(function () {
                            return location.pathname;
                        }),
                        search: generateGetterDescriptor(function () {
                            return location.search;
                        }),
                        hash: generateGetterDescriptor(function () {
                            return location.hash;
                        }),
                        href: generateGetterDescriptor(function () {
                            return location.href;
                        }),
                    });
                });
            }
        ),
        length: generateGetterDescriptor(function () {
            return history.length;
        }),
        state: generateGetterDescriptor(function () {
            return history.state;
        }),
        go: generateMethodDescriptor(function (delta) {
            return history.go(delta);
        }),
        back: generateMethodDescriptor(function () {
            return history.back();
        }),
        forward: generateMethodDescriptor(function () {
            return history.forward();
        }),
        navigate: generateMethodDescriptor(function (href, state) {
            if (history.pushState) {
                history.pushState(state, "", href);
            } else {
                // @ts-ignore
                history.state = state;
                location.assign(href);
            }
        }),
        redirect: generateMethodDescriptor(function (href, state) {
            if (history.replaceState) {
                history.replaceState(state, "", href);
            } else {
                // @ts-ignore
                history.state = state;
                location.replace(href);
            }
        }),
    });
}());