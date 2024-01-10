import { defineStore } from "pinia";

const getSettings = () => {
  const theme = localStorage.getItem('theme') || 'dark-theme';
  return theme
}

export const useThemeStore = defineStore('ThemeStore', {
    state: () => ({
        theme: getSettings(),
      }),
      actions: {
        setTheme(newTheme) {
            this.theme = newTheme;
            localStorage.setItem('theme', newTheme);
            console.log('setTheme', newTheme);
        },
      },
    });