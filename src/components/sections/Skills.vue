<script setup>
import {inject} from 'vue';

const data = inject('data');
</script>

<template>
  <section id="skills" class="section-skills">
  <h1>Skills</h1>
  <p v-if="data && data.about">{{ data.about.skills }}</p>
  </section>
</template>

<style scoped></style>
