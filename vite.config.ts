import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html", // Página principal
        register: "./public/register.html", // Página de registro
        login: "./public/login.html", // Página de login
      },
    },
    outDir: "dist", // Genera la salida en 'dist'
  },
});
