// import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
// import serve from 'rollup-plugin-serve'
// import livereload from 'rollup-plugin-livereload'

export default [{
    input: 'src/index.ts',
    output: {
        dir: 'dist',
        format: 'esm'
    },
    plugins: [
        typescript({ target: 'ES2017' }),
        // resolve(),
        // serve({ port: 3001 }),
        // livereload()
    ]
}]