import { NumStyle } from '../../interfaces/styles';
import { PX, VAL_REG_STR } from '../../shared/const';
import { getNumStyles } from '../../shared/utils';

const MAP = new Map<RegExp, string>([
    [new RegExp(`^m-${VAL_REG_STR}$`), 'margin: {n}{u};'],
    [new RegExp(`^mx-${VAL_REG_STR}$`), 'margin-left: {n}{u};margin-right: {n}{u};'],
    [new RegExp(`^my-${VAL_REG_STR}$`), 'margin-top: {n}{u};margin-bottom: {n}{u};'],
    [new RegExp(`^mt-${VAL_REG_STR}$`), 'margin-top: {n}{u};'],
    [new RegExp(`^mr-${VAL_REG_STR}$`), 'margin-right: {n}{u};'],
    [new RegExp(`^mb-${VAL_REG_STR}$`), 'margin-bottom: {n}{u};'],
    [new RegExp(`^ml-${VAL_REG_STR}$`), 'margin-left: {n}{u};'],
]);

export default function margin(classNames: Set<string>): NumStyle[] {
    let res = [];
    MAP.forEach((template, reg) => {
        const style = getNumStyles(classNames, reg, template, PX);
        res = res.concat(style);
    });
    return res;
}