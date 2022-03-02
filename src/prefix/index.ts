import { BreakPointStyle, ScopeStyle } from '../interfaces/styles'
import rules from '../rules'
import { pipeClassNames } from '../shared/utils'
import breakpoint from './breakpoint'
import scope from './scope'
import status from './status'


export function getPrefixStyle(classNames: Set<string>, pre: string): BreakPointStyle | ScopeStyle {
    const reg = new RegExp(`^${pre}:.*`)
    const replaceReg = new RegExp(`^${pre}:`)
    const _classNames = pipeClassNames(classNames, reg)
    const names = Array.from(_classNames).map(n => n.replace(replaceReg, ''))
    const newClassNames = new Set(names)
    const _styles = rules(newClassNames)
    const _status = status(newClassNames)
    return { pre, styles: _styles, status: _status }
}


export default function prefix(classNames: Set<string>) {
    return {
        status: status(classNames),
        breakpoints: breakpoint(classNames),
        scopes: scope(classNames)
    }
}