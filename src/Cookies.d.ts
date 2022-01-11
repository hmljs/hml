/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class Cookies implements Hml.Cookies {
    static init(): Cookies;
    private constructor();
    parse(argc: string): Hml.AnyObject;
    serialize(name: string, value: string, opts?: Hml.CookieSerializeOptions): string;
}