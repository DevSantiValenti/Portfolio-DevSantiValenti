import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        projects: resolve(__dirname, "proyectos.html"),
        sonriePlus: resolve(__dirname, "proyectos/sonrie-plus.html"),
        turneroFacil: resolve(__dirname, "proyectos/turnero-facil.html"),
        gimnasios: resolve(__dirname, "proyectos/gimnasios.html"),
        electrodentalnea: resolve(__dirname, "proyectos/electrodentalnea.html"),
        denttech: resolve(__dirname, "proyectos/denttech.html")
      }
    }
  }
});
