/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class Response<R> implements Hml.Ajax.Response<R> {
    static init<R>(xhr: XMLHttpRequest, baseURI: string, responseType?: Hml.ResponseType): Response<R>;
    private constructor();
    readonly status: number;
    readonly headers: Readonly<Record<string, string | ReadonlyArray<string> | undefined>>;
    readonly responseURL: string;
    readonly contentType: string;
    readonly response: R;
}