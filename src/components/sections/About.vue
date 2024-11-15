<script setup>
import { inject } from 'vue';

const data = inject('data');
</script>

<template>
  <section id="about" class="section-about">
    <div class="container">
      <h1 class="text-right">Hi I'm Jonas</h1>
      <h3>Aspiring Software Developer</h3>
    </div>
    <article class="container">
      <p v-if="data && data.about" class="intro">{{ data.about.intro }}</p>
    </article>
  </section>
</template>

<style scoped>
.section-about{
  flex-direction: row;
  gap:1rem;

}

.container {
  flex-direction: column;
  width: 100%;
  text-align: right;
}


.intro {
  padding-right: 30px;
  text-align: left;
}
</style>
