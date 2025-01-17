import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // Asegura que la raíz sea el directorio actual
  build: {
    outDir: "dist", // Los archivos generados irán a 'dist'
    rollupOptions: {
      input: {
        main: "index.html", // Archivo principal de la aplicación
        register: "public/register.html", // Archivo de registro
      },
    },
  },
});
