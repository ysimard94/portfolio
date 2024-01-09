import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import FR from './locale/fr.json'
import EN from './locale/en.json'
import App from './App.vue'
import router from './router'

const i18n = createI18n({
  locale: localStorage.getItem('locale') || 'FR',
  messages: {
    FR: FR,
    EN: EN,
  }
})

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
