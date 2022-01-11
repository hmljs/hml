/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

declare type IncomingMessage = import("http").IncomingMessage;

export class Context implements Hml.Context {
    static init(request: IncomingMessage, session: Hml.Session, opts?: Hml.CookieSerializeOptions): Context;
    private constructor();
    readonly req: Hml.Context.Request;
    readonly res: Hml.Context.Response;
    readonly host: string;
    readonly range: ReadonlyArray<number>;
    readonly search: Hml.AnyObject;
    readonly method: Hml.Method;
    readonly length: number;
    readonly origin: string;
    readonly address: string;
    readonly protocol: string;
    readonly pathname: string;
    readonly mimetype: string;
    readonly boundary: string;
    readonly encoding: ReadonlyArray<string>;
    readonly language: ReadonlyArray<string>;
    readonly cookies: Readonly<Record<string, string | undefined>>;
    readonly headers: Readonly<Record<string, string | ReadonlyArray<string> | undefined>>;
    readonly session: Hml.Session;
    getHeader(name: string): string;
    getCookie(name: string): string;
    read(): Promise<Hml.AnyObject>;
}