/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

declare type RequestListener = import("http").RequestListener;

export function _createListener(opts?: Hml.ServerOptions): RequestListener;