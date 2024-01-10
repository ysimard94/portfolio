import "./assets/main.css";

import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import { createPinia } from "pinia";
import { useLocaleStore } from "./store/LocaleStore";
import FR from "./locale/fr.json";
import EN from "./locale/en.json";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);

const i18n = createI18n({
    legacy: false,
    locale: useLocaleStore().locale,
    messages: {
        FR: FR,
        EN: EN,
    },
});

app.use(router);
app.use(i18n);
app.mount("#app");
