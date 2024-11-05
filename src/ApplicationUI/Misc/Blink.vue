<template>
  <span :class="[invisible ? 'invisible' : 'visible']">
    <slot />
  </span>
</template>

<script setup>
import { computed, ref } from 'vue';
import { get, set, whenever } from '@vueuse/core';

// eslint-disable-next-line no-undef
const props = defineProps({
  condition: {
    type: Boolean,
    default: true,
  },
  interval: {
    type: Number,
    default: 1000,
  },
});

const shouldBlink = computed(() => true === props.condition);
const shouldNotBlink = computed(() => false === props.condition);
const invisible = ref(false);
const toggle = () => (invisible.value = !invisible.value);
const timer = ref();
const blink = () => {
  clearInterval(get(timer));
  if (get(shouldBlink)) {
    set(timer, setInterval(toggle, props.interval));
  }
};

const stop = () => {
  clearInterval(get(timer));
  set(invisible, false);
};

whenever(shouldBlink, blink, { immediate: true });
whenever(shouldNotBlink, stop, { immediate: true });
</script>
