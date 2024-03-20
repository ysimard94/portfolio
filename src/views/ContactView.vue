<script>
import ResponseMessage from "@/components/ResponseMessage.vue";

export default {
  name: "ContactView",
  data: () => ({
    form: {
      name: "",
      email: "",
      message: "",
    },
    success: false,
    error: false,
    message: "",
    errors: []
  }),
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    validateForm(){
      if(this.form.name && this.form.email && this.form.message){
        return true
      }
      this.errors = []

      if(!this.form.name) {
        this.errors.push('name');
      }
      if(!this.form.email){
        this.errors.push('email')
      }
      if(!this.form.message){
        this.errors.push('message')
      }
    },
    handleSubmit() {
      if(this.validateForm() === true){
        this.errors = [];
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
          .then(() => {
            console.log("Successfully sent");
            this.message = this.$t("contact.success");
            this.success = true;
            setTimeout(() => {
              this.success = false;
            }, 8000);
          })
          .catch((e) => {
            console.error(e);
            this.message = this.$t("contact.error");
            this.error = true;
            setTimeout(() => {
              this.error = false;
            }, 8000);
          });
      }
    },
  },
  components: { ResponseMessage },
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
    <p v-if="errors.length">
    <b>{{$t('contact.errors.form-correct-errors')}}</b>
    <ul>
      <li v-for="error in errors" class="errors">{{ $t("contact.errors.form-" + error) }}</li>
    </ul>
  </p>
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
    <ResponseMessage :success="success" :error="error" :message="message" />
  </section>
</template>
<style scoped>
.hidden {
  display: none;
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

.errors {
  color: hsl(15, 80%, 55%);
}
</style>
