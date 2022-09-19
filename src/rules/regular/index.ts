import { RegularStyle } from '../../interfaces/styles';
import REGULAR_LISR from './list';


export default function regular(classNames: Set<string>, list = REGULAR_LISR): RegularStyle[] {
    const res: RegularStyle[] = [];
    const map = new Map(list);
    map.forEach((style, name) => {
        if (classNames.has(name)) {
            classNames.delete(name);
            res.push({ name, style });
        }
    });
    return res;
}