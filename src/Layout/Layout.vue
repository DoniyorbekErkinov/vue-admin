<script setup lang="ts">
import { ref, watch, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const routers = ref([
  { name: 'Dashboard', link: '/', img: '/panda2.png' },
  { name: 'Users', link: '/users', img: '/users.png' },  
]);

function goPage(link: string) {
  router.push(link);
}
function logOut() {
  localStorage.clear();
  if (!localStorage.access) {
    router.push('/login');
  }
}
</script>
<template>
  <div class="h-screen relative flex">
    <div
      class="w-[285px] flex width-transition flex-col justify-center"
    >
      <div
        class="flex flex-col h-full bg-blueish-black"
      >
        <div class="flex-grow">
          <div class="flex justify-center items-center h-[60px] border-b border-slate-400">
            <p class="text-snow text-3xl font-earthlight text-center">Vue Admin</p>
          </div>
          <div class="mt-8">
            <router-link
              :to="item.link"
              class="flex items-center mt-3 py-1 px-8"
              v-for="(item, i) in routers"
              :key="i"
            >
              <span class="text-snow text-xl text-left">{{ item.name }}</span>
            </router-link>
          </div>
        </div>        
      </div>
    </div>
    <div
      class="flex h-full flex-col flex-1 z-[1]  bg-[#DAF1F9]"
      id="scrollTop"
    >
    <!-- Navbar Start -->
    <div class="h-[60px] bg-blueish-black flex justify-end items-center w-full px-8">
      <div
        @click="logOut"
        class="flex justify-center items-end bg-[#dbdff14d] cursor-pointer py-3 px-6 rounded-full hover:shadow-dad hover:shadow-md"
        >
          <BaseIcon name="LogOut"/>
        </div>
    </div>
    <!-- Navbar End-->
      <RouterView />
    </div>
  </div>
</template>
