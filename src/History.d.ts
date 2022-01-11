/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class History implements Hml.History {
    static init(properties?: Hml.InstanceOwnPropertyDescriptorMap<Hml.History>): History;
    private constructor();
    readonly location: Hml.Location;
    readonly length: number;
    readonly state: any;
    go(delta?: number): void;
    back(): void;
    forward(): void;
    navigate(url: string, state?: any): void;
    redirect(url: string, state?: any): void;
}