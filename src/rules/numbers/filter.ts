import { NumStyle } from '../../interfaces/styles';
import { INT_REG_STR } from '../../shared/const';
import { getNumStyles } from '../../shared/utils';

const MAP = new Map<RegExp, string>([
    [new RegExp(`^gray-${INT_REG_STR}`), 'filter: grayscale({n}%);'],
    [new RegExp(`^hue-${INT_REG_STR}`), 'filter: hue-rotate({n}deg);'],
    [new RegExp(`^blur-${INT_REG_STR}`), 'filter: blur({n}px);'],
    [new RegExp(`^contrast-${INT_REG_STR}`), 'filter: contrast({n}%);'],
    [new RegExp(`^sepia-${INT_REG_STR}`), 'filter: sepia({n}%);'],
    [new RegExp(`^invert-${INT_REG_STR}`), 'filter: invert({n}%);'],
    [new RegExp(`^bright-${INT_REG_STR}`), 'filter: brightness({n}%);'],
]);

export default function filter(classNames: Set<string>): NumStyle[] {
    let res = [];
    MAP.forEach((template, reg) => {
        const style = getNumStyles(classNames, reg, template);
        res = res.concat(style);
    });
    return res;
}