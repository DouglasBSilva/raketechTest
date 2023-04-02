import './style.css'
import App from './App.vue'
import routes from './routes'
import viteSSR, { ClientOnly } from 'vite-ssr'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { useDark, useToggle } from '@vueuse/core';

export default viteSSR(
  App,
  { routes },
  ({ app }) => {
    const head = createHead()
    const pinia = createPinia()
    app.use(head)
    app.use(pinia)

    if (import.meta.env.SSR == false) {
      const isDark = useDark();
      const toggleDark = useToggle(isDark);
      toggleDark(window.localStorage.getItem('darkMode') == '0');
    }

    return { head }
  }
)