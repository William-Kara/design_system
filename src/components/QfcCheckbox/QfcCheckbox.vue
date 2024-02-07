<template>
  <label class="qfc-checkbox">
    <input
      name="checkbox"
      checked="checked"
      :value="value"
      type="checkbox"
      v-model="model"
      :disabled="disabled"
    />
    <span :class="cssClass"></span>
    <span class="qfc-checkbox__label"
      ><slot>{{ label }}</slot></span
    >
  </label>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useVModel } from '@/utils/useVModel';

const props = defineProps({
  modelValue: { type: [Array, Boolean] },
  value: { type: [Boolean, Object] },
  label: { type: String },
  disabled: { type: Boolean },
  isLarge: { type: Boolean },
});

const cssClass = computed(() => ({
  '--is-large': props.isLarge,
  'qfc-checkbox__checkmark': true,
}));

const emit = defineEmits(['update:modelValue']);
const model = useVModel(props, emit);
</script>

<style lang="scss" scoped src="./QfcCheckbox.scss" />
