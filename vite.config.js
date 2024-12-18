import pug from '@vituum/vite-plugin-pug';
import { defineConfig } from 'vite';
import beautify from 'vite-plugin-beautify';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import vituum from 'vituum';

export default defineConfig({
  css: {
    devSourcemap: true,
  },
  build: {
    assetsInlineLimit: 0,
    cssMinify: false,
    emptyOutDir: true,
    modulePreload: {
      polyfill: false,
    },
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/[name].js',
        assetFileNames: ({ names, originalFileNames }) => {
          if (originalFileNames.length) {
            const originalPath = originalFileNames[0].replace(/src\/(images|styles)\//, '');

            if (/\.(css)$/.test(names)) {
              return `assets/css/${originalPath}`;
            }

            if (/\.(jpg|jpeg|svg|png|webp|gif)$/.test(names)) {
              return `assets/images/${originalPath}`;
            }
          }

          return 'assets/other/[name][extname]';
        },
      },
    },
  },
  plugins: [
    vituum({
      input: ['./src/styles/**/*.{css,scss}', './src/scripts/main.{js,ts}'],
      imports: {
        paths: []
      },
    }),
    pug(),
    ViteImageOptimizer({
      png: { quality: 75 },
      jpeg: { quality: 75 },
      jpg: { quality: 75 },
    }),
    beautify({
      inDir: './dist',
      html: {
        enabled: true,
        glob: '**/*.html',
        options: {
          indent_size: 2,
          inline: [],
          content_unformatted: ['pre', 'textarea', 'script'],
        },
      },
      js: {
        enabled: false,
      },
      css: {
        enabled: false,
      },
    }),
  ],
});
