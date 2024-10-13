import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import VueIconsResolver from "@kalimahapps/vue-icons/resolver";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VueIconsResolver],
    }),
  ],
});
