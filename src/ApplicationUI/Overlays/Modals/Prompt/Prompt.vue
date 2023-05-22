<template>
  <Modal :open="visible" @close="close">
    <form ref="FormHTMLElement" @submit.prevent="submit" @reset.prevent="reset">
      <div>
        <slot :form="FormHTMLElement" />
      </div>

      <slot name="footer">
        <footer class="mt-5 sm:mt-6 grid sm:grid-cols-2 gap-3 sm:grid-flow-row-dense empty:hidden">
          <slot name="buttons">
            <button type="submit"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
              {{ submitButtonText }}
            </button>
            <button type="reset"
              class="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm">
              {{ resetButtonText }}
            </button>
          </slot>
        </footer>
      </slot>
    </form>
  </Modal>
</template>

<script setup>
import { ref, toRefs } from 'vue';
import { get, set, syncRef, templateRef } from '@vueuse/core';
import Modal from '../Modal.vue';

const emit = defineEmits(['submit', 'reset']);

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  resetButtonText: {
    type: String,
    default: 'Cancel',
  },
  submitButtonText: {
    type: String,
    default: 'Submit',
  },
  onReset: {
    type: Function,
    default: undefined,
  },
  onSubmit: {
    type: Function,
    default: undefined,
  },
  hideOnSubmit: {
    type: Boolean,
    default: true,
  },
  hideOnReset: {
    type: Boolean,
    default: true,
  },
  noFooter: {
    type: Boolean,
    default: false,
  },
});

const { open } = toRefs(props);
const visible = ref(props.open);
const FormHTMLElement = templateRef('FormHTMLElement');

async function submit() {
  const onSubmit = props.onSubmit ?? ((FormHTMLElement) => emit('submit', { form: get(FormHTMLElement), visible }));
  await onSubmit({ form: get(FormHTMLElement), visible });
  if (props.hideOnSubmit) {
    set(visible, false);
  }
}

async function reset() {
  const onReset = props.onReset ?? ((FormHTMLElement) => emit('reset', { form: get(FormHTMLElement), visible }));
  await onReset({ form: get(FormHTMLElement), visible });
  if (props.hideOnReset) {
    set(visible, false);
  }
}

function close() {
  emit('close');
}

syncRef(open, visible, { direction: 'ltr' });
</script>
