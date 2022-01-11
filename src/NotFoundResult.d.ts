/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class NotFoundResult implements Hml.NotFoundResult {
    public constructor();
    readonly status: 404;
}