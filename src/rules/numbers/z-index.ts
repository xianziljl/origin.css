import { NumStyle } from '../../interfaces/styles';
import { INT_REG_STR } from '../../shared/const';
import { getNumStyles } from '../../shared/utils';

const REG = new RegExp(`^z-${INT_REG_STR}$`);
const TEMPLATE = 'z-index: {n};';

export default function zIndex(classNames: Set<string>): NumStyle[] {
    return getNumStyles(classNames, REG, TEMPLATE);
}