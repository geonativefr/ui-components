<template>
  <input
    :value="modelValue"
    :class="classes"
    @input="emit('update:modelValue', $event.target.value)"/>
</template>

<script setup>
import { computed, ref } from 'vue';
import { get } from '@vueuse/core';

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: {
    type: String,
    required: false,
  },
  noPadding: {
    type: Boolean,
    default: false,
  },
  noBorder: {
    type: Boolean,
    default: false,
  },
  noRound: {
    type: Boolean,
    default: false,
  },
  noRing: {
    type: Boolean,
    default: false,
  },
});

const baseClasses = ref([
  'group',
  'disabled:opacity-80',
  'disabled:cursor-default',
  'text-gray-900',
  'placeholder:text-gray-400',
  'focus:ring-primary-600',
]);

const paddingClasses = computed(() => {
  if (props.noPadding) {
    return [];
  }
  return ['p-1.5'];
});

const borderClasses = computed(() => {
  if (props.noBorder) {
    return [];
  }
  return ['border'];
});

const roundClasses = computed(() => {
  if (props.noRound) {
    return [];
  }
  return ['rounded-md'];
});

const ringClasses = computed(() => {
  if (props.noRing) {
    return [];
  }
  return ['ring-1', 'ring-inset', 'focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2'];
});


const classes = computed(() => [
  ...get(baseClasses),
  ...get(paddingClasses),
  ...get(borderClasses),
  ...get(roundClasses),
  ...get(ringClasses),
]);
</script>
