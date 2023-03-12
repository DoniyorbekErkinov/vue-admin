<script setup lang="ts">
import { onBeforeMount } from "vue";
onBeforeMount(() => {
  if (localStorage.dark == "true") {
    localStorage.setItem("dark", JSON.stringify(true));
    document.documentElement.classList.add("dark");
  } else {
    localStorage.setItem("dark", JSON.stringify(false));
    document.documentElement.classList.remove("dark");
  }
});
</script>

<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
}
</style>
