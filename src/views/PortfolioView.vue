<script>
import portfolioJSON from "../assets/portfolio.json";

console.log(portfolioJSON[1].image);

export default {
    name: "PortfolioView",
    data() {
        return {
            projects: portfolioJSON,
        };
    },
    methods: {
        requireImage(image) {
            return require(`../assets/${image}`);
        },
    },
};
</script>

<template>
    <section>
        <h1>This is a portfolio page</h1>
        <div v-for="portfolio in projects">
            <div>
                <div>
                    <img
                        :src="`/projects/${portfolio.image.src}`"
                        :alt="$t(`${portfolio.image.alt}`)"
                    />
                </div>
                <h2>{{ $t(`${portfolio.title}`) }}</h2>
                <p>{{ $t(`${portfolio.description}`) }}</p>
            </div>
        </div>
    </section>
</template>
