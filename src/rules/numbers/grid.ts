import { NumStyle } from '../../interfaces/styles'
import { INT_REG_STR, VAL_REG_STR } from '../../shared/const'
import { getNumStyles } from '../../shared/utils'

const MAP = new Map<RegExp, string>([
    [new RegExp(`^rows-${INT_REG_STR}`), 'grid-template-rows: repeat({n}, 1fr);'],
    [new RegExp(`^cols-${INT_REG_STR}`), 'grid-template-columns: repeat({n}, 1fr);'],
    [new RegExp(`^row-span-${INT_REG_STR}`), 'grid-row: span {n};'],
    [new RegExp(`^col-span-${INT_REG_STR}`), 'grid-column: span {n};'],
    [new RegExp(`^row-start-${INT_REG_STR}`), 'grid-row-start: {n};'],
    [new RegExp(`^col-start-${INT_REG_STR}`), 'grid-column-start: {n};'],
    [new RegExp(`^gap-${VAL_REG_STR}`), 'grad-gap: {n}{u};'],
    [new RegExp(`^rgap-${VAL_REG_STR}`), 'row-gap: {n}{u};'],
    [new RegExp(`^cgap-${VAL_REG_STR}`), 'column-gap: {n}{u};'],
])

export default function grid(classNames: Set<string>): NumStyle[] {
    let res = []
    MAP.forEach((template, reg) => {
        const style = getNumStyles(classNames, reg, template)
        res = res.concat(style)
    })
    return res
}