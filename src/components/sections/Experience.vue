<script setup>
import {inject} from 'vue';

const data = inject('data');
</script>

<template>
  <section id="experience" class="section-experience">
  <h1>Experience</h1>
  <p v-if="data && data.about">{{ data.experience }}</p>
  </section>
</template>

<style scoped></style>
