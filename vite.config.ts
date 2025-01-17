import { defineConfig } from "vite";

export default defineConfig({
  base: "/", // Asegúrate de que sea "/" si planeas desplegar en Vercel o Netlify
  build: {
    outDir: "dist", // Carpeta donde se generan los archivos compilados
  },
});
