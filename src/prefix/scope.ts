import { getPrefixStyle } from '.';
import { ScopeStyle } from '../interfaces/styles';

const DEFAULT_SCOPEAS = ['dk'];

export default function scope(classNames: Set<string>, scopeConfig: string[] = DEFAULT_SCOPEAS): ScopeStyle[] {
    return scopeConfig
        .map(k => getPrefixStyle(classNames, k))
        .filter(item => item.styles.length || item.status.length);
}