<template>
  <Combobox as="div" v-model="selectedItem">

    <slot name="label">
      <ComboboxLabel class="block text-sm font-medium text-gray-700 mb-1 empty:hidden">{{ label }}</ComboboxLabel>
    </slot>

    <div class="relative">
      <ComboboxInput
          ref="input"
          :display-value="(item) => stringify(item)"
          autocomplete="off"
          v-bind="inputAttrs"
          class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
          @focus="showOptions"
          @change="query = $event.target.value"
      />

      <div class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
        <button v-if="clearable" type="button" @click="selectedItem = undefined">
          <XIcon v-if="null != modelValue" name="x" class="h-5 w-5 text-gray-300" aria-hidden="true"/>
        </button>
        <button type="button" @click="focus">
          <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
        </button>
        <ComboboxButton ref="button" class="hidden"/>
      </div>

      <div class="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10">
        <ComboboxOptions
            v-if="availableItems.length > 0"
            class="shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
        >
          <ComboboxOption
              v-for="item in availableItems"
              :key="uniqueKey(item)"
              :value="item"
              :disabled="disabled.includes(uniqueKey(item))"
              v-slot="{ active, selected }"
              @click="blur"
          >
            <slot v-bind="{ item, active, selected, stringify }">
              <li :class="['relative cursor-pointer select-none py-2 pl-3 pr-9', active ? 'bg-indigo-600 text-white' : 'text-gray-900']">
                <span :class="['block truncate', selected && 'font-semibold']">{{ stringify(item) }}</span>
                <span v-if="selected"
                      :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-indigo-600']">
                <CheckIcon class="h-5 w-5" aria-hidden="true"/>
              </span>
              </li>
            </slot>
          </ComboboxOption>
        </ComboboxOptions>
      </div>
    </div>
  </Combobox>
</template>

<script setup>
import { computed, ref, toRefs, watch } from 'vue';
import { CheckIcon, SelectorIcon, XIcon } from '@heroicons/vue/solid';
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue';
import { set, get, asyncComputed, templateRef } from '@vueuse/core';

// eslint-disable-next-line no-undef
const emit = defineEmits(['update:modelValue']);

// eslint-disable-next-line no-undef
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: [String, Number, Object],
    default: null,
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
  disabled: {
    type: Array,
    default: () => ([]),
  },
});

const {items, excludeSelected, modelValue} = toRefs(props);
const stringify = props.stringify ?? ((item) => item?.name ?? item ?? '');
const uniqueKey = props.uniqueKey ?? ((item) => item?.id ?? item);

function getItemByUniqueKey(id) {
  return props.items.find(item => uniqueKey(item) === id);
}

const query = ref('');
const selectedItem = ref();
const filter = props.filter ?? (async (items, query) => get(items).filter((item) => stringify(item).toLowerCase().includes(query.toLowerCase())));
const filteredItems = computed(() => get(items).filter(item => uniqueKey(item) !== uniqueKey(get(modelValue))));
const availableItems = asyncComputed(() => filter(get(excludeSelected) ? get(filteredItems) : get(items), get(query)), []);

const button = templateRef('button');
const input = templateRef('input');
const showOptions = () => get(button)?.$el?.click();
const focus = () => get(input).$el.focus();
const blur = () => get(input).$el.blur();

watch(modelValue, id => set(selectedItem, getItemByUniqueKey(id)), {immediate: true});
watch(selectedItem, item => emit('update:modelValue', uniqueKey(item)));
</script>
