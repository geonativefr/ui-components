<template as="section">
  <Component :is="as" v-element-hover="onHover">
    <slot :isHovered="isHovered"/>
  </Component>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import { vElementHover } from '@vueuse/components';

defineProps({
  as: {
    type: String,
    default: 'div',
  },
});

const isHovered = ref(false);

function onHover(state) {
  isHovered.value = state;
}
</script>
