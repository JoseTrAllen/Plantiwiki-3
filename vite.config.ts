import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // Esto indica que la raíz del proyecto es el directorio actual
  build: {
    outDir: "dist", // Los archivos construidos se colocarán en la carpeta 'dist'
    rollupOptions: {
      input: {
        main: "index.html", // Archivo principal en la raíz
        register: "src/userRegister/register.html", // El archivo register estará en src/userRegister
      },
    },
  },
});
