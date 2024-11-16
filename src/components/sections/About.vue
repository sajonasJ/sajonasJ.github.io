<script setup>
import { inject } from 'vue';

const data = inject('data');
</script>

<template>
  <section id="about" class="section-about">
    <div class="container1">
      <h1 class="text-right">Hi I'm Jonas</h1>
      <h3>Aspiring Software Developer</h3>
    </div>
    <article class="container2">
      <p v-if="data && data.about" class="intro">{{ data.about.intro }}</p>
    </article>
  </section>
</template>

<style scoped>
.section-about{
  flex-direction: row;
  gap:1rem;

}

.container1 {
  flex-direction: column;
  width: 45%;
  text-align: right;
}

.container2 {
  flex-direction: column;
  width: 55%;
  text-align: left;
}

.intro {
  padding-right: 30px;
  text-align: left;
}
</style>
