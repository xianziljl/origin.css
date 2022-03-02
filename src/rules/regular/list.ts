
const REGULAR_LISR: [string, string][] = [
    // position
    ['pr', 'position: relative;'],
    ['pa', 'position: absolute;'],
    ['pf', 'position: fixed;'],
    ['ps', 'position: sticky;'],

    // display
    ['dn', 'display: none;'],
    ['db', 'display: block;'],
    ['di', 'display: inline;'],
    ['dib', 'display: inline-block;'],

    ['ct', 'display: flex;align-items: center;justify-content: center;'],

    // grid
    ['gr', 'display: grid;grid-auto-flow: row;'],
    ['gc', 'display: grid;grid-auto-flow: column;'],
    ['igr', 'display: inline-grid;grid-auto-flow: row;'],
    ['igc', 'display: inline-grid;grid-auto-flow: column;'],

    // flex
    ['fr', 'display: flex;flex-direction: row;'],
    ['fc', 'display: flex;flex-direction: column;'],
    ['ifr', 'display: inline-flex;flex-direction: row;'],
    ['ifc', 'display: inline-flex;flex-direction: column;'],

    // align
    ['ac', 'align-items: center;'],
    ['as', 'align-items: flex-start;'],
    ['ae', 'align-items: flex-end;'],

    // justify
    ['jc', 'justify-content: center;'],
    ['js', 'justify-content: flex-start;'],
    ['je', 'justify-content: flex-end;'],
    ['jsb', 'justify-content: space-between;'],

    // text align
    ['tc', 'text-align: center;'],
    ['tl', 'text-align: left;'],
    ['tr', 'text-align: right;'],

    // visibility
    ['vh', 'visibility: hidden;'],
    ['vv', 'visibility: visible;'],

    // overflow
    ['oh', 'overflow: hidden;'],
    ['oa', 'overflow: auto;'],
    ['oxa', 'overflow-x: auto;'],
    ['oya', 'overflow-y: auto;'],

    // background
    ['bg-cover', 'background-size: cover;'],
    ['bg-contain', 'background-size: contain;'],
    ['bg-full', 'background-size: 100% 100%;'],

    // object fit
    ['fit-cover', 'object-fit: cover;'],
    ['fit-contain', 'object-fit: contain;'],
    ['fit-fill', 'object-fit: fill;'],

    // border radius
    ['rd-full', 'border-radius: 100%;'],
    ['rt-full', 'border-top-left-radius: 100%;border-top-right-radius: 100%;'],
    ['rr-full', 'border-top-right-radius: 100%;border-bottom-right-radius: 100%;'],
    ['rb-full', 'border-bottom-left-radius: 100%;border-bottom-right-radius: 100%;'],
    ['rl-full', 'border-top-left-radius: 100%;border-bottom-left-radius: 100%;'],
    ['r1-full', 'border-bottom-width: 100%'],
    ['r2-full', 'border-left-width: 100%'],
    ['r3-full', 'border-left-width: 100%'],
    ['r4-full', 'border-left-width: 100%'],

    // width height
    ['full', 'width: 100%;height: 100%;'],
    ['w-full', 'width: 100%;'],
    ['h-full', 'height: 100%;'],
    ['maxw-full', 'max-width: 100%;'],
    ['maxh-full', 'max-height: 100%;'],
    ['minw-full', 'min-width: 100%;'],
    ['minh-full', 'min-height: 100%;'],

    // margin
    ['m-auto', 'margin: auto;'],
    ['mx-auto', 'margin-left: auto;margin-right: auto;'],
    ['my-auto', 'margin-top: auto;margin-bottom: auto;'],
    ['mt-auto', 'margin-top: auto;'],
    ['mr-auto', 'margin-right: auto;'],
    ['mb-auto', 'margin-bottom: auto;'],
    ['ml-auto', 'margin-left: auto;'],

    // others
    ['ellip', 'text-overflow: ellipsis;overflow: hidden;white-space: nowrap;'],
    ['pen', 'pointer-events: none;'],
    ['pea', 'pointer-events: auto;'],
    ['usn', 'user-select: none;'],
    ['pre', 'white-space: pre-wrap;'],
    ['tlf', 'table-layout: fixed;'],
    ['a', 'cursor: pointer;'],
    ['i', 'font-style: itallic;'],
    ['b', 'font-weight: bold;'],
    ['s', 'text-decoration: line-through;'],
    ['u', 'text-decoration: underline;'],
]

export default REGULAR_LISR
