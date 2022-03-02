import { NumStyle } from '../../interfaces/styles'
import { PX, VAL_REG_STR } from '../../shared/const'
import { getNumStyles } from '../../shared/utils'

const MAP = new Map([
    [new RegExp(`^p-${VAL_REG_STR}$`), 'padding: {n}{u};'],
    [new RegExp(`^px-${VAL_REG_STR}$`), 'padding-left: {n}{u};padding-right: {n}{u};'],
    [new RegExp(`^py-${VAL_REG_STR}$`), 'padding-top: {n}{u};padding-bottom: {n}{u};'],
    [new RegExp(`^pt-${VAL_REG_STR}$`), 'padding-top: {n}{u};'],
    [new RegExp(`^pr-${VAL_REG_STR}$`), 'padding-right: {n}{u};'],
    [new RegExp(`^pb-${VAL_REG_STR}$`), 'padding-bottom: {n}{u};'],
    [new RegExp(`^pl-${VAL_REG_STR}$`), 'padding-left: {n}{u};'],
])

export default function padding (classNames: Set<string>): NumStyle[] {
   let res = []
    MAP.forEach((template, reg) => {
        const style = getNumStyles(classNames, reg, template, PX)
        res = res.concat(style)
    })
    return res
}