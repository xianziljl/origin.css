export interface RegularStyle {
    name: string,
    style: string
}

export interface NumStyle extends RegularStyle {
    num: number,
    val?: number,
    unit?: string,
}

export interface ColorStyle extends RegularStyle {
    color: string,
    num: number
}

export interface StateStyle {
    pre: string,
    state: string,
    styles: RegularStyle[]
}

export interface BreakPointStyle {
    pre: string,
    value: number,
    styles: RegularStyle[],
    status: StateStyle[]
}

export interface ScopeStyle {
    pre: string,
    styles: RegularStyle[],
    status: StateStyle[]
}

export interface StyleRaw {
    styles: RegularStyle[],
    status: StateStyle[],
    breakpoints: BreakPointStyle[],
    scopes: ScopeStyle[]
}