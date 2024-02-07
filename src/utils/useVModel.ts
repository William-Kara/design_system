import { computed } from 'vue';
//@ts-ignore
export function useVModel(props, emit, name: string = 'modelValue') {
  return computed({
    get: () => props[name],
    set: (value) => emit(`update:${name}`, value),
  });
}
