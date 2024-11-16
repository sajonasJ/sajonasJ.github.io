<script setup>
import { inject } from "vue";

const data = inject("data");
</script>

<template>
  <section id="contact" class="section-contact">
    <h1>Contact</h1>
    <article v-if="data && data.contact">
      <p>Email: {{ data.contact.email }}</p>
      <p>LinkedIn: <a :href="data.contact.linkedIn" target="_blank">{{ data.contact.linkedIn }}</a></p>
      <p>GitHub: <a :href="data.contact.github" target="_blank">{{ data.contact.github }}</a></p>
      <p>Credly: <a :href="data.contact.credly" target="_blank">{{ data.contact.credly }}</a></p>
    </article>
  </section>
</template>


<style scoped>
.section-contact {
  justify-content: center;
}
article {
  max-width: 700px;
  text-align: left;
  margin-top: 0.6rem;
  margin-bottom: 12rem;
}
</style>
