import { NumStyle } from '../../interfaces/styles'
import { PX, VAL_REG_STR } from '../../shared/const'
import { getNumStyles } from '../../shared/utils'

const MAP = new Map<RegExp, string>([
    // border width
    [new RegExp(`^bd-${VAL_REG_STR}$`), 'border-width: {n}{u};'],
    [new RegExp(`^bx-${VAL_REG_STR}$`), 'border-left-width: {n}{u};border-right-width: {n}{u};'],
    [new RegExp(`^by-${VAL_REG_STR}$`), 'border-top-width: {n}{u};border-bottom-width: {n}{u};'],
    [new RegExp(`^bt-${VAL_REG_STR}$`), 'border-top-width: {n}{u};'],
    [new RegExp(`^br-${VAL_REG_STR}$`), 'border-right-width: {n}{u};'],
    [new RegExp(`^bb-${VAL_REG_STR}$`), 'border-bottom-width: {n}{u};'],
    [new RegExp(`^bl-${VAL_REG_STR}$`), 'border-left-width: {n}{u};'],

    // border radius
    [new RegExp(`^rd-${VAL_REG_STR}$`), 'border-radius: {n}{u};'],
    [new RegExp(`^rt-${VAL_REG_STR}$`), 'border-top-left-radius: {n}{u};border-top-right-radius: {n}{u};'],
    [new RegExp(`^rr-${VAL_REG_STR}$`), 'border-top-right-radius: {n}{u};border-bottom-right-radius: {n}{u};'],
    [new RegExp(`^rb-${VAL_REG_STR}$`), 'border-bottom-left-radius: {n}{u};border-bottom-right-radius: {n}{u};'],
    [new RegExp(`^rl-${VAL_REG_STR}$`), 'border-top-left-radius: {n}{u};border-bottom-left-radius: {n}{u};'],
    [new RegExp(`^r1-${VAL_REG_STR}$`), 'border-top-left-radius: {n}{u};'],
    [new RegExp(`^r2-${VAL_REG_STR}$`), 'border-top-right-radius: {n}{u};'],
    [new RegExp(`^r3-${VAL_REG_STR}$`), 'border-bottom-right-radius: {n}{u};'],
    [new RegExp(`^r4-${VAL_REG_STR}$`), 'border-bottom-left-radius: {n}{u};'],
])

export default function border(classNames: Set<string>): NumStyle[] {
    let res = []
    MAP.forEach((template, reg) => {
        const style = getNumStyles(classNames, reg, template, PX)
        res = res.concat(style)
    })
    return res
}