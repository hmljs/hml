/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

declare interface Lazy {
    debounce<T extends Hml.FuncBasic>(argc: T, wait: number, immediate?: boolean): T & Hml.Cancelable;
    throttle<T extends Hml.FuncBasic>(argc: T, wait: number, opts?: Hml.TimerOptions): T & Hml.Cancelable;
    nextTick<T extends Hml.NoReturnsFunc>(argc: T, ...argv: Hml.Parameters<T>): Hml.Cancelable;
    setTimeout<T extends Hml.NoReturnsFunc>(argc: T, wait?: number, ...argv: Hml.Parameters<T>): Hml.Cancelable;
    setInterval<T extends Hml.NoReturnsFunc>(argc: T, wait?: number, ...argv: Hml.Parameters<T>): Hml.Cancelable;
    setImmediate<T extends Hml.NoReturnsFunc>(argc: T, ...argv: Hml.Parameters<T>): Hml.Cancelable;
    forceUpdate(): void;
    hook(instance: Hml.Application, ignoreUpdate?: boolean): Hml.Cancelable;
}

export const Lazy: Lazy;