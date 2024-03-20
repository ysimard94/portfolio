<script>
export default {
    name: "ResponseMessage",
    props: {
        message: {
            type: String,
            required: true,
        },
        success: {
            type: Boolean,
            required: true,
        },
        error: {
            type: Boolean,
            required: true,
        },
    },
    computed: {
        message() {
            if (this.success) {
                return this.$t("contact.errors.submit-success");
            } else if (this.error) {
                return this.$t("contact.errors.submit-error");
            }
        },
    },
};
</script>
<template>
    <div class="response-container" v-if="success || error">
        <p class="response-msg" :class="success ? 'success' : 'error'">
            {{ message }}
        </p>
    </div>
</template>
<style scoped>
.response-container {
    display: flex;
    position: absolute;
    top: 2rem;
    left: 0;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-inline: 1rem;
    opacity: 0;
    animation: fadeInOut 8000ms ease-in-out forwards;
}

.response-msg {
    width: fit-content;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    color: white;
}

.success {
    background-color: hsl(90, 100%, 30%);
}

.error {
    background-color: hsl(15, 80%, 40%);
}

@keyframes fadeInOut {
    0%,
    100% {
        opacity: 0;
        transform: translateY(-50%);
    }
    5%,
    95% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
