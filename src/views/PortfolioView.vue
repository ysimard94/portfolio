<script>
import projectsJSON from "../assets/projects.json";
import NodeJS from "@/components/icons/IconNodeJS.vue";
import Php from "@/components/icons/IconPhp.vue";

export default {
    name: "PortfolioView",
    data() {
        return {
            projects: projectsJSON,
        };
    },
    components: {
        NodeJS,
        Php,
    },
};
</script>

<template>
    <section>
        <h2>{{ $t("portfolio.title") }}</h2>

        <div
            v-for="(project, index) in projects"
            class="project"
            :style="{ 'animation-delay': `${index * 100}ms` }"
        >
            <div class="gabagool">
                <div class="preview-image">
                    <img
                        :src="`/projects/${project.image.src}`"
                        :alt="$t(`${project.image.alt}`)"
                    />
                </div>
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
                            v-if="
                                language.alt != 'PHP' &&
                                language.alt != 'NodeJS'
                            "
                            :src="`/languages/${language.src}`"
                            :alt="language.alt"
                        />
                        <Php v-else-if="language.alt == 'PHP'" />
                        <NodeJS v-else-if="language.alt == 'NodeJS'" />
                        <span class="tooltip">{{ language.alt }} </span>
                    </button>
                </div>
                <div class="project-links">
                    <a
                        :href="project.link"
                        v-if="project.link"
                        target="_blank"
                        class="call-to-action"
                        >Live project</a
                    >
                    <a :href="project.github" target="_blank" class="github-btn"
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
h2 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
}

section > h2 {
    margin-bottom: 2rem;
}

p {
    font-size: 1.125rem;
}

.project-links svg {
    max-width: 32px;
    max-height: 32px;
}
.project {
    display: flex;
    min-width: 200px;
    gap: 2rem;
    opacity: 0;
    animation: fadeIn 500ms ease-in forwards;
}

.project + .project {
    margin-top: 8rem;
}

.project:nth-child(odd) {
    flex-direction: row-reverse;
}

.project:hover .preview-image img {
    transform: scale(1.05);
}

.gabagool {
    position: relative;
    height: 300px;
    min-width: 300px;
}

.preview-image {
    position: inherit;
    height: 300px;
    width: 100%;
    overflow: hidden;
}

.preview-image img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 200ms ease-in-out;
}

.gabagool::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--accent-color);
    transition: transform 200ms ease-in-out;
    transform: translate(0);
}

.project:hover .gabagool::before {
    transform: translate(-10px, 10px);
}
.project:hover:nth-child(odd) .gabagool::before {
    transform: translate(10px, 10px);
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    min-height: 100%;
}

/* ----- Technologies used section ------ */

.languages {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.language {
    position: relative;
    color: var(--color-text);
    background-color: var(--background-color);
    border: transparent;
}

.language img,
.language svg {
    height: 32px;
    width: 100%;
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

.arrow i {
    border: solid var(--color-text);
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
}

.arrow i {
    animation: arrow 1s infinite;
}

.language:hover .tooltip::after,
.language:focus-visible .tooltip::after {
    animation: bouncing 1000ms infinite;
}

.language:hover .tooltip,
.language:focus-visible .tooltip {
    bottom: calc(100% + 0.75rem);
    visibility: visible;
    opacity: 1;
}

/* ----- Project links section ----- */

.project-links {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.github-btn {
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

.github-btn span:nth-child(2) {
    border-radius: 60px;
    padding-inline: 4px;
    white-space: nowrap;
}

.github-btn:hover,
.github-btn:focus-visible {
    max-width: 100%;
}

/* ---- Animations ----- */

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

@keyframes bouncing {
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

    .project + .project {
        margin-top: 4rem;
    }

    .project:nth-child(odd) {
        flex-direction: column;
    }
}
</style>
