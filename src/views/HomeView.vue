<script setup></script>

<template>
  <section>
    <div class="mask-container">
      <img rel="preload" src="../assets/profile-picture.webp" alt="Drawing of me" class="mask-image" />
      <svg class="picture-mask" viewBox="0 0 350 350" width="350" height="350" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
        <mask id="maskShape">
          <g transform="translate(170.71605306085428 191.58515326718145)">
            <path id="shape1" fill="#fff"
              d="M93.9 -101C123.2 -64.6 149.6 -32.3 155 5.4C160.5 43.1 144.9 86.3 115.6 110.4C86.3 134.6 43.1 139.8 5.5 134.3C-32.1 128.7 -64.1 112.4 -86.9 88.3C-109.7 64.1 -123.2 32.1 -126.5 -3.3C-129.8 -38.7 -122.9 -77.3 -100.1 -113.8C-77.3 -150.2 -38.7 -184.5 -3.2 -181.3C32.3 -178.1 64.6 -137.5 93.9 -101">
              <animate attributeName="d" dur="20s" repeatCount="indefinite"
                values="M93.9 -101C123.2 -64.6 149.6 -32.3 155 5.4C160.5 43.1 144.9 86.3 115.6 110.4C86.3 134.6 43.1 139.8 5.5 134.3C-32.1 128.7 -64.1 112.4 -86.9 88.3C-109.7 64.1 -123.2 32.1 -126.5 -3.3C-129.8 -38.7 -122.9 -77.3 -100.1 -113.8C-77.3 -150.2 -38.7 -184.5 -3.2 -181.3C32.3 -178.1 64.6 -137.5 93.9 -101; M118.8 -117.3C150 -87.7 168.5 -43.8 165.3 -3.2C162.1 37.5 137.3 75 106.1 106.3C75 137.6 37.5 162.8 -7 169.9C-51.6 176.9 -103.1 165.8 -125.9 134.5C-148.7 103.1 -142.7 51.6 -139.8 2.9C-136.9 -45.7 -137 -91.5 -114.2 -121.1C-91.5 -150.8 -45.7 -164.4 -0.9 -163.5C43.8 -162.5 87.7 -147 118.8 -117.3; M131 -138.6C158.8 -103.1 162.9 -51.6 155.9 -7C148.8 37.5 130.6 75 102.8 98.5C75 122 37.5 131.5 -3.8 135.2C-45 139 -90 137 -112.8 113.5C-135.6 90 -136.2 45 -133.2 2.9C-130.3 -39.1 -123.8 -78.3 -101 -113.8C-78.3 -149.3 -39.1 -181.1 6.2 -187.3C51.6 -193.6 103.1 -174.1 131 -138.6; M93.9 -101C123.2 -64.6 149.6 -32.3 155 5.4C160.5 43.1 144.9 86.3 115.6 110.4C86.3 134.6 43.1 139.8 5.5 134.3C-32.1 128.7 -64.1 112.4 -86.9 88.3C-109.7 64.1 -123.2 32.1 -126.5 -3.3C-129.8 -38.7 -122.9 -77.3 -100.1 -113.8C-77.3 -150.2 -38.7 -184.5 -3.2 -181.3C32.3 -178.1 64.6 -137.5 93.9 -101;" />
            </path>
          </g>
        </mask>
      </svg>
      <svg class="bg-picture" viewBox="0 0 350 350" width="350" height="350" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
        <g transform="translate(170.71605306085428 191.58515326718145)">
          <path id="shape1" fill="hsl(343, 100%, 64%)"
            d="M93.9 -101C123.2 -64.6 149.6 -32.3 155 5.4C160.5 43.1 144.9 86.3 115.6 110.4C86.3 134.6 43.1 139.8 5.5 134.3C-32.1 128.7 -64.1 112.4 -86.9 88.3C-109.7 64.1 -123.2 32.1 -126.5 -3.3C-129.8 -38.7 -122.9 -77.3 -100.1 -113.8C-77.3 -150.2 -38.7 -184.5 -3.2 -181.3C32.3 -178.1 64.6 -137.5 93.9 -101">
            <animate attributeName="d" dur="20s" repeatCount="indefinite"
              values="M131 -138.6C158.8 -103.1 162.9 -51.6 155.9 -7C148.8 37.5 130.6 75 102.8 98.5C75 122 37.5 131.5 -3.8 135.2C-45 139 -90 137 -112.8 113.5C-135.6 90 -136.2 45 -133.2 2.9C-130.3 -39.1 -123.8 -78.3 -101 -113.8C-78.3 -149.3 -39.1 -181.1 6.2 -187.3C51.6 -193.6 103.1 -174.1 131 -138.6; M93.9 -101C123.2 -64.6 149.6 -32.3 155 5.4C160.5 43.1 144.9 86.3 115.6 110.4C86.3 134.6 43.1 139.8 5.5 134.3C-32.1 128.7 -64.1 112.4 -86.9 88.3C-109.7 64.1 -123.2 32.1 -126.5 -3.3C-129.8 -38.7 -122.9 -77.3 -100.1 -113.8C-77.3 -150.2 -38.7 -184.5 -3.2 -181.3C32.3 -178.1 64.6 -137.5 93.9 -101; M118.8 -117.3C150 -87.7 168.5 -43.8 165.3 -3.2C162.1 37.5 137.3 75 106.1 106.3C75 137.6 37.5 162.8 -7 169.9C-51.6 176.9 -103.1 165.8 -125.9 134.5C-148.7 103.1 -142.7 51.6 -139.8 2.9C-136.9 -45.7 -137 -91.5 -114.2 -121.1C-91.5 -150.8 -45.7 -164.4 -0.9 -163.5C43.8 -162.5 87.7 -147 118.8 -117.3; M131 -138.6C158.8 -103.1 162.9 -51.6 155.9 -7C148.8 37.5 130.6 75 102.8 98.5C75 122 37.5 131.5 -3.8 135.2C-45 139 -90 137 -112.8 113.5C-135.6 90 -136.2 45 -133.2 2.9C-130.3 -39.1 -123.8 -78.3 -101 -113.8C-78.3 -149.3 -39.1 -181.1 6.2 -187.3C51.6 -193.6 103.1 -174.1 131 -138.6; " />
          </path>
        </g>
      </svg>
    </div>

    <div class="content">
      <h1>
        <span>
          {{ $t("home.firstname") }}
        </span>
        <span>
          {{ $t("home.lastname") }}
        </span>
      </h1>
      <div class="social-media">
        <a href="https://github.com/ysimard94" target="_blank" aria-label="Link to my Github profile"><svg
            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="currentColor" width="100" height="100"
            viewBox="0 0 24 24">
            <path
              d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z">
            </path>
          </svg></a>
        <a href="https://www.linkedin.com/in/y-simard/" target="_blank" aria-label="Link to my Linkedin profile"><svg
            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" fill="currentColor"
            viewBox="0 0 50 50">
            <path
              d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z">
            </path>
          </svg></a>
      </div>
      <p>
        {{ $t("home.message") }}
      </p>
      <RouterLink to="/portfolio" class="call-to-action">
        {{ $t("home.callToAction") }}
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
/* ----- General ----- */
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 1rem;
}

h1 {
  font-family: Yantramanav;
  text-transform: uppercase;
  font-size: 4rem;
  font-weight: 900;
  line-height: 1;
}

h1 span {
  display: block;
}

p {
  max-width: 35ch;
  line-height: 1.75;
  font-style: italic;
}

/* ----- Profile picture ----- */
.mask-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-inline: auto;
  min-width: 300px;
}

.mask-image {
  margin: 0;
  height: 375px;
  width: 350px;
  object-fit: cover;
  mask: url(#maskShape);
}

.picture-mask {
  position: absolute;
}

.bg-picture {
  position: absolute;
  top: 0;
  z-index: -1;
  overflow: visible;
}

/* ----- Content ----- */

.content {
  display: grid;
  gap: 1rem;
}

.social-media {
  display: flex;
  gap: 0.25rem;
}

.social-media a:hover,
.social-media a:focus-visible {
  transform: translateY(-5px);
}

.social-media a>* {
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

@media (min-width: 1120px) {
  section {
    flex-direction: row;
  }
}
</style>
