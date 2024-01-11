<template>
    <div class="not-found">
        <h1>404</h1>
        <h2>{{ $t("notFound.title") }}</h2>
        <p>
            {{ $t("notFound.message") }}
        </p>
        <router-link to="/">{{ $t("notFound.home") }}</router-link>
    </div>
</template>
