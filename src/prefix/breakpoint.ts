import { getPrefixStyle } from '.';
import { BreakPointStyle } from '../interfaces/styles';

const DEFAULT_BREAKPOINTS = {
    xl: 1920,
    lg: 1366,
    md: 992,
    sm: 768,
    xs: 576
};

export default function breakpoint(classNames: Set<string>, breakpointMap = DEFAULT_BREAKPOINTS): BreakPointStyle[] {
    const keys = Object.keys(breakpointMap);
    const res = keys.map(k => {
        const value = breakpointMap[k];
        const style = getPrefixStyle(classNames, k);
        return { value, ...style };
    }).filter(item => item.styles.length || item.status.length);
    return res;
}

