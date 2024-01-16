<script setup>
import Navigation from './components/Navigation.vue';
import { RouterLink, RouterView } from 'vue-router';
import { useThemeStore } from './store/ThemeStore';

const themeStore = useThemeStore();

if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'dark-theme');
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
        <main>
            <router-view v-slot="{ Component }">
                <transition name="slide" mode="out-in">
                    <component :is="Component" :key="$route.path"></component>
                </transition>
            </router-view>
        </main>
    </div>
</template>

<style>
:root {
    --background-color-primary: hsl(0, 0%, 10%);
    --background-color-nav: hsl(0, 0%, 7%);
    --background-color-secondary: #41b883;
    --background-color-tooltip: hsl(0, 0%, 85%);
    --accent-color: hsl(343, 100%, 64%);
    --color-tooltip: hsl(211, 28%, 29%);
    --color-primary: #fff;
    --color-secondary: #35495e;
    --color-text: hsl(0, 0%, 90%);
    --color-border: #35495e;
}

body {
    background-color: var(--background-color-primary);
}

.light-theme {
    --background-color-primary: hsl(0, 0%, 100%);
    --background-color-nav: hsl(0, 0%, 95%);
    --background-color-secondary: #cecece;
    --color-primary: hsl(211, 28%, 29%);
    --color-secondary: #41b883;
    --color-text: #35495e;
    --color-border: #eee;
}

.container {
    display: grid;
    grid-template-columns: 400px 1fr;
    grid-template-rows: auto 1fr;
    background-color: inherit;
    color: var(--color-text);
    height: fit-content;
    width: 100%;
    min-height: 100svh;
    transition: background-color 500ms;
}

main {
    display: grid;
    align-items: center;
    margin: auto;
    padding-block: 100px;
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
    transform: translateX(10%);
}

.settings {
    margin-top: 2rem;
}

@media (max-width: 800px) {
    .container {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
    }

    main {
        padding-block: 2rem;
    }
}
</style>
