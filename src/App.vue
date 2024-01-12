<script setup>
import Navigation from "./components/Navigation.vue";
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
    <div
        class="container"
        :class="{
            'light-theme': themeStore.theme == 'light-theme',
        }"
    >
        <Navigation />
        <router-view v-slot="{ Component }">
            <transition name="slide" mode="out-in">
                <component
                    :is="Component"
                    :key="$route.path"
                    class="container"
                ></component>
            </transition>
        </router-view>
    </div>
</template>

<style>
:root {
    --background-color-primary: hsl(0, 0%, 10%);
    --background-color-nav: hsl(0, 0%, 7%);
    --background-color-secondary: #41b883;
    --color-primary: #fff;
    --color-secondary: #35495e;
    --color-text: hsl(0, 0%, 90%);
    --color-border: #35495e;
}

.light-theme {
    --background-color-primary: hsl(0, 0%, 100%);
    --background-color-nav: hsl(0, 0%, 95%);
    --background-color-secondary: #cecece;
    --color-primary: #35495e;
    --color-secondary: #41b883;
    --color-text: #35495e;
    --color-border: #eee;
}

.container {
    display: flex;
    background-color: var(--background-color-primary);
    color: var(--color-text);
    height: fit-content;
    width: 100%;
    height: 100svh;
}

header {
    background-color: var(--background-color-nav);
    line-height: 1.5;
    max-height: 100vh;
    min-width: 400px;
    color: var(--color-primary);
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

main {
    display: flex;
    align-items: center;
    margin: auto;
    padding-inline: 2rem;
    max-width: 850px;
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
        width: 400px;
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
