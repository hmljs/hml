/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

declare interface Hook {
    useRef(): Hml.RefObject<unknown>;
    useRef<T>(target: T): Hml.RefObject<T>;
    useScope<T extends Hml.AnyObject>(argc: T): T;
    useTarget<T extends Hml.AnyObject>(argc?: T & ThisType<T & Hml.Element>): T & Hml.Element;
    useEffect(argc: Hml.NoParametersFunc<void | Hml.NOOP | Hml.Cancelable>, dependencies?: any): void;
}

declare interface Plat {
    useRef(): Hml.RefObject<unknown>;
    useRef<T>(target: T): Hml.RefObject<T>;
    useScope<T extends Hml.AnyObject>(argc: T): T;
    useTarget<T extends Hml.AnyObject>(argc?: T & ThisType<T & Hml.Element>): T & Hml.Element;
    useEffect(argc: Hml.NoParametersFunc<void | Hml.NOOP | Hml.Cancelable>, dependencies?: any): void;
    createElement<T extends Hml.VMElementTypes>(type: T, props?: Hml.VMElementProps<T>, ...children: Hml.VMElementChildren[]): Hml.VMElement<T>;
    redactElement(template: string, dependencies?: Hml.ComponentDependencies): (scope: any) => Hml.VMNode;
    hook<T, R>(instance: Hook, callback: (this: T) => R, context?: T): R;
}

export const Plat: Plat;