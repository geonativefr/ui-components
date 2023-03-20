<template>
  <slot :id="id" />
</template>

<script setup>
import { v4 as uuid } from 'uuid';

const id = uuid();
</script>
