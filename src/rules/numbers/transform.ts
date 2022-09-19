import { NumStyle } from '../../interfaces/styles';
import { NUM_REG_STR } from '../../shared/const';
import { getNumStyles } from '../../shared/utils';

const MAP = new Map<RegExp, string>([
    [new RegExp(`^scale-${NUM_REG_STR}`), 'transform: scale({n});'],
    [new RegExp(`^skew-${NUM_REG_STR}`), 'transform: skew({n}deg);'],
    [new RegExp(`^rotate-${NUM_REG_STR}`), 'transform: rotate({n}deg);'],
]);

export default function transform(classNames: Set<string>): NumStyle[] {
    let res = [];
    MAP.forEach((template, reg) => {
        const style = getNumStyles(classNames, reg, template);
        res = res.concat(style);
    });
    return res;
}