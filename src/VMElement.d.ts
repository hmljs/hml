/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class VMElement<T extends Hml.VMElementTypes> implements Hml.VMElement<T> {
    static init<T extends Hml.VMElementTypes>(owner: any, type: T, props?: Hml.VMElementProps<T>, ...children: Hml.VMElementChildren[]): VMElement<T>;
    private constructor();
    readonly key: Hml.Key | null | undefined;
    readonly ref: Hml.RefObject<Hml.VMElementInstance<T>> | null | undefined;
    readonly cmd: Hml.DirectiveConstructor<Omit<Hml.VMElementProps<T>, keyof Hml.ClassAttributes<Hml.Element>>, any>[] | null | undefined;
    readonly props: Omit<Hml.VMElementProps<T>, keyof Hml.ClassAttributes<Hml.Element>> & { readonly children: ReadonlyArray<any>; };
    readonly owner: any;
    readonly type: T;
}