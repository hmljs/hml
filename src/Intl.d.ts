/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class Intl implements Hml.Intl {
    static init(): Intl;
    private constructor();
    readonly settings: Hml.Writable<Hml.IntlOptions>;
    readonly language: string;
    getResource(lng?: string): any;
    useLanguage(lng?: string): Promise<any>;
    t(argc: string, parameters?: any): string;
}