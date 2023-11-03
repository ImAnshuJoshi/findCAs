import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactScroll from 'vite-plugin-react-scroll';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactScroll()],
});