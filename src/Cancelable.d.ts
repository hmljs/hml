/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class Cancelable implements Hml.Cancelable {
    static init(properties: Hml.InstanceOwnPropertyDescriptorMap<Hml.Cancelable>): Cancelable;
    private constructor();
    cancel(): void;
}