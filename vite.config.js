import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
/*AQUI AGREGAR EL SIGUIENTE CODIGO*/
base: "/LucasA75/ParallaxReactPrueba/" 

})