<script>
export default {
    name: "ContactView",
    methods: {
        encode(){

        },
        handleSubmit() {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(new FormData(document.forms.contact)),
            })
                .then(() => {
                    alert("Success!");
                })
                .catch((error) => alert(error)
        },
    },
};
</script>
<template>
    <section>
        <form
            name="contact"
            method="POST"
            action="/about"
            netlify-honeypot="bot-field"
            data-netlify="true"
            onsubmit="submit"
        >
            <p class="hidden">
                <label>
                    Don't fill this out if you're human:
                    <input name="bot-field" />
                </label>
            </p>
            <p>
                <label>Name <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Email <input type="email" name="email" /></label>
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
