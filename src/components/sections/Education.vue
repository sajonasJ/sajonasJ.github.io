<script setup>
import { inject } from "vue";

const data = inject("data");
</script>

<template>
  <section id="education" class="section-education">
    <h1>Education</h1>
    <p v-if="data && data.about">{{ data.education }}</p>
  </section>
</template>

<style scoped></style>
