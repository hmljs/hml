/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class Application implements Hml.Application {
    static init(properties: Hml.InstanceOwnPropertyDescriptorMap<Hml.Application>): Application;
    private constructor();
    forceUpdate(): void;
    remove(): void;
}