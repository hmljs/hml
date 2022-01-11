/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class FileResult implements Hml.FileResult {
    public constructor(path: string, filename?: string, mimetype?: string);
    readonly path: string;
    readonly filename: string | undefined;
    readonly mimetype: string | undefined;
}