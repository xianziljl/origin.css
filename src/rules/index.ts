import { RegularStyle } from '../interfaces/styles';
import colors from './colors';
import border from './numbers/border';
import filter from './numbers/filter';
import flex from './numbers/flex';
import font from './numbers/font';
import grid from './numbers/grid';
import height from './numbers/height';
import margin from './numbers/margin';
import opacity from './numbers/opacity';
import padding from './numbers/padding';
import ring from './numbers/ring';
import transform from './numbers/transform';
import width from './numbers/width';
import zIndex from './numbers/z-index';
import location from './numbers/location';
import regular from './regular';


const list = [
    regular,
    location,
    width,
    height,
    margin,
    padding,
    font,
    flex,
    grid,
    colors, // colors 需要放在用到颜色的样式之前
    border,
    ring,
    opacity,
    zIndex,
    transform,
    filter
];

export default function rules(classNames: Set<string>): RegularStyle[] {
    let res = [];
    list.forEach(fn => {
        const styles = fn(classNames);
        res = res.concat(styles);
    });
    return res;
}