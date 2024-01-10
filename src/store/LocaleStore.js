import { defineStore } from "pinia";

const getSettings = () => {
  const locale = localStorage.getItem('locale') || 'FR';
  return locale
}

export const useLocaleStore = defineStore('LocaleStore', {
  state: () => ({
    locale: getSettings(),
  }),
  actions: {
    setLocale(language) {
      this.locale = language;
      localStorage.setItem('locale', language);
      console.log('setLocale', language);
    },
  },
});