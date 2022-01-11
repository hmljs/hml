/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class TokenGenerator implements Hml.TokenGenerator {
    static init(opts?: Hml.TokenGeneratorOptions): TokenGenerator;
    private constructor();
    generate(context: Hml.Context): Promise<string>;
}