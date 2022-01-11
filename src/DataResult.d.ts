/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

declare type Readable = import("stream").Readable;

export class DataResult implements Hml.DataResult {
    public constructor(data: Buffer | Readable, filename?: string, mimetype?: string, modified?: Hml.Modified);
    readonly data: Buffer | Readable;
    readonly filename: string | undefined;
    readonly mimetype: string | undefined;
    readonly modified: Hml.Modified | undefined;
}