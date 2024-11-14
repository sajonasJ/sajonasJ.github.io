<script setup>
import {inject} from 'vue';

const data = inject('data');
</script>

<template>
  <section id="about" class="section-about">
  <h1>About</h1>
  <p v-if="data && data.about">{{ data.about.intro }}</p>
  </section>
</template>

<style scoped></style>
