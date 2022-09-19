import { getPrefixStyle } from '.';
import { ScopeStyle } from '../interfaces/styles';

const DEFAULT_SCOPEAS = ['dk'];

export default function scope(classNames: Set<string>, scopes: string[] = DEFAULT_SCOPEAS): ScopeStyle[] {
    return scopes
        .map(k => getPrefixStyle(classNames, k))
        .filter(item => item.styles.length || item.status.length);
}