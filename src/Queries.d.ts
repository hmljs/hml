/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class Queries implements Hml.Queries {
    static init(): Queries;
    private constructor();
    parse(argc: string): Hml.AnyObject;
    serialize(argc: Hml.AnyObject): string;
}