<script>
import projectsJSON from "../assets/projects.json";

export default {
    name: "PortfolioView",
    data() {
        return {
            projects: projectsJSON,
        };
    },
};
</script>

<template>
    <section>
        <h2>{{ $t("portfolio.title") }}</h2>
        <div v-for="project in projects" class="project">
            <div class="preview-image">
                <img
                    :src="`/projects/${project.image.src}`"
                    :alt="$t(`${project.image.alt}`)"
                />
            </div>
            <div class="content">
                <h2>{{ $t(`${project.title}`) }}</h2>
                <p>{{ $t(`${project.description}`) }}</p>
                <div class="languages">
                    <button
                        v-for="language in project.languages"
                        class="language"
                    >
                        <img
                            v-if="language.alt != 'PHP'"
                            :src="`/languages/${language.src}`"
                            :alt="language.alt"
                        />
                        <svg
                            v-else
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -1 100 50"
                        >
                            <path
                                fill="currentColor"
                                d="m7.579 10.123 14.204 0c4.169 0.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-0.247 1.873-0.795 3.71-1.643 5.512-0.813 1.802-1.943 3.427-3.392 4.876-1.767 1.837-3.657 3.003-5.671 3.498-2.014 0.495-4.099 0.742-6.254 0.742l-6.36 0-2.014 10.07-7.367 0 7.579-38.001 0 0m6.201 6.042-3.18 15.9c0.212 0.035 0.424 0.053 0.636 0.053 0.247 0 0.495 0 0.742 0 3.392 0.035 6.219-0.3 8.48-1.007 2.261-0.742 3.781-3.321 4.558-7.738 0.636-3.71 0-5.848-1.908-6.413-1.873-0.565-4.222-0.83-7.049-0.795-0.424 0.035-0.83 0.053-1.219 0.053-0.353 0-0.724 0-1.113 0l0.053-0.053"
                            />
                            <path
                                fill="currentColor"
                                d="m41.093 0 7.314 0-2.067 10.123 6.572 0c3.604 0.071 6.289 0.813 8.056 2.226 1.802 1.413 2.332 4.099 1.59 8.056l-3.551 17.649-7.42 0 3.392-16.854c0.353-1.767 0.247-3.021-0.318-3.763-0.565-0.742-1.784-1.113-3.657-1.113l-5.883-0.053-4.346 21.783-7.314 0 7.632-38.054 0 0"
                            />
                            <path
                                fill="currentColor"
                                d="m70.412 10.123 14.204 0c4.169 0.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-0.247 1.873-0.795 3.71-1.643 5.512-0.813 1.802-1.943 3.427-3.392 4.876-1.767 1.837-3.657 3.003-5.671 3.498-2.014 0.495-4.099 0.742-6.254 0.742l-6.36 0-2.014 10.07-7.367 0 7.579-38.001 0 0m6.201 6.042-3.18 15.9c0.212 0.035 0.424 0.053 0.636 0.053 0.247 0 0.495 0 0.742 0 3.392 0.035 6.219-0.3 8.48-1.007 2.261-0.742 3.781-3.321 4.558-7.738 0.636-3.71 0-5.848-1.908-6.413-1.873-0.565-4.222-0.83-7.049-0.795-0.424 0.035-0.83 0.053-1.219 0.053-0.353 0-0.724 0-1.113 0l0.053-0.053"
                            />
                        </svg>

                        <span class="tooltip">{{ language.alt }}</span>
                    </button>
                </div>
                <div class="social-media">
                    <a :href="project.github" target="_blank"
                        ><span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                fill="currentColor"
                                width="100"
                                height="100"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"
                                ></path>
                            </svg>
                        </span>
                        <span>
                            See more
                            <span class="arrow"> <i></i> </span
                        ></span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.project {
    display: flex;
    min-width: 200px;
    gap: 2rem;
}

section > * + * {
    margin-top: 2rem;
}

.preview-image {
    height: 300px;
    min-width: 300px;
}

.preview-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    min-height: 100%;
}

.social-media {
    display: flex;
    gap: 1rem;
}

.languages {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.language {
    position: relative;
    width: 32px;
    color: var(--color-text);
    background-color: var(--background-color);
    border: transparent;
}

.tooltip {
    position: absolute;
    bottom: calc(100%);
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    padding: 4px 8px;
    border-radius: 5px;
    visibility: hidden;
    opacity: 0;
    background-color: var(--background-color-tooltip);
    color: var(--color-tooltip);
    z-index: 1;
    transition: 200ms;
}

@keyframes boucing {
    0%,
    40% {
        transform: translateY(0);
    }
    25%,
    65% {
        transform: translateY(2px);
    }
    100% {
        transform: translateY(0);
    }
}

.tooltip::after {
    content: " ";
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    margin-top: 3px;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: var(--accent-color) transparent transparent transparent;
}

.language:hover .tooltip::after,
.language:focus-visible .tooltip::after {
    animation: boucing 1000ms infinite;
}

.language:hover .tooltip,
.language:focus-visible .tooltip {
    bottom: calc(100% + 0.75rem);
    visibility: visible;
    opacity: 1;
}

h2 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
}

p {
    font-size: 1.125rem;
}

svg {
    max-width: 32px;
    max-height: 32px;
}

a {
    display: flex;
    align-items: center;
    color: var(--color-text);
    gap: 0.25rem;
    height: 32px;
    width: auto;
    max-width: 32px;
    overflow: hidden;
    transition: max-width 400ms ease-in-out;
}

a span:nth-child(2) {
    /* color: hsl(0, 0%, 90%);
    background-color: var(--accent-color); */
    border-radius: 60px;
    padding-inline: 4px;
    white-space: nowrap;
}

a:hover,
a:focus-visible {
    max-width: 100%;
}

.arrow i {
    border: solid var(--color-text);
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
}

.arrow i {
    animation: arrow 1s infinite;
}
@keyframes arrow {
    0% {
        transform: translateX(0) rotate(-45deg);
    }
    50% {
        transform: translateX(2px) rotate(-45deg);
    }
    100% {
        transform: translateX(0) rotate(-45deg);
    }
}

@media (max-width: 1100px) {
    .project {
        flex-direction: column;
    }
}
</style>
