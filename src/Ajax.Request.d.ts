/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class Request<P, R> implements Hml.Ajax.Request<P, R> {
    static init<P, R>(api: Hml.API, opts?: Hml.AjaxOptions<Hml.EventTarget>): Request<P, R>;
    private constructor();
    send(data?: P, opts?: Hml.AjaxOptions<Hml.EventTarget>): Promise<Hml.Ajax.Response<R>>;
    cancel(): void;
}