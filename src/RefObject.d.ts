/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class RefObject<T> implements Hml.RefObject<T> {
    static init<T>(target?: T): RefObject<T>;
    private constructor();
    readonly target: T;
}