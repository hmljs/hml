/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export class Browser implements Hml.Browser {
    static init(): Browser;
    private constructor();
    readonly innerHeight: number;
    readonly innerWidth: number;
    readonly outerHeight: number;
    readonly outerWidth: number;
    readonly clientHeight: number;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly scrollHeight: number;
    readonly scrollLeft: number;
    readonly scrollTop: number;
    readonly scrollWidth: number;
    readonly compatMode: Hml.CompatMode;
    readonly readyState: Hml.ReadyState;
    readonly fullscreenEnabled: boolean;
    readonly fullscreenElement: Hml.Element | null;
    import(name: string): Promise<any>;
    render(node: Hml.VMNode, container: HTMLElement | MathMLElement | SVGElement, context?: any, ignoreUpdate?: boolean): Hml.Application;
    scrollTo(x: number, y: number, behavior?: ScrollBehavior): void;
    getComputedStyle(element: Hml.Element, pseudoElement?: string | null): Hml.CSSStyleDeclaration;
    requestFullscreen(element: Hml.Element, opts?: FullscreenOptions): Promise<void>;
    exitFullscreen(): Promise<void>;
}