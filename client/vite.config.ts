import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/client_sistemas/', // ¡Asegúrate de incluir el slash al inicio y final!
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    manifest: true, // Genera manifest.json para producción
  }
});