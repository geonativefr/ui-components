<template>
  <slot v-if="isMounted"/>
</template>

<script setup>
import { useMounted } from '@vueuse/core';

const isMounted = useMounted();
</script>
