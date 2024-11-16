<script setup>
import { inject } from "vue";

const data = inject("data");
</script>

<template>
  <section id="objective" class="section-objective">
    <h1>Objective</h1>
    <article v-if="data && data.about">{{ data.about.objective }}</article>
  </section>
</template>

<style scoped>
.section-objective {
  justify-content: center;;
}
article {
  max-width: 700px;
  text-align: center;
  margin-top: .6rem;
  margin-bottom: 12rem;
}
</style>
