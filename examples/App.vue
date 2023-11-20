<template>
  <div>
    <h1 class="text-blue-500">yop</h1>
    <ComboBox v-slot="{item, stringify}" exclude-selected clearable v-model="selected" :items="items" class="w-96" :inputAttrs="inputAttrs" />

    <pre class="text-xs">{{ {selected, selectedItem} }}</pre>
  </div>
</template>

<script setup>
import { ComboBox } from '../src/index.js';
import { computed, ref } from 'vue';

const items = [{id: 1, name: 'foo'}, {id: 2, name: 'bar'}, {id: 3, name: 'baz'}];
const selected = ref();
const selectedItem = computed(() => items.find(item => item.id === selected.value));
const inputAttrs = {
  placeholder: 'Pick a value',
};
//setTimeout(() => selected.value = 1, 500);
</script>
