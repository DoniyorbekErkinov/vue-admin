<template>
  <div>
    <ul>
      <li v-for="(user, i) in users" :key="i">{{ user }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { UserType } from "../Types/index";
import { ref } from "vue";
const users = ref<UserType[]>([
  {
    id: 1,
    userName: "user 1",
    fullName: "User name 1",
  },
]);
</script>

<style lang="scss" scoped></style>
