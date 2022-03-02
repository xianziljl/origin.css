import { StateStyle } from '../interfaces/styles'
import rules from '../rules'
import { pipeClassNames } from '../shared/utils'

const STATUS: { [propName: string]: string } = {
    'h': ':hover',
    'a': ':active',
    'f': ':focus',
    'd': ':disabled',
    'fw': ':focus-within'
}

export default function status(classNames: Set<string>, statusMap = STATUS): StateStyle[] {
    const keys = Object.keys(statusMap)
    return keys.map(k => {
        const reg = new RegExp(`^${k}:.*`)
        const replaceReg = new RegExp(`^${k}:`)
        const _classNames = pipeClassNames(classNames, reg)
        const names = Array.from(_classNames).map(n => n.replace(replaceReg, ''))
        const _styles = rules(new Set(names))
        const state = statusMap[k]
        return { pre: k, state, styles: _styles }
    }).filter(item => item.styles.length)
}