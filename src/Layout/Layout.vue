<template>
  <div class="h-full relative">
    <div
      id="switch-button"
      class="slg:block dark:bg-blueish-black bg-white dark:border-black border-[#eef1fa] border-2 switch-button"
      style="transition: all 0.3s"
      @click="switchMinimize"
      :class="sidebarSwitch ? 'left-[285px]' : 'left-[100px]'"
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
      class="slg:flex width-transition slg:flex-col slg:fixed slg:inset-y-0 dark:bg-blueish-black bg-slate-300"
    >
      <ul class="flex flex-col">
        <router-link to="/">Home</router-link>
        <router-link to="/users">Users</router-link>
        <router-link to="/login">Login</router-link>
      </ul>
    </div>
    <div
      :class="[sidebarSwitch ? 'slg:pl-[285px]' : 'slg:pl-[100px]']"
      class="flex h-full flex-col width-transition flex-1 z-[1] slg:pt-0 slg:pb-0 pt-[52px] dark:bg-black bg-slate-100 slg:overflow-y-auto pb-[76px] slg:scrollbar dark:text-white slg:dark:dark-scrollbar overflow-x-hidden"
      id="scrollTop"
    >
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const storedSidebarSwitch = localStorage.getItem("sidebarSwitch");
const sidebarSwitch = ref<Boolean>(
  storedSidebarSwitch ? JSON.parse(storedSidebarSwitch) : true
);
function switchMinimize() {
  sidebarSwitch.value = !sidebarSwitch.value;
  localStorage.setItem("sidebarSwitch", JSON.stringify(sidebarSwitch.value));
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
