/// <reference no-default-lib="true" />
/// <reference lib="es5" />
/// <reference lib="dom" />

export = Hml;

declare type DOMNumber = number & {};
declare type DOMString = string & {};
declare type DOMBoolean = boolean & {};
declare type RenderContainer = HTMLElement | MathMLElement | SVGElement;
declare type RequestListener = import("http").RequestListener;
declare type IncomingMessage = import("http").IncomingMessage;
declare type Readable = import("stream").Readable;
declare type Server = import("http").Server;

declare global {
    namespace Hml {
        export const ajax: Ajax;
        export const core: Core;
        export const path: Path;
        export const intl: Intl;
        export const NOOP: NOOP;
        export const Router: Router;
        export const Backend: Backend;
        export const Browser: Browser;
        export const WeakMap: WeakMapConstructor;
        export const Promise: PromiseConstructor;
        export const HttpError: HttpErrorConstructor;
        export const version: string;
        export const history: History;
        export const pattern: Pattern;
        export const cookies: Cookies;
        export const queries: Queries;
        export const formats: Formats;
        export function useRef(): RefObject<unknown>;
        export function useRef<T>(target: T): RefObject<T>;
        export function useScope<T extends AnyObject>(argc: T): T;
        export function useTarget<T extends AnyObject>(argc?: T & ThisType<T & Element>): T & Element;
        export function useEffect(argc: NoParametersFunc<void | NOOP | Cancelable>, dependencies?: any): void;
        export function createElement<T extends VMElementTypes>(type: T, props?: VMElementProps<T>, ...children: VMElementChildren[]): VMElement<T>;
        export function redactElement(template: string, dependencies?: ComponentDependencies): (locals: any) => VMNode;
        export function debounce<T extends FuncBasic>(argc: T, wait: number, immediate?: boolean): T & Cancelable;
        export function throttle<T extends FuncBasic>(argc: T, wait: number, opts?: TimerOptions): T & Cancelable;
        export function nextTick<T extends NoReturnsFunc>(argc: T, ...argv: Parameters<T>): Cancelable;
        export function setTimeout<T extends NoReturnsFunc>(argc: T, wait?: number, ...argv: Parameters<T>): Cancelable;
        export function setInterval<T extends NoReturnsFunc>(argc: T, wait?: number, ...argv: Parameters<T>): Cancelable;
        export function setImmediate<T extends NoReturnsFunc>(argc: T, ...argv: Parameters<T>): Cancelable;
        export function forceUpdate(): void;
        export function has(argc: any, expr: PropertyExpr): boolean;
        export function get<T>(argc: any, expr: PropertyExpr, defaultValue?: T): T;
        export function set<T>(argc: any, expr: PropertyExpr, value: T): T;
        export function keys(argc: any, inherit?: boolean): ReadonlyArray<string>;
        export function values(argc: any, inherit?: boolean): ReadonlyArray<any>;
        export function uuid(pure?: boolean): string;
        export function hash(argc: string, seed?: number): number;
        export function atob(argc: string, urlSafeEncoding?: boolean): string;
        export function btoa(argc: string, urlSafeEncoding?: boolean): string;
        export function glob(argc: string): RegExp;
        export function uniq<T>(argc: T[]): T[];
        export function omit<T, P extends keyof any>(argc: T, ...argv: P[]): Omit<T, P>;
        export function pick<T, P extends keyof T>(argc: T, ...argv: P[]): Pick<T, P>;
        export function clone<T>(argc: T, deep?: boolean, onlyValid?: boolean): T;
        export function merge<T, U>(arg1: T, arg2: U, deep?: boolean, onlyValid?: boolean): T & U;
        export function defaults<T, U>(argc: T, ...argv: U[]): T & U;
        export function isArray<T>(argc: any): argc is T[];
        export function isClass<T>(argc: any): argc is FuncClass<any[], T>;
        export function isNumber(argc: any): argc is number;
        export function isString(argc: any): argc is string;
        export function isBoolean(argc: any): argc is boolean;
        export function isFunction(argc: any): argc is FuncBasic;
        export function isBigInt(argc: any): argc is bigint;
        export function isSymbol(argc: any): argc is symbol;
        export function isObject(argc: any, strict?: boolean): argc is AnyObject;
        export function isInstanceOf<T>(argc: any, constructor: FuncUnion<any[], T>): argc is T;
        export function isDataView(argc: any): argc is DataView;
        export function isFormData(argc: any): argc is FormData;
        export function isBuffer(argc: any): argc is Buffer;
        export function isRegExp(argc: any): argc is RegExp;
        export function isDate(argc: any): argc is Date;
        export function isNull(argc: any): argc is null;
        export function isUndefined(argc: any): argc is undefined;
        export function isNullOrUndefined(argc: any): argc is null | undefined;
        export function isNullOrEmptyString(argc: any): argc is null | undefined | "";
        export function isNullOrEmptyObject(argc: any): argc is null | undefined | NilObject;
        export function isBasic(argc: any): argc is number | string | boolean | bigint | symbol | null | undefined;
        export function isEqual(arg1: any, arg2: any): boolean;
        export function isValid(argc: any): boolean;

        interface Ajax {
            readonly settings: Writable<AjaxOptions<EventTarget>>;
            xhr<P = unknown, R = unknown>(api: API): Ajax.Request<P, R>;
            get<P = unknown, R = unknown>(url: string): Ajax.Request<P, R>;
            post<P = unknown, R = unknown>(url: string): Ajax.Request<P, R>;
            put<P = unknown, R = unknown>(url: string): Ajax.Request<P, R>;
            delete<P = unknown, R = unknown>(url: string): Ajax.Request<P, R>;
            patch<P = unknown, R = unknown>(url: string): Ajax.Request<P, R>;
            options<P = unknown>(url: string): Ajax.Request<P, never>;
            head<P = unknown>(url: string): Ajax.Request<P, never>;
        }
        namespace Ajax {
            interface Request<P, R> extends Cancelable {
                send(data?: P, opts?: AjaxOptions<EventTarget>): Promise<Response<R>>;
            }
            interface Response<R> {
                readonly status: number;
                readonly headers: Readonly<Record<string, string | ReadonlyArray<string> | undefined>>;
                readonly responseURL: string;
                readonly contentType: string;
                readonly response: R;
            }
        }
        interface Core {
            take(argc: EventTarget): globalThis.EventTarget;
            take(argc: Event<EventTarget>): globalThis.Event;
            wrap(argc: globalThis.EventTarget): EventTarget;
            wrap(argc: globalThis.Event): Event<EventTarget>;
        }
        interface Path {
            parse(url: string): Location;
            dirname(url: string): string;
            extname(url: string): string;
            resolve(...argv: string[]): string;
        }
        interface Intl {
            readonly settings: Writable<IntlOptions>;
            readonly language: string;
            getResource(lng?: string): any;
            useLanguage(lng?: string): Promise<any>;
            t(argc: string, parameters?: any): string;
        }
        interface Backend {
            readonly DataResult: DataResultConstructor;
            readonly FileResult: FileResultConstructor;
            readonly JsonResult: JsonResultConstructor;
            readonly NoneResult: NoneResultConstructor;
            readonly NotFoundResult: NotFoundResultConstructor;
            readonly RedirectResult: RedirectResultConstructor;
            readonly ForbiddenResult: ForbiddenResultConstructor;
            readonly UnauthorizedResult: UnauthorizedResultConstructor;
            createSessionStorage(opts?: SessionStorageOptions): SessionStorage;
            createTokenGenerator(opts?: TokenGeneratorOptions): TokenGenerator;
            createVisitValidator(opts?: VisitValidatorOptions): VisitValidator;
            createListener(opts?: ServerOptions): RequestListener;
            createServer(opts?: ServerOptions): Server;
        }
        interface Browser {
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
            readonly compatMode: CompatMode;
            readonly readyState: ReadyState;
            readonly fullscreenEnabled: boolean;
            readonly fullscreenElement: Element | null;
            import(name: string): Promise<any>;
            render(node: VMNode, container: RenderContainer, context?: any, ignoreUpdate?: boolean): Application;
            scrollTo(x: number, y: number, behavior?: ScrollBehavior): void;
            getComputedStyle(element: Element, pseudoElement?: string | null): CSSStyleDeclaration;
            requestFullscreen(element: Element, opts?: FullscreenOptions): Promise<void>;
            exitFullscreen(): Promise<void>;
        }
        interface ComponentDependencies {
            readonly usingComponents?: Readonly<Record<string, ComponentConstructor>>;
            readonly usingDirectives?: Readonly<Record<string, DirectiveConstructor>>;
            readonly usingTransforms?: Readonly<Record<string, TransformConstructor>>;
            readonly shadowRootMode?: ShadowRootMode;
        }
        interface ComponentConstructor<P = NilObject, C = any> {
            (props: P, context?: C): VMNode;
        }
        interface DirectiveConstructor<P = NilObject, C = any> {
            (props: P, context?: C): void;
        }
        interface TransformConstructor {
            (argc: any, ...argv: any[]): any;
        }
        interface Router extends ComponentConstructor<RouterProperties> {
            readonly Redirect: ComponentConstructor<RouterRedirectProperties>;
            readonly Link: ComponentConstructor<RouterLinkProperties>;
            readonly View: ComponentConstructor<RouterViewProperties>;
        }
        interface RouterProperties extends ClassChildrenAttributes<ComponentConstructor> {

        }
        interface RouterComponentProperties extends ClassChildrenAttributes<ComponentConstructor> {
            readonly history: History;
        }
        interface RouterRedirectProperties extends ClassAttributes<Element> {
            readonly from?: string;
            readonly state?: any;
            readonly to: string;
        }
        interface RouterLinkProperties extends ClassChildrenAttributes<ComponentConstructor>, ClassAttributes<Element> {
            readonly class?: string;
            readonly style?: string | Partial<CSSStyleDeclaration>;
            readonly state?: any;
            readonly to: string;
        }
        interface RouterViewProperties extends ClassChildrenAttributes<ComponentConstructor>, ClassAttributes<Element> {
            readonly component: ComponentConstructor<RouterComponentProperties>;
            readonly url: string;
        }
        interface DataResultConstructor extends Proto<DataResult> {
            new(data: Buffer | Readable, filename?: string, mimetype?: string, modified?: Modified): DataResult;
        }
        interface FileResultConstructor extends Proto<FileResult> {
            new(path: string, filename?: string, mimetype?: string): FileResult;
        }
        interface JsonResultConstructor extends Proto<JsonResult> {
            new(data: any, code?: number, message?: string): JsonResult;
        }
        interface NoneResultConstructor extends Proto<NoneResult> {
            new(status: number): NoneResult;
        }
        interface NotFoundResultConstructor extends Proto<NotFoundResult> {
            new(): NotFoundResult;
        }
        interface RedirectResultConstructor extends Proto<RedirectResult> {
            new(location: string, forever?: boolean): RedirectResult;
        }
        interface ForbiddenResultConstructor extends Proto<ForbiddenResult> {
            new(): ForbiddenResult;
        }
        interface UnauthorizedResultConstructor extends Proto<UnauthorizedResult> {
            new(realm: string): UnauthorizedResult;
        }
        interface HttpErrorConstructor extends Proto<HttpError> {
            new(status: number, message?: string): HttpError;
        }
        interface History {
            readonly location: Location;
            readonly length: number;
            readonly state: any;
            back(): void;
            forward(): void;
            go(delta?: number): void;
            navigate(url: string, state?: any): void;
            redirect(url: string, state?: any): void;
        }
        interface Pattern {
            readonly URL: RegExp;
            readonly DATE: RegExp;
            readonly TIME: RegExp;
            readonly IPV4: RegExp;
            readonly IPV6: RegExp;
            readonly BLANK: RegExp;
            readonly DIGIT: RegExp;
            readonly DMOJI: RegExp;
            readonly EMAIL: RegExp;
            readonly PHONE: RegExp;
            readonly ENGLISH: RegExp;
            readonly CHINESE: RegExp;
            readonly USERNAME: RegExp;
            readonly PASSWORD: RegExp;
            readonly DATETIME: RegExp;
        }
        interface Cookies {
            parse(argc: string): AnyObject;
            serialize(name: string, value: string, opts?: CookieSerializeOptions): string;
        }
        interface Queries {
            parse(argc: string): AnyObject;
            serialize(argc: AnyObject): string;
        }
        interface Formats {
            json(argc: any, pretty?: boolean): string;
            attr(argc: any, expr?: PropertyExpr): string;
            date(argc: number | string | Date, pattern?: string): string;
            digit(argc: number, digit?: number): string;
            lower(argc: string): string;
            upper(argc: string): string;
        }
        interface HttpError extends Error {
            readonly name: string;
            readonly message: string | undefined;
            readonly status: number;
            readonly stack?: string;
        }
        interface DataResult {
            readonly data: Buffer | Readable;
            readonly filename: string | undefined;
            readonly mimetype: string | undefined;
            readonly modified: Modified | undefined;
        }
        interface FileResult {
            readonly path: string;
            readonly filename: string | undefined;
            readonly mimetype: string | undefined;
        }
        interface JsonResult {
            readonly data: any;
            readonly code: number | undefined;
            readonly message: string | undefined;
        }
        interface NoneResult {
            readonly status: number;
        }
        interface NotFoundResult extends NoneResult {
            readonly status: 404;
        }
        interface RedirectResult extends NoneResult {
            readonly location: string;
            readonly status: 301 | 302;
        }
        interface ForbiddenResult extends NoneResult {
            readonly status: 403;
        }
        interface UnauthorizedResult extends NoneResult {
            readonly realm: string;
            readonly status: 401;
        }
        interface API {
            readonly url: string;
            readonly method: Method;
        }
        interface Location {
            readonly protocol: string;
            readonly host: string;
            readonly pathname: string;
            readonly search: string;
            readonly hash: string;
            readonly href: string;
        }
        interface Action {
            readonly path: string;
            readonly method?: Method | ReadonlyArray<Method>;
            readonly listen: (context: Context) => Result | PromiseLike<Result>;
        }
        interface Module {
            readonly dist: string;
            readonly ignore?: ReadonlyArray<string>;
            readonly extnames?: ReadonlyArray<string>;
            readonly compiler?: Compiler;
        }
        interface Detail {
            readonly url: string;
            readonly method: Method;
            readonly status: number;
        }
        interface Context {
            readonly req: Context.Request;
            readonly res: Context.Response;
            readonly host: string;
            readonly protocol: string;
            readonly pathname: string;
            readonly search: AnyObject;
            readonly method: Method;
            readonly length: number;
            readonly origin: string;
            readonly address: string;
            readonly mimetype: string;
            readonly boundary: string;
            readonly encoding: ReadonlyArray<string>;
            readonly language: ReadonlyArray<string>;
            readonly range: ReadonlyArray<number>;
            readonly cookies: Readonly<Record<string, string | undefined>>;
            readonly headers: Readonly<Record<string, string | ReadonlyArray<string> | undefined>>;
            readonly session: Session;
            getHeader(name: string): string;
            getCookie(name: string): string;
            read(): Promise<AnyObject>;
        }
        namespace Context {
            interface Request {
                read(): AsyncIterableIterator<Buffer>;
            }
            interface Response {
                hasHeader(name: string): boolean;
                hasCookie(name: string): boolean;
                setHeader<T extends string | ReadonlyArray<string>>(name: string, value: T): T;
                setCookie(name: string, value: string, opts?: CookieSerializeOptions): string;
                deleteHeader(name: string): boolean;
                deleteCookie(name: string): boolean;
                serialize(): Readonly<Record<string, string | ReadonlyArray<string>>>;
            }
        }
        interface Headers {
            readonly [name: string]: string | undefined;
        }
        interface MimeType {
            readonly [extname: string]: string;
        }
        interface Modified {
            readonly match: string;
            readonly since: string;
        }
        interface Debugger {
            logger(error: Error | null, detail: Detail): void;
        }
        interface Compiler {
            (content: string, filename: string, defaultCompiler: DefaultCompiler): string | PromiseLike<string>;
        }
        interface DefaultCompiler {
            (content: string, filename: string): string;
        }
        interface SessionStorageOptions {
            readonly expire?: number;
        }
        interface TokenGeneratorOptions {
            readonly secret?: string;
        }
        interface VisitValidatorOptions {
            readonly exclude?: ReadonlyArray<string>;
            readonly include?: ReadonlyArray<string>;
            readonly methods?: ReadonlyArray<Method>;
        }
        interface SessionStorage {
            count(): Promise<number>;
            tokens(): Promise<ReadonlyArray<string>>;
            delete(token: string): Promise<boolean>;
            exists(token: string): Promise<boolean>;
            get(token: string, key: string): Promise<any>;
            set<T>(token: string, key: string, value: T): Promise<T>;
            heartbeat(token: string): Promise<number>;
        }
        interface TokenGenerator {
            generate(request: IncomingMessage): Promise<string>;
        }
        interface VisitValidator {
            validate(request: IncomingMessage): Promise<boolean>;
        }
        interface Session {
            readonly id: string;
            get(key: string): Promise<any>;
            set<T>(key: string, value: T): Promise<T>;
        }
        interface Application {
            forceUpdate(): void;
            remove(): void;
        }
        interface Cancelable {
            cancel(): void;
        }
        interface RefObject<T> {
            readonly target: T;
        }
        interface VMElement<T extends VMElementTypes = VMElementTypes> {
            readonly key: Key | null | undefined;
            readonly ref: RefObject<VMElementInstance<T>> | null | undefined;
            readonly cmd: ReadonlyArray<DirectiveConstructor<Omit<VMElementProps<T>, keyof ClassAttributes<Element>>>> | null | undefined;
            readonly props: Omit<VMElementProps<T>, keyof ClassAttributes<Element>> & { readonly children: ReadonlyArray<any>; };
            readonly owner: any;
            readonly type: T;
        }
        interface AjaxOptions<T extends EventTarget = EventTarget> {
            readonly baseURI?: string;
            readonly body?: any;
            readonly timeout?: number;
            readonly headers?: Headers;
            readonly username?: string;
            readonly password?: string;
            readonly credentials?: boolean;
            readonly responseType?: ResponseType;
            readonly csrfCookieName?: string;
            readonly csrfHeaderName?: string;
            readonly upload?: (event: ProgressEvent<T>) => void;
        }
        interface IntlOptions {
            readonly ns?: ReadonlyArray<string>;
            readonly loadPath?: string | ((lng: string, ns: string) => string);
            readonly fallback?: string;
            readonly language?: string;
            readonly defaultNS?: string;
        }
        interface TimerOptions {
            readonly leading?: false;
            readonly trailing?: false;
        }
        interface CookieSerializeOptions {
            readonly path?: string;
            readonly domain?: string;
            readonly maxAge?: number;
            readonly expire?: Date;
            readonly sameSite?: SameSite;
            readonly httpOnly?: boolean;
            readonly secure?: boolean;
        }
        interface ServerOptions {
            readonly action?: ReadonlyArray<Action>;
            readonly module?: ReadonlyArray<Module>;
            readonly public?: ReadonlyArray<string>;
            readonly cookie?: CookieSerializeOptions;
            readonly corsEnable?: boolean;
            readonly corsMaxAge?: number;
            readonly corsOrigin?: string;
            readonly corsHeaders?: ReadonlyArray<string>;
            readonly corsMethods?: ReadonlyArray<string>;
            readonly sessionStorage?: SessionStorage;
            readonly tokenGenerator?: TokenGenerator;
            readonly visitValidator?: VisitValidator;
            readonly compressTypes?: ReadonlyArray<string>;
            readonly compressLeast?: number;
            readonly compressLevel?: number;
            readonly debugger?: Debugger;
            readonly mimetype?: MimeType;
            readonly favicon?: string;
            readonly sitemap?: string;
            readonly robots?: string;
        }
        interface Proto<T = any> extends Function {
            readonly prototype: T;
        }
        interface FuncBasic<P extends any[] = any[], T = any, R = any> extends Proto<T> {
            (this: T, ...argv: P): R;
        }
        interface FuncClass<P extends any[] = any[], T = any> extends Proto<T> {
            new(...argv: P): T;
        }
        type FuncUnion<P extends any[] = any[], T = any> = FuncBasic<P, T> | FuncClass<P, T>;
        type NoParametersFunc<R = any, T = any> = FuncBasic<[], T, R>;
        type NoReturnsFunc<P extends any[] = any[], T = any> = FuncBasic<P, T, void>;
        type Parameters<T extends FuncUnion> = T extends FuncUnion<infer P> ? P : never;
        type InstanceType<T extends Proto> = T extends Proto<infer P> ? NonAny<P> : never;
        type InstanceOwnPropertyDescriptorMap<T> = {
            readonly [K in keyof T]: NormalPropertyDescriptor<T[K]> | GetterPropertyDescriptor<T[K]>;
        };
        interface NormalPropertyDescriptor<T> extends PropertyDescriptor {
            readonly value: T;
        }
        interface GetterPropertyDescriptor<T> extends PropertyDescriptor {
            readonly get: NoParametersFunc<T>;
        }
        type PropertyDescriptorUnion<T> = NormalPropertyDescriptor<T> | GetterPropertyDescriptor<T>;
        type PropertyDescriptorReturns<T extends PropertyDescriptor> = T extends PropertyDescriptorUnion<infer P> ? P : never;
        type PropertyDescriptorMapReturns<T extends PropertyDescriptorMap> = {
            readonly [K in keyof T]: PropertyDescriptorReturns<T[K]>;
        };
        type NOOP = NoParametersFunc<void>;
        type Key = string | number;
        type Text = string | number | boolean | null | undefined;
        type PropertyExpr = string | PropertyKey[];
        type NonAny<T> = 0 extends (1 & T) ? {} : T;
        type AnyObject = Record<string, any>;
        type NilObject = Record<string, never>;
        type Result = DataResult | JsonResult | FileResult | NoneResult | NotFoundResult | RedirectResult | ForbiddenResult | UnauthorizedResult;
        type Method =
            | "GET"
            | "POST"
            | "PUT"
            | "DELETE"
            | "PATCH"
            | "OPTIONS"
            | "HEAD";
        type SameSite =
            | "Lax"
            | "Strict"
            | "None";
        type ResponseType =
            | "arraybuffer"
            | "blob"
            | "document"
            | "json"
            | "text"
            | "stream";
        interface Attributes {
            readonly key?: Key;
        }
        interface ClassAttributes<T extends Element> extends Attributes {
            readonly cmd?: DirectiveConstructor<any> | ReadonlyArray<DirectiveConstructor<any>>;
            readonly ref?: RefObject<T>;
        }
        interface ChildrenAttributes {
            readonly children?: VMElementChildren;
            readonly innerHTML?: string;
            readonly innerText?: string;
            readonly textContent?: string;
        }
        type ClassChildrenAttributes<T extends VMElementTypes> = T extends DOMSelfClosing ? {} : Nullable<ChildrenAttributes>;
        type VMElementTypes =
            | keyof HTMLElementTagNameMap
            | keyof MathMLElementTagNameMap
            | keyof SVGElementTagNameMap
            | ComponentConstructor<any>;
        type VMElementProps<T extends VMElementTypes> =
            T extends keyof HTMLElementTagNameMap ? HTMLElementProps<T> :
            T extends keyof MathMLElementTagNameMap ? MathMLElementProps<T> :
            T extends keyof SVGElementTagNameMap ? SVGElementProps<T> :
            T extends ComponentConstructor<infer P> ? P & ClassAttributes<Element> : never;
        type VMElementInstance<T extends VMElementTypes> =
            T extends keyof HTMLElementTagNameMap ? HTMLElementInstance<T> :
            T extends keyof MathMLElementTagNameMap ? MathMLElementInstance<T> :
            T extends keyof SVGElementTagNameMap ? SVGElementInstance<T> :
            T extends ComponentConstructor<any> ? Element : never;
        type VMElementChildren = VMNode | VMElementChildren[];
        type HTMLElementProps<T extends keyof HTMLElementTagNameMap> = Nullable<HTMLElementTagNameMap[T][1]>;
        type MathMLElementProps<T extends keyof MathMLElementTagNameMap> = Nullable<MathMLElementTagNameMap[T][1]>;
        type SVGElementProps<T extends keyof SVGElementTagNameMap> = Nullable<SVGElementTagNameMap[T][1]>;
        type HTMLElementInstance<T extends keyof HTMLElementTagNameMap> = HTMLElementTagNameMap[T][0];
        type MathMLElementInstance<T extends keyof MathMLElementTagNameMap> = MathMLElementTagNameMap[T][0];
        type SVGElementInstance<T extends keyof SVGElementTagNameMap> = SVGElementTagNameMap[T][0];
        type Nullable<T> = {
            [K in keyof T]?: T[K] | null;
        };
        type Writable<T> = {
            -readonly [K in keyof T]-?: T[K];
        };
        interface Event<T extends EventTarget = Hml.EventTarget> {
            readonly type: string;
            readonly bubbles: boolean;
            readonly cancelable: boolean;
            readonly composed: boolean;
            readonly defaultPrevented: boolean;
            readonly isTrusted: boolean;
            readonly eventPhase: number;
            readonly timeStamp: number;
            readonly currentTarget: T | null;
            readonly target: EventTarget | null;
            stopImmediatePropagation(): void;
            stopPropagation(): void;
            preventDefault(): void;
            cancelUpdate(): void;
        }
        interface AnimationEvent<T extends EventTarget> extends Event<T> {
            readonly animationName: string;
            readonly elapsedTime: number;
            readonly pseudoElement: string;
        }
        interface BeforeUnloadEvent<T extends EventTarget> extends Event<T> {

        }
        interface ClipboardEvent<T extends EventTarget> extends Event<T> {
            readonly clipboardData: DataTransfer | null;
        }
        interface CompositionEvent<T extends EventTarget> extends Event<T> {
            readonly data: string;
        }
        interface CustomEvent<T extends EventTarget> extends Event<T> {
            readonly detail: any;
        }
        interface DeviceMotionEvent<T extends EventTarget> extends Event<T> {
            readonly acceleration: DeviceMotionEventAcceleration | null;
            readonly accelerationIncludingGravity: DeviceMotionEventAcceleration | null;
            readonly interval: number;
            readonly rotationRate: DeviceMotionEventRotationRate | null;
        }
        interface DeviceOrientationEvent<T extends EventTarget> extends Event<T> {
            readonly absolute: boolean;
            readonly alpha: number | null;
            readonly beta: number | null;
            readonly gamma: number | null;
        }
        interface DragEvent<T extends EventTarget> extends Event<T> {
            readonly dataTransfer: DataTransfer | null;
        }
        interface ErrorEvent<T extends EventTarget> extends Event<T> {
            readonly colno: number;
            readonly error: any;
            readonly filename: string;
            readonly lineno: number;
            readonly message: string;
        }
        interface FocusEvent<T extends EventTarget> extends UIEvent<T> {
            readonly relatedTarget: EventTarget | null;
        }
        interface GamepadEvent<T extends EventTarget> extends Event<T> {
            readonly gamepad: Gamepad;
        }
        interface HashChangeEvent<T extends EventTarget> extends Event<T> {

        }
        interface InputEvent<T extends EventTarget> extends UIEvent<T> {
            readonly data: string | null;
            readonly inputType: string;
            readonly isComposing: boolean;
        }
        interface KeyboardEvent<T extends EventTarget> extends UIEvent<T> {
            readonly key: string;
            readonly code: string;
            readonly altKey: boolean;
            readonly ctrlKey: boolean;
            readonly metaKey: boolean;
            readonly shiftKey: boolean;
            readonly isComposing: boolean;
            readonly location: number;
            readonly repeat: boolean;
            getModifierState(keyArg: string): boolean;
        }
        interface MessageEvent<T extends EventTarget> extends Event<T> {
            readonly data: any;
            readonly lastEventId: string;
            readonly origin: string;
            readonly ports: ReadonlyArray<MessagePort>;
            readonly source: EventTarget | null;
        }
        interface PageTransitionEvent<T extends EventTarget> extends Event<T> {
            readonly persisted: boolean;
        }
        interface PointerEvent<T extends EventTarget> extends MouseEvent<T> {
            readonly height: number;
            readonly isPrimary: boolean;
            readonly pointerId: number;
            readonly pointerType: string;
            readonly pressure: number;
            readonly tangentialPressure: number;
            readonly tiltX: number;
            readonly tiltY: number;
            readonly twist: number;
            readonly width: number;
        }
        interface PopStateEvent<T extends EventTarget> extends Event<T> {
            readonly state: any;
        }
        interface ProgressEvent<T extends EventTarget> extends Event<T> {
            readonly lengthComputable: boolean;
            readonly loaded: number;
            readonly total: number;
        }
        interface PromiseRejectionEvent<T extends EventTarget> extends Event<T> {
            readonly reason: any;
        }
        interface SecurityPolicyViolationEvent<T extends EventTarget> extends Event<T> {
            readonly blockedURI: string;
            readonly columnNumber: number;
            readonly documentURI: string;
            readonly effectiveDirective: string;
            readonly lineNumber: number;
            readonly originalPolicy: string;
            readonly referrer: string;
            readonly sourceFile: string;
            readonly statusCode: number;
            readonly violatedDirective: string;
        }
        interface StorageEvent<T extends EventTarget> extends Event<T> {
            readonly key: string | null;
            readonly newValue: string | null;
            readonly oldValue: string | null;
            readonly storageArea: Storage | null;
            readonly url: string;
        }
        interface TouchEvent<T extends EventTarget> extends UIEvent<T> {
            readonly altKey: boolean;
            readonly changedTouches: TouchList;
            readonly ctrlKey: boolean;
            readonly metaKey: boolean;
            readonly shiftKey: boolean;
            readonly targetTouches: TouchList;
            readonly touches: TouchList;
        }
        interface TransitionEvent<T extends EventTarget> extends Event<T> {
            readonly elapsedTime: number;
            readonly propertyName: string;
            readonly pseudoElement: string;
        }
        interface WheelEvent<T extends EventTarget> extends MouseEvent<T> {
            readonly deltaMode: number;
            readonly deltaX: number;
            readonly deltaY: number;
            readonly deltaZ: number;
        }
        interface MouseEvent<T extends EventTarget> extends UIEvent<T> {
            readonly altKey: boolean;
            readonly button: number;
            readonly buttons: number;
            readonly clientX: number;
            readonly clientY: number;
            readonly ctrlKey: boolean;
            readonly metaKey: boolean;
            readonly movementX: number;
            readonly movementY: number;
            readonly offsetX: number;
            readonly offsetY: number;
            readonly pageX: number;
            readonly pageY: number;
            readonly relatedTarget: EventTarget | null;
            readonly screenX: number;
            readonly screenY: number;
            readonly shiftKey: boolean;
            readonly x: number;
            readonly y: number;
            getModifierState(keyArg: string): boolean;
        }
        interface UIEvent<T extends EventTarget> extends Event<T> {
            readonly detail: number;
            readonly view: Window | null;
        }
        type EventNames<T extends string> =
            | `on${T}`
            | `on${T}:all`
            | `on${T}:capture`
            | `on${T}:passive`;
        interface HTMLAnchorElement extends HTMLElement { }
        interface HTMLAreaElement extends HTMLElement { }
        interface HTMLAudioElement extends HTMLMediaElement { }
        interface HTMLBRElement extends HTMLElement { }
        interface HTMLBaseElement extends HTMLElement { }
        interface HTMLBodyElement extends HTMLElement { }
        interface HTMLButtonElement extends HTMLElement { }
        interface HTMLCanvasElement extends HTMLElement {
            getContext(contextId: "2d", options?: CanvasRenderingContext2DSettings): CanvasRenderingContext2D | null;
            getContext(contextId: "bitmaprenderer", options?: ImageBitmapRenderingContextSettings): ImageBitmapRenderingContext | null;
            getContext(contextId: "webgl", options?: WebGLContextAttributes): WebGLRenderingContext | null;
            getContext(contextId: "webgl2", options?: WebGLContextAttributes): WebGL2RenderingContext | null;
            getContext(contextId: string, options?: any): RenderingContext | null;
            toDataURL(type?: string, quality?: any): string;
        }
        interface HTMLDListElement extends HTMLElement { }
        interface HTMLDataElement extends HTMLElement { }
        interface HTMLDataListElement extends HTMLElement { }
        interface HTMLDetailsElement extends HTMLElement { }
        interface HTMLDialogElement extends HTMLElement { }
        interface HTMLDivElement extends HTMLElement { }
        interface HTMLEmbedElement extends HTMLElement { }
        interface HTMLFieldSetElement extends HTMLElement { }
        interface HTMLFormElement extends HTMLElement {
            reset(): void;
            submit(): void;
        }
        interface HTMLHRElement extends HTMLElement { }
        interface HTMLHeadElement extends HTMLElement { }
        interface HTMLHeadingElement extends HTMLElement { }
        interface HTMLHtmlElement extends HTMLElement { }
        interface HTMLIFrameElement extends HTMLElement { }
        interface HTMLImageElement extends HTMLElement {
            readonly complete: boolean;
            readonly currentSrc: string;
            readonly naturalHeight: number;
            readonly naturalWidth: number;
        }
        interface HTMLInputElement extends HTMLElement {
            readonly value: string;
            readonly checked: boolean;
            readonly selectionEnd: number | null;
            readonly selectionStart: number | null;
            readonly files: FileList | null;
            select(): void;
        }
        interface HTMLLIElement extends HTMLElement { }
        interface HTMLLabelElement extends HTMLElement { }
        interface HTMLLegendElement extends HTMLElement { }
        interface HTMLLinkElement extends HTMLElement { }
        interface HTMLMenuElement extends HTMLElement { }
        interface HTMLMetaElement extends HTMLElement { }
        interface HTMLMeterElement extends HTMLElement { }
        interface HTMLModElement extends HTMLElement { }
        interface HTMLOListElement extends HTMLElement { }
        interface HTMLObjectElement extends HTMLElement { }
        interface HTMLOptGroupElement extends HTMLElement { }
        interface HTMLOptionElement extends HTMLElement { }
        interface HTMLOutputElement extends HTMLElement { }
        interface HTMLParagraphElement extends HTMLElement { }
        interface HTMLParamElement extends HTMLElement { }
        interface HTMLPictureElement extends HTMLElement { }
        interface HTMLPortalElement extends HTMLElement { }
        interface HTMLPreElement extends HTMLElement { }
        interface HTMLProgressElement extends HTMLElement { }
        interface HTMLQuoteElement extends HTMLElement { }
        interface HTMLScriptElement extends HTMLElement { }
        interface HTMLSelectElement extends HTMLElement {
            readonly selectedIndex: number;
            readonly value: string;
        }
        interface HTMLSlotElement extends HTMLElement { }
        interface HTMLSourceElement extends HTMLElement { }
        interface HTMLSpanElement extends HTMLElement { }
        interface HTMLStyleElement extends HTMLElement { }
        interface HTMLTableCaptionElement extends HTMLElement { }
        interface HTMLTableCellElement extends HTMLElement { }
        interface HTMLTableColElement extends HTMLElement { }
        interface HTMLTableElement extends HTMLElement { }
        interface HTMLTableRowElement extends HTMLElement { }
        interface HTMLTableSectionElement extends HTMLElement { }
        interface HTMLTemplateElement extends HTMLElement { }
        interface HTMLTextAreaElement extends HTMLElement {
            readonly selectionEnd: number | null;
            readonly selectionStart: number | null;
            readonly value: string;
            select(): void;
        }
        interface HTMLTimeElement extends HTMLElement { }
        interface HTMLTitleElement extends HTMLElement { }
        interface HTMLTrackElement extends HTMLElement {
            readonly readyState: number;
        }
        interface HTMLUListElement extends HTMLElement { }
        interface HTMLVideoElement extends HTMLMediaElement {
            readonly videoHeight: number;
            readonly videoWidth: number;
        }
        interface HTMLMediaElement extends HTMLElement {
            readonly buffered: TimeRanges;
            readonly currentSrc: string;
            readonly duration: number;
            readonly ended: boolean;
            readonly error: MediaError | null;
            readonly networkState: number;
            readonly paused: boolean;
            readonly played: TimeRanges;
            readonly readyState: number;
            readonly seekable: TimeRanges;
            readonly seeking: boolean;
            load(): void;
            pause(): void;
            play(): Promise<void>;
        }
        interface HTMLElement extends Element { }
        interface MathMLElement extends Element { }
        interface SVGElement extends Element { }
        interface Element extends EventTarget {
            readonly tagName: string;
            readonly nodeName: string;
            readonly localName: string;
            readonly clientHeight: number;
            readonly clientLeft: number;
            readonly clientTop: number;
            readonly clientWidth: number;
            readonly scrollHeight: number;
            readonly scrollLeft: number;
            readonly scrollTop: number;
            readonly scrollWidth: number;
            readonly innerHTML: string;
            readonly outerHTML: string;
            readonly textContent: string;
            readonly isConnected: boolean;
            getBoundingClientRect(): DOMRect;
            listen<T extends keyof ElementEventMap<this>>(type: T, listener: EventListenerOrEventListenerObject<this, ElementEventMap<this>[T]>, opts?: boolean | AddEventListenerOptions): Cancelable;
            listenTo<T extends keyof WindowEventMap<Window>>(type: T, listener: EventListenerOrEventListenerObject<Window, WindowEventMap<Window>[T]>, opts?: boolean | AddEventListenerOptions): Cancelable;
            listenTo(type: string, listener: EventListenerOrEventListenerObject<Window>, opts?: boolean | AddEventListenerOptions): Cancelable;
            scrollTo(x: number, y: number, behavior?: ScrollBehavior): void;
            contains(element: Element): boolean;
        }
        interface Document extends EventTarget {
            isDefaultNamespace(namespace: string | null): boolean;
        }
        interface Window extends EventTarget {
            listen<T extends keyof WindowEventMap<this>>(type: T, listener: EventListenerOrEventListenerObject<this, WindowEventMap<this>[T]>, opts?: boolean | AddEventListenerOptions): Cancelable;
        }
        interface EventTarget {
            listen(type: string, listener: EventListenerOrEventListenerObject<this>, opts?: boolean | AddEventListenerOptions): Cancelable;
            dispatch(type: string, detail?: any, bubbles?: boolean, cancelable?: boolean): boolean;
        }
        interface EventListener<T extends EventTarget, E extends Event<T> = Event<T>> {
            (this: T, event: E): void;
        }
        interface EventListenerObject<T extends EventTarget, E extends Event<T> = Event<T>> {
            handleEvent(event: E): void;
        }
        type EventListenerOrEventListenerObject<T extends EventTarget, E extends Event<T> = Event<T>> = EventListener<T, E> | EventListenerObject<T, E>;
        interface HTMLAnchorElementAttributes<T extends HTMLAnchorElement = HTMLAnchorElement> extends HTMLElementAttributes<T> {
            readonly "download": DOMString;
            readonly "href": DOMString;
            readonly "hreflang": DOMString;
            readonly "ping": DOMString;
            readonly "referrerpolicy": DOMReferrerPolicy;
            readonly "rel": DOMRel;
            readonly "target": DOMTarget;
            readonly "type": DOMString;
        }
        interface HTMLAreaElementAttributes<T extends HTMLAreaElement = HTMLAreaElement> extends HTMLElementAttributes<T> {
            readonly "alt": DOMString;
            readonly "coords": DOMString;
            readonly "download": DOMString;
            readonly "href": DOMString;
            readonly "hreflang": DOMString;
            readonly "ping": DOMString;
            readonly "referrerpolicy": DOMReferrerPolicy;
            readonly "rel": DOMRel;
            readonly "shape": DOMShape;
            readonly "target": DOMTarget;

        }
        interface HTMLAudioElementAttributes<T extends HTMLAudioElement = HTMLAudioElement> extends HTMLMediaElementAttributes<T> {

        }
        interface HTMLBRElementAttributes<T extends HTMLBRElement = HTMLBRElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLBaseElementAttributes<T extends HTMLBaseElement = HTMLBaseElement> extends HTMLElementAttributes<T> {
            readonly "href": DOMString;
            readonly "target": DOMTarget;
        }
        interface HTMLBodyElementAttributes<T extends HTMLBodyElement = HTMLBodyElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLButtonElementAttributes<T extends HTMLButtonElement = HTMLButtonElement> extends HTMLElementAttributes<T> {
            readonly "disabled": DOMBoolean;
            readonly "form": DOMString;
            readonly "formaction": DOMString;
            readonly "formenctype": DOMEnctype;
            readonly "formmethod": DOMMethod;
            readonly "formnovalidate": DOMBoolean;
            readonly "formtarget": DOMTarget;
            readonly "name": string;
            readonly "type": DOMButtonType;
            readonly "value": DOMString;
        }
        interface HTMLCanvasElementAttributes<T extends HTMLCanvasElement = HTMLCanvasElement> extends HTMLElementAttributes<T> {
            readonly "height": DOMNumber;
            readonly "width": DOMNumber;
        }
        interface HTMLDListElementAttributes<T extends HTMLDListElement = HTMLDListElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLDataElementAttributes<T extends HTMLDataElement = HTMLDataElement> extends HTMLElementAttributes<T> {
            readonly "value": DOMString;
        }
        interface HTMLDataListElementAttributes<T extends HTMLDataListElement = HTMLDataListElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLDetailsElementAttributes<T extends HTMLDetailsElement = HTMLDetailsElement> extends HTMLElementAttributes<T> {
            readonly "open": DOMBoolean;
        }
        interface HTMLDialogElementAttributes<T extends HTMLDialogElement = HTMLDialogElement> extends HTMLElementAttributes<T> {
            readonly "open": DOMBoolean;
        }
        interface HTMLDivElementAttributes<T extends HTMLDivElement = HTMLDivElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLEmbedElementAttributes<T extends HTMLEmbedElement = HTMLEmbedElement> extends HTMLElementAttributes<T> {
            readonly "height": DOMNumber;
            readonly "src": DOMString;
            readonly "type": DOMString;
            readonly "width": DOMNumber;
        }
        interface HTMLFieldSetElementAttributes<T extends HTMLFieldSetElement = HTMLFieldSetElement> extends HTMLElementAttributes<T> {
            readonly "disabled": DOMBoolean;
            readonly "form": DOMString;
            readonly "name": DOMString;
        }
        interface HTMLFormElementAttributes<T extends HTMLFormElement = HTMLFormElement> extends HTMLElementAttributes<T> {
            readonly "accept-charset": DOMString;
            readonly "autocomplete": DOMAutoComplete;
            readonly "name": DOMString;
            readonly "rel": DOMRel;
            readonly "action": DOMString;
            readonly "enctype": DOMEnctype;
            readonly "method": DOMMethod;
            readonly "novalidate": DOMBoolean;
            readonly "target": DOMTarget;
        }
        interface HTMLHRElementAttributes<T extends HTMLHRElement = HTMLHRElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLHeadElementAttributes<T extends HTMLHeadElement = HTMLHeadElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLHeadingElementAttributes<T extends HTMLHeadingElement = HTMLHeadingElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLHtmlElementAttributes<T extends HTMLHtmlElement = HTMLHtmlElement> extends HTMLElementAttributes<T> {
            readonly "xmlns": DOMString;
        }
        interface HTMLIFrameElementAttributes<T extends HTMLIFrameElement = HTMLIFrameElement> extends HTMLElementAttributes<T> {
            readonly "allow": DOMString;
            readonly "allowfullscreen": DOMBoolean;
            readonly "allowpaymentrequest": DOMBoolean;
            readonly "csp": DOMString;
            readonly "height": DOMNumber;
            readonly "loading": DOMLoading;
            readonly "name": DOMString;
            readonly "referrerpolicy": DOMReferrerPolicy;
            readonly "sandbox": DOMSandbox;
            readonly "src": DOMString;
            readonly "srcdoc": DOMString;
            readonly "width": DOMNumber;
        }
        interface HTMLImageElementAttributes<T extends HTMLImageElement = HTMLImageElement> extends HTMLElementAttributes<T> {
            readonly "alt": DOMString;
            readonly "crossorigin": DOMCrossOrigin;
            readonly "decoding": DOMDecoding;
            readonly "height": DOMNumber;
            readonly "ismap": DOMBoolean;
            readonly "loading": DOMLoading;
            readonly "referrerpolicy": DOMReferrerPolicy;
            readonly "sizes": DOMString;
            readonly "src": DOMString;
            readonly "srcset": DOMString;
            readonly "width": DOMNumber;
            readonly "usemap": DOMString;
        }
        interface HTMLInputElementAttributes<T extends HTMLInputElement = HTMLInputElement> extends HTMLElementAttributes<T> {
            readonly "accept": DOMString;
            readonly "alt": DOMString;
            readonly "autocomplete": DOMAutoComplete;
            readonly "capture": DOMString;
            readonly "checked": DOMBoolean;
            readonly "dirname": DOMString;
            readonly "disabled": DOMBoolean;
            readonly "form": DOMString;
            readonly "formaction": DOMString;
            readonly "formenctype": DOMEnctype;
            readonly "formmethod": DOMMethod;
            readonly "formnovalidate": DOMBoolean;
            readonly "formtarget": DOMString;
            readonly "height": DOMNumber;
            readonly "id": DOMString;
            readonly "inputmode": DOMInputMode;
            readonly "list": DOMString;
            readonly "max": DOMNumber;
            readonly "maxlength": DOMNumber;
            readonly "min": DOMNumber;
            readonly "minlength": DOMNumber;
            readonly "multiple": DOMBoolean;
            readonly "name": DOMString;
            readonly "pattern": DOMString;
            readonly "placeholder": DOMString;
            readonly "readonly": DOMBoolean;
            readonly "required": DOMBoolean;
            readonly "size": DOMNumber;
            readonly "src": DOMString;
            readonly "step": DOMNumber;
            readonly "type": DOMInputType;
            readonly "value": DOMString;
            readonly "width": DOMNumber;
        }
        interface HTMLLIElementAttributes<T extends HTMLLIElement = HTMLLIElement> extends HTMLElementAttributes<T> {
            readonly "value": DOMNumber;
        }
        interface HTMLLabelElementAttributes<T extends HTMLLabelElement = HTMLLabelElement> extends HTMLElementAttributes<T> {
            readonly "for": DOMString;
        }
        interface HTMLLegendElementAttributes<T extends HTMLLegendElement = HTMLLegendElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLLinkElementAttributes<T extends HTMLLinkElement = HTMLLinkElement> extends HTMLElementAttributes<T> {
            readonly "as": DOMAs;
            readonly "crossorigin": DOMCrossOrigin;
            readonly "disabled": DOMBoolean;
            readonly "href": DOMString;
            readonly "hreflang": DOMString;
            readonly "imagesizes": DOMString;
            readonly "imagesrcset": DOMString;
            readonly "integrity": DOMString;
            readonly "media": DOMMedia;
            readonly "prefetch": DOMString;
            readonly "referrerpolicy": DOMReferrerPolicy;
            readonly "rel": DOMRel;
            readonly "sizes": DOMString;
            readonly "title": DOMString;
            readonly "type": DOMString;
        }
        interface HTMLMenuElementAttributes<T extends HTMLMenuElement = HTMLMenuElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLMetaElementAttributes<T extends HTMLMetaElement = HTMLMetaElement> extends HTMLElementAttributes<T> {
            readonly "charset": DOMString;
            readonly "content": DOMString;
            readonly "http-equiv": DOMHttpEquiv;
            readonly "name": DOMString;
        }
        interface HTMLMeterElementAttributes<T extends HTMLMeterElement = HTMLMeterElement> extends HTMLElementAttributes<T> {
            readonly "value": DOMNumber;
            readonly "min": DOMNumber;
            readonly "max": DOMNumber;
            readonly "low": DOMNumber;
            readonly "high": DOMNumber;
            readonly "optimum": DOMNumber;
            readonly "form": DOMString;
        }
        interface HTMLModElementAttributes<T extends HTMLModElement = HTMLModElement> extends HTMLElementAttributes<T> {
            readonly "cite": DOMString;
            readonly "datetime": DOMString;
        }
        interface HTMLOListElementAttributes<T extends HTMLOListElement = HTMLOListElement> extends HTMLElementAttributes<T> {
            readonly "reversed": DOMBoolean;
            readonly "start": DOMNumber;
            readonly "type": DOMOListType;
        }
        interface HTMLObjectElementAttributes<T extends HTMLObjectElement = HTMLObjectElement> extends HTMLElementAttributes<T> {
            readonly "data": DOMString;
            readonly "form": DOMString;
            readonly "height": DOMNumber;
            readonly "name": DOMString;
            readonly "type": DOMString;
            readonly "usemap": DOMString;
            readonly "width": DOMNumber;
        }
        interface HTMLOptGroupElementAttributes<T extends HTMLOptGroupElement = HTMLOptGroupElement> extends HTMLElementAttributes<T> {
            readonly "disabled": DOMBoolean;
            readonly "label": DOMString;
        }
        interface HTMLOptionElementAttributes<T extends HTMLOptionElement = HTMLOptionElement> extends HTMLElementAttributes<T> {
            readonly "disabled": DOMBoolean;
            readonly "label": DOMString;
            readonly "selected": DOMBoolean;
            readonly "value": DOMString;
        }
        interface HTMLOutputElementAttributes<T extends HTMLOutputElement = HTMLOutputElement> extends HTMLElementAttributes<T> {
            readonly "for": DOMString;
            readonly "form": DOMString;
            readonly "name": DOMString;
        }
        interface HTMLParagraphElementAttributes<T extends HTMLParagraphElement = HTMLParagraphElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLParamElementAttributes<T extends HTMLParamElement = HTMLParamElement> extends HTMLElementAttributes<T> {
            readonly "name": DOMString;
            readonly "value": DOMString;
        }
        interface HTMLPictureElementAttributes<T extends HTMLPictureElement = HTMLPictureElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLPortalElementAttributes<T extends HTMLPortalElement = HTMLPortalElement> extends HTMLElementAttributes<T> {
            readonly "referrerpolicy": DOMReferrerPolicy;
            readonly "src": DOMString;
        }
        interface HTMLPreElementAttributes<T extends HTMLPreElement = HTMLPreElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLProgressElementAttributes<T extends HTMLProgressElement = HTMLProgressElement> extends HTMLElementAttributes<T> {
            readonly "max": DOMNumber;
            readonly "value": DOMNumber;
        }
        interface HTMLQuoteElementAttributes<T extends HTMLQuoteElement = HTMLQuoteElement> extends HTMLElementAttributes<T> {
            readonly "cite": DOMString;
        }
        interface HTMLScriptElementAttributes<T extends HTMLScriptElement = HTMLScriptElement> extends HTMLElementAttributes<T> {
            readonly "async": DOMBoolean;
            readonly "crossorigin": DOMCrossOrigin;
            readonly "defer": DOMBoolean;
            readonly "integrity": DOMString;
            readonly "nomodule": DOMBoolean;
            readonly "nonce": DOMString;
            readonly "referrerpolicy": DOMReferrerPolicy;
            readonly "src": DOMString;
            readonly "type": DOMScriptType;
        }
        interface HTMLSelectElementAttributes<T extends HTMLSelectElement = HTMLSelectElement> extends HTMLElementAttributes<T> {
            readonly "autocomplete": DOMAutoComplete;
            readonly "disabled": DOMBoolean;
            readonly "form": DOMString;
            readonly "multiple": DOMBoolean;
            readonly "name": DOMString;
            readonly "required": DOMBoolean;
            readonly "size": DOMNumber;
        }
        interface HTMLSlotElementAttributes<T extends HTMLSlotElement = HTMLSlotElement> extends HTMLElementAttributes<T> {
            readonly "name": DOMString;
        }
        interface HTMLSourceElementAttributes<T extends HTMLSourceElement = HTMLSourceElement> extends HTMLElementAttributes<T> {
            readonly "media": DOMString;
            readonly "sizes": DOMString;
            readonly "src": DOMString;
            readonly "srcset": DOMString;
            readonly "type": DOMString;
        }
        interface HTMLSpanElementAttributes<T extends HTMLSpanElement = HTMLSpanElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLStyleElementAttributes<T extends HTMLStyleElement = HTMLStyleElement> extends HTMLElementAttributes<T> {
            readonly "type": DOMString;
            readonly "media": DOMString;
            readonly "nonce": DOMString;
            readonly "title": DOMString;
        }
        interface HTMLTableCaptionElementAttributes<T extends HTMLTableCaptionElement = HTMLTableCaptionElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLTableCellElementAttributes<T extends HTMLTableCellElement = HTMLTableCellElement> extends HTMLElementAttributes<T> {
            readonly "colspan": DOMNumber;
            readonly "headers": DOMString;
            readonly "rowspan": DOMNumber;
        }
        interface HTMLTableColElementAttributes<T extends HTMLTableColElement = HTMLTableColElement> extends HTMLElementAttributes<T> {
            readonly "span": DOMNumber;
        }
        interface HTMLTableElementAttributes<T extends HTMLTableElement = HTMLTableElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLTableRowElementAttributes<T extends HTMLTableRowElement = HTMLTableRowElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLTableSectionElementAttributes<T extends HTMLTableSectionElement = HTMLTableSectionElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLTemplateElementAttributes<T extends HTMLTemplateElement = HTMLTemplateElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLTextAreaElementAttributes<T extends HTMLTextAreaElement = HTMLTextAreaElement> extends HTMLElementAttributes<T> {
            readonly "autocomplete": DOMAutoComplete;
            readonly "cols": DOMNumber;
            readonly "disabled": DOMBoolean;
            readonly "form": DOMString;
            readonly "maxlength": DOMNumber;
            readonly "minlength": DOMNumber;
            readonly "name": DOMString;
            readonly "placeholder": DOMString;
            readonly "readonly": DOMBoolean;
            readonly "required": DOMBoolean;
            readonly "rows": DOMNumber;
            readonly "spellcheck": DOMBooleanString;
            readonly "wrap": DOMWrap;
        }
        interface HTMLTimeElementAttributes<T extends HTMLTimeElement = HTMLTimeElement> extends HTMLElementAttributes<T> {
            readonly "datetime": DOMString;
        }
        interface HTMLTitleElementAttributes<T extends HTMLTitleElement = HTMLTitleElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLTrackElementAttributes<T extends HTMLTrackElement = HTMLTrackElement> extends HTMLElementAttributes<T> {
            readonly "default": DOMBoolean;
            readonly "kind": DOMKind;
            readonly "label": DOMString;
            readonly "src": DOMString;
            readonly "srclang": DOMString;
        }
        interface HTMLUListElementAttributes<T extends HTMLUListElement = HTMLUListElement> extends HTMLElementAttributes<T> {

        }
        interface HTMLVideoElementAttributes<T extends HTMLVideoElement = HTMLVideoElement> extends HTMLMediaElementAttributes<T> {
            readonly "autopictureinpicture": DOMBoolean;
            readonly "controlslist": DOMControlsList;
            readonly "disablepictureinpicture": DOMBoolean;
            readonly "playsinline": DOMBoolean;
            readonly "poster": DOMString;
            readonly "height": DOMNumber;
            readonly "width": DOMNumber;
        }
        interface HTMLMediaElementAttributes<T extends HTMLMediaElement = HTMLMediaElement> extends HTMLElementAttributes<T> {
            readonly "autoplay": DOMBoolean;
            readonly "controls": DOMBoolean;
            readonly "crossorigin": DOMCrossOrigin;
            readonly "disableremoteplayback": DOMBoolean;
            readonly "loop": DOMBoolean;
            readonly "muted": DOMBoolean;
            readonly "preload": DOMPreload;
            readonly "src": DOMString;
        }
        interface HTMLElementAttributes<T extends HTMLElement = HTMLElement> extends ElementAttributes<T> {
            readonly "accesskey": DOMString;
            readonly "autocapitalize": DOMAutoCapitalize;
            readonly "autofocus": DOMBoolean;
            readonly "class": AnyObject | DOMString;
            readonly "contenteditable": DOMBooleanString;
            readonly "dir": DOMDir;
            readonly "draggable": DOMBooleanString;
            readonly "enterkeyhint": DOMString;
            readonly "exportparts": DOMString;
            readonly "hidden": DOMBoolean;
            readonly "lang": DOMString;
            readonly "id": DOMString;
            readonly "inputmode": DOMInputMode;
            readonly "is": DOMString;
            readonly "itemid": DOMString;
            readonly "itemprop": DOMString;
            readonly "itemref": DOMString;
            readonly "itemscope": DOMString;
            readonly "itemtype": DOMString;
            readonly "nonce": DOMString;
            readonly "part": DOMString;
            readonly "slot": DOMString;
            readonly "spellcheck": DOMBooleanString;
            readonly "style": DOMString | Nullable<CSSStyleDeclaration>;
            readonly "title": DOMString;
            readonly "translate": DOMTranslate;
            readonly "tabindex": DOMNumber;
        }
        interface MathMLElementAttributes<T extends MathMLElement = MathMLElement> extends ElementAttributes<T> {
            readonly "accent": DOMString;
            readonly "accentunder": DOMString;
            readonly "actiontype": DOMString;
            readonly "altimg": DOMString;
            readonly "altimg-height": DOMString;
            readonly "altimg-valign": DOMString;
            readonly "altimg-width": DOMString;
            readonly "alttext": DOMString;
            readonly "charalign": DOMString;
            readonly "close": DOMString;
            readonly "columnalign": DOMString;
            readonly "columnlines": DOMString;
            readonly "columnspacing": DOMString;
            readonly "columnspan": DOMString;
            readonly "crossout": DOMString;
            readonly "depth": DOMString;
            readonly "dir": DOMString;
            readonly "display": DOMString;
            readonly "displaystyle": DOMString;
            readonly "edge": DOMString;
            readonly "fence": DOMString;
            readonly "frame": DOMString;
            readonly "framespacing": DOMString;
            readonly "groupalign": DOMString;
            readonly "height": DOMString;
            readonly "href": DOMString;
            readonly "id": DOMString;
            readonly "indentalign": DOMString;
            readonly "indentalignfirst": DOMString;
            readonly "indentalignlast": DOMString;
            readonly "indentshift": DOMString;
            readonly "indentshiftfirst": DOMString;
            readonly "indentshiftlast": DOMString;
            readonly "indenttarget": DOMString;
            readonly "infixlinebreakstyle": DOMString;
            readonly "length": DOMString;
            readonly "linebreak": DOMString;
            readonly "linebreakmultchar": DOMString;
            readonly "linebreakstyle": DOMString;
            readonly "lineleading": DOMString;
            readonly "linethickness": DOMString;
            readonly "location": DOMString;
            readonly "longdivstyle": DOMString;
            readonly "lquote": DOMString;
            readonly "lspace": DOMString;
            readonly "mathbackground": DOMString;
            readonly "mathcolor": DOMString;
            readonly "mathsize": DOMString;
            readonly "mathvariant": DOMString;
            readonly "maxsize": DOMString;
            readonly "minsize": DOMString;
            readonly "movablelimits": DOMString;
            readonly "notation": DOMString;
            readonly "open": DOMString;
            readonly "position": DOMString;
            readonly "rowalign": DOMString;
            readonly "rowlines": DOMString;
            readonly "rowspacing": DOMString;
            readonly "rowspan": DOMString;
            readonly "rquote": DOMString;
            readonly "rspace": DOMString;
            readonly "scriptlevel": DOMString;
            readonly "scriptminsize": DOMString;
            readonly "scriptsizemultiplier": DOMString;
            readonly "selection": DOMString;
            readonly "separator": DOMString;
            readonly "separators": DOMString;
            readonly "shift": DOMString;
            readonly "stackalign": DOMString;
            readonly "stretchy": DOMString;
            readonly "symmetric": DOMString;
            readonly "voffset": DOMString;
            readonly "width": DOMString;
            readonly "xmlns": DOMString;
            readonly [k: string]: any;
        }
        interface SVGElementAttributes<T extends SVGElement = SVGElement> extends ElementAttributes<T> {
            readonly "accent-height": DOMString;
            readonly "accumulate": DOMString;
            readonly "additive": DOMString;
            readonly "alignment-baseline": DOMString;
            readonly "alphabetic": DOMString;
            readonly "amplitude": DOMString;
            readonly "arabic-form": DOMString;
            readonly "ascent": DOMString;
            readonly "attributeName": DOMString;
            readonly "attributeType": DOMString;
            readonly "azimuth": DOMString;
            readonly "baseFrequency": DOMString;
            readonly "baseProfile": DOMString;
            readonly "baseline-shift": DOMString;
            readonly "bbox": DOMString;
            readonly "begin": DOMString;
            readonly "bias": DOMString;
            readonly "by": DOMString;
            readonly "calcMode": DOMString;
            readonly "cap-height": DOMString;
            readonly "class": DOMString;
            readonly "clip": DOMString;
            readonly "clip-path": DOMString;
            readonly "clip-rule": DOMString;
            readonly "clipPathUnits": DOMString;
            readonly "color": DOMString;
            readonly "color-interpolation": DOMString;
            readonly "color-interpolation-filters": DOMString;
            readonly "color-profile": DOMString;
            readonly "color-rendering": DOMString;
            readonly "contentScriptType": DOMString;
            readonly "contentStyleType": DOMString;
            readonly "crossorigin": DOMString;
            readonly "cursor": DOMString;
            readonly "cx": DOMString;
            readonly "cy": DOMString;
            readonly "d": DOMString;
            readonly "decelerate": DOMString;
            readonly "descent": DOMString;
            readonly "diffuseConstant": DOMString;
            readonly "direction": DOMString;
            readonly "display": DOMString;
            readonly "divisor": DOMString;
            readonly "dominant-baseline": DOMString;
            readonly "dur": DOMString;
            readonly "dx": DOMString;
            readonly "dy": DOMString;
            readonly "edgeMode": DOMString;
            readonly "elevation": DOMString;
            readonly "enable-background": DOMString;
            readonly "end": DOMString;
            readonly "exponent": DOMString;
            readonly "fill": DOMString;
            readonly "fill-opacity": DOMString;
            readonly "fill-rule": DOMString;
            readonly "filter": DOMString;
            readonly "filterRes": DOMString;
            readonly "filterUnits": DOMString;
            readonly "flood-color": DOMString;
            readonly "flood-opacity": DOMString;
            readonly "font-family": DOMString;
            readonly "font-size": DOMString;
            readonly "font-size-adjust": DOMString;
            readonly "font-stretch": DOMString;
            readonly "font-style": DOMString;
            readonly "font-variant": DOMString;
            readonly "font-weight": DOMString;
            readonly "format": DOMString;
            readonly "fr": DOMString;
            readonly "from": DOMString;
            readonly "fx": DOMString;
            readonly "fy": DOMString;
            readonly "g1": DOMString;
            readonly "g2": DOMString;
            readonly "glyph-name": DOMString;
            readonly "glyph-orientation-horizontal": DOMString;
            readonly "glyph-orientation-vertical": DOMString;
            readonly "glyphRef": DOMString;
            readonly "gradientTransform": DOMString;
            readonly "gradientUnits": DOMString;
            readonly "hanging": DOMString;
            readonly "height": DOMString;
            readonly "horiz-adv-x": DOMString;
            readonly "horiz-origin-x": DOMString;
            readonly "href": DOMString;
            readonly "hreflang": DOMString;
            readonly "id": DOMString;
            readonly "ideographic": DOMString;
            readonly "image-rendering": DOMString;
            readonly "in": DOMString;
            readonly "in2": DOMString;
            readonly "intercept": DOMString;
            readonly "k": DOMString;
            readonly "k1": DOMString;
            readonly "k2": DOMString;
            readonly "k3": DOMString;
            readonly "k4": DOMString;
            readonly "kernelMatrix": DOMString;
            readonly "kernelUnitLength": DOMString;
            readonly "kerning": DOMString;
            readonly "keyPoints": DOMString;
            readonly "keySplines": DOMString;
            readonly "keyTimes": DOMString;
            readonly "lang": DOMString;
            readonly "lengthAdjust": DOMString;
            readonly "letter-spacing": DOMString;
            readonly "lighting-color": DOMString;
            readonly "limitingConeAngle": DOMString;
            readonly "local": DOMString;
            readonly "marker-end": DOMString;
            readonly "marker-mid": DOMString;
            readonly "marker-start": DOMString;
            readonly "markerHeight": DOMString;
            readonly "markerUnits": DOMString;
            readonly "markerWidth": DOMString;
            readonly "mask": DOMString;
            readonly "maskContentUnits": DOMString;
            readonly "maskUnits": DOMString;
            readonly "mathematical": DOMString;
            readonly "max": DOMString;
            readonly "media": DOMString;
            readonly "method": DOMString;
            readonly "min": DOMString;
            readonly "mode": DOMString;
            readonly "name": DOMString;
            readonly "numOctaves": DOMString;
            readonly "offset": DOMString;
            readonly "opacity": DOMString;
            readonly "operator": DOMString;
            readonly "order": DOMString;
            readonly "orient": DOMString;
            readonly "orientation": DOMString;
            readonly "origin": DOMString;
            readonly "overflow": DOMString;
            readonly "overline-position": DOMString;
            readonly "overline-thickness": DOMString;
            readonly "paint-order": DOMString;
            readonly "panose-1": DOMString;
            readonly "path": DOMString;
            readonly "pathLength": DOMString;
            readonly "patternContentUnits": DOMString;
            readonly "patternTransform": DOMString;
            readonly "patternUnits": DOMString;
            readonly "ping": DOMString;
            readonly "pointer-events": DOMString;
            readonly "points": DOMString;
            readonly "pointsAtX": DOMString;
            readonly "pointsAtY": DOMString;
            readonly "pointsAtZ": DOMString;
            readonly "preserveAlpha": DOMString;
            readonly "preserveAspectRatio": DOMString;
            readonly "primitiveUnits": DOMString;
            readonly "r": DOMString;
            readonly "radius": DOMString;
            readonly "refX": DOMString;
            readonly "refY": DOMString;
            readonly "referrerPolicy": DOMString;
            readonly "rel": DOMString;
            readonly "rendering-intent": DOMString;
            readonly "repeatCount": DOMString;
            readonly "repeatDur": DOMString;
            readonly "requiredExtensions": DOMString;
            readonly "requiredFeatures": DOMString;
            readonly "restart": DOMString;
            readonly "result": DOMString;
            readonly "rotate": DOMString;
            readonly "rx": DOMString;
            readonly "ry": DOMString;
            readonly "scale": DOMString;
            readonly "seed": DOMString;
            readonly "shape-rendering": DOMString;
            readonly "slope": DOMString;
            readonly "spacing": DOMString;
            readonly "specularConstant": DOMString;
            readonly "specularExponent": DOMString;
            readonly "speed": DOMString;
            readonly "spreadMethod": DOMString;
            readonly "startOffset": DOMString;
            readonly "stdDeviation": DOMString;
            readonly "stemh": DOMString;
            readonly "stemv": DOMString;
            readonly "stitchTiles": DOMString;
            readonly "stop-color": DOMString;
            readonly "stop-opacity": DOMString;
            readonly "strikethrough-position": DOMString;
            readonly "strikethrough-thickness": DOMString;
            readonly "string": DOMString;
            readonly "stroke": DOMString;
            readonly "stroke-dasharray": DOMString;
            readonly "stroke-dashoffset": DOMString;
            readonly "stroke-linecap": DOMString;
            readonly "stroke-linejoin": DOMString;
            readonly "stroke-miterlimit": DOMString;
            readonly "stroke-opacity": DOMString;
            readonly "stroke-width": DOMString;
            readonly "style": DOMString;
            readonly "surfaceScale": DOMString;
            readonly "systemLanguage": DOMString;
            readonly "tabindex": DOMString;
            readonly "tableValues": DOMString;
            readonly "target": DOMString;
            readonly "targetX": DOMString;
            readonly "targetY": DOMString;
            readonly "text-anchor": DOMString;
            readonly "text-decoration": DOMString;
            readonly "text-rendering": DOMString;
            readonly "textLength": DOMString;
            readonly "to": DOMString;
            readonly "transform": DOMString;
            readonly "transform-origin": DOMString;
            readonly "type": DOMString;
            readonly "u1": DOMString;
            readonly "u2": DOMString;
            readonly "underline-position": DOMString;
            readonly "underline-thickness": DOMString;
            readonly "unicode": DOMString;
            readonly "unicode-bidi": DOMString;
            readonly "unicode-range": DOMString;
            readonly "units-per-em": DOMString;
            readonly "v-alphabetic": DOMString;
            readonly "v-hanging": DOMString;
            readonly "v-ideographic": DOMString;
            readonly "v-mathematical": DOMString;
            readonly "values": DOMString;
            readonly "vector-effect": DOMString;
            readonly "version": DOMString;
            readonly "vert-adv-y": DOMString;
            readonly "vert-origin-x": DOMString;
            readonly "vert-origin-y": DOMString;
            readonly "viewBox": DOMString;
            readonly "viewTarget": DOMString;
            readonly "visibility": DOMString;
            readonly "width": DOMString;
            readonly "widths": DOMString;
            readonly "word-spacing": DOMString;
            readonly "writing-mode": DOMString;
            readonly "x": DOMString;
            readonly "x-height": DOMString;
            readonly "x1": DOMString;
            readonly "x2": DOMString;
            readonly "xChannelSelector": DOMString;
            readonly "xlink:actuate": DOMString;
            readonly "xlink:arcrole": DOMString;
            readonly "xlink:href": DOMString;
            readonly "xlink:role": DOMString;
            readonly "xlink:show": DOMString;
            readonly "xlink:title": DOMString;
            readonly "xlink:type": DOMString;
            readonly "xml:base": DOMString;
            readonly "xml:lang": DOMString;
            readonly "xml:space": DOMString;
            readonly "xmlns": DOMString;
            readonly "y": DOMString;
            readonly "y1": DOMString;
            readonly "y2": DOMString;
            readonly "yChannelSelector": DOMString;
            readonly "z": DOMString;
            readonly "zoomAndPan": DOMString;
            readonly [k: string]: any;
        }
        interface ElementAttributes<T extends Element = Element> extends ClassAttributes<T>, ElementEventAttributes<T>, ElementAriaAttributes {

        }
        type ElementEventAttributes<T extends Element = Element> = {
            readonly [K in ElementEventNames<T, keyof ElementEventMap<T>>]: K extends ElementEventNames<T, infer P> ? EventListenerOrEventListenerObject<T, ElementEventMap<T>[P]> : never;
        };
        type ElementEventNames<T extends Element, P extends keyof ElementEventMap<T>> = EventNames<P>;
        interface ElementAriaAttributes {
            readonly "aria-atomic": DOMBoolean;
            readonly "aria-autocomplete": "none" | "inline" | "list" | "both";
            readonly "aria-busy": DOMBoolean;
            readonly "aria-checked": DOMBoolean | "mixed";
            readonly "aria-colcount": DOMNumber;
            readonly "aria-colindex": DOMNumber;
            readonly "aria-colspan": DOMNumber;
            readonly "aria-current": DOMBoolean | "page" | "step" | "location" | "date" | "time";
            readonly "aria-description": DOMString;
            readonly "aria-disabled": DOMBoolean;
            readonly "aria-expanded": DOMBoolean;
            readonly "aria-haspopup": DOMBoolean | "menu" | "listbox" | "tree" | "grid" | "dialog";
            readonly "aria-hidden": DOMBoolean;
            readonly "aria-keyshortcuts": DOMString;
            readonly "aria-label": DOMString;
            readonly "aria-level": DOMNumber;
            readonly "aria-live": "off" | "assertive" | "polite";
            readonly "aria-modal": DOMBoolean;
            readonly "aria-multiline": DOMBoolean;
            readonly "aria-multiselectable": DOMBoolean;
            readonly "aria-orientation": "horizontal" | "vertical";
            readonly "aria-placeholder": DOMString;
            readonly "aria-posinset": DOMNumber;
            readonly "aria-pressed": DOMBoolean | "mixed";
            readonly "aria-readonly": DOMBoolean;
            readonly "aria-relevant": "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals";
            readonly "aria-required": DOMBoolean;
            readonly "aria-roledescription": DOMString;
            readonly "aria-rowcount": DOMNumber;
            readonly "aria-rowindex": DOMNumber;
            readonly "aria-rowspan": DOMNumber;
            readonly "aria-selected": DOMBoolean;
            readonly "aria-setsize": DOMNumber;
            readonly "aria-sort": "none" | "ascending" | "descending" | "other";
            readonly "aria-valuemax": DOMNumber;
            readonly "aria-valuemin": DOMNumber;
            readonly "aria-valuenow": DOMNumber;
            readonly "aria-valuetext": DOMString;
            readonly "role": DOMRole;
        }
        interface CSSStyleDeclaration {
            readonly "alignContent": string;
            readonly "alignItems": string;
            readonly "alignSelf": string;
            readonly "all": string;
            readonly "animation": string;
            readonly "animationDelay": string;
            readonly "animationDirection": string;
            readonly "animationDuration": string;
            readonly "animationFillMode": string;
            readonly "animationIterationCount": string;
            readonly "animationName": string;
            readonly "animationPlayState": string;
            readonly "animationTimingFunction": string;
            readonly "backfaceVisibility": string;
            readonly "background": string;
            readonly "backgroundAttachment": string;
            readonly "backgroundBlendMode": string;
            readonly "backgroundClip": string;
            readonly "backgroundColor": string;
            readonly "backgroundImage": string;
            readonly "backgroundOrigin": string;
            readonly "backgroundPosition": string;
            readonly "backgroundRepeat": string;
            readonly "backgroundSize": string;
            readonly "border": string;
            readonly "borderBottom": string;
            readonly "borderBottomColor": string;
            readonly "borderBottomLeftRadius": string;
            readonly "borderBottomRightRadius": string;
            readonly "borderBottomStyle": string;
            readonly "borderBottomWidth": string;
            readonly "borderCollapse": string;
            readonly "borderColor": string;
            readonly "borderImage": string;
            readonly "borderImageOutset": string;
            readonly "borderImageRepeat": string;
            readonly "borderImageSlice": string;
            readonly "borderImageSource": string;
            readonly "borderImageWidth": string;
            readonly "borderLeft": string;
            readonly "borderLeftColor": string;
            readonly "borderLeftStyle": string;
            readonly "borderLeftWidth": string;
            readonly "borderRadius": string;
            readonly "borderRight": string;
            readonly "borderRightColor": string;
            readonly "borderRightStyle": string;
            readonly "borderRightWidth": string;
            readonly "borderSpacing": string;
            readonly "borderStyle": string;
            readonly "borderTop": string;
            readonly "borderTopColor": string;
            readonly "borderTopLeftRadius": string;
            readonly "borderTopRightRadius": string;
            readonly "borderTopStyle": string;
            readonly "borderTopWidth": string;
            readonly "borderWidth": string;
            readonly "bottom": string;
            readonly "boxDecorationBreak": string;
            readonly "boxShadow": string;
            readonly "boxSizing": string;
            readonly "breakAfter": string;
            readonly "breakBefore": string;
            readonly "breakInside": string;
            readonly "captionSide": string;
            readonly "caretColor": string;
            readonly "clear": string;
            readonly "clip": string;
            readonly "clipPath": string;
            readonly "color": string;
            readonly "columnCount": string;
            readonly "columnFill": string;
            readonly "columnGap": string;
            readonly "columnRule": string;
            readonly "columnRuleColor": string;
            readonly "columnRuleStyle": string;
            readonly "columnRuleWidth": string;
            readonly "columnSpan": string;
            readonly "columnWidth": string;
            readonly "columns": string;
            readonly "content": string;
            readonly "counterIncrement": string;
            readonly "counterReset": string;
            readonly "cursor": string;
            readonly "direction": string;
            readonly "display": string;
            readonly "emptyCells": string;
            readonly "filter": string;
            readonly "flex": string;
            readonly "flexBasis": string;
            readonly "flexDirection": string;
            readonly "flexFlow": string;
            readonly "flexGrow": string;
            readonly "flexShrink": string;
            readonly "flexWrap": string;
            readonly "float": string;
            readonly "font": string;
            readonly "fontFamily": string;
            readonly "fontFeatureSettings": string;
            readonly "fontKerning": string;
            readonly "fontSize": string;
            readonly "fontSizeAdjust": string;
            readonly "fontStretch": string;
            readonly "fontStyle": string;
            readonly "fontVariant": string;
            readonly "fontVariantCaps": string;
            readonly "fontWeight": string;
            readonly "grid": string;
            readonly "gridArea": string;
            readonly "gridAutoColumns": string;
            readonly "gridAutoFlow": string;
            readonly "gridAutoRows": string;
            readonly "gridColumn": string;
            readonly "gridColumnEnd": string;
            readonly "gridColumnGap": string;
            readonly "gridColumnStart": string;
            readonly "gridGap": string;
            readonly "gridRow": string;
            readonly "gridRowEnd": string;
            readonly "gridRowGap": string;
            readonly "gridRowStart": string;
            readonly "gridTemplate": string;
            readonly "gridTemplateAreas": string;
            readonly "gridTemplateColumns": string;
            readonly "gridTemplateRows": string;
            readonly "hangingPunctuation": string;
            readonly "height": string;
            readonly "hyphens": string;
            readonly "isolation": string;
            readonly "justifyContent": string;
            readonly "left": string;
            readonly "letterSpacing": string;
            readonly "lineHeight": string;
            readonly "listStyle": string;
            readonly "listStyleImage": string;
            readonly "listStylePosition": string;
            readonly "listStyleType": string;
            readonly "margin": string;
            readonly "marginBottom": string;
            readonly "marginLeft": string;
            readonly "marginRight": string;
            readonly "marginTop": string;
            readonly "maxHeight": string;
            readonly "maxWidth": string;
            readonly "minHeight": string;
            readonly "minWidth": string;
            readonly "mixBlendMode": string;
            readonly "objectFit": string;
            readonly "objectPosition": string;
            readonly "opacity": string;
            readonly "order": string;
            readonly "outline": string;
            readonly "outlineColor": string;
            readonly "outlineOffset": string;
            readonly "outlineStyle": string;
            readonly "outlineWidth": string;
            readonly "overflow": string;
            readonly "overflowX": string;
            readonly "overflowY": string;
            readonly "padding": string;
            readonly "paddingBottom": string;
            readonly "paddingLeft": string;
            readonly "paddingRight": string;
            readonly "paddingTop": string;
            readonly "pageBreakAfter": string;
            readonly "pageBreakBefore": string;
            readonly "pageBreakInside": string;
            readonly "perspective": string;
            readonly "perspectiveOrigin": string;
            readonly "pointerEvents": string;
            readonly "position": string;
            readonly "quotes": string;
            readonly "resize": string;
            readonly "right": string;
            readonly "scrollBehavior": string;
            readonly "tabSize": string;
            readonly "tableLayout": string;
            readonly "textAlign": string;
            readonly "textAlignLast": string;
            readonly "textDecoration": string;
            readonly "textDecorationColor": string;
            readonly "textDecorationLine": string;
            readonly "textDecorationStyle": string;
            readonly "textIndent": string;
            readonly "textJustify": string;
            readonly "textOverflow": string;
            readonly "textShadow": string;
            readonly "textTransform": string;
            readonly "top": string;
            readonly "transform": string;
            readonly "transformOrigin": string;
            readonly "transformStyle": string;
            readonly "transition": string;
            readonly "transitionDelay": string;
            readonly "transitionDuration": string;
            readonly "transitionProperty": string;
            readonly "transitionTimingFunction": string;
            readonly "unicodeBidi": string;
            readonly "userSelect": string;
            readonly "verticalAlign": string;
            readonly "visibility": string;
            readonly "whiteSpace": string;
            readonly "width": string;
            readonly "wordBreak": string;
            readonly "wordSpacing": string;
            readonly "wordWrap": string;
            readonly "writingMode": string;
            readonly "zIndex": string;
        }
        interface WindowEventMap<T extends Window> extends GlobalEventHandlersEventMap<T>, WindowEventHandlersEventMap<T> {
            readonly "abort": UIEvent<T>;
            readonly "afterprint": Event<T>;
            readonly "beforeprint": Event<T>;
            readonly "beforeunload": BeforeUnloadEvent<T>;
            readonly "blur": FocusEvent<T>;
            readonly "canplay": Event<T>;
            readonly "canplaythrough": Event<T>;
            readonly "change": Event<T>;
            readonly "click": MouseEvent<T>;
            readonly "compassneedscalibration": Event<T>;
            readonly "contextmenu": MouseEvent<T>;
            readonly "dblclick": MouseEvent<T>;
            readonly "devicemotion": DeviceMotionEvent<T>;
            readonly "deviceorientation": DeviceOrientationEvent<T>;
            readonly "deviceorientationabsolute": DeviceOrientationEvent<T>;
            readonly "drag": DragEvent<T>;
            readonly "dragend": DragEvent<T>;
            readonly "dragenter": DragEvent<T>;
            readonly "dragleave": DragEvent<T>;
            readonly "dragover": DragEvent<T>;
            readonly "dragstart": DragEvent<T>;
            readonly "drop": DragEvent<T>;
            readonly "durationchange": Event<T>;
            readonly "emptied": Event<T>;
            readonly "ended": Event<T>;
            readonly "error": ErrorEvent<T>;
            readonly "focus": FocusEvent<T>;
            readonly "gamepadconnected": GamepadEvent<T>;
            readonly "gamepaddisconnected": GamepadEvent<T>;
            readonly "hashchange": HashChangeEvent<T>;
            readonly "input": Event<T>;
            readonly "invalid": Event<T>;
            readonly "keydown": KeyboardEvent<T>;
            readonly "keypress": KeyboardEvent<T>;
            readonly "keyup": KeyboardEvent<T>;
            readonly "load": Event<T>;
            readonly "loadeddata": Event<T>;
            readonly "loadedmetadata": Event<T>;
            readonly "loadstart": Event<T>;
            readonly "message": MessageEvent<T>;
            readonly "mousedown": MouseEvent<T>;
            readonly "mouseenter": MouseEvent<T>;
            readonly "mouseleave": MouseEvent<T>;
            readonly "mousemove": MouseEvent<T>;
            readonly "mouseout": MouseEvent<T>;
            readonly "mouseover": MouseEvent<T>;
            readonly "mouseup": MouseEvent<T>;
            readonly "mousewheel": Event<T>;
            readonly "offline": Event<T>;
            readonly "online": Event<T>;
            readonly "orientationchange": Event<T>;
            readonly "pagehide": PageTransitionEvent<T>;
            readonly "pageshow": PageTransitionEvent<T>;
            readonly "pause": Event<T>;
            readonly "play": Event<T>;
            readonly "playing": Event<T>;
            readonly "popstate": PopStateEvent<T>;
            readonly "progress": ProgressEvent<T>;
            readonly "ratechange": Event<T>;
            readonly "readystatechange": ProgressEvent<T>;
            readonly "reset": Event<T>;
            readonly "resize": UIEvent<T>;
            readonly "scroll": Event<T>;
            readonly "seeked": Event<T>;
            readonly "seeking": Event<T>;
            readonly "select": Event<T>;
            readonly "stalled": Event<T>;
            readonly "storage": StorageEvent<T>;
            readonly "submit": Event<T>;
            readonly "suspend": Event<T>;
            readonly "timeupdate": Event<T>;
            readonly "unload": Event<T>;
            readonly "volumechange": Event<T>;
            readonly "vrdisplayactivate": Event<T>;
            readonly "vrdisplayblur": Event<T>;
            readonly "vrdisplayconnect": Event<T>;
            readonly "vrdisplaydeactivate": Event<T>;
            readonly "vrdisplaydisconnect": Event<T>;
            readonly "vrdisplaypresentchange": Event<T>;
            readonly "waiting": Event<T>;
        }
        interface ElementEventMap<T extends Element> extends GlobalEventHandlersEventMap<T>, DocumentAndElementEventHandlersEventMap<T> {
            readonly "fullscreenchange": Event<T>;
            readonly "fullscreenerror": Event<T>;
        }
        interface GlobalEventHandlersEventMap<T extends EventTarget> {
            readonly "abort": UIEvent<T>;
            readonly "animationcancel": AnimationEvent<T>;
            readonly "animationend": AnimationEvent<T>;
            readonly "animationiteration": AnimationEvent<T>;
            readonly "animationstart": AnimationEvent<T>;
            readonly "auxclick": MouseEvent<T>;
            readonly "beforeinput": InputEvent<T>;
            readonly "blur": FocusEvent<T>;
            readonly "cancel": Event<T>;
            readonly "canplay": Event<T>;
            readonly "canplaythrough": Event<T>;
            readonly "change": Event<T>;
            readonly "click": MouseEvent<T>;
            readonly "close": Event<T>;
            readonly "compositionend": CompositionEvent<T>;
            readonly "compositionstart": CompositionEvent<T>;
            readonly "compositionupdate": CompositionEvent<T>;
            readonly "contextmenu": MouseEvent<T>;
            readonly "cuechange": Event<T>;
            readonly "dblclick": MouseEvent<T>;
            readonly "drag": DragEvent<T>;
            readonly "dragend": DragEvent<T>;
            readonly "dragenter": DragEvent<T>;
            readonly "dragexit": Event<T>;
            readonly "dragleave": DragEvent<T>;
            readonly "dragover": DragEvent<T>;
            readonly "dragstart": DragEvent<T>;
            readonly "drop": DragEvent<T>;
            readonly "durationchange": Event<T>;
            readonly "emptied": Event<T>;
            readonly "ended": Event<T>;
            readonly "error": ErrorEvent<T>;
            readonly "focus": FocusEvent<T>;
            readonly "focusin": FocusEvent<T>;
            readonly "focusout": FocusEvent<T>;
            readonly "gotpointercapture": PointerEvent<T>;
            readonly "input": Event<T>;
            readonly "invalid": Event<T>;
            readonly "keydown": KeyboardEvent<T>;
            readonly "keypress": KeyboardEvent<T>;
            readonly "keyup": KeyboardEvent<T>;
            readonly "load": Event<T>;
            readonly "loadeddata": Event<T>;
            readonly "loadedmetadata": Event<T>;
            readonly "loadstart": Event<T>;
            readonly "lostpointercapture": PointerEvent<T>;
            readonly "mousedown": MouseEvent<T>;
            readonly "mouseenter": MouseEvent<T>;
            readonly "mouseleave": MouseEvent<T>;
            readonly "mousemove": MouseEvent<T>;
            readonly "mouseout": MouseEvent<T>;
            readonly "mouseover": MouseEvent<T>;
            readonly "mouseup": MouseEvent<T>;
            readonly "pause": Event<T>;
            readonly "play": Event<T>;
            readonly "playing": Event<T>;
            readonly "pointercancel": PointerEvent<T>;
            readonly "pointerdown": PointerEvent<T>;
            readonly "pointerenter": PointerEvent<T>;
            readonly "pointerleave": PointerEvent<T>;
            readonly "pointermove": PointerEvent<T>;
            readonly "pointerout": PointerEvent<T>;
            readonly "pointerover": PointerEvent<T>;
            readonly "pointerup": PointerEvent<T>;
            readonly "progress": ProgressEvent<T>;
            readonly "ratechange": Event<T>;
            readonly "reset": Event<T>;
            readonly "resize": UIEvent<T>;
            readonly "scroll": Event<T>;
            readonly "securitypolicyviolation": SecurityPolicyViolationEvent<T>;
            readonly "seeked": Event<T>;
            readonly "seeking": Event<T>;
            readonly "select": Event<T>;
            readonly "selectionchange": Event<T>;
            readonly "selectstart": Event<T>;
            readonly "stalled": Event<T>;
            readonly "submit": Event<T>;
            readonly "suspend": Event<T>;
            readonly "timeupdate": Event<T>;
            readonly "toggle": Event<T>;
            readonly "touchcancel": TouchEvent<T>;
            readonly "touchend": TouchEvent<T>;
            readonly "touchmove": TouchEvent<T>;
            readonly "touchstart": TouchEvent<T>;
            readonly "transitioncancel": TransitionEvent<T>;
            readonly "transitionend": TransitionEvent<T>;
            readonly "transitionrun": TransitionEvent<T>;
            readonly "transitionstart": TransitionEvent<T>;
            readonly "volumechange": Event<T>;
            readonly "waiting": Event<T>;
            readonly "wheel": WheelEvent<T>;
        }
        interface WindowEventHandlersEventMap<T extends EventTarget> {
            readonly "afterprint": Event<T>;
            readonly "beforeprint": Event<T>;
            readonly "beforeunload": BeforeUnloadEvent<T>;
            readonly "hashchange": HashChangeEvent<T>;
            readonly "languagechange": Event<T>;
            readonly "message": MessageEvent<T>;
            readonly "messageerror": MessageEvent<T>;
            readonly "offline": Event<T>;
            readonly "online": Event<T>;
            readonly "pagehide": PageTransitionEvent<T>;
            readonly "pageshow": PageTransitionEvent<T>;
            readonly "popstate": PopStateEvent<T>;
            readonly "rejectionhandled": PromiseRejectionEvent<T>;
            readonly "storage": StorageEvent<T>;
            readonly "unhandledrejection": PromiseRejectionEvent<T>;
            readonly "unload": Event<T>;
        }
        interface DocumentAndElementEventHandlersEventMap<T extends EventTarget> {
            readonly "copy": ClipboardEvent<T>;
            readonly "cut": ClipboardEvent<T>;
            readonly "paste": ClipboardEvent<T>;
        }

        type CompatMode = "CSS1Compat" | "BackCompat";
        type ReadyState = "uninitialized" | "loading" | "interactive" | "complete";
        type DOMRole =
            | "alert"
            | "application"
            | "article"
            | "banner"
            | "button"
            | "cell"
            | "checkbox"
            | "comment"
            | "complementary"
            | "contentinfo"
            | "dialog"
            | "document"
            | "feed"
            | "figure"
            | "form"
            | "grid"
            | "gridcell"
            | "heading"
            | "img"
            | "list"
            | "listbox"
            | "listitem"
            | "main"
            | "mark"
            | "navigation"
            | "region"
            | "row"
            | "rowgroup"
            | "search"
            | "suggestion"
            | "switch"
            | "tab"
            | "table"
            | "tabpanel"
            | "textbox"
            | "timer";
        type DOMShape =
            | "default"
            | "rect"
            | "circle"
            | "poly";
        type DOMButtonType =
            | "button"
            | "submit"
            | "reset";
        type DOMTarget =
            | "_self"
            | "_blank"
            | "_parent"
            | "_top"
            | DOMString;
        type DOMSandbox =
            | "allow-downloads-without-user-activation"
            | "allow-downloads"
            | "allow-forms"
            | "allow-modals"
            | "allow-orientation-lock"
            | "allow-pointer-lock"
            | "allow-popups"
            | "allow-popups-to-escape-sandbox"
            | "allow-presentation"
            | "allow-same-origin"
            | "allow-scripts"
            | "allow-storage-access-by-user-activation"
            | "allow-top-navigation"
            | "allow-top-navigation-by-user-activation"
            | DOMString;
        type DOMLoading =
            | "eager"
            | "lazy";
        type DOMDecoding =
            | "sync"
            | "async"
            | "auto";
        type DOMMethod =
            | "get"
            | "post"
            | "dialog";
        type DOMEnctype =
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | "text/plain";
        type DOMInputType =
            | "button"
            | "checkbox"
            | "color"
            | "date"
            | "datetime-local"
            | "email"
            | "file"
            | "hidden"
            | "image"
            | "month"
            | "number"
            | "password"
            | "radio"
            | "range"
            | "reset"
            | "search"
            | "submit"
            | "tel"
            | "text"
            | "time"
            | "url"
            | "week";
        type DOMRel =
            | "alternate"
            | "author"
            | "bookmark"
            | "canonical"
            | "dns-prefetch"
            | "external"
            | "help"
            | "icon"
            | "import"
            | "license"
            | "manifest"
            | "modulepreload"
            | "next"
            | "nofollow"
            | "noopener"
            | "noreferrer"
            | "opener"
            | "pingback"
            | "preconnect"
            | "prefetch"
            | "preload"
            | "prerender"
            | "prev"
            | "search"
            | "shortlink"
            | "stylesheet"
            | "tag";
        type DOMMedia =
            | "print"
            | "screen"
            | "aural"
            | "braille"
            | DOMString;
        type DOMAs =
            | "audio"
            | "document"
            | "embed"
            | "fetch"
            | "font"
            | "image"
            | "object"
            | "script"
            | "style"
            | "track"
            | "video"
            | "worker";
        type DOMHttpEquiv =
            | "content-security-policy"
            | "content-type"
            | "default-style"
            | "x-ua-compatible"
            | "refresh";
        type DOMOListType =
            | 1
            | "a"
            | "A"
            | "i"
            | "I";
        type DOMScriptType =
            | "module"
            | "text/javascript"
            | DOMString;
        type DOMReferrerPolicy =
            | "no-referrer"
            | "no-referrer-when-downgrade"
            | "origin"
            | "origin-when-cross-origin"
            | "same-origin"
            | "strict-origin"
            | "strict-origin-when-cross-origin"
            | "unsafe-url";
        type DOMWrap =
            | "hard"
            | "soft";
        type DOMAutoComplete =
            | "off"
            | "on";
        type DOMKind =
            | "subtitles"
            | "captions"
            | "descriptions"
            | "chapters"
            | "metadata";
        type DOMPreload =
            | "none"
            | "metadata"
            | "auto";
        type DOMCrossOrigin =
            | "anonymous"
            | "use-credentials";
        type DOMControlsList =
            | "nodownload"
            | "nofullscreen"
            | "noremoteplayback";
        type DOMTranslate =
            | "yes"
            | "no";
        type DOMInputMode =
            | "none"
            | "text"
            | "decimal"
            | "numeric"
            | "tel"
            | "search"
            | "email"
            | "url";
        type DOMDir =
            | "auto"
            | "ltr"
            | "rtl";
        type DOMAutoCapitalize =
            | "none"
            | "sentences"
            | "words"
            | "characters";
        type DOMSelfClosing =
            | "area"
            | "base"
            | "br"
            | "col"
            | "embed"
            | "hr"
            | "img"
            | "input"
            | "link"
            | "meta"
            | "param"
            | "source"
            | "track"
            | "wbr";
        type DOMRoles =
            | "alert"
            | "application"
            | "article"
            | "banner"
            | "button"
            | "cell"
            | "checkbox"
            | "comment"
            | "complementary"
            | "contentinfo"
            | "dialog"
            | "document"
            | "feed"
            | "figure"
            | "form"
            | "grid"
            | "gridcell"
            | "heading"
            | "img"
            | "list"
            | "listbox"
            | "listitem"
            | "main"
            | "mark"
            | "navigation"
            | "region"
            | "row"
            | "rowgroup"
            | "search"
            | "suggestion"
            | "switch"
            | "tab"
            | "table"
            | "tabpanel"
            | "textbox"
            | "timer";
        type DOMBooleanString =
            | "true"
            | "false"
            | DOMBoolean;
        interface HTMLElementTagNameMap {
            // Main root
            readonly "html": [HTMLHtmlElement, HTMLHtmlElementAttributes];
            // Document metadata
            readonly "base": [HTMLBaseElement, HTMLBaseElementAttributes];
            readonly "head": [HTMLHeadElement, HTMLHeadElementAttributes];
            readonly "link": [HTMLLinkElement, HTMLLinkElementAttributes];
            readonly "meta": [HTMLMetaElement, HTMLMetaElementAttributes];
            readonly "style": [HTMLStyleElement, HTMLStyleElementAttributes];
            readonly "title": [HTMLTitleElement, HTMLTitleElementAttributes];
            // Sectioning root
            readonly "body": [HTMLBodyElement, HTMLBodyElementAttributes];
            // Content sectioning
            readonly "address": [HTMLElement, HTMLElementAttributes];
            readonly "article": [HTMLElement, HTMLElementAttributes];
            readonly "aside": [HTMLElement, HTMLElementAttributes];
            readonly "footer": [HTMLElement, HTMLElementAttributes];
            readonly "header": [HTMLElement, HTMLElementAttributes];
            readonly "h1": [HTMLHeadingElement, HTMLHeadingElementAttributes];
            readonly "h2": [HTMLHeadingElement, HTMLHeadingElementAttributes];
            readonly "h3": [HTMLHeadingElement, HTMLHeadingElementAttributes];
            readonly "h4": [HTMLHeadingElement, HTMLHeadingElementAttributes];
            readonly "h5": [HTMLHeadingElement, HTMLHeadingElementAttributes];
            readonly "h6": [HTMLHeadingElement, HTMLHeadingElementAttributes];
            readonly "main": [HTMLElement, HTMLElementAttributes];
            readonly "nav": [HTMLElement, HTMLElementAttributes];
            readonly "section": [HTMLElement, HTMLElementAttributes];
            // Text content
            readonly "blockquote": [HTMLQuoteElement, HTMLQuoteElementAttributes];
            readonly "dd": [HTMLElement, HTMLElementAttributes];
            readonly "div": [HTMLDivElement, HTMLDivElementAttributes];
            readonly "dl": [HTMLDListElement, HTMLDListElementAttributes];
            readonly "dt": [HTMLElement, HTMLElementAttributes];
            readonly "figcaption": [HTMLElement, HTMLElementAttributes];
            readonly "figure": [HTMLElement, HTMLElementAttributes];
            readonly "hr": [HTMLHRElement, HTMLHRElementAttributes];
            readonly "li": [HTMLLIElement, HTMLLIElementAttributes];
            readonly "ol": [HTMLOListElement, HTMLOListElementAttributes];
            readonly "p": [HTMLParagraphElement, HTMLParagraphElementAttributes];
            readonly "pre": [HTMLPreElement, HTMLPreElementAttributes];
            readonly "ul": [HTMLUListElement, HTMLUListElementAttributes];
            // Inline text semantics
            readonly "a": [HTMLAnchorElement, HTMLAnchorElementAttributes];
            readonly "abbr": [HTMLElement, HTMLElementAttributes];
            readonly "b": [HTMLElement, HTMLElementAttributes];
            readonly "bdi": [HTMLElement, HTMLElementAttributes];
            readonly "bdo": [HTMLElement, HTMLElementAttributes];
            readonly "br": [HTMLBRElement, HTMLBRElementAttributes];
            readonly "cite": [HTMLElement, HTMLElementAttributes];
            readonly "code": [HTMLElement, HTMLElementAttributes];
            readonly "data": [HTMLDataElement, HTMLDataElementAttributes];
            readonly "dfn": [HTMLElement, HTMLElementAttributes];
            readonly "em": [HTMLElement, HTMLElementAttributes];
            readonly "i": [HTMLElement, HTMLElementAttributes];
            readonly "kbd": [HTMLElement, HTMLElementAttributes];
            readonly "mark": [HTMLElement, HTMLElementAttributes];
            readonly "q": [HTMLQuoteElement, HTMLQuoteElementAttributes];
            readonly "rp": [HTMLElement, HTMLElementAttributes];
            readonly "rt": [HTMLElement, HTMLElementAttributes];
            readonly "ruby": [HTMLElement, HTMLElementAttributes];
            readonly "s": [HTMLElement, HTMLElementAttributes];
            readonly "samp": [HTMLElement, HTMLElementAttributes];
            readonly "small": [HTMLElement, HTMLElementAttributes];
            readonly "span": [HTMLSpanElement, HTMLSpanElementAttributes];
            readonly "strong": [HTMLElement, HTMLElementAttributes];
            readonly "sub": [HTMLElement, HTMLElementAttributes];
            readonly "sup": [HTMLElement, HTMLElementAttributes];
            readonly "time": [HTMLTimeElement, HTMLTimeElementAttributes];
            readonly "u": [HTMLElement, HTMLElementAttributes];
            readonly "var": [HTMLElement, HTMLElementAttributes];
            readonly "wbr": [HTMLElement, HTMLElementAttributes];
            // Image and multimedia
            readonly "area": [HTMLAreaElement, HTMLAreaElementAttributes];
            readonly "audio": [HTMLAudioElement, HTMLAudioElementAttributes];
            readonly "img": [HTMLImageElement, HTMLImageElementAttributes];
            readonly "track": [HTMLTrackElement, HTMLTrackElementAttributes];
            readonly "video": [HTMLVideoElement, HTMLVideoElementAttributes];
            // Embedded content
            readonly "embed": [HTMLEmbedElement, HTMLEmbedElementAttributes];
            readonly "iframe": [HTMLIFrameElement, HTMLIFrameElementAttributes];
            readonly "object": [HTMLObjectElement, HTMLObjectElementAttributes];
            readonly "param": [HTMLParamElement, HTMLParamElementAttributes];
            readonly "picture": [HTMLPictureElement, HTMLPictureElementAttributes];
            readonly "portal": [HTMLPortalElement, HTMLPortalElementAttributes];
            readonly "source": [HTMLSourceElement, HTMLSourceElementAttributes];
            // Scripting
            readonly "canvas": [HTMLCanvasElement, HTMLCanvasElementAttributes];
            readonly "noscript": [HTMLElement, HTMLElementAttributes];
            readonly "script": [HTMLScriptElement, HTMLScriptElementAttributes];
            // Demarcating edits
            readonly "del": [HTMLModElement, HTMLModElementAttributes];
            readonly "ins": [HTMLModElement, HTMLModElementAttributes];
            // Table content
            readonly "caption": [HTMLTableCaptionElement, HTMLTableCaptionElementAttributes];
            readonly "col": [HTMLTableColElement, HTMLTableColElementAttributes];
            readonly "colgroup": [HTMLTableColElement, HTMLTableColElementAttributes];
            readonly "table": [HTMLTableElement, HTMLTableElementAttributes];
            readonly "tbody": [HTMLTableSectionElement, HTMLTableSectionElementAttributes];
            readonly "td": [HTMLTableCellElement, HTMLTableCellElementAttributes];
            readonly "tfoot": [HTMLTableSectionElement, HTMLTableSectionElementAttributes];
            readonly "th": [HTMLTableCellElement, HTMLTableCellElementAttributes];
            readonly "thead": [HTMLTableSectionElement, HTMLTableSectionElementAttributes];
            readonly "tr": [HTMLTableRowElement, HTMLTableRowElementAttributes];
            // Forms
            readonly "button": [HTMLButtonElement, HTMLButtonElementAttributes];
            readonly "datalist": [HTMLDataListElement, HTMLDataListElementAttributes];
            readonly "fieldset": [HTMLFieldSetElement, HTMLFieldSetElementAttributes];
            readonly "form": [HTMLFormElement, HTMLFormElementAttributes];
            readonly "input": [HTMLInputElement, HTMLInputElementAttributes];
            readonly "label": [HTMLLabelElement, HTMLLabelElementAttributes];
            readonly "legend": [HTMLLegendElement, HTMLLegendElementAttributes];
            readonly "meter": [HTMLMeterElement, HTMLMeterElementAttributes];
            readonly "optgroup": [HTMLOptGroupElement, HTMLOptGroupElementAttributes];
            readonly "option": [HTMLOptionElement, HTMLOptionElementAttributes];
            readonly "output": [HTMLOutputElement, HTMLOutputElementAttributes];
            readonly "progress": [HTMLProgressElement, HTMLProgressElementAttributes];
            readonly "select": [HTMLSelectElement, HTMLSelectElementAttributes];
            readonly "textarea": [HTMLTextAreaElement, HTMLTextAreaElementAttributes];
            // Interactive elements
            readonly "details": [HTMLDetailsElement, HTMLDetailsElementAttributes];
            readonly "dialog": [HTMLDialogElement, HTMLDialogElementAttributes];
            readonly "menu": [HTMLMenuElement, HTMLMenuElementAttributes];
            readonly "summary": [HTMLElement, HTMLElementAttributes];
            // Web Components
            readonly "slot": [HTMLSlotElement, HTMLSlotElementAttributes];
            readonly "template": [HTMLTemplateElement, HTMLTemplateElementAttributes];
        }
        interface MathMLElementTagNameMap {
            readonly "annotation": [MathMLElement, MathMLElementAttributes];
            readonly "annotation-xml": [MathMLElement, MathMLElementAttributes];
            readonly "maction": [MathMLElement, MathMLElementAttributes];
            readonly "maligngroup": [MathMLElement, MathMLElementAttributes];
            readonly "malignmark": [MathMLElement, MathMLElementAttributes];
            readonly "math": [MathMLElement, MathMLElementAttributes];
            readonly "menclose": [MathMLElement, MathMLElementAttributes];
            readonly "merror": [MathMLElement, MathMLElementAttributes];
            readonly "mfrac": [MathMLElement, MathMLElementAttributes];
            readonly "mi": [MathMLElement, MathMLElementAttributes];
            readonly "mlongdiv": [MathMLElement, MathMLElementAttributes];
            readonly "mmultiscripts": [MathMLElement, MathMLElementAttributes];
            readonly "mn": [MathMLElement, MathMLElementAttributes];
            readonly "mo": [MathMLElement, MathMLElementAttributes];
            readonly "mover": [MathMLElement, MathMLElementAttributes];
            readonly "mpadded": [MathMLElement, MathMLElementAttributes];
            readonly "mphantom": [MathMLElement, MathMLElementAttributes];
            readonly "mprescripts": [MathMLElement, MathMLElementAttributes];
            readonly "mroot": [MathMLElement, MathMLElementAttributes];
            readonly "mrow": [MathMLElement, MathMLElementAttributes];
            readonly "ms": [MathMLElement, MathMLElementAttributes];
            readonly "mscarries": [MathMLElement, MathMLElementAttributes];
            readonly "mscarry": [MathMLElement, MathMLElementAttributes];
            readonly "msgroup": [MathMLElement, MathMLElementAttributes];
            readonly "msline": [MathMLElement, MathMLElementAttributes];
            readonly "mspace": [MathMLElement, MathMLElementAttributes];
            readonly "msqrt": [MathMLElement, MathMLElementAttributes];
            readonly "msrow": [MathMLElement, MathMLElementAttributes];
            readonly "mstack": [MathMLElement, MathMLElementAttributes];
            readonly "mstyle": [MathMLElement, MathMLElementAttributes];
            readonly "msub": [MathMLElement, MathMLElementAttributes];
            readonly "msubsup": [MathMLElement, MathMLElementAttributes];
            readonly "msup": [MathMLElement, MathMLElementAttributes];
            readonly "mtable": [MathMLElement, MathMLElementAttributes];
            readonly "mtd": [MathMLElement, MathMLElementAttributes];
            readonly "mtext": [MathMLElement, MathMLElementAttributes];
            readonly "mtr": [MathMLElement, MathMLElementAttributes];
            readonly "munder": [MathMLElement, MathMLElementAttributes];
            readonly "munderover": [MathMLElement, MathMLElementAttributes];
            readonly "none": [MathMLElement, MathMLElementAttributes];
            readonly "semantics": [MathMLElement, MathMLElementAttributes];
        }
        interface SVGElementTagNameMap {
            readonly "a": [SVGElement, SVGElementAttributes];
            readonly "animate": [SVGElement, SVGElementAttributes];
            readonly "animateMotion": [SVGElement, SVGElementAttributes];
            readonly "animateTransform": [SVGElement, SVGElementAttributes];
            readonly "circle": [SVGElement, SVGElementAttributes];
            readonly "clipPath": [SVGElement, SVGElementAttributes];
            readonly "defs": [SVGElement, SVGElementAttributes];
            readonly "desc": [SVGElement, SVGElementAttributes];
            readonly "discard": [SVGElement, SVGElementAttributes];
            readonly "ellipse": [SVGElement, SVGElementAttributes];
            readonly "feBlend": [SVGElement, SVGElementAttributes];
            readonly "feColorMatrix": [SVGElement, SVGElementAttributes];
            readonly "feComponentTransfer": [SVGElement, SVGElementAttributes];
            readonly "feComposite": [SVGElement, SVGElementAttributes];
            readonly "feConvolveMatrix": [SVGElement, SVGElementAttributes];
            readonly "feDiffuseLighting": [SVGElement, SVGElementAttributes];
            readonly "feDisplacementMap": [SVGElement, SVGElementAttributes];
            readonly "feDistantLight": [SVGElement, SVGElementAttributes];
            readonly "feDropShadow": [SVGElement, SVGElementAttributes];
            readonly "feFlood": [SVGElement, SVGElementAttributes];
            readonly "feFuncA": [SVGElement, SVGElementAttributes];
            readonly "feFuncB": [SVGElement, SVGElementAttributes];
            readonly "feFuncG": [SVGElement, SVGElementAttributes];
            readonly "feFuncR": [SVGElement, SVGElementAttributes];
            readonly "feGaussianBlur": [SVGElement, SVGElementAttributes];
            readonly "feImage": [SVGElement, SVGElementAttributes];
            readonly "feMerge": [SVGElement, SVGElementAttributes];
            readonly "feMergeNode": [SVGElement, SVGElementAttributes];
            readonly "feMorphology": [SVGElement, SVGElementAttributes];
            readonly "feOffset": [SVGElement, SVGElementAttributes];
            readonly "fePointLight": [SVGElement, SVGElementAttributes];
            readonly "feSpecularLighting": [SVGElement, SVGElementAttributes];
            readonly "feSpotLight": [SVGElement, SVGElementAttributes];
            readonly "feTile": [SVGElement, SVGElementAttributes];
            readonly "feTurbulence": [SVGElement, SVGElementAttributes];
            readonly "filter": [SVGElement, SVGElementAttributes];
            readonly "foreignObject": [SVGElement, SVGElementAttributes];
            readonly "g": [SVGElement, SVGElementAttributes];
            readonly "hatch": [SVGElement, SVGElementAttributes];
            readonly "hatchpath": [SVGElement, SVGElementAttributes];
            readonly "image": [SVGElement, SVGElementAttributes];
            readonly "line": [SVGElement, SVGElementAttributes];
            readonly "linearGradient": [SVGElement, SVGElementAttributes];
            readonly "marker": [SVGElement, SVGElementAttributes];
            readonly "mask": [SVGElement, SVGElementAttributes];
            readonly "metadata": [SVGElement, SVGElementAttributes];
            readonly "mpath": [SVGElement, SVGElementAttributes];
            readonly "path": [SVGElement, SVGElementAttributes];
            readonly "pattern": [SVGElement, SVGElementAttributes];
            readonly "polygon": [SVGElement, SVGElementAttributes];
            readonly "polyline": [SVGElement, SVGElementAttributes];
            readonly "radialGradient": [SVGElement, SVGElementAttributes];
            readonly "rect": [SVGElement, SVGElementAttributes];
            readonly "script": [SVGElement, SVGElementAttributes];
            readonly "set": [SVGElement, SVGElementAttributes];
            readonly "stop": [SVGElement, SVGElementAttributes];
            readonly "style": [SVGElement, SVGElementAttributes];
            readonly "svg": [SVGElement, SVGElementAttributes];
            readonly "switch": [SVGElement, SVGElementAttributes];
            readonly "symbol": [SVGElement, SVGElementAttributes];
            readonly "text": [SVGElement, SVGElementAttributes];
            readonly "textPath": [SVGElement, SVGElementAttributes];
            readonly "title": [SVGElement, SVGElementAttributes];
            readonly "tspan": [SVGElement, SVGElementAttributes];
            readonly "use": [SVGElement, SVGElementAttributes];
            readonly "view": [SVGElement, SVGElementAttributes];
        }
        type Elements =
            & { readonly [K in keyof HTMLElementTagNameMap]: HTMLElementProps<K> & ClassChildrenAttributes<K>; }
            & { readonly [K in keyof MathMLElementTagNameMap]: MathMLElementProps<K> & ClassChildrenAttributes<K>; }
            & { readonly [K in keyof SVGElementTagNameMap]: SVGElementProps<K> & ClassChildrenAttributes<K>; };
        type VMNode = Text | VMElement;
    }
    namespace JSX {
        type Element = Hml.VMNode;
        type ElementClass = Hml.ComponentConstructor<any>;
        interface ElementAttributesProperty {
            readonly props: {};
        }
        interface ElementChildrenAttribute {
            readonly children: {};
        }
        type IntrinsicAttributes = Hml.Attributes;
        type IntrinsicClassAttributes<T extends Hml.Element> = Hml.ClassAttributes<T>;
        type IntrinsicElements = Hml.Elements;
    }
}