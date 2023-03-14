<template>
  <div class="h-full relative">
    <div
      id="switch-button"
      class="slg:block dark:bg-blueish-black bg-white dark:border-black border-[#eef1fa] border-2 switch-button"
      style="transition: all 0.3s"
      @click="switchMinimize"
      :class="sidebarSwitch ? 'left-[265px]' : 'left-[90px]'"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :class="[!sidebarSwitch ? 'rotate-180' : '']"
        class="h-6 w-6 switch-button-svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
    <div
      :class="[sidebarSwitch ? 'slg:w-[285px]' : 'slg:w-[100px]']"
      class="slg:flex width-transition slg:flex-col slg:fixed slg:inset-y-0 justify-center dark:bg-[#352e78] bg-[#DAF1F9]"
    >
      <div
        class="flex flex-col w-[85%] mx-auto h-[95%] dark:bg-[#07004d] bg-[#A4D7E1] py-12"
        style="border-radius: 45px"
      >
        <div class="flex-grow">
          <div class="flex justify-center items-center">
            <img
              src="/pandaicon.png"
              :class="sidebarSwitch ? 'w-[19%] mr-4' : 'w-3/5'"
              alt="flaticon.com"
            />
            <p
              v-if="sidebarSwitch"
              class="text-snow text-3xl font-extralight text-center"
            >
              PANDAS
            </p>
          </div>
          <div class="mt-8">
            <div
              class="flex items-center mt-3 py-1 px-8"
              :class="sidebarSwitch ? '' : 'justify-center'"
              v-for="(item, i) in routers"
              :key="i"
            >
              <img
                v-if="item.name == 'Dashboard'"
                class="cursor-pointer"
                :class="
                  sidebarSwitch
                    ? 'w-1/6 mr-4'
                    : 'w-full min-w-[35px] hover:scale-125'
                "
                src="/panda2.png"
                @click="goPage(item.link)"
              />
              <img
                v-if="item.name == 'Users'"
                @click="goPage(item.link)"
                class="cursor-pointer"
                :class="
                  sidebarSwitch
                    ? 'w-1/6 mr-4'
                    : 'w-full min-w-[35px] hover:scale-125'
                "
                src="/users.png"
              />
              <router-link
                v-if="sidebarSwitch"
                class="text-snow text-xl text-left"
                :to="item.link"
                >{{ item.name }}</router-link
              >
            </div>
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
        <div
          @click="toggleDarkMode"
          class="flex justify-center items-end bg-[#dbdff14d] cursor-pointer rounded-md mx-auto"
          :class="sidebarSwitch ? 'py-2 px-4 w-1/4' : 'py-2 w-1/2 rounded-full'"
        >
          <BaseIcon
            v-if="mode == 'light'"
            name="LightModeIcon"
            :class="sidebarSwitch ? 'h-4 w-4' : 'w-6 h-6'"
          />
          <BaseIcon
            v-if="mode == 'dark'"
            name="DarkModeIcon"
            :class="sidebarSwitch ? 'h-4 w-4' : 'w-6 h-6'"
          />
        </div>
      </div>
    </div>
    <div
      :class="[sidebarSwitch ? 'slg:pl-[285px]' : 'slg:pl-[100px]']"
      class="flex h-full flex-col width-transition flex-1 z-[1] slg:pt-0 slg:pb-0 pt-[52px] dark:bg-[#352e78] bg-[#DAF1F9] slg:overflow-y-auto slg:scrollbar dark:text-white slg:dark:dark-scrollbar overflow-x-hidden"
      id="scrollTop"
    >
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const routers = ref([
  { name: "Dashboard", link: "/" },
  { name: "Users", link: "/users" },
]);
const mode = ref<string>("");

function toggleDarkMode() {
  if (mode.value == "light") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("Mode", "dark");
    mode.value = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("Mode", "light");
    mode.value = "light";
  }
}
onBeforeMount(() => {
  if (localStorage.Mode == "dark") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("Mode", "dark");
    mode.value = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("Mode", "light");
    mode.value = "light";
  }
});
const storedSidebarSwitch = localStorage.getItem("sidebarSwitch");
const sidebarSwitch = ref<Boolean>(
  storedSidebarSwitch ? JSON.parse(storedSidebarSwitch) : true
);
function switchMinimize() {
  sidebarSwitch.value = !sidebarSwitch.value;
  localStorage.setItem("sidebarSwitch", JSON.stringify(sidebarSwitch.value));
}
function goPage(link: string) {
  router.push(link);
}
function logOut() {
  localStorage.removeItem("access");
  if (!localStorage.access) {
    router.push("/login");
  }
}
</script>

<style lang="scss" scoped>
.switch-button {
  z-index: 100;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  padding: 7px 12px 12px 6px;
  position: absolute;
  top: 120px;
  transform: translate(-50%, 0);
  cursor: pointer;

  svg {
    color: #383874;
    transition: all 0.3s;
  }
}

.scrollTop {
  position: fixed;
}

.width-transition {
  transition: all 0.3s;
}
</style>
