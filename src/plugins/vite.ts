import { Origincss } from '../Origincss';
import { Plugin } from 'vite';
import { OrigincssConfig } from '../interfaces/config';

export function origincssVitePlugin(config?: OrigincssConfig) {
    const virtualModuleId = 'virtual:origin.css';
    const encodedVirtualModuleId = '/@id/' + virtualModuleId;
    const origincss = new Origincss(config);
    const plugin: Plugin = {
        name: "origincss-vite",
        enforce: 'pre',
        resolveId(id: string) {
            if (id === virtualModuleId) {
                return encodedVirtualModuleId;
            }
        },
        load(id) {
            if (id === encodedVirtualModuleId) {
                return origincss.updateAll();
            }
        },
        configureServer(_server) {
            _server.watcher.add(virtualModuleId);
        },
        handleHotUpdate({ server }) {
            const m = server.moduleGraph.getModuleById(encodedVirtualModuleId);
            if (m == null) {
                return;
            }
            server.moduleGraph.invalidateModule(m);
            server.ws.send({
                type: 'update',
                updates: [{
                    type: 'js-update',
                    timestamp: +Date.now() + 1,
                    path: encodedVirtualModuleId,
                    acceptedPath: encodedVirtualModuleId,
                }]
            });
        }
    };
    return plugin;
}