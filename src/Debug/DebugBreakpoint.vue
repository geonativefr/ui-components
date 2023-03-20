<template>
  <div v-if="show" class="absolute inset-0 h-screen w-screen bg-white bg-opacity-75 text-black z-500 flex items-center overflow-hidden">
    <div class="mx-auto text-5xl uppercase">{{ currentBreakpoint }}</div>
  </div>
</template>

<script setup>
import { useCurrentBreakpoint } from '@/Helpers/Breakpoints.js';
import { refAutoReset, set } from '@vueuse/core';
import { watch } from 'vue';

const show = refAutoReset(false, 200);
const currentBreakpoint = useCurrentBreakpoint();
watch(currentBreakpoint, () => set(show, true));
</script>
