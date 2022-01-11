/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

declare type Server = import("http").Server;

export function _createServer(opts?: Hml.ServerOptions): Server;