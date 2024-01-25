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
                method: "post",
                headers: { "Content-Type": "application/x-www-urlencoded" },
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
        <form
            @submit.prevent="handleSubmit"
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
        >
            <p class="hidden">
                <label>
                    Don't fill this out if you're human:
                    <input name="bot-field" />
                </label>
            </p>
            <p>
                <label
                    >Name <input v-model="form.name" type="text" name="name"
                /></label>
            </p>
            <p>
                <label
                    >Email
                    <input v-model="form.email" type="email" name="email"
                /></label>
            </p>
            <p>
                <label
                    >Subject
                    <input v-model="form.subject" type="text" name="subject"
                /></label>
            </p>
            <p>
                <label
                    >Message
                    <textarea
                        v-model="form.message"
                        type="text"
                        name="message"
                        rows="2"
                    />
                </label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    </section>
</template>
<style>
.hidden {
    display: none;
}
</style>
