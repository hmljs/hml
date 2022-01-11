/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class Location implements Hml.Location {
    static init(properties: Hml.InstanceOwnPropertyDescriptorMap<Hml.Location>): Location;
    private constructor();
    readonly protocol: string;
    readonly host: string;
    readonly pathname: string;
    readonly search: string;
    readonly hash: string;
    readonly href: string;
}