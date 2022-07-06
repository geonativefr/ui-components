<template>
  <MultiCombobox
      v-if="Array.isArray(modelValue)"
      :items="items"
      :model-value="modelValue"
      :stringify="stringify"
      :unique-key="uniqueKey"
      :filter="filter"
      :input-attrs="inputAttrs"
      :exclude-selected="excludeSelected"
      :clearable="clearable"
      :label="label"
      v-bind="$attrs"
  >
    <template #label>
      <slot name="label" />
    </template>

    <template #selected-items="{item, stringify, remove}">
      <slot name="selected-items" v-bind="{item, stringify, remove}" />
    </template>

    <template #default="{item, active, selected, stringify}">
      <slot v-bind="{item, active, selected, stringify}" />
    </template>
  </MultiCombobox>

  <SingleCombobox
      v-else
      :items="items"
      :model-value="modelValue"
      :stringify="stringify"
      :unique-key="uniqueKey"
      :filter="filter"
      :input-attrs="inputAttrs"
      :exclude-selected="excludeSelected"
      :clearable="clearable"
      :label="label"
      v-bind="$attrs"
  >
    <template #label>
      <slot name="label" />
    </template>

    <template #default="{item, active, selected, stringify}">
      <slot v-bind="{item, active, selected, stringify}" />
    </template>
  </SingleCombobox>
</template>

<script setup>
import MultiCombobox from './MultiCombobox.vue';
import SingleCombobox from './SingleCombobox.vue';

// eslint-disable-next-line no-undef
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: [String, Number, Object, Array],
    default: undefined,
  },
  stringify: {
    type: Function,
    default: undefined,
  },
  uniqueKey: {
    type: Function,
    default: undefined,
  },
  filter: {
    type: Function,
    default: undefined,
  },
  inputAttrs: {
    type: Object,
    default: () => ({}),
  },
  excludeSelected: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: undefined,
  },
});
</script>
