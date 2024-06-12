<template>
  <Menu as="div" class="relative flex justify-end items-center">
    <MenuButton :disabled="disabled" class="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
      <span class="sr-only">{{ srOnly }}</span>
      <slot name="icon" v-bind="{iconClasses}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" :class="iconClasses">
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </slot>
    </MenuButton>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems
          v-if="!disabled"
          :class="[
              fromBottom ? 'bottom-0' : 'top-0',
              fromLeft ? 'left-7' : 'right-7',
              'mx-3 origin-top-right absolute min-w-48 w-auto mt-1 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none'
              ]">
        <slot />
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems } from '@headlessui/vue';
import { computed } from 'vue';
const props = defineProps({
  iconClasses: {
    type: [String, Array],
    default: undefined,
  },
  srOnly: {
    type: String,
    default: 'Open',
  },
  fromBottom: {
    type: Boolean,
    default: false,
  },
  fromLeft: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const iconClasses = computed(() => {
  const defaultClasses = ['h-5', 'w-5'];
  if (props.disabled) {
    defaultClasses.push('opacity-60', 'cursor-not-allowed');
  }
  return props.iconClasses ?? defaultClasses;
});
</script>
