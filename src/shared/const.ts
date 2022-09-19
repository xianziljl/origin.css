export const UNIT_REG_STR = '(px|em|rem|vw|vh|%)';

export const NUM_REG_STR = '([0-9]+(.[0-9]+)?)';

export const INT_REG_STR = '([0-9]+)';

export const PX = 'px';

export const VAL_REG_STR = `${NUM_REG_STR}${UNIT_REG_STR}?`;

// export const INT_REG_STR = '([0-9]+)'


export const UNIT_REG = new RegExp(`${UNIT_REG_STR}$`);

export const NUM_REG = new RegExp(NUM_REG_STR);

// export const INT_REG = new RegExp(INT_REG_STR)

export const UREG = /\{u\}/g;
export const NREG = /\{n\}/g;
export const VREG = /\{v\}/g;


export const REG = /[a-z]([a-z0-9-:%.]+)?/g;
export const ENCODING = 'utf-8';