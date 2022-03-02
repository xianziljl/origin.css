import { ColorStyle } from '../../interfaces/styles'
import { INT_REG_STR } from '../../shared/const'
import { pipeClassNames } from '../../shared/utils'
import hexRgb from '../../shared/hexRgb'
import COLORS from './list';

const COLOR_REG = `[a-z]+(-${INT_REG_STR})?`

const MAP = new Map<RegExp, string>([
    // color
    [new RegExp(`^c-${COLOR_REG}$`), '--c-o: 1;color: rgba({r},{g},{b},var(--c-o));'],
    // bg color
    [new RegExp(`^bg-${COLOR_REG}$`), '--bg-o: 1;background-color: rgba({r},{g},{b},var(--bg-o));'],
    // border color
    [new RegExp(`^bd-${COLOR_REG}$`), '--bt-o: 1;--br-o: 1;--bb-o: 1;--bl-o: 1;border-color: rgba({r},{g},{b},var(--bt-o)) rgba({r},{g},{b},var(--br-o)) rgba({r},{g},{b},var(--bb-o)) rgba({r},{g},{b},var(--bl-o));border-width: 1px;'],
    [new RegExp(`^bx-${COLOR_REG}$`), '--bl-o: 1;--br-o: 1;border-left-color: rgba({r},{g},{b},var(--bl-o));border-right-color: rgba({r},{g},{b},var(--br-o));border-left-width: 1px;border-right-width: 1px;'],
    [new RegExp(`^by-${COLOR_REG}$`), '--bt-o: 1;--bb-o: 1;border-top-color: rgba({r},{g},{b},var(--bt-o));border-bottom-color: rgba({r},{g},{b},var(--bb-o));border-top-width: 1px;border-bottom-width: 1px;'],
    [new RegExp(`^bt-${COLOR_REG}$`), '--bt-o: 1;border-top-color: rgba({r},{g},{b},var(--bt-o));border-top-width: 1px;'],
    [new RegExp(`^br-${COLOR_REG}$`), '--br-o: 1;border-right-color: rgba({r},{g},{b},var(--br-o));border-right-width: 1px;'],
    [new RegExp(`^bb-${COLOR_REG}$`), '--bb-o: 1;border-bottom-color: rgba({r},{g},{b},var(--bb-o));border-bottom-width: 1px;'],
    [new RegExp(`^bl-${COLOR_REG}$`), '--bl-o: 1;border-left-color: rgba({r},{g},{b},var(--bl-o));border-left-width: 1px;'],
    // ring
    [new RegExp(`^ring-${COLOR_REG}$`), '--ring-o: 1;--ring-size: 3px;box-shadow: 0 0 0 var(--ring-size) rgba({r},{g},{b},var(--ring-o));'],
])

const valReg = new RegExp(`-${INT_REG_STR}$`)
const colorNameReg = /-[a-z]+/
const rReg = /\{r\}/g
const gReg = /\{g\}/g
const bReg = /\{b\}/g

function getVal(className: string): number {
    let val = className.match(valReg)?.[0]
    if (val) {
        val = val.replace('-', '')
        return (~~val || 0)
    }
    return 0
}

function getColorName(className: string): string {
    const matchLetter = className.match(colorNameReg)
    if (matchLetter) return matchLetter[0].replace('-', '')
    return ''
}

function setRGB(template: string, color: string): string {
    const { red, green, blue } = hexRgb(color)
    return template
        .replace(rReg, red.toString())
        .replace(gReg, green.toString())
        .replace(bReg, blue.toString())
}

export default function colors(classNames: Set<string>): ColorStyle[] {
    let res = []
    MAP.forEach((template, reg) => {
        const names = Array.from(pipeClassNames(classNames, reg))
        const styles = names.map(name => {
            const num = getVal(name)
            const colors: string[] = COLORS[getColorName(name)]
            if (!colors) return null

            const color = colors[num]
            if (!color) return null

            const style = setRGB(template, color)

            return { name, num, color, style }
        })
        const arr = styles.filter(Boolean).sort((a, b) => a.num - b.num)
        res = res.concat(arr)
    })
    return res
}


