<script setup>
import { ref, provide, onMounted } from 'vue';
import Projects from "./components/sections/Projects.vue";
import About from "./components/sections/About.vue";
import Contact from "./components/sections/Contact.vue";
import Education from "./components/sections/Education.vue";
import Experience from "./components/sections/Experience.vue";
import Header from "./components/layouts/Header.vue";
import Footer from "./components/layouts/Footer.vue";

const data = ref(null);

onMounted(async () => {
  try {
    const response = await fetch('/single-page-portfolio/db.json');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    data.value = await response.json();
    console.log("Fetched data:", data.value);
  } catch (error) {
    console.error("Failed to load JSON data:", error);
  }
});

provide('data', data);

</script>

<template>
  <Main>
    <Header />
    <About />
    <Projects />
    <Experience />
    <Education />
    <Contact />
    <Footer />
  </Main>
</template>

<style scoped></style>
