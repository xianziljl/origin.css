import glob from 'glob';
import { readFileSync } from 'fs';
import { NumStyle } from '../interfaces/styles';
import { NUM_REG, NREG, UNIT_REG, UREG } from './const';

const REG = /[a-z]([a-z0-9-:%.]+)?/g;
const ENCODING = 'utf-8';

export function scanFiles(pattern: string): string[] {
    return glob.sync(pattern, {});
}

export function scanFileClassNames(file: string): Set<string> {
    const data = readFileSync(file, ENCODING);
    return new Set(data.match(REG));
}

export function scanAllClassNames(pattern: string): Set<string> {
    const res = new Set<string>();
    const files = scanFiles(pattern);
    console.log('files: ', files.length);
    files.forEach(file => {
        const classNames = scanFileClassNames(file);
        for (let s of classNames) res.add(s);
    });
    console.log('class: ', res.size);
    return res;
}


export function pipeClassNames(classNames: Set<string>, reg: RegExp): Set<string> {
    const res = new Set<string>();
    for (let str of classNames) {
        if (reg.test(str)) {
            res.add(str);
            classNames.delete(str);
        }
    }
    return res;
}

export function setNU(template: string, n: number, u: string) {
    return template.replace(NREG, n.toString()).replace(UREG, u);
}


export function getNumStyles(classNames: Set<string>, reg: RegExp, template: string, defaultUnit = '', float = false): NumStyle[] {
    const names = Array.from(pipeClassNames(classNames, reg));
    const result = names.map(name => {
        const numStr = NUM_REG.exec(name)[0];
        const num = float ? Number(numStr) : ~~numStr;
        const unit = UNIT_REG.exec(name)?.[0] ?? defaultUnit;
        const style = setNU(template, num, unit);
        return { name, num, unit, style };
    });
    return result.filter(Boolean).sort((a, b) => a.num - b.num);
}

export function formatName(name: string): string {
    return name
        .replace(/\./g, '\\.')
        .replace(/%/g, '\\%')
        .replace(/:/g, '\\:');
}