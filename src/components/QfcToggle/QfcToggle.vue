<template>
  <label :class="cssClasses">
    <input type="checkbox" v-model="model" :disabled="disabled" />
    <span class="slider"></span>
    <span class="text">{{ label }}</span>
  </label>
</template>

<script lang="ts" setup>
import { useVModel } from '@/utils/useVModel';

const props = defineProps({
  modelValue: { type: [Array, Boolean] },
  label: { type: String },
  disabled: { type: Boolean },
});

const emit = defineEmits(['update:modelValue']);
const model = useVModel(props, emit);

const cssClasses = {
  switch: true,
  'is-disabled': props.disabled,
};
</script>
<style lang="scss" scoped src="./QfcToggle.scss" />
