/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class JsonResult implements Hml.JsonResult {
    public constructor(data: string, code?: number, message?: string);
    readonly data: any;
    readonly code: number | undefined;
    readonly message: string | undefined;
}