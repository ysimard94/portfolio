<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useThemeStore } from "@/store/ThemeStore";
import { useLocaleStore } from "@/store/LocaleStore";

const themeStore = useThemeStore();
const LocaleStore = useLocaleStore();

if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "dark-theme");
}

function changeTheme() {
    if (themeStore.theme === "light-theme") {
        themeStore.setTheme("dark-theme");
        console.log(themeStore.theme);
    } else {
        themeStore.setTheme("light-theme");
        console.log(themeStore.theme);
    }
}
</script>

<template>
    <header>
        <div class="wrapper">
            <div class="settings">
                <button
                    @click="changeTheme('light-theme')"
                    v-if="themeStore.theme === 'dark-theme'"
                >
                    <!-- Icon from https://heroicons.dev/ -->
                    <svg
                        data-slot="icon"
                        aria-hidden="true"
                        fill="none"
                        stroke-width="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </button>
                <button
                    @click="changeTheme('dark-theme')"
                    v-if="themeStore.theme === 'light-theme'"
                >
                    <!-- Icon from https://heroicons.dev/ -->
                    <svg
                        data-slot="icon"
                        data-darkreader-inline-stroke=""
                        aria-hidden="true"
                        fill="none"
                        stroke-width="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </button>
                <button
                    @click="
                        $i18n.locale = 'FR';
                        LocaleStore.setLocale('FR');
                    "
                    v-if="$i18n.locale === 'EN'"
                >
                    FR
                </button>
                <button
                    @click="
                        $i18n.locale = 'EN';
                        LocaleStore.setLocale('EN');
                    "
                    v-if="$i18n.locale === 'FR'"
                >
                    EN
                </button>
            </div>
            <nav>
                <RouterLink to="/">{{ $t("nav.home") }}</RouterLink>
                <RouterLink to="/about">{{ $t("nav.about") }}</RouterLink>
                <RouterLink to="/portfolio">{{
                    $t("nav.portfolio")
                }}</RouterLink>
                <RouterLink to="/contact">{{ $t("nav.contact") }}</RouterLink>
            </nav>
        </div>
    </header>
</template>
