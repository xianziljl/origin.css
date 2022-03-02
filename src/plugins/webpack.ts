import VirtualModulesPlugin from 'webpack-virtual-modules'
import Origincss from '../Origincss'
import path from 'path'

class OrigincssPlugin {
    times = 0
    virtualModules: VirtualModulesPlugin = null
    path: string
    origincss: Origincss

    constructor() {
        const _path = path.join(process.cwd(), 'node_modules', 'origin.less')
        this.path = _path
        this.origincss = new Origincss()
        this.virtualModules = new VirtualModulesPlugin({
            [_path]: this.origincss.updateAll(),
        })
    }
    apply(compiler) {
        this.virtualModules.apply(compiler)

        compiler.hooks.watchRun.tap('OrigincssPlugin', compilation => {
            try {
                const {mtimes} = compiler.watchFileSystem.watcher
                if (mtimes[this.path]) {
                    return
                }

                const files = Object.keys(mtimes)
                const cssContent = this.origincss.updateFiles(files)
                this.virtualModules.writeModule(this.path, cssContent)
                mtimes[this.path] = Date.now()
            }
            catch (e) {
                compilation.errors.push(e)
            }
        })
    }
}

export default OrigincssPlugin