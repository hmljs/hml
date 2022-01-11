/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class HttpError implements Hml.HttpError {
    public constructor(status: number, message?: string);
    readonly name: string;
    readonly message: string | undefined;
    readonly status: number;
    readonly stack?: string;
}