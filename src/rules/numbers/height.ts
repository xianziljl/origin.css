import { NumStyle } from '../../interfaces/styles'
import { PX, VAL_REG_STR } from '../../shared/const'
import { getNumStyles } from '../../shared/utils'

const MAP = new Map<RegExp, string>([
    [new RegExp(`^h-${VAL_REG_STR}$`), 'height: {n}{u};'],
    [new RegExp(`^maxh-${VAL_REG_STR}$`), 'max-height: {n}{u};'],
    [new RegExp(`^minh-${VAL_REG_STR}$`), 'min-height: {n}{u};']
])

export default function height(classNames: Set<string>): NumStyle[] {
    let res = []
    MAP.forEach((template, reg) => {
        const style = getNumStyles(classNames, reg, template, PX)
        res = res.concat(style)
    })
    return res
}