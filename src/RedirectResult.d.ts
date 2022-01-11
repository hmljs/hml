/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class RedirectResult implements Hml.RedirectResult {
    public constructor(location: string, forever?: boolean);
    readonly location: string;
    readonly status: 301 | 302;
}