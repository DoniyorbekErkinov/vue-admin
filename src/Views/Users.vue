<template>
  <div class="layout">
    <div class="grid grid-cols-5 px-12 mx-8 h-full overflow-y-auto">
      <div class="col-span-3">
        <div class="text-2xl font-bold mb-4">Users</div>
        <!-- Table header -->
        <div class="w-full border my-2 py-4">username</div>
        <!-- Table header -->
        <!-- Table Body -->
        <div class="flex flex-col" v-for="(user, i) in users" :key="i">
          <div class="w-full border my-2 py-4">
            {{ user.name }}
          </div>
        </div>
        <!-- Table Body -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ApiService } from "../Service/ApiService";
import type { UserType } from "../Types/index";
import { ref, onMounted } from "vue";
const baseUrl = "jsonplaceholder.typicode.com";
const users = ref<UserType[]>([]);

onMounted(async () => {
  try {
    const response = await ApiService.get(`${baseUrl}/users`, { page: 0 });
    users.value = response;
  } catch (error) {
    console.error(error);
  }
  try {
    const res = await ApiService.get(`${baseUrl}/users/${1}/todos`, {
      users: 1,
    });
    console.log(res);
  } catch (error) {
    console.error(error);
  }
});
</script>

<style lang="scss" scoped></style>
