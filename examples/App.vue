<template>
  <div>
    <h1 class="text-blue-500">yop</h1>
    <ComboBox v-slot="{item, stringify}" exclude-selected clearable v-model="selected" :items="items" class="w-96" :inputAttrs="inputAttrs">
      <li class="flex p-2 items-center gap-2 cursor-pointer hover:bg-gray-100">{{ stringify(item) }}</li>
    </ComboBox>

    <pre class="text-xs">{{ {selected, selectedItem} }}</pre>
  </div>
</template>

<script setup>
import ComboBox from '../src/ApplicationUI/Forms/ComboBoxes/ComboBox.vue';
import { computed, ref } from 'vue';

const items = [{id: 1, name: 'foo'}, {id: 2, name: 'bar'}, {id: 3, name: 'baz'}];
const selected = ref();
const selectedItem = computed(() => items.find(item => item.id === selected.value));
const inputAttrs = {
  placeholder: 'Pick a value',
};
//setTimeout(() => selected.value = 1, 500);
</script>
