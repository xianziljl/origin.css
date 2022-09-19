import { NumStyle } from '../../interfaces/styles';
import { INT_REG_STR, PX } from '../../shared/const';
import { getNumStyles } from '../../shared/utils';

const REG = new RegExp(`^ring-${INT_REG_STR}$`);
const TEMPLATE = '--ring-size: {n}px;';

export default function ring(classNames: Set<string>): NumStyle[] {
    return getNumStyles(classNames, REG, TEMPLATE);
}