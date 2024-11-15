<script setup>
import {inject} from 'vue';

const data = inject('data');
</script>

<template>
  <section id="recommendations" class="section-recommendations">
  <h1>Recommendations</h1>
  <p v-if="data && data.about">{{ data.about.intro }}</p>
  </section>
</template>

<style scoped></style>
