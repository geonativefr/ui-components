<template>
  <Component :is="as" :disabled="disabled || loading" :type="type" :class="classes">
    <SpinnerIcon v-if="loading" :class="iconClasses"/>
    <span v-else :class="iconClasses">
      <slot name="icon"/>
    </span>
    <span v-if="loading">{{ loadingText }}</span>
    <slot v-else/>
  </Component>
</template>

<script setup>
import SpinnerIcon from '@/ApplicationUI/Icons/SpinnerIcon.vue';
import { computed, ref } from 'vue';
import { get } from '@vueuse/core';

const props = defineProps({
  as: {
    type: [String, Object],
    default: () => 'button',
  },
  type: {
    type: String,
    default: undefined,
  },
  noFlex: {
    type: Boolean,
    default: false,
  },
  noPadding: {
    type: Boolean,
    default: false,
  },
  noBorder: {
    type: Boolean,
    default: false,
  },
  noShadow: {
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
  theme: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'danger', 'cancel'].includes(value),
  },
  icon: {
    type: String,
    default: undefined,
  },
  iconRight: {
    type: Boolean,
    default: false,
  },
  iconType: {
    type: String,
    default: 'solid',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  loadingText: {
    type: String,
    default: undefined,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const baseClasses = ref(['disabled:opacity-80', 'disabled:cursor-default']);

const flexClasses = computed(() => {
  if (props.noFlex) {
    return [];
  }
  return ['flex', 'items-center', 'justify-center', 'gap-2'];
});

const paddingClasses = computed(() => {
  if (props.noPadding) {
    return [];
  }
  return ['py-2', 'px-4'];
});

const borderClasses = computed(() => {
  if (props.noBorder) {
    return [];
  }
  return ['border'];
});

const shadowClasses = computed(() => {
  if (props.noShadow) {
    return [];
  }
  return ['shadow-sm'];
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
  return ['focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2'];
});

const iconClasses = computed(() => {
  return [props.iconRight ? '-mr-1 order-last' : '-ml-1', 'h-4 w-4 empty:hidden'];
});

const themeClasses = computed(() => {
  const themes = {
    default: ['enabled:hover:bg-gray-50'],
    primary: [
      'text-white',
      'bg-primary-700',
      'dark:bg-primary-900',
      'enabled:hover:bg-primary-800',
      'enabled:focus:ring-primary-500',
    ],
    danger: [
      'text-white',
      'bg-red-600',
      'enabled:hover:bg-red-700',
      'enabled:focus:ring-red-500',
    ],
    cancel: [
      'text-gray-700',
      'bg-white',
      'enabled:hover:bg-gray-600 enabled:hover:text-white enabled:hover:border-gray-200',
      'enabled:focus:ring-primary-500',
    ],
  };

  if ('button' !== props.as) {
    for (const theme of Object.keys(themes)) {
      const themeClasses = themes[theme];
        for (const index in themeClasses) {
          themeClasses[index] = themeClasses[index].replaceAll('enabled:', '');
        }
    }
  }

  return themes[props.theme] ?? themes.default;
});

const classes = computed(() => [
  ...get(baseClasses),
  ...get(flexClasses),
  ...get(paddingClasses),
  ...get(borderClasses),
  ...get(shadowClasses),
  ...get(roundClasses),
  ...get(ringClasses),
  ...get(themeClasses),
]);

const loadingText = computed(() => props.loadingText ?? 'Please wait...');
const type = computed(() => ('button' === props.as ? props.type ?? 'button' : undefined));
</script>
