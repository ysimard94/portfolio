<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useThemeStore } from './store/ThemeStore';

const theme = useThemeStore();

if (localStorage.getItem('theme') === null) {
  localStorage.setItem('theme', 'dark-theme');
}

function changeTheme() {

  if (theme.theme === 'light-theme') {
    theme.setTheme('dark-theme');
    console.log(theme.theme)
  } else {
    theme.setTheme('light-theme');
    console.log(theme.theme)
  }
}

</script>

<template>
  <header :class="{ 'light-theme': theme.theme == 'light-theme' }">
    <div class="wrapper">
      <div class="settings">
        <button @click="$i18n.locale = 'FR'" v-if="$i18n.locale === 'EN'">FR</button>
        <button @click="$i18n.locale = 'EN'" v-if="$i18n.locale === 'FR'">EN</button>
        <button @click="changeTheme('light-theme')" v-if="theme.theme === 'dark-theme'">Light</button>
        <button @click="changeTheme('dark-theme')" v-if="theme.theme === 'light-theme'">Dark</button>
      </div>
      <nav>
        <RouterLink to="/">{{ $t('nav.home') }}</RouterLink>
        <RouterLink to="/about">{{ $t('nav.about') }}</RouterLink>
      </nav>
    </div>
  </header>
  <router-view v-slot="{Component}">
    <transition name="slide" mode="out-in">
      <component :is="Component" :key="$route.path" :class="{ 'light-theme': theme.theme == 'light-theme' }"></component>  
    </transition>
  </router-view>
</template>

<style>
:root {
  --background-color-primary: #35495e;
  --background-color-secondary: #41b883;
  --color-primary: #fff;
  --color-secondary: #35495e;
  --color-text: #fff;
  --color-border: #35495e;
}

.light-theme {
  --background-color-primary: #fff;
  --background-color-secondary: #cecece;
  --color-primary: #35495e;
  --color-secondary: #41b883;
  --color-text: #35495e;
  --color-border: #eee;
}

header {
  background-color: var(--background-color-primary);
  line-height: 1.5;
  max-height: 100vh;
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

/*------------- View animation  --------------*/

  .slide-enter-active,
  .slide-leave-active{
    transition: opacity 500ms, transform 500ms;
  }

  .slide-enter-from,
  .slide-leave-to{
    opacity:0;
    transform: translateX(20%);
  }
  
@media (min-width: 1024px) {
  header {
    display: flex;
    border: 1px solid red;
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
