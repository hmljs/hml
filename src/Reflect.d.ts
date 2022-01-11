/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

declare interface Reflect {
    delete(argc: object): boolean;
    has(argc: object, expr: Hml.PropertyExpr): boolean;
    get(argc: object, expr: Hml.PropertyExpr): any;
    set<T>(argc: object, expr: Hml.PropertyExpr, value: T): T;
    once<T extends object, R>(argc: T, expr: Hml.PropertyExpr, initialize: (this: T) => R): R;
    single<T>(argc: Hml.FuncClass<[], T>, value?: any): T;
    construct<T extends object>(argc: T, value: any): T;
    isConstruct(argc: object): boolean;
    take<T>(argc: object): T;
}

export const Reflect: Reflect;