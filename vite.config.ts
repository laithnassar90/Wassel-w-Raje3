<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // you can change this if needed
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // you can change this if needed
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
>>>>>>> 6090fceb (Initial commit of all components)
