import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
// import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // react(),
    // tsconfigPaths(),
    dts({
      insertTypesEntry: true,
      // rollupTypes: true,
      // copyDtsFiles: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "DesignSystem",
      formats: ["es", "cjs"],
      fileName: "design-system",
    },
    rollupOptions: {
      external: [
        "styled-components",
        // "react",
        // "react-dom",
        // "react/jsx-runtime",
      ],
      // output: {
      //   globals: {
      //     react: "React",
      //     "react-dom": "ReactDOM",
      //     "styled-components": "styled",
      //   },
      // },
    },
  },
});
