import pug from "@vituum/vite-plugin-pug";
import { defineConfig } from "vite";
import vituum from "vituum";

export default defineConfig({
  build: {
    // minify: false,
    cssMinify: false,
    assetsInlineLimit: 0,
    polyfillModulePreload: false,
    rollupOptions: {
      output: {
        entryFileNames: "assets/js/[name].js",
        assetFileNames: ({ names }) => {
          if (/\.css$/.test(names)) {
            return "assets/css/[name][extname]";
          }
          if (/\.(jpg|jpeg|svg|png|webp|gif)$/.test(names)) {
            return "assets/images/[name][extname]";
          }

          return "assets/other/[name][extname]";
        },
      },
    },
  },
  plugins: [
    vituum(),
    pug({
      options: {
        pretty: true,
      },
    }),
  ],
});
