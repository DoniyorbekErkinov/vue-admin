<template>
  <div class="layout">
    <div class="text-2xl text-center font-light mb-4 text-snow">Users</div>
    <div class="grid grid-cols-5 px-12 mx-8 h-full overflow-y-auto">
      <div class="col-span-3">
        <div class="grid grid-cols-3 gap-6">
          <div
            class="border-[0.5px] border-[#94cbd5] rounded-2xl"
            v-for="(user, i) in users"
            :key="i"
          >
            <div
              class="h-1/6 flex items-center justify-center text-slate-200 text-lg font-medium tracking-wider bg-[#75b2be] rounded-t-2xl"
            >
              {{ user.name }}
            </div>
            <ul class="py-4">
              <li class="my-2 text-center flex justify-between items-center">
                Fullname {{ user.name }}
              </li>
              <li class="my-2 text-center flex justify-between items-center">
                Username {{ user.username }}
              </li>
              <li class="my-2 text-center flex justify-between items-center">
                Email {{ user.email }}
              </li>
              <li class="my-2 text-center flex justify-between items-center">
                Phone {{ user.phone }}
              </li>
            </ul>
          </div>
        </div>
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
