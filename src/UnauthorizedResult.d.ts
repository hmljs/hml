/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class UnauthorizedResult implements Hml.UnauthorizedResult {
    public constructor(realm: string);
    readonly realm: string;
    readonly status: 401;
}