<template>
  <span class="inline-flex items-center justify-center rounded-full p-4" :style="{backgroundColor}">
    <span class="text-xs font-medium leading-none text-white">{{ text }}</span>
  </span>
</template>

<script setup>
import { toRefs, computed } from 'vue';
import { stringToColor } from '@/Helpers/Colors.js';
import md5 from 'md5';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
});

const {id} = toRefs(props);
const backgroundColor = computed(() => stringToColor(md5(id.value.toLowerCase())));
</script>
