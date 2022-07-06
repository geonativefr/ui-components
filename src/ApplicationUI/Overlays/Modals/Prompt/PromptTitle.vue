<template>
  <DialogTitle :as="tag" class="mb-2 text-center text-lg leading-6 font-medium text-gray-900">
    <slot/>
  </DialogTitle>
</template>

<script setup>
import { DialogTitle } from '@headlessui/vue';

defineProps({
  tag: {
    type: String,
    default: 'h3',
  },
});
</script>
