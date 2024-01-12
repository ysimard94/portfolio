<script setup>
import { RouterLink } from "vue-router";
import { useThemeStore } from "@/store/ThemeStore";
import { useLocaleStore } from "@/store/LocaleStore";

const themeStore = useThemeStore();
const localeStore = useLocaleStore();
</script>

<template>
    <header>
        <div class="wrapper">
            <div class="settings">
                <button
                    @click="themeStore.setTheme('light-theme')"
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
                    @click="themeStore.setTheme('dark-theme')"
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
                        localeStore.setLocale('FR');
                    "
                    v-if="$i18n.locale === 'EN'"
                >
                    FR
                </button>
                <button
                    @click="
                        $i18n.locale = 'EN';
                        localeStore.setLocale('EN');
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

<style scoped>
header {
    background-color: var(--background-color-nav);
    line-height: 1.5;
    max-height: 100svh;
    min-width: 350px;
    color: var(--color-primary);
}

.settings {
    display: flex;
    justify-items: center;
    justify-content: space-between;
    padding-right: 75px;
}

.settings button {
    height: 32px;
    width: 32px;
}

svg path {
    fill: transparent;
    transition: fill 300ms;
}

button:hover svg path {
    fill: currentColor;
    transition: fill 300ms;
}

button {
    background-color: transparent;
    border: 0;
    color: var(--color-primary);
    cursor: pointer;
    font-size: 1rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a:first-of-type {
    border: 0;
}

nav a {
    display: block;
    position: relative;
    transition: 300ms;
    z-index: 2;
}

nav a:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ff497c;
    transition: 300ms;
    transform-origin: right;
    transform: scaleX(0);
    z-index: -1;
}

nav a:hover:before {
    transition: transform 300ms;
    transform-origin: left;
    transform: scaleX(1);
}

nav a:hover {
    color: white;
    letter-spacing: 2px;
}
</style>
