<script setup>
import { RouterLink } from "vue-router";
import { useThemeStore } from "@/store/ThemeStore";
import { useLocaleStore } from "@/store/LocaleStore";
import { ref } from "vue";

const themeStore = useThemeStore();
const localeStore = useLocaleStore();

let menuOpen = ref(false);

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
    console.log(menuOpen);
};

const closeMenu = () => {
    menuOpen.value = false;
};
</script>

<template>
    <header>
        <div class="settings">
            <button
                @click="themeStore.setTheme('light-theme')"
                v-if="themeStore.theme === 'dark-theme'"
                aria-label="Switch to light theme"
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
                aria-label="Switch to dark theme"
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
                aria-label="Switch to french"
            >
                FR
            </button>
            <button
                @click="
                    $i18n.locale = 'EN';
                    localeStore.setLocale('EN');
                "
                v-if="$i18n.locale === 'FR'"
                aria-label="Switch to english"
            >
                EN
            </button>
            <button @click="toggleMenu()" class="hamburger-menu">
                <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4 18L20 18"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                    <path
                        d="M4 12L20 12"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                    <path
                        d="M4 6L20 6"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                </svg>
            </button>
        </div>
        <transition name="slide" mode="out-in">
            <div class="wrapper" :class="{ 'menu-open': menuOpen }">
                <nav>
                    <RouterLink
                        to="/"
                        active-class="active"
                        @click="closeMenu()"
                        >{{ $t("nav.home") }}</RouterLink
                    >
                    <RouterLink
                        to="/portfolio"
                        active-class="active"
                        @click="closeMenu()"
                        >{{ $t("nav.portfolio") }}</RouterLink
                    >
                    <RouterLink
                        to="/contact"
                        active-class="active"
                        @click="closeMenu()"
                        >{{ $t("nav.contact") }}</RouterLink
                    >
                </nav>
            </div>
        </transition>
    </header>
</template>

<style scoped>
header {
    display: grid;
    position: sticky;
    top: 0;
    height: 100dvh;
    background-color: var(--background-color-nav);
    z-index: 2;
}

.settings {
    display: flex;
    justify-items: center;
    justify-content: space-between;
    padding-inline: 75px;
    padding-block: 2rem;
}

.settings button {
    height: 32px;
    width: 32px;
}

svg path {
    fill: transparent;
    transition: fill 300ms;
}

button:hover svg path,
button:focus-visible svg path {
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

.wrapper {
    display: grid;
    height: calc(100%);
    width: 100%;
    margin-block: auto;
    padding-left: 75px;
}

nav {
    display: grid;
    height: fit-content;
    width: fit-content;
    text-align: left;
    padding-bottom: 2rem;
    font-size: 1.125rem;
}

nav a {
    position: relative;
    padding: 4px 8px;
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
    background: var(--accent-color);
    transition: 250ms;
    transform-origin: left;
    transform: scaleX(0);
    z-index: -1;
}

nav a:hover:before,
nav a:focus-visible:before {
    transition: transform 250ms;
    transform-origin: right;
    transform: scaleX(1);
}

nav a:hover,
nav a:focus-visible {
    color: white;
    letter-spacing: 2px;
}

.active {
    border-left: 2px solid hsl(343, 100%, 64%);
}

.hamburger-menu {
    display: none;
}

@media (max-width: 800px) {
    header {
        position: sticky;
        height: 64px;
        top: 0;
        width: 100%;
    }

    nav {
        width: max-content;
        margin-right: 75px;
        font-size: 1.5rem;
    }

    .settings {
        gap: 8px;
        align-items: center;
        justify-content: start;
        padding: 0 2rem;
    }

    .settings button:first-child {
        margin-right: auto;
    }

    .wrapper {
        position: absolute;
        opacity: 0;
        visibility: hidden;
        align-items: center;
        justify-content: center;
        background-color: var(--background-color-nav);
        height: calc(100vh - 64px);
        margin-top: 64px;
        transform: translateY(-24px);
        transition: 200ms;
    }

    .hamburger-menu {
        display: inline;
    }

    .menu-open {
        transform: translateY(0);
        visibility: visible;
        opacity: 1;
    }
}
</style>
