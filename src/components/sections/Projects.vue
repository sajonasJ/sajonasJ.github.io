<script setup>
import {inject} from 'vue';

const data = inject('data');
</script>

<template>
  <section id="projects" class="section-projects">
  <h1>Projects</h1>
  <p v-if="data && data.about">{{ data.projects }}</p>
  </section>
</template>

<style scoped></style>
