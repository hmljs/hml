/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

declare type IncomingMessage = import("http").IncomingMessage;

export class Request implements Hml.Context.Request {
    static init(request: IncomingMessage): Request;
    private constructor();
    read(): AsyncIterableIterator<Buffer>;
}