<template>
  <div class="col-span-full animate-pulse w-30 mx-auto flex h-4 justify-around">
    <div
      :class="size"
      class="p-2 mx-1 animate-bounce rounded-full first-circle"
    ></div>
    <div
      :class="size"
      class="p-2 mx-1 animate-bounce rounded-full second-circle"
    ></div>
    <div
      :class="size"
      class="p-2 mx-1 animate-bounce rounded-full third-circle"
    ></div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    size: {
      type: String,
      default: 'w-5 h-5 bg-[#383874]',
    },
  },
};
</script>
<style lang="scss" scoped>
.first-circle {
  animation-delay: 0.1s;
}
.second-circle {
  animation-delay: 0.3s;
}
.third-circle {
  animation-delay: 0.5s;
}
@keyframes bounce {
  0%,
  100% {
    transform: translateY(-50%);
    animationtimingfunction: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animationtimingfunction: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
