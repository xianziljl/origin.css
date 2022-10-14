export type BreakPointConfig = { [propName: string]: number; };

export type ColorsConfig = { [propName: string]: string[]; }

export interface Config {
  pattern?: string,
  classes?: string[],
  colors?: ColorsConfig,
  breakpoints?: BreakPointConfig,
  scopes?: string[];
}
