/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class Debugger implements Hml.Debugger {
    static init(properties: Hml.InstanceOwnPropertyDescriptorMap<Hml.Debugger>): Debugger;
    private constructor();
    logger(error: Error | null, detail: Hml.Detail): void;
}