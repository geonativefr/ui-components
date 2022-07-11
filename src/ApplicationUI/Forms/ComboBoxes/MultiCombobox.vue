<template>
  <div class="w-full max-w-4xl space-y-1">
    <Combobox v-model="selectedKeys" multiple>

      <slot name="label">
        <ComboboxLabel class="block text-sm font-medium leading-5 text-gray-700 empty:hidden">
          {{ label }}
        </ComboboxLabel>
      </slot>

      <div class="relative">
        <span class="inline-block w-full rounded-md shadow-sm">
          <div class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-2 pr-10 text-left transition duration-150 ease-in-out focus-within:border-blue-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-500 sm:text-sm sm:leading-5">

            <span class="block flex flex-wrap gap-2">
              <span v-if="selectedKeys.length === 0" class="p-0.5 cursor-pointer empty:hidden" @click="focus">
                <slot name="empty-state" />
              </span>

                <span v-for="item in selectedItems" :key="uniqueKey(item)">
                  <slot name="selected-items" v-bind="{item, stringify, remove}">
                    <span class="flex items-center gap-1 rounded bg-blue-600 text-white px-2 py-0.5">
                      <span>{{ stringify(item)}}</span>
                      <button role="button" @click="remove(item)">
                        <XIcon class="h-4 w-4"/>
                      </button>
                    </span>
                  </slot>
                </span>

              <ComboboxInput
                ref="input"
                autocomplete="off"
                v-bind="inputAttrs"
                class="reset border-none p-0 focus:ring-0 grow"
                @change="query = $event.target.value"
                @focus="showOptions"
              />
            </span>

            <div class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
              <button v-if="clearable" type="button" @click="clear">
                <XIcon v-if="0 !== selectedKeys.length" class="h-5 w-5 text-gray-300" aria-hidden="true"/>
              </button>
              <button type="button" @click="focus">
                <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
              </button>
              <ComboboxButton ref="button" class="hidden" />
            </div>
          </div>
        </span>

        <div class="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10">
          <ComboboxOptions class="shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5">
            <ComboboxOption v-for="item in availableItems" :key="uniqueKey(item)" v-slot="{ active, selected }" :value="uniqueKey(item)" :disabled="disabled.includes(uniqueKey(item))">
              <slot v-bind="{item, active, selected, stringify}">
                <li class="relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none" :class="active ? 'bg-blue-600 text-white' : 'text-gray-900'">
                  <span class="block truncate" :class="{ 'font-semibold': selected, 'font-normal': !selected }">
                    {{ stringify(item) }}
                  </span>
                  <span v-if="selected" class="absolute inset-y-0 right-0 flex items-center pr-4" :class="{ 'text-white': active, 'text-blue-600': !active }">
                    <CheckIcon class="h-5 w-5" />
                  </span>
                </li>
              </slot>
            </ComboboxOption>
          </ComboboxOptions>
        </div>
      </div>
    </Combobox>
  </div>
</template>

<script setup>
import { computed, nextTick, ref, toRefs, watch } from 'vue';
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue';
import { CheckIcon, SelectorIcon, XIcon } from '@heroicons/vue/solid';
import { asyncComputed, get, set, templateRef } from '@vueuse/core';

// eslint-disable-next-line no-undef
const emit = defineEmits(['update:modelValue']);

// eslint-disable-next-line no-undef
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: Array,
    default: () => ([]),
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
    default: () => ({})
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
const selectedKeys = ref([]);
const selectedItems = computed(() => get(items).filter(item => get(selectedKeys).map(uniqueKey).includes(uniqueKey(item))));

const filter = props.filter ?? (async (items, query) => get(items).filter((item) => stringify(item).toLowerCase().includes(query.toLowerCase())));
const filteredItems = computed(() => get(items).filter(item => !get(selectedKeys).map(uniqueKey).includes(uniqueKey(item))));
const availableItems = asyncComputed(() => filter(get(excludeSelected) ? get(filteredItems) : get(items), get(query)), []);

const button = templateRef('button');
const input = templateRef('input');
const showOptions = () => get(button)?.$el?.click();
const focus = () => get(input).$el.focus();

async function clear() {
  set(selectedKeys, []);
  await nextTick();
  focus();
}

async function remove(itemToRemove) {
  set(selectedKeys, get(selectedKeys).filter(item => uniqueKey(item) !== uniqueKey(itemToRemove)));
  await nextTick();
  focus();
}

watch(modelValue, ids => set(selectedKeys, ids), {immediate: true});
watch(selectedKeys, ids => emit('update:modelValue', ids));
watch(selectedKeys, () => set(query, ''));
</script>
