/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class NoneResult implements Hml.NoneResult {
    public constructor(status: number);
    readonly status: number;
}