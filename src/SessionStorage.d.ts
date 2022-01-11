/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class SessionStorage implements Hml.SessionStorage {
    static init(opts?: Hml.SessionStorageOptions): SessionStorage;
    private constructor();
    count(): Promise<number>;
    tokens(): Promise<ReadonlyArray<string>>;
    delete(token: string): Promise<boolean>;
    exists(token: string): Promise<boolean>;
    get(token: string, key: string): Promise<any>;
    set<T>(token: string, key: string, value: T): Promise<T>;
    heartbeat(token: string): Promise<void>;
}