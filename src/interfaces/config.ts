export interface Config {
  pattern?: string,
  classes?: [string, string][],
  colors?: { [propName: string]: string[] },
  breakpoints?: { [propName: string]: number },
  scopes?: string[]
}
