/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class Path implements Hml.Path {
    static init(): Path;
    private constructor();
    parse(url: string): Hml.Location;
    dirname(url: string): string;
    extname(url: string): string;
    resolve(...argv: string[]): string;
}