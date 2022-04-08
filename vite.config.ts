import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  base: "/solidjs-tailwinds-hello-world/",
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
