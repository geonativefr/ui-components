<template>
  <Teleport v-if="condition" :to="to" v-bind="$attrs">
    <slot />
  </Teleport>
  <slot v-else />
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps({
  condition: {
    type: Boolean,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});
</script>
