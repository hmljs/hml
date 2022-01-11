/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

declare interface Behaviours extends Readonly<Record<string, Hml.Proto<Hml.Event<Hml.EventTarget>>>> {
    readonly AnimationEvent: Hml.Proto<Hml.AnimationEvent<Hml.EventTarget>>;
    readonly BeforeUnloadEvent: Hml.Proto<Hml.BeforeUnloadEvent<Hml.EventTarget>>;
    readonly ClipboardEvent: Hml.Proto<Hml.ClipboardEvent<Hml.EventTarget>>;
    readonly CompositionEvent: Hml.Proto<Hml.CompositionEvent<Hml.EventTarget>>;
    readonly CustomEvent: Hml.Proto<Hml.CustomEvent<Hml.EventTarget>>;
    readonly DeviceMotionEvent: Hml.Proto<Hml.DeviceMotionEvent<Hml.EventTarget>>;
    readonly DeviceOrientationEvent: Hml.Proto<Hml.DeviceOrientationEvent<Hml.EventTarget>>;
    readonly DragEvent: Hml.Proto<Hml.DragEvent<Hml.EventTarget>>;
    readonly ErrorEvent: Hml.Proto<Hml.ErrorEvent<Hml.EventTarget>>;
    readonly FocusEvent: Hml.Proto<Hml.FocusEvent<Hml.EventTarget>>;
    readonly GamepadEvent: Hml.Proto<Hml.GamepadEvent<Hml.EventTarget>>;
    readonly HashChangeEvent: Hml.Proto<Hml.HashChangeEvent<Hml.EventTarget>>;
    readonly InputEvent: Hml.Proto<Hml.InputEvent<Hml.EventTarget>>;
    readonly KeyboardEvent: Hml.Proto<Hml.KeyboardEvent<Hml.EventTarget>>;
    readonly MessageEvent: Hml.Proto<Hml.MessageEvent<Hml.EventTarget>>;
    readonly PageTransitionEvent: Hml.Proto<Hml.PageTransitionEvent<Hml.EventTarget>>;
    readonly PointerEvent: Hml.Proto<Hml.PointerEvent<Hml.EventTarget>>;
    readonly PopStateEvent: Hml.Proto<Hml.PopStateEvent<Hml.EventTarget>>;
    readonly ProgressEvent: Hml.Proto<Hml.ProgressEvent<Hml.EventTarget>>;
    readonly PromiseRejectionEvent: Hml.Proto<Hml.PromiseRejectionEvent<Hml.EventTarget>>;
    readonly SecurityPolicyViolationEvent: Hml.Proto<Hml.SecurityPolicyViolationEvent<Hml.EventTarget>>;
    readonly StorageEvent: Hml.Proto<Hml.StorageEvent<Hml.EventTarget>>;
    readonly TouchEvent: Hml.Proto<Hml.TouchEvent<Hml.EventTarget>>;
    readonly TransitionEvent: Hml.Proto<Hml.TransitionEvent<Hml.EventTarget>>;
    readonly WheelEvent: Hml.Proto<Hml.WheelEvent<Hml.EventTarget>>;
    readonly MouseEvent: Hml.Proto<Hml.MouseEvent<Hml.EventTarget>>;
    readonly UIEvent: Hml.Proto<Hml.UIEvent<Hml.EventTarget>>;
    readonly Event: Hml.Proto<Hml.Event<Hml.EventTarget>>;
}

