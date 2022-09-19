import { NumStyle } from '../../interfaces/styles';
import { PX, VAL_REG_STR } from '../../shared/const';
import { getNumStyles } from '../../shared/utils';

const MAP = new Map<RegExp, string>([
    [new RegExp(`^fs-${VAL_REG_STR}$`), 'font-size: {n}{u};'],
    [new RegExp(`^lh-${VAL_REG_STR}$`), 'line-height: {n}{u};']
]);

export default function font(classNames: Set<string>): NumStyle[] {
    let res = [];
    MAP.forEach((template, reg) => {
        const style = getNumStyles(classNames, reg, template, PX);
        res = res.concat(style);
    });
    return res;
}