<template>
  <TransitionRoot :show="shown" as="template" @after-leave="query = ''" appear>
    <Dialog as="div" class="relative z-10" @close="close()">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto p-12 sm:p-6 md:p-20">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="ease-in duration-200" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
          <DialogPanel class="mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
            <Combobox @update:modelValue="onSelect">
              <div class="relative">
                <slot name="search-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                       class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400">
                    <path fill-rule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clip-rule="evenodd"></path>
                  </svg>
                </slot>
                <slot name="input" v-bind="{query}">
                  <ComboboxInput class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm" :placeholder="placeholder" @change="onInput($event.target.value)" />
                </slot>
              </div>

              <template v-if="enableLoader && isLoading">
                <slot name="loader" v-bind="{query, isLoading}">
                  <div class="border-t border-gray-100 py-4 px-6 text-center text-sm italic text-gray-500 sm:px-14">
                    <slot name="loader-inner">Loading, please wait...</slot>
                  </div>
                </slot>
              </template>

              <template v-else-if="prompt && (query === '')">
                <slot name="prompt" v-bind="{query, isLoading}">
                  <div class="border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14">
                    <slot name="prompt-inner" />
                  </div>
                </slot>
              </template>

              <ComboboxOptions v-else-if="!prompt || (filteredItems.length > 0)" static class="max-h-80 scroll-pt-11 scroll-pb-2 space-y-2 overflow-y-auto pb-2 empty:hidden">
                <li v-for="[group, items] in Object.entries(groups)" :key="group">
                  <slot name="group" v-bind="{group, items, query}">
                    <h2 v-if="'undefined' !== group" class="bg-gray-100 py-2.5 px-4 text-xs font-semibold text-gray-900">
                      {{ group }}
                    </h2>
                  </slot>
                  <ul class="mt-2 text-sm text-gray-800">
                    <ComboboxOption v-for="(item, index) in items" :key="item.id" :value="item" as="template" v-slot="{ active }">
                      <slot v-bind="{group, item, items, index, active, stringify, query}">
                        <li :class="['cursor-pointer select-none px-4 py-2', active && 'bg-indigo-600 text-white']">
                          {{ stringify(item) }}
                        </li>
                      </slot>
                    </ComboboxOption>
                  </ul>
                </li>
              </ComboboxOptions>

              <template v-else-if="query !== '' && filteredItems.length === 0">
                <slot name="empty-state" v-bind="{query, isLoading}">
                  <div class="border-t border-gray-100 py-14 px-6 text-center text-sm sm:px-14">
                    <slot name="empty-state-inner">
                      <p class="mt-4 font-semibold text-gray-900">No results found</p>
                      <p class="mt-2 text-gray-500">We couldn’t find anything with that term. Please try again.</p>
                    </slot>
                  </div>
                </slot>
              </template>

            </Combobox>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import { asyncComputed, get, refDebounced, refThrottled, set, syncRef } from '@vueuse/core';
import { computed, ref, toRefs, watch } from 'vue';

const emit = defineEmits(['close', 'update:open', 'update:query', 'pick']);
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  query: {
    type: String,
    default: '',
  },
  items: {
    type: Array,
    default: () => ([]),
  },
  groupGetter: {
    type: Function,
    default: undefined,
  },
  stringify: {
    type: Function,
    default: undefined,
  },
  filter: {
    type: Function,
    default: undefined,
  },
  prompt: {
    type: Boolean,
    default: false,
  },
  enableLoader: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: 'Search...',
  },
  delayBetweenRequests: {
    type: Number,
    default: 0,
  },
});

const {open, query: theirQuery} = toRefs(props);
const query = ref(get(theirQuery));
const debouncedQuery = refThrottled(query, props.delayBetweenRequests);
const shown = ref(true);
const isLoading = ref(false);
syncRef(open, shown, {direction: 'ltr'});
syncRef(theirQuery, query, {direction: 'ltr'});

const defaultFilter = async (query, items, stringify) => {
  if (query === '' && props.prompt) {
    return [];
  }
  return items.filter((item) => stringify(item).toLowerCase().includes(query.toLowerCase()));
};
const filter = props.filter ?? defaultFilter;
const filterWrapper = async function (query, items, stringify) {
  set(isLoading, true);
  try {
    return await filter(query, items, stringify);
  } finally {
    set(isLoading, false);
  }
};
const filteredItems = asyncComputed(() => filterWrapper(get(debouncedQuery), props.items, stringify), props.items);
const stringify = props.stringify ?? ((item) => item?.name);
const groupGetter = props.groupGetter ?? (() => undefined);
const groups = computed(() =>
    filteredItems.value.reduce((groups, item) => {
      let group = groupGetter(item);
      return {...groups, [group]: [...(groups[group] || []), item]};
    }, {}),
);

function onInput(value) {
  set(query, value);
}

watch(debouncedQuery, (value) => emit('update:query', value));

function onSelect(item) {
  emit('pick', item);
  close();
}

function close() {
  emit('close');
  emit('update:open', false);
  set(shown, false);
}
</script>
