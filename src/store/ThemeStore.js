import { defineStore } from "pinia";

const body = document.querySelector("body");

const getSettings = () => {
    const theme = localStorage.getItem("theme") || "dark-theme";
    body.classList.add(theme);
    return theme;
};

export const useThemeStore = defineStore("ThemeStore", {
    state: () => ({
        theme: getSettings(),
    }),
    actions: {
        setTheme(newTheme) {
            const oldTheme = this.theme;
            body.classList.remove(oldTheme);
            body.classList.add(newTheme);
            this.theme = newTheme;
            localStorage.setItem("theme", newTheme);
            console.log("setTheme", newTheme);
        },
    },
});
