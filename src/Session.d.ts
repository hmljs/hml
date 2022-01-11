/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class Session implements Hml.Session {
    static init(id: string, storage: Hml.SessionStorage): Session;
    private constructor();
    readonly id: string;
    get(key: string): Promise<any>;
    set<T>(key: string, value: T): Promise<T>;
}