import { NumStyle } from '../../interfaces/styles';
import { PX, VAL_REG_STR, INT_REG_STR } from '../../shared/const';
import { getNumStyles } from '../../shared/utils';

const MAP = new Map<RegExp, string>([
    [new RegExp(`^fs-${VAL_REG_STR}$`), 'font-size: {n}{u};'],
    [new RegExp(`^lh-${VAL_REG_STR}$`), 'line-height: {n}{u};'],
    [new RegExp(`^fw-${INT_REG_STR}$`), 'font-weight: {n};']
]);

export default function font(classNames: Set<string>): NumStyle[] {
    let res = [];
    MAP.forEach((template, reg) => {
        const style = getNumStyles(classNames, reg, template, PX, true);
        res = res.concat(style);
    });
    return res;
}