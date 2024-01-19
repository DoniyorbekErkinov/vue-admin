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
            <img src="/pandaicon.png" class="w-[19%] mr-4" alt="flaticon.com" />
            <p class="text-snow text-3xl font-earthlight text-center">Vue Admin</p>
          </div>
          <div class="mt-8">
            <router-link
              :to="item.link"
              class="flex items-center mt-3 py-1 px-8"
              v-for="(item, i) in routers"
              :key="i"
            >
              <img
                class="w-1/6 mr-4 cursor-pointer"
                :src="item.img"
                @click="goPage(item.link)"
              />
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
    <div class="h-[60px] bg-blueish-black">
      <div
        @click="logOut"
        class="flex justify-center items-end bg-[#dbdff14d] cursor-pointer mx-auto py-3 mb-2 w-1/2 rounded-full"
        >
          <BaseIcon name="LogOut"/>
        </div>
    </div>
    <div class="w-8 h-8 bg-bluedark"></div>
    <div class="w-8 h-8 bg-dark"></div>
    <div class="w-8 h-8 bg-birches"></div>
    <div class="w-8 h-8 bg-night-blue"></div>
    <div class="w-8 h-8 bg-purple-heart"></div>
    <div class="w-8 h-8 bg-purple-blue"></div>
    <div class="w-8 h-8 bg-blueish-black"></div>
    <div class="w-8 h-8 bg-sky-900"></div>
    <!-- Navbar End-->
      <RouterView />
    </div>
  </div>
</template>
