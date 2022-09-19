import { NumStyle } from '../../interfaces/styles';
import { INT_REG_STR, NREG, NUM_REG, VREG } from '../../shared/const';
import { pipeClassNames } from '../../shared/utils';

const MAP = new Map<RegExp, string>([
    [new RegExp(`^o-${INT_REG_STR}$`), 'opacity: {v};'],
    // color opacity
    [new RegExp(`^co-${INT_REG_STR}$`), '--c-o: {v};'],
    // bg opacity
    [new RegExp(`^bgo-${INT_REG_STR}$`), '--bg-o: {v};'],
    // border opacity
    [new RegExp(`^bdo-${INT_REG_STR}$`), '--bt-o: {v};--br-o: {v};--bb-o: {v};--bl-o: {v};'],
    [new RegExp(`^bxo-${INT_REG_STR}$`), '--bl-o: {v};--br-o: {v};'],
    [new RegExp(`^byo-${INT_REG_STR}$`), '--bt-o: {v};--bb-o: {v};'],
    [new RegExp(`^bto-${INT_REG_STR}$`), '--bt-o: {v};'],
    [new RegExp(`^bro-${INT_REG_STR}$`), '--br-o: {v};'],
    [new RegExp(`^bbo-${INT_REG_STR}$`), '--bb-o: {v};'],
    [new RegExp(`^blo-${INT_REG_STR}$`), '--bl-o: {v};'],
    // ring
    [new RegExp(`^ringo-${INT_REG_STR}$`), '--ring-o: {v};'],
]);

export default function opacity(classNames: Set<string>): NumStyle[] {
    let res: NumStyle[] = [];
    // console.log(MAP)
    MAP.forEach((template, reg) => {
        const names = Array.from(pipeClassNames(classNames, reg));
        // console.log('names', names)
        const result: NumStyle[] = names.map(name => {
            const num = (~~NUM_REG.exec(name)[0]) || 0;
            if (num > 100) return null;

            const val = num / 100;
            const style = template
                .replace(NREG, num.toString())
                .replace(VREG, val.toString());
            return { name, num, val, style };
        });
        const arr = result.filter(Boolean).sort((a, b) => a.num - b.num);
        res = res.concat(arr);
    });
    return res;
}