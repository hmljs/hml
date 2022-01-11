/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class ForbiddenResult implements Hml.ForbiddenResult {
    public constructor();
    readonly status: 403;
}