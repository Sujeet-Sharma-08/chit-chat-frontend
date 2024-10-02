import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000   // frontend port number
  },

  build: {
    outDir: 'dist', // This is the default value
  },
  
})



