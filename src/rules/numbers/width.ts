import { NumStyle } from '../../interfaces/styles';
import { PX, VAL_REG_STR } from '../../shared/const';
import { getNumStyles } from '../../shared/utils';

const MAP = new Map<RegExp, string>([
    [new RegExp(`^w-${VAL_REG_STR}$`), 'width: {n}{u};'],
    [new RegExp(`^maxw-${VAL_REG_STR}$`), 'max-width: {n}{u};'],
    [new RegExp(`^minw-${VAL_REG_STR}$`), 'min-width: {n}{u};']
]);

export default function width(classNames: Set<string>): NumStyle[] {
    let res = [];
    MAP.forEach((template, reg) => {
        const style = getNumStyles(classNames, reg, template, PX);
        res = res.concat(style);
    });
    return res;
}