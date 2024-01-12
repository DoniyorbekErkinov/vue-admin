<script setup lang="ts">
import { ref, watch, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const routers = ref([
  { name: "Dashboard", link: "/", img: '/panda2.png' },
  { name: "Users", link: "/users", img: '/users.png' },
]);

function goPage(link: string) {
  router.push(link);
}
function logOut() {
  localStorage.clear();
  if (!localStorage.access) {
    router.push("/login");
  }
}
</script>
<template>
  <div class="h-full relative">
   
    <div
      class="slg:w-[285px] slg:flex width-transition slg:flex-col slg:fixed slg:inset-y-0 justify-center dark:bg-[#352e78] bg-[#DAF1F9]"
    >
      <div
        class="flex flex-col w-[85%] mx-auto h-[95%] dark:bg-[#07004d] bg-[#A4D7E1] py-12"
        style="border-radius: 45px"
      >
        <div class="flex-grow">
          <div class="flex justify-center items-center">
            <img
              src="/pandaicon.png"
              class="w-[19%] mr-4"
              alt="flaticon.com"
            />
            <p
              class="text-snow text-3xl font-earthlight text-center"
            >
              PANDAS
            </p>
          </div>
          <div class="mt-8">
            <router-link :to="item.link"
              class="flex items-center mt-3 py-1 px-8"
              v-for="(item, i) in routers"
              :key="i"
            >
              <img                
                class="w-1/6 mr-4 cursor-pointer"                
                :src="item.img"
                @click="goPage(item.link)"
              />
              <span               
                class="text-snow text-xl text-left"                
                >{{ item.name }}</span
              >
            </router-link>
          </div>
        </div>
        <div
          @click="logOut"
          class="flex justify-center items-end bg-[#dbdff14d] cursor-pointer mx-auto py-3 mb-2 w-1/2 rounded-full"
        >
          <svg
            class="w-full ml-1"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0165 5.38948V4.45648C13.0165 2.42148 11.3665 0.771484 9.33146 0.771484H4.45646C2.42246 0.771484 0.772461 2.42148 0.772461 4.45648V15.5865C0.772461 17.6215 2.42246 19.2715 4.45646 19.2715H9.34146C11.3705 19.2715 13.0165 17.6265 13.0165 15.5975V14.6545"
              stroke="#9292C1"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.8096 10.0214H7.76855"
              stroke="#9292C1"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.8818 7.10632L19.8098 10.0213L16.8818 12.9373"
              stroke="#9292C1"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>        
      </div>
    </div>
    <div
      class="flex h-full flex-col slg:pl-[285px] width-transition flex-1 z-[1] slg:pt-0 slg:pb-0 pt-[52px] dark:bg-[#352e78] bg-[#DAF1F9] slg:overflow-y-auto slg:scrollbar dark:text-white slg:dark:dark-scrollbar overflow-x-hidden"
      id="scrollTop"
    >
      <RouterView />
    </div>
  </div>
</template>
