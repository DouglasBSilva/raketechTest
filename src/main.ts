import './style.css'
import App from './App.vue'
import routes from './routes'
import viteSSR, { ClientOnly } from 'vite-ssr'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'

export default viteSSR(
  App,
  { routes },
  ({ app }) => {
    const head = createHead()
    const pinia = createPinia()
    app.use(head)
    app.use(pinia)
    return { head }
  }
)