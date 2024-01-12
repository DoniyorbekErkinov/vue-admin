<template>
  <div class="layout">
    <div class="text-2xl text-center font-light mb-4 text-snow z-0">Users</div>
    <div
      class="grid grid-cols-5 gap-6 px-12 mx-8 h-full overflow-y-auto relative"
    >
      <div :class="userTodo.length > 0 ? 'col-span-3' : 'col-span-5'" class="">
        <div
          :class="
            userTodo.length > 0 ? 'grid-cols-3 gap-6' : 'grid-cols-6 gap-3'
          "
          class="grid mt-4"
        >
          <div
            class="border-[0.5px] border-[#94cbd5] bg-lavender rounded-2xl transition-all duration-300 ease-in-out overflow-hidden hover:scale-110 cursor-pointer"
            v-for="(user, i) in users"
            :key="i"
            @click="getUserTodo(user.id)"
          >
            <div
              class="text-slate-200 text-lg font-medium tracking-wider bg-[#75b2be] rounded-t-2xl"
            >
              {{ user.name }}
            </div>
            <ul class="py-4">
              <li
                class="my-2 px-4 text-center flex justify-between items-center"
              >
                <span class="text-lg"> Fullname:</span>
                <span>{{ user.name }}</span>
              </li>
              <li
                class="my-2 px-4 text-center flex justify-between items-center"
              >
                <span class="text-lg"> Username:</span>
                <span>{{ user.username }}</span>
              </li>
              <li
                class="my-2 px-4 text-center flex justify-between items-center"
              >
                <span class="text-lg"> Email:</span>
                <span>{{ user.email }}</span>
              </li>
              <li
                class="my-2 px-4 text-center flex justify-between items-center"
              >
                <span class="text-lg"> Phone:</span>
                <span>{{ user.phone }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        :class="userTodo.length > 0 ? 'col-span-2' : 'hidden'"
        class="border-[0.5px] px-4 py-4 rounded-md mt-4 h-full"
      >
        <div class="text-2xl text-center font-light text-snow mb-4">Todos</div>
        <div class="grid grid-cols-1 gap-6">
          <div
            class="w-full bg-lavender h-full min-h-[60px] max-h-20 rounded-md"
            v-for="(todo, t) in userTodo"
            :key="t"
          >
            {{ todo }}
          </div>
        </div>
      </div>
      <Loading
        v-if="loading"
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-24"
        size="w-10 h-10 bg-[#383874]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ApiService } from "../Service/ApiService";
import type { UserType } from "../Types/index";
import { ref, onMounted } from "vue";
const baseUrl = "https://jsonplaceholder.typicode.com";
const users = ref<UserType[]>([]);
const userTodo = ref([]);
const loading = ref<Boolean>(false);
async function getUserTodo(id: string | number) {
  loading.value = true;
  await ApiService.get(
    `https://jsonplaceholder.typicode.com/users/${id}/todos`,
    {}
  )
    .then((res) => {
      userTodo.value = res;
      loading.value = false;
    })
    .catch((e) => {
      loading.value = false;
      console.log(e);
    })
    .finally(() => {
      loading.value = false;
    });
}
async function getUser() {
  loading.value = true;
  await ApiService.get(`https://jsonplaceholder.typicode.com/users`)
    .then((resp) => {
      users.value = resp;
      loading.value = false;
    })
    .catch((e) => {
      console.log(e);
      loading.value = false;
    })
    .finally(() => {
      loading.value = false;
    });
}
onMounted(async () => {
  getUser();
});
</script>

<style lang="scss" scoped></style>
