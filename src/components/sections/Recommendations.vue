<script setup>
import { inject } from "vue";

const data = inject("data");
</script>

<template>
  <section id="recommendations" class="section-recommendations">
    <h1>Recommendations</h1>
    <article
      v-if="data"
      v-for="(recommendation, index) in data.about.recommendations"
      :key="index"
    >
      {{ recommendation.name }}
    </article>
  </section>
</template>

<style scoped>
.section-recommendations {
  justify-content: center;
}
article {
  max-width: 700px;
  margin-top: 0.6rem;
  margin-bottom: 12rem;
}
</style>
