import {defineConfig} from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import path from 'path';
import fs from 'fs';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(async () => {
  const {viteStaticCopy} = await import('vite-plugin-static-copy');
  return {
    build: {
      target: 'esnext',
    },
    assetsInclude: ['**/*.wasm', '**/*.onnx'],
    optimizeDeps: {
      exclude: ['onnxruntime-web'],
    },
    plugins: [
      basicSsl(),
      viteStaticCopy({
        targets: [
          {
            src: 'node_modules/onnxruntime-web/dist/*.wasm',
            dest: '.',
          },
        ],
      }),
    // In dev, serve onnxruntime-web .wasm from node_modules so requests get the binary, not SPA HTML
    {
      name: 'serve-ort-wasm',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.match(/\/ort-.*\.wasm$/)) {
            const name = path.basename(req.url);
            const file = path.join(__dirname, 'node_modules/onnxruntime-web/dist', name);
            res.setHeader('Content-Type', 'application/wasm');
            fs.createReadStream(file).pipe(res);
            return;
          }
          next();
        });
      },
    },
    ],
  };
});
