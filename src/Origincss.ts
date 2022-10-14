import { BreakPointConfig, Config } from './interfaces/config';
import { BreakPointStyle, RegularStyle, ScopeStyle, StateStyle, StyleRaw } from './interfaces/styles';
import { sync as globSync } from 'glob';
import { readFileSync, writeFileSync } from 'fs';
import { ENCODING, REG } from './shared/const';
import { formatName } from './shared/utils';
import { init } from './rules/regular/init';
import COLORS from './rules/colors/list';
import prefix from './prefix';
import rules from './rules';

const DEFAULT_PATTERN = '{{src,public}/**/*,*}.{html,vue,js,jsx,ts,tsx}';

export class Origincss {
    pattern = DEFAULT_PATTERN;
    regulars: [string, string][];
    colors: { [propName: string]: string[]; };
    breakpoints: BreakPointConfig;
    scopes: string[];

    blackList: Set<string> = new Set();
    classNames: Set<string> = new Set();

    constructor(config?: Config) {
        if (config) {
            const { pattern, classes, colors } = config;
            if (pattern) this.pattern = pattern;
            if (classes) classes.forEach(item => this.classNames.add(item));
            if (colors) {
                for (let key in colors) {
                    COLORS[key] = colors[key];
                }
            }
            this.colors = COLORS;
            this.breakpoints = config.breakpoints;
            this.scopes = config.scopes;
        }
    }

    private scanAll() {
        const { pattern } = this;
        // console.log(pattern)
        const files = globSync(pattern, {});
        files.forEach(file => this.scanFile(file));
        // writeFileSync('classnames.txt', Array.from(this.classNames).join('\n'), ENCODING)
    }

    private scanFile(file: string) {
        const { blackList } = this;
        const data = readFileSync(file, ENCODING);
        const classNames = new Set(data.match(REG));
        for (let s of classNames) {
            if (!blackList.has(s)) this.classNames.add(s);
        }
    }

    private generate(): StyleRaw {
        const { classNames, blackList } = this;
        const _classNames = new Set(classNames);
        const styles = rules(_classNames);
        const prefixStyles = prefix(_classNames, this.breakpoints, this.scopes);

        for (let s of _classNames) {
            // 经过所有 rules 都未命中，加入黑名单
            blackList.add(s);
            classNames.delete(s);
        }
        return { styles, ...prefixStyles };
    }

    private getStyleResult(styles: RegularStyle[]): string[] {
        return styles.map(({ name, style }) => `.${formatName(name)} { ${style} }`);
    }

    private getStateResult(stateStyles: StateStyle[]): string[] {
        const res = [];
        stateStyles.forEach(({ styles, pre, state }) => {
            styles.forEach(({ name, style }) => {
                res.push(`.${formatName(pre + ':' + name)}${state} { ${style} }`);
            });
        });
        return res;
    }

    private getBreakpointResult(breakpointStyles: BreakPointStyle[]): string[] {
        const res = [];
        breakpointStyles.forEach(({ pre, value, styles, status }) => {
            res.push(`@media screen and (max-width: ${value}px) {`);
            styles.forEach(({ name, style }) => {
                res.push(`    .${formatName(pre + ':' + name)} { ${style} }`);
            });
            status.forEach((state) => {
                state.styles.forEach(({ name, style }) => {
                    res.push(`    .${formatName(pre + ':' + state.pre + ':' + name)}${state.state} { ${style} }`);
                });
            });
            res.push('}');
        });
        if (res.length) {
            res.unshift('/* breakpoints */');
        }
        return res;
    }

    private getScopeResult(scopeStyles: ScopeStyle[]): string[] {
        const res = [];
        scopeStyles.forEach(({ pre, styles, status }) => {
            styles.forEach(({ name, style }) => {
                res.push(`.${pre} .${formatName(pre + ':' + name)} { ${style} }`);
            });
            status.forEach((state) => {
                state.styles.forEach(({ name, style }) => {
                    res.push(`.${pre} .${formatName(pre + ':' + state.pre + ':' + name)}${state.state} { ${style} }`);
                });
            });
        });
        if (res.length) {
            res.unshift('/* scopes */');
        }
        return res;
    }


    private getResult(): string {
        const styleRaw = this.generate();
        const { styles, status, breakpoints, scopes } = styleRaw;
        let res: string[] = [init];
        const styleRes = this.getStyleResult(styles);
        const stateRes = this.getStateResult(status);
        const scopeRes = this.getScopeResult(scopes);
        const breakpointRes = this.getBreakpointResult(breakpoints);
        res = res.concat(styleRes, stateRes, scopeRes, breakpointRes);
        return res.join('\n');
    }

    updateAll(): string {
        this.scanAll();
        return this.getResult();
    }

    updateFiles(files: string[]): string {
        files.forEach(file => this.scanFile(file));
        // console.log('scanfile', files);
        return this.getResult();
    }
}
