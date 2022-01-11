/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class Ajax implements Hml.Ajax {
    static init(): Ajax;
    private constructor();
    readonly settings: Hml.Writable<Hml.AjaxOptions<Hml.EventTarget>>;
    xhr<P = unknown, R = unknown>(api: Hml.API): Hml.Ajax.Request<P, R>;
    get<P = unknown, R = unknown>(url: string): Hml.Ajax.Request<P, R>;
    post<P = unknown, R = unknown>(url: string): Hml.Ajax.Request<P, R>;
    put<P = unknown, R = unknown>(url: string): Hml.Ajax.Request<P, R>;
    delete<P = unknown, R = unknown>(url: string): Hml.Ajax.Request<P, R>;
    patch<P = unknown, R = unknown>(url: string): Hml.Ajax.Request<P, R>;
    options<P = unknown>(url: string): Hml.Ajax.Request<P, never>;
    head<P = unknown>(url: string): Hml.Ajax.Request<P, never>;
}