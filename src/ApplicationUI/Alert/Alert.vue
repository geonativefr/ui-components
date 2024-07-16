<template>
  <div :class="['rounded-md p-4', {'bg-gray-50': is('default'), 'bg-green-50': is('success'), 'bg-red-50': is('danger'), 'bg-yellow-50': is('warning'), 'bg-primary-50': is('info')}]">
    <div class="flex">
      <div :class="['flex-shrink-0']">
        <CheckCircleIcon v-if="is('success')" :class="['h-5 w-5 text-green-400']" aria-hidden="true"/>
        <ExclamationTriangleIcon v-else-if="is('warning')" :class="['h-5 w-5 text-yellow-400']" aria-hidden="true"/>
        <XCircleIcon v-else-if="is('danger')" :class="['h-5 w-5 text-red-400']" aria-hidden="true"/>
        <InformationCircleIcon v-else :class="['h-5 w-5', {'text-gray-400': is('default'), 'text-primary-400': is('info')}]" aria-hidden="true"/>
      </div>
      <div class="ml-3">
        <slot>
          <p class="font-medium text-gray-800" v-html="message" />
        </slot>
      </div>
      <div v-if="dismissable" class="ml-auto pl-3">
        <div class="-mx-1.5 -my-1.5">
          <button type="button"
                  :class="['inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2', {'bg-gray-50': is('default'), 'bg-green-50': is('success'), 'bg-red-50': is('danger'), 'bg-yellow-50': is('warning'), 'bg-primary-50': is('info')}, {'text-gray-400': is('default'), 'text-green-400': is('success'), 'text-red-400': is('danger'), 'text-yellow-400': is('warning'), 'text-primary-400': is('info')}]"
                  @click="$emit('close')">
            <span class="sr-only">Dismiss</span>
            <XMarkIcon class="h-5 w-5" aria-hidden="true"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon, XMarkIcon } from '@heroicons/vue/24/solid';

const emit = defineEmits(['close']);
const props = defineProps({
  message: {
    type: String,
    required: false,
    default: '',
  },
  type: {
    type: String,
    default: () => 'default',
    validator: value => ['default', 'success', 'danger', 'warning', 'info'].includes(value),
  },
  dismissable: {
    type: Boolean,
    default: true,
  },
});

const is = (type) => type === props.type;
</script>
