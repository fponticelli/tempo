import { CSSProperties } from './css_properties';
export declare const setOneStyle: (el: HTMLElement, name: string, value: any) => void;
export declare const setEvent: <Action>(dispatch: (action: Action) => void) => (el: Element, name: string, value: (e: Event) => Action | undefined) => void;
export declare const setAttribute: (el: Element, name: string, value: string) => void;
export declare const setProperty: (el: Element, name: string, value: any) => void;
export declare const setStyleAttribute: (el: Element, name: string, value: CSSProperties | undefined) => void;
export declare const setBoolProperty: (el: Element, name: string, value: boolean | undefined) => void;
export declare const setEnumBoolAttribute: (el: Element, name: string, value: boolean | undefined) => void;
export declare const setBoolAttribute: (el: Element, name: string, value: boolean | undefined) => void;
export declare const setCommaSeparated: (el: Element, name: string, values: string[] | undefined) => void;
export declare const setSpaceSeparated: (el: Element, name: string, values: string[] | undefined) => void;
//# sourceMappingURL=set_attribute.d.ts.map