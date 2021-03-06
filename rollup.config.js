// import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
// import serve from 'rollup-plugin-serve'
// import livereload from 'rollup-plugin-livereload'

export default [{
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'cjs'
    },
    plugins: [
        // resolve(),
        typescript(),
        // serve({ port: 3001 }),
        // livereload()
    ]
}]