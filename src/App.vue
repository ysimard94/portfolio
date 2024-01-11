<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useThemeStore } from "./store/ThemeStore";
import { useLocaleStore } from "./store/LocaleStore";

const themeStore = useThemeStore();

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
    <header :class="{ 'light-theme': themeStore.theme == 'light-theme' }">
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
                    @click="$i18n.locale = 'FR'"
                    v-if="$i18n.locale === 'EN'"
                >
                    FR
                </button>
                <button
                    @click="$i18n.locale = 'EN'"
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
            </nav>
        </div>
    </header>
    <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
            <component
                :is="Component"
                :key="$route.path"
                :class="{ 'light-theme': themeStore.theme == 'light-theme' }"
                class="container"
            ></component>
        </transition>
    </router-view>
</template>

<style>
:root {
    --background-color-primary: hsl(0, 0%, 10%);
    --background-color-nav: hsl(0, 0%, 7%);
    --background-color-secondary: #41b883;
    --color-primary: #fff;
    --color-secondary: #35495e;
    --color-text: #fff;
    --color-border: #35495e;
}

header {
    background-color: var(--background-color-primary);
    line-height: 1.5;
    max-height: 100vh;
    color: var(--color-primary);
}

.container {
    height: fit-content;
    width: 100%;
    margin-block: auto;
    margin-inline: auto;
    padding-inline: 100px;
}

.light-theme {
    --background-color-primary: #f7f6f6;
    --background-color-nav: hsl(0, 0%, 10%);
    --background-color-secondary: #cecece;
    --color-primary: #35495e;
    --color-secondary: #41b883;
    --color-text: #35495e;
    --color-border: #eee;
}

.settings {
    display: flex;
    justify-items: center;
    justify-content: space-between;
    padding-right: 100px;
}

.settings button {
    height: 32px;
    width: 32px;
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

/*------------- View animation  --------------*/

.slide-enter-active,
.slide-leave-active {
    transition:
        opacity 400ms,
        transform 400ms;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateX(20%);
}

@media (min-width: 1024px) {
    header {
        display: flex;
        height: 100vh;
        width: 450px;
        align-items: center;
    }

    .settings {
        margin-top: 2rem;
    }

    .wrapper {
        display: grid;
        height: 100%;
        width: 100%;
        padding-left: 100px;
    }

    nav {
        display: grid;
        height: fit-content;
        width: fit-content;
        text-align: left;
        padding-bottom: 2rem;
        font-size: 1.125rem;
    }
}
</style>
