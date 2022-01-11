/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class Formats implements Hml.Formats {
    static init(): Formats;
    private constructor();
    json(argc: any, pretty?: boolean): string;
    attr(argc: any, expr?: Hml.PropertyExpr): string;
    date(argc: string | number | Date, pattern?: string): string;
    digit(argc: number, digit?: number): string;
    lower(argc: string): string;
    upper(argc: string): string;
}