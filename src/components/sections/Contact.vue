<script setup>
import {inject} from 'vue';

const data = inject('data');
</script>

<template>
  <section id="contact" class="section-contact">
  <h1>Contact</h1>
  <p v-if="data && data.about">{{ data.about.intro }}</p>
  </section>
</template>

<style scoped></style>
