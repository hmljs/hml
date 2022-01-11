import {
    Object,
    DEVELOPMENT,
} from "./_constant";
/**
 * 
 */
export var _COM_HTTP_ASSEMBLY = (function () {
    /**
     * 
     */
    var _COM_NODE_INTERNAL = [
        "fs",
        "os",
        "v8",
        "vm",
        "dns",
        "net",
        "tls",
        "tty",
        "url",
        "path",
        "repl",
        "util",
        "wasi",
        "zlib",
        "http",
        "http2",
        "https",
        "assert",
        "buffer",
        "crypto",
        "domain",
        "events",
        "stream",
        "timers",
        "cluster",
        "child_process",
    ];
    /**
     * 
     */
    return Object.freeze(DEVELOPMENT ? [
        Object.freeze({
            dist: "src",
        }),
        Object.freeze({
            dist: "node_modules",
            ignore: Object.freeze(_COM_NODE_INTERNAL.concat(_COM_NODE_INTERNAL.map(function (i) { return "node:" + i; }))),
        }),
    ] : []);
}());