import { useMediaQuery } from '@vueuse/core';
import { computed, reactive } from 'vue';

const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const isMinBreakpoint = (breakpoint) => {
  const valueInPixels = breakpoints[breakpoint] || 0;
  return useMediaQuery(`(min-width: ${valueInPixels}px)`);
};

export const isMaxBreakpoint = (breakpoint) => {
  const valueInPixels = breakpoints[breakpoint] || breakpoints['sm'];
  return useMediaQuery(`(max-width: ${valueInPixels - 1}px)`);
};

export const useCurrentBreakpoint = () => {
  const matchingBreakpoints = reactive({});
  for (const breakpoint in breakpoints) {
    const valueInPixels = breakpoints[breakpoint];
    matchingBreakpoints[breakpoint] = useMediaQuery(`(min-width: ${valueInPixels}px)`);
  }
  return computed(() => {
    const entries = Object.entries(matchingBreakpoints).filter(([key, value]) => value);
    return Object.keys(Object.fromEntries(entries))[entries.length - 1];
  });
};
