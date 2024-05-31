<template>
  <TransitionRoot as="template" :show="visible">
    <Dialog as="div" class="relative z-10" @close="close">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                       leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
      </TransitionChild>

      <div class="fixed z-10 inset-0 overflow-y-auto" @submit.prevent="submit">
        <div class="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300"
                           enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                           enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                           leave-from="opacity-100 translate-y-0 sm:scale-100"
                           leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
                :class="[
                hideCloseIcon ? 'pt-5' : 'pt-8',
                'relative bg-white rounded-lg',
                'px-4 pb-4',
                'text-left overflow-hidden shadow-xl',
                'transform transition-all',
                'max-w-lg w-full'
            ]">
              <button v-if="!hideCloseIcon" type="button" class="absolute top-0 right-0 p-3 focus:outline-none" @click="close">
                <XMarkIcon class="h-5 w-5 text-gray-800 hover:text-black" />
              </button>
              <slot />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, toRefs } from 'vue';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { syncRef } from '@vueuse/core';
import { XMarkIcon } from '@heroicons/vue/24/solid';


const emit = defineEmits(['submit', 'reset', 'close']);

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  hideCloseIcon: {
    type: Boolean,
    default: false,
  },
});

const {open} = toRefs(props);
const visible = ref(props.open);

function close() {
  emit('close');
}

syncRef(open, visible, {direction: 'ltr'});
</script>
