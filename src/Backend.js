import {
    generateClass,
    generateMethodDescriptor,
    generateNormalDescriptor,
    defineProperties,
    BASE,
    NOOP,
} from "./_constant";
import {
    _createServer,
} from "./_createServer";
import {
    _createListener,
} from "./_createListener";
import {
    _createSessionStorage,
} from "./_createSessionStorage";
import {
    _createTokenGenerator,
} from "./_createTokenGenerator";
import {
    _createVisitValidator,
} from "./_createVisitValidator";
import {
    UnauthorizedResult,
} from "./UnauthorizedResult";
import {
    ForbiddenResult,
} from "./ForbiddenResult";
import {
    RedirectResult,
} from "./RedirectResult";
import {
    NotFoundResult,
} from "./NotFoundResult";
import {
    NoneResult,
} from "./NoneResult";
import {
    JsonResult,
} from "./JsonResult";
import {
    FileResult,
} from "./FileResult";
import {
    DataResult,
} from "./DataResult";
import {
    Reflect,
} from "./Reflect";
/**
 * 
 */
export var Backend = (function () {
    /**
     * 
     */
    function _init() {
        return Reflect.single(Backend);
    }
    /**
     * 
     */
    return defineProperties(generateClass(BASE, {
        DataResult: generateNormalDescriptor(DataResult),
        FileResult: generateNormalDescriptor(FileResult),
        JsonResult: generateNormalDescriptor(JsonResult),
        NoneResult: generateNormalDescriptor(NoneResult),
        NotFoundResult: generateNormalDescriptor(NotFoundResult),
        RedirectResult: generateNormalDescriptor(RedirectResult),
        ForbiddenResult: generateNormalDescriptor(ForbiddenResult),
        UnauthorizedResult: generateNormalDescriptor(UnauthorizedResult),
        createSessionStorage: generateMethodDescriptor(_createSessionStorage),
        createTokenGenerator: generateMethodDescriptor(_createTokenGenerator),
        createVisitValidator: generateMethodDescriptor(_createVisitValidator),
        createListener: generateMethodDescriptor(_createListener),
        createServer: generateMethodDescriptor(_createServer),
    }, NOOP), {
        init: generateMethodDescriptor(_init),
    });
}());