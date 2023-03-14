<script lang="ts">
import { defineAsyncComponent, markRaw, ref } from "vue";

export default {
  setup(props) {
    const icons = ref(null);
    const name = ref(props.name);
    const loadIcon = async () => {
      const component = await defineAsyncComponent(
        () => import(`./icons/${name.value}.vue`)
      );
      icons.value = markRaw(component);
    };
    loadIcon();
    return {
      icons,
      loadIcon,
    };
  },
  props: {
    name: String,
  },
};
</script>

<template>
  <component :is="icons"></component>
</template>
