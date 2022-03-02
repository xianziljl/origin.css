import { NumStyle } from '../../interfaces/styles'
import { INT_REG_STR } from '../../shared/const'
import { getNumStyles } from '../../shared/utils'

const REG = new RegExp(`^f-${INT_REG_STR}$`)
const TEMPLATE = 'flex: {n};'

export default function flex(classNames: Set<string>): NumStyle[] {
    return getNumStyles(classNames, REG, TEMPLATE)
}