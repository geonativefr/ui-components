<template>
  <component :is="as" class="relative">
    <div class="absolute inset-0 overflow-auto">
      <slot />
    </div>
  </component>
</template>

<script setup>
defineProps({
  as: {
    type: String,
    default: 'div',
  },
});
</script>
