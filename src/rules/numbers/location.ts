import { NumStyle } from '../../interfaces/styles'
import { PX, VAL_REG_STR } from '../../shared/const'
import { getNumStyles } from '../../shared/utils'

const MAP = new Map<RegExp, string>([
    [new RegExp(`^t-${VAL_REG_STR}$`), 'top: {n}{u};'],
    [new RegExp(`^r-${VAL_REG_STR}$`), 'right: {n}{u};'],
    [new RegExp(`^b-${VAL_REG_STR}$`), 'bottom: {n}{u};'],
    [new RegExp(`^l-${VAL_REG_STR}$`), 'left: {n}{u};']
])

export default function location(classNames: Set<string>): NumStyle[] {
    let res = []
    MAP.forEach((template, reg) => {
        const style = getNumStyles(classNames, reg, template, PX)
        res = res.concat(style)
    })
    return res
}