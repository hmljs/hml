/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class Response implements Hml.Context.Response {
    static init(opts?: Hml.CookieSerializeOptions): Response;
    private constructor();
    hasHeader(name: string): boolean;
    hasCookie(name: string): boolean;
    setHeader<T extends string | ReadonlyArray<string>>(name: string, value: T): T;
    setCookie(name: string, value: string, opts?: Hml.CookieSerializeOptions): string;
    deleteHeader(name: string): boolean;
    deleteCookie(name: string): boolean;
    serialize(): Readonly<Record<string, string | ReadonlyArray<string>>>;
}