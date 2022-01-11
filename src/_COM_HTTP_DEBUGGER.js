import {
    generateMethodDescriptor,
    console,
    Date,
    Number,
    String,
    DEVELOPMENT,
} from "./_constant";
import {
    Debugger,
} from "./Debugger";
import {
    Formats,
} from "./Formats";
/**
 * 
 */
export var _USUAL_HTTP_DEBUGGER = (function () {
    /**
     * 
     * @param {number} status 
     * @param {string} method 
     * @param {string} source 
     * @param {string} colors 
     */
    function _stdout(status, method, source, colors) {
        console.log("\x1B[" + colors + "[" + Formats.init().date(new Date(), "HH:mm:ss") + "] " + status + " " + method.padEnd(8, " ") + source + "\x1B[39m");
    }
    /**
     * 
     * @param {Error | null} error 
     * @param {Hml.Detail} detail 
     */
    function _logger(error, detail) {
        if (error) {
            console.log(error);
        }
        if (DEVELOPMENT) {
            var status = Number(detail.status);
            var method = String(detail.method);
            var source = String(detail.url);
            if (status >= 500) {
                _stdout(status, method, source, "31m");
            } else if (status >= 400) {
                _stdout(status, method, source, "33m");
            } else if (status >= 300) {
                _stdout(status, method, source, "36m");
            } else {
                _stdout(status, method, source, "34m");
            }
        }
    }
    /**
     * 
     */
    return Debugger.init({
        logger: generateMethodDescriptor(_logger),
    });
}());