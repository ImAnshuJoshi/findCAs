import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        // Handle image imports
        {
          name: 'image-import',
          resolveId(source) {
            if (source.endsWith('.jpeg') || source.endsWith('.jpg') || source.endsWith('.png') || source.endsWith('.gif')) {
              return source; // tell Rollup this is an image
            }
            return null; // otherwise, it remains unresolved
          },
          load(id) {
            if (id.endsWith('.jpeg') || id.endsWith('.jpg') || id.endsWith('.png') || id.endsWith('.gif')) {
              return `export default import.meta.ROLLUP_FILE_URL_${id}`; // use Rollup's file loader
            }
            return null;
          },
        },
      ],
    },
  },
});
