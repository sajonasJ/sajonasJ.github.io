<script setup>
import {inject} from 'vue';

const data = inject('data');
</script>

<template>
  <section id="objective" class="section-objective">
  <h1>Objective</h1>
  <p v-if="data && data.about">{{ data.about.objective }}</p>
  </section>
</template>

<style scoped></style>
