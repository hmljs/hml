/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class Pattern implements Hml.Pattern {
    static init(): Pattern;
    private constructor();
    readonly URL: RegExp;
    readonly DATE: RegExp;
    readonly TIME: RegExp;
    readonly IPV4: RegExp;
    readonly IPV6: RegExp;
    readonly BLANK: RegExp;
    readonly DIGIT: RegExp;
    readonly DMOJI: RegExp;
    readonly EMAIL: RegExp;
    readonly PHONE: RegExp;
    readonly ENGLISH: RegExp;
    readonly CHINESE: RegExp;
    readonly USERNAME: RegExp;
    readonly PASSWORD: RegExp;
    readonly DATETIME: RegExp;
}