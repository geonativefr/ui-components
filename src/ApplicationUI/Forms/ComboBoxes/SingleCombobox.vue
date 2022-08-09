<template>
  <div ref="container" @keydown.esc="hideOptions" @keyup="({code}) => ['ArrowUp', 'ArrowDown'].includes(code) && showOptions()">
    <Combobox as="div" v-model="selectedItem">
      <slot name="label">
        <ComboboxLabel class="block text-sm font-medium text-gray-700 mb-1 empty:hidden">{{ label }}</ComboboxLabel>
      </slot>

      <div class="relative">
        <ComboboxInput
            ref="input"
            :display-value="displayValueFn"
            autocomplete="off"
            v-bind="inputAttrs"
            class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
            @focus="showOptions"
            @blur="onBlur($event.target)"
            @change="query = $event.target.value"
        />

        <div class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <button v-if="clearable" type="button" @click="clear">
            <XIcon v-if="null != modelValue" name="x" class="h-5 w-5 text-gray-300" aria-hidden="true"/>
          </button>
          <button type="button" @click="toggle">
            <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
          </button>
        </div>

        <div v-show="open" class="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10">
          <ComboboxOptions
              static
              v-if="availableItems.length > 0"
              class="shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
          >
            <ComboboxOption
                v-for="item of availableItems"
                :key="uniqueKey(item)"
                :value="item"
                :disabled="disabled.includes(uniqueKey(item))"
                v-slot="{ active, selected }"
                @click="() => autoHide && hideOptions()"
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
  </div>
</template>

<script setup>
import { computed, nextTick, ref, toRefs, watch } from 'vue';
import { CheckIcon, SelectorIcon, XIcon } from '@heroicons/vue/solid';
import { Combobox, ComboboxInput, ComboboxLabel, ComboboxOption, ComboboxOptions } from '@headlessui/vue';
import { get, onClickOutside, set, syncRef, templateRef, whenever } from '@vueuse/core';

// eslint-disable-next-line no-undef
const emit = defineEmits(['update:modelValue', 'update:query', 'clear']);

// eslint-disable-next-line no-undef
const props = defineProps({
  items: {
    type: Array, // Choices of the combobox.
    required: true,
  },
  modelValue: {
    type: [String, Number, Object], // Selected choice of the combobox.
    default: null,
  },
  query: {
    default: '',
  },
  stringify: {
    type: Function, // How to render a choice as a string.
    default: undefined,
  },
  uniqueKey: {
    type: Function, // How to render a choice as a unique ID.
    default: undefined,
  },
  filter: {
    type: Function, // How to filter choices based on query.
    default: undefined,
  },
  inputAttrs: {
    type: Object, // Attributes to pass to the <input> tag.
    default: () => ({}),
  },
  excludeSelected: {
    type: Boolean, // Exclude already selected choices from available items.
    default: false,
  },
  clearable: {
    type: Boolean, // Display a clear button to remove all selected choices.
    default: false,
  },
  label: {
    type: String, // Label to display.
    default: undefined,
  },
  disabled: {
    type: Array, // Choices that are not selectable.
    default: () => ([]),
  },
  autoHide: {
    type: Boolean, // Hide choices after picking one.
    default: false,
  },
});
const open = ref(false);
const toggle = () => set(open, !get(open));
const {items, excludeSelected, modelValue, query: inputQuery} = toRefs(props);
const stringifyFn = props.stringify ?? ((item) => item?.name ?? item ?? undefined);
const stringify = (item) => {
  try {
    const stringified = stringifyFn(item);
    if (null == stringified) {
      throw Error('Cannot stringify nullish value');
    }
    return `${stringified}`;
  } catch (e) {
    console.debug('Unable to stringify item', item, e);
    return '';
  }
};
const uniqueKey = props.uniqueKey ?? ((item) => item?.id ?? item);

function getItemByUniqueKey(id) {
  return props.items.find(item => uniqueKey(item) === id);
}

const query = ref(get(inputQuery));
const selectedItem = ref();
const filter = props.filter ?? (async (query, items) => get(items).filter((item) => stringify(item).toLowerCase().includes(query.toLowerCase())));
const filteredItems = computed(() => get(items).filter(item => uniqueKey(item) !== uniqueKey(get(modelValue))));
const availableItems = ref(get(items));
const displayValueFn = (item) => null != item ? stringify(item) : get(query);

const input = templateRef('input');
const showOptions = () => set(open, true);
const hideOptions = () => set(open, false);
const focus = () => get(input).$el.focus();

function hideIfNecessary() {
  if (props.autoHide) {
    get(input).$el.blur();
    hideOptions();
  }
}

function onBlur(target) {
  if ('' === target.value && '' !== get(query)) {
    target.value = get(query);
  }
}

async function clear() {
  set(selectedItem, undefined);
  set(query, '');
  await nextTick();
  focus();
  emit('clear');
}
const container = templateRef('container');
onClickOutside(container, () => hideOptions());

watch(modelValue, id => set(selectedItem, getItemByUniqueKey(id)), {immediate: true});
watch(selectedItem, item => emit('update:modelValue', uniqueKey(item)));
whenever(selectedItem, item => set(query, stringify(item)));
watch(query, query => emit('update:query', query));
watch(query, async query => set(availableItems, (await filter(get(query), get(excludeSelected) ? get(filteredItems) : get(items)) ?? [])));
watch(inputQuery, (value) => set(query, null != value ? `${value}` : ''));
watch(selectedItem, () => props.autoHide && hideOptions());
watch(query, () => showOptions());
syncRef(items, availableItems, {direction: 'ltr'});
</script>
