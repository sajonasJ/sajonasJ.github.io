<script setup>
import Projects from "./components/sections/Projects.vue";
import About from "./components/sections/About.vue";
import Contact from "./components/sections/Contact.vue";
import Education from "./components/sections/Education.vue";
import Experience from "./components/sections/Experience.vue";
import Header from "./components/layouts/Header.vue";
import Footer from "./components/layouts/Footer.vue";

</script>

<template>
  <Main>
    <Header />
    <About />
    <Projects />
    <Contact />
    <Education />
    <Experience />
    <Footer />
  </Main>
</template>

<style scoped></style>
