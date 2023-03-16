<template>
  <div class="layout">
    <div class="text-2xl text-center font-light mb-4 text-snow z-0">Users</div>
    <div
      class="grid grid-cols-5 gap-6 px-12 mx-8 h-full overflow-y-auto z-[999]"
    >
      <div class="col-span-3 z-[999]">
        <div class="grid grid-cols-3 gap-6 z-[999]">
          <div
            class="border-[0.5px] border-[#94cbd5] bg-lavender rounded-2xl transition-all duration-300 ease-in-out overflow-hidden hover:scale-110 hover:z-[999] cursor-pointer"
            v-for="(user, i) in users"
            :key="i"
            @click="getUserTodos(user.id)"
          >
            <div
              class="text-slate-200 text-lg font-medium tracking-wider bg-[#75b2be] rounded-t-2xl z-[999]"
            >
              {{ user.name }}
            </div>
            <ul class="py-4">
              <li
                class="my-2 px-6 text-center flex justify-between items-center"
              >
                <span class="text-lg"> Fullname:</span>
                <span>{{ user.name }}</span>
              </li>
              <li
                class="my-2 px-6 text-center flex justify-between items-center"
              >
                <span class="text-lg"> Username:</span>
                <span>{{ user.username }}</span>
              </li>
              <li
                class="my-2 px-6 text-center flex justify-between items-center"
              >
                <span class="text-lg"> Email:</span>
                <span>{{ user.email }}</span>
              </li>
              <li
                class="my-2 px-6 text-center flex justify-between items-center"
              >
                <span class="text-lg"> Phone:</span>
                <span>{{ user.phone }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-span-2 border-[0.5px] px-4 py-4 rounded-md">
        <div class="text-2xl text-center font-light text-snow mb-4">Todos</div>
        <div class="grid grid-cols-1 gap-6">
          <div
            class="w-full bg-lavender h-full min-h-[60px] max-h-20 rounded-md"
            v-for="(todo, t) in userTodos"
            :key="t"
          >
            {{ todo }}
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
const userTodos = ref([]);

async function getUserTodos(id: string | number) {
  await ApiService.get(`${baseUrl}/users/${id}/todos`, {})
    .then((res) => {
      userTodos.value = res;
    })
    .catch((e) => {
      console.log(e);
    });
}

onMounted(async () => {
  try {
    const response = await ApiService.get(`${baseUrl}/users`, { page: 0 });
    users.value = response;
  } catch (error) {
    console.error(error);
  }
});
</script>

<style lang="scss" scoped></style>