declare interface Interfaces extends Readonly<Record<string, Hml.Proto<Hml.EventTarget>>> {
    readonly HTMLAnchorElement: Hml.Proto<Hml.HTMLAnchorElement>;
    readonly HTMLAreaElement: Hml.Proto<Hml.HTMLAreaElement>;
    readonly HTMLAudioElement: Hml.Proto<Hml.HTMLAudioElement>;
    readonly HTMLBRElement: Hml.Proto<Hml.HTMLBRElement>;
    readonly HTMLBaseElement: Hml.Proto<Hml.HTMLBaseElement>;
    readonly HTMLBodyElement: Hml.Proto<Hml.HTMLBodyElement>;
    readonly HTMLButtonElement: Hml.Proto<Hml.HTMLButtonElement>;
    readonly HTMLCanvasElement: Hml.Proto<Hml.HTMLCanvasElement>;
    readonly HTMLDListElement: Hml.Proto<Hml.HTMLDListElement>;
    readonly HTMLDataElement: Hml.Proto<Hml.HTMLDataElement>;
    readonly HTMLDataListElement: Hml.Proto<Hml.HTMLDataListElement>;
    readonly HTMLDetailsElement: Hml.Proto<Hml.HTMLDetailsElement>;
    readonly HTMLDialogElement: Hml.Proto<Hml.HTMLDialogElement>;
    readonly HTMLDivElement: Hml.Proto<Hml.HTMLDivElement>;
    readonly HTMLEmbedElement: Hml.Proto<Hml.HTMLEmbedElement>;
    readonly HTMLFieldSetElement: Hml.Proto<Hml.HTMLFieldSetElement>;
    readonly HTMLFormElement: Hml.Proto<Hml.HTMLFormElement>;
    readonly HTMLHRElement: Hml.Proto<Hml.HTMLHRElement>;
    readonly HTMLHeadElement: Hml.Proto<Hml.HTMLHeadElement>;
    readonly HTMLHeadingElement: Hml.Proto<Hml.HTMLHeadingElement>;
    readonly HTMLHtmlElement: Hml.Proto<Hml.HTMLHtmlElement>;
    readonly HTMLIFrameElement: Hml.Proto<Hml.HTMLIFrameElement>;
    readonly HTMLImageElement: Hml.Proto<Hml.HTMLImageElement>;
    readonly HTMLInputElement: Hml.Proto<Hml.HTMLInputElement>;
    readonly HTMLLIElement: Hml.Proto<Hml.HTMLLIElement>;
    readonly HTMLLabelElement: Hml.Proto<Hml.HTMLLabelElement>;
    readonly HTMLLegendElement: Hml.Proto<Hml.HTMLLegendElement>;
    readonly HTMLLinkElement: Hml.Proto<Hml.HTMLLinkElement>;
    readonly HTMLMenuElement: Hml.Proto<Hml.HTMLMenuElement>;
    readonly HTMLMetaElement: Hml.Proto<Hml.HTMLMetaElement>;
    readonly HTMLMeterElement: Hml.Proto<Hml.HTMLMeterElement>;
    readonly HTMLModElement: Hml.Proto<Hml.HTMLModElement>;
    readonly HTMLOListElement: Hml.Proto<Hml.HTMLOListElement>;
    readonly HTMLObjectElement: Hml.Proto<Hml.HTMLObjectElement>;
    readonly HTMLOptGroupElement: Hml.Proto<Hml.HTMLOptGroupElement>;
    readonly HTMLOptionElement: Hml.Proto<Hml.HTMLOptionElement>;
    readonly HTMLOutputElement: Hml.Proto<Hml.HTMLOutputElement>;
    readonly HTMLParagraphElement: Hml.Proto<Hml.HTMLParagraphElement>;
    readonly HTMLParamElement: Hml.Proto<Hml.HTMLParamElement>;
    readonly HTMLPictureElement: Hml.Proto<Hml.HTMLPictureElement>;
    readonly HTMLPortalElement: Hml.Proto<Hml.HTMLPortalElement>;
    readonly HTMLPreElement: Hml.Proto<Hml.HTMLPreElement>;
    readonly HTMLProgressElement: Hml.Proto<Hml.HTMLProgressElement>;
    readonly HTMLQuoteElement: Hml.Proto<Hml.HTMLQuoteElement>;
    readonly HTMLScriptElement: Hml.Proto<Hml.HTMLScriptElement>;
    readonly HTMLSelectElement: Hml.Proto<Hml.HTMLSelectElement>;
    readonly HTMLSlotElement: Hml.Proto<Hml.HTMLSlotElement>;
    readonly HTMLSourceElement: Hml.Proto<Hml.HTMLSourceElement>;
    readonly HTMLSpanElement: Hml.Proto<Hml.HTMLSpanElement>;
    readonly HTMLStyleElement: Hml.Proto<Hml.HTMLStyleElement>;
    readonly HTMLTableCaptionElement: Hml.Proto<Hml.HTMLTableCaptionElement>;
    readonly HTMLTableCellElement: Hml.Proto<Hml.HTMLTableCellElement>;
    readonly HTMLTableColElement: Hml.Proto<Hml.HTMLTableColElement>;
    readonly HTMLTableElement: Hml.Proto<Hml.HTMLTableElement>;
    readonly HTMLTableRowElement: Hml.Proto<Hml.HTMLTableRowElement>;
    readonly HTMLTableSectionElement: Hml.Proto<Hml.HTMLTableSectionElement>;
    readonly HTMLTemplateElement: Hml.Proto<Hml.HTMLTemplateElement>;
    readonly HTMLTextAreaElement: Hml.Proto<Hml.HTMLTextAreaElement>;
    readonly HTMLTimeElement: Hml.Proto<Hml.HTMLTimeElement>;
    readonly HTMLTitleElement: Hml.Proto<Hml.HTMLTitleElement>;
    readonly HTMLTrackElement: Hml.Proto<Hml.HTMLTrackElement>;
    readonly HTMLUListElement: Hml.Proto<Hml.HTMLUListElement>;
    readonly HTMLVideoElement: Hml.Proto<Hml.HTMLVideoElement>;
    readonly HTMLMediaElement: Hml.Proto<Hml.HTMLMediaElement>;
    readonly HTMLElement: Hml.Proto<Hml.HTMLElement>;
    readonly MathMLElement: Hml.Proto<Hml.MathMLElement>;
    readonly SVGElement: Hml.Proto<Hml.SVGElement>;
    readonly Document: Hml.Proto<Hml.Document>;
    readonly Element: Hml.Proto<Hml.Element>;
    readonly Window: Hml.Proto<Hml.Window>;
    readonly XMLHttpRequest: Hml.Proto<Hml.EventTarget>;
    readonly EventTarget: Hml.Proto<Hml.EventTarget>;
}

export class Core implements Hml.Core {
    static readonly behaviours: Behaviours;
    static readonly interfaces: Interfaces;
    static exclude(argc: EventTarget, type: string, listener: Hml.EventListenerOrEventListenerObject<Hml.EventTarget, Hml.Event<Hml.EventTarget>>, opts?: EventListenerOptions): void;
    static include(argc: EventTarget, type: string, listener: Hml.EventListenerOrEventListenerObject<Hml.EventTarget, Hml.Event<Hml.EventTarget>>, opts?: AddEventListenerOptions): void;
    static replace(argc: EventTarget, type: string, pairs: Readonly<Hml.EventListenerOrEventListenerObject<Hml.EventTarget, Hml.Event<Hml.EventTarget>>>, opts?: EventListenerOptions): void;
    static trigger(argc: EventTarget, event: Event): void;
    static destroy(argc: EventTarget): void;
    static init(): Core;
    private constructor();
    take(argc: Hml.Element): Element;
    take(argc: Hml.EventTarget): EventTarget;
    take(argc: Hml.Event<Hml.EventTarget>): Event;
    wrap(argc: ProgressEvent): Hml.ProgressEvent<Hml.EventTarget>;
    wrap(argc: Event): Hml.Event<Hml.EventTarget>;
    wrap(argc: EventTarget): Hml.EventTarget;
}