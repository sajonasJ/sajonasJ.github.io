<script setup>
import {inject} from 'vue';

const data = inject('data');
</script>

<template>
  <section id="awards" class="section-awards">
  <h1>Awards</h1>
  <p v-if="data && data.about">{{ data.about.intro }}</p>
  </section>
</template>

<style scoped></style>
