/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

declare type RequestListener = import("http").RequestListener;
declare type Server = import("http").Server;

export class Backend implements Hml.Backend {
    static init(): Backend;
    private constructor();
    readonly DataResult: Hml.DataResultConstructor;
    readonly FileResult: Hml.FileResultConstructor;
    readonly JsonResult: Hml.JsonResultConstructor;
    readonly NoneResult: Hml.NoneResultConstructor;
    readonly NotFoundResult: Hml.NotFoundResultConstructor;
    readonly RedirectResult: Hml.RedirectResultConstructor;
    readonly ForbiddenResult: Hml.ForbiddenResultConstructor;
    readonly UnauthorizedResult: Hml.UnauthorizedResultConstructor;
    createSessionStorage(opts?: Hml.SessionStorageOptions): Hml.SessionStorage;
    createTokenGenerator(opts?: Hml.TokenGeneratorOptions): Hml.TokenGenerator;
    createVisitValidator(opts?: Hml.VisitValidatorOptions): Hml.VisitValidator;
    createListener(opts?: Hml.ServerOptions): RequestListener;
    createServer(opts?: Hml.ServerOptions): Server;
}