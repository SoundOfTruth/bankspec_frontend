import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: true,
      resolvers: [],
      dirs: ["./src/**"],
      vueTemplate: true,
      eslintrc: {
        enabled: true,
      },
    }),
  ],
});
