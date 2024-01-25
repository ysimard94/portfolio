<script>
export default {
    name: "ContactView",
    data: () => ({
        form: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    }),
    methods: {
        encode(data) {
            return Object.keys(data)
                .map(
                    (key) =>
                        `${encodeURIComponent(key)}=${encodeURIComponent(
                            data[key],
                        )}`,
                )
                .join("&");
        },
        handleSubmit() {
            fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: this.encode({
                    "form-name": "contact",
                    ...this.form,
                }),
            })
                .then(() => console.log("successfully sent"))
                .catch((e) => console.error(e));
        },
    },
};
</script>
<template>
    <section>
        <div class="title">
            <h1>{{ $t("contact.title") }}</h1>
        </div>
        <form
            @submit.prevent="handleSubmit"
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            class="contact-form"
        >
            <p class="hidden">
                <label>
                    Don't fill this out if you're human:
                    <input name="bot-field" />
                </label>
            </p>

            <label for="name">{{ $t("contact.form.name") }}</label>
            <input v-model="form.name" type="text" name="name" id="name" />

            <label for="email">{{ $t("contact.form.email") }}</label
            ><input v-model="form.email" type="email" name="email" id="email" />

            <label for="subject">{{ $t("contact.form.subject") }}</label>
            <input
                v-model="form.subject"
                type="text"
                name="subject"
                id="subject"
            />

            <label for="message">{{ $t("contact.form.message") }}</label>
            <textarea
                v-model="form.message"
                type="text"
                name="message"
                rows="4"
                id="message"
            />

            <button type="submit" class="call-to-action">
                {{ $t("contact.form.submit") }}
            </button>
        </form>
    </section>
</template>
<style>
.hidden {
    display: none;
}

.section {
    display: flex;
}

.contact-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
    margin-inline: auto;
}

.contact-form > *:not(p) {
    width: 100%;
}

input + label,
button {
    margin-top: 1rem;
}

button[type="submit"] {
    width: fit-content;
    margin-left: auto;
}

input,
textarea {
    border: 2px solid hsl(0, 0%, 80%);
    border-radius: 5px;
    padding: 0.5rem;
}

input:focus,
textarea:focus {
    outline: var(--accent-color) solid 2px;
    outline-offset: 2px;
    outline-style: groove;
}
</style>
