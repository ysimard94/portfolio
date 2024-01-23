<script setup></script>

<template>
    <section>
        <div class="profile-picture">
            <svg
                id="visual"
                viewBox="0 0 350 400"
                width="350"
                height="350"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
            >
                <defs>
                    <pattern
                        id="pattern"
                        x="0"
                        y="0"
                        width="1"
                        height="1"
                        patternContentUnits="objectBoundingBox"
                    >
                        <image
                            x="0"
                            y="0"
                            width="1"
                            height="1"
                            preserveAspectRatio="xMidYMid slice"
                            xlink:href="/mickey.png"
                        ></image>
                    </pattern>
                </defs>
                <g transform="translate(170.71605306085428 191.58515326718145)">
                    <path
                        id="shape1"
                        fill="url(#pattern)"
                        d="M111.1 -111.8C135.9 -86.3 142.5 -43.1 138.5 -4C134.5 35.1 119.9 70.2 95.1 105.7C70.2 141.2 35.1 177.1 -4.4 181.5C-43.8 185.8 -87.7 158.7 -124.1 123.2C-160.6 87.7 -189.7 43.8 -183.9 5.8C-178.1 -32.2 -137.4 -64.5 -100.9 -90C-64.5 -115.5 -32.2 -134.2 5.5 -139.7C43.1 -145.1 86.3 -137.3 111.1 -111.8;"
                    >
                        <animate
                            attributeName="d"
                            dur="100ms"
                            repeatCount="indefinite"
                            values="M96 -100.9C127.5 -64.5 158.2 -32.2 160.1 1.9C162.1 36.1 135.1 72.1 103.6 101.3C72.1 130.5 36.1 152.7 0.7 152C-34.6 151.3 -69.3 127.6 -97 98.5C-124.6 69.3 -145.3 34.6 -150.4 -5.1C-155.5 -44.8 -144.9 -89.6 -117.2 -126C-89.6 -162.5 -44.8 -190.6 -6.3 -184.3C32.2 -178.1 64.5 -137.4 96 -100.9; M111.1 -111.8C135.9 -86.3 142.5 -43.1 138.5 -4C134.5 35.1 119.9 70.2 95.1 105.7C70.2 141.2 35.1 177.1 -4.4 181.5C-43.8 185.8 -87.7 158.7 -124.1 123.2C-160.6 87.7 -189.7 43.8 -183.9 5.8C-178.1 -32.2 -137.4 -64.5 -100.9 -90C-64.5 -115.5 -32.2 -134.2 5.5 -139.7C43.1 -145.1 86.3 -137.3 111.1 -111.8; M96 -100.9C127.5 -64.5 158.2 -32.2 160.1 1.9C162.1 36.1 135.1 72.1 103.6 101.3C72.1 130.5 36.1 152.7 0.7 152C-34.6 151.3 -69.3 127.6 -97 98.5C-124.6 69.3 -145.3 34.6 -150.4 -5.1C-155.5 -44.8 -144.9 -89.6 -117.2 -126C-89.6 -162.5 -44.8 -190.6 -6.3 -184.3C32.2 -178.1 64.5 -137.4 96 -100.9"
                        />
                    </path>
                </g>
            </svg>
        </div>
        <div class="content">
            <h1>{{ $t("home.title") }}</h1>
            <p>
                {{ $t("home.message") }} Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Tempora, doloribus dolor ad numquam fugit
                pariatur.
            </p>
            <div class="social-media">
                <a href="https://github.com/ysimard94" target="_blank"
                    ><svg
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
                        ></path></svg
                ></a>
                <a href="https://www.linkedin.com/in/y-simard/" target="_blank"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        fill="currentColor"
                        viewBox="0 0 50 50"
                    >
                        <path
                            d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                        ></path></svg
                ></a>
            </div>
        </div>
    </section>
</template>

<style scoped>
h1 {
    font-family: Yantramanav;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 900;
    line-height: 1.2;
}

a > * {
    width: 32px;
    height: 32px;
    color: var(--color-text);
}

section {
    display: flex;
    align-items: center;
    margin: auto;
    gap: 4rem;
}

p {
    line-height: 1.75;
    font-style: italic;
}

.profile-picture {
    width: 100%;
    min-width: 350px;
}
.content {
    display: grid;
    gap: 1rem;
}

.social-media {
    display: flex;
    gap: 0.25rem;
}
@keyframes bounce {
    0%,
    100% {
        transform: translateY(0);
    }
    20% {
        transform: translateY(-5px);
    }
}

a:hover,
a:focus-visible {
    animation: bounce 1s infinite;
}

@media (max-width: 600px) {
    section {
        flex-direction: column;
    }
}
</style>
