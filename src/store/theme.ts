import { defineStore } from 'pinia'

enum Themes {
    Light = "Light",
    Dark  = "Dark",
}

interface ThemeStoreProperties {
    theme: Themes
}

export const useThemeStore = defineStore("theme", {
    state: (): ThemeStoreProperties =>  ({
        theme: Themes.Light
    }),
    getters: {
      theme: ({ theme }) => theme
    }
})