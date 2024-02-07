<template>
  <div class="text-field">
    <textarea
      v-model="model"
      :id="id"
      :style="backgroundStyle"
      :name="label"
      :placeholder="label"
      :rows="rows"
      :disabled="isDisabled"
      :required="isRequired"
      :minlength="minLength"
      :maxlength="maxLength"
      :class="inputClasses"
    />
    <label :for="id" class="text-field__label" :style="backgroundStyle">{{ formatedLabel }}</label>
    <p class="text-field__error-message">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useVModel } from '@/utils/useVModel';

type Background = `#${string}`;
interface Props {
  id: string;
  modelValue: string;
  label: string;
  errorMessage?: string;
  minLength?: number;
  maxLength?: number;
  rows?: number;
  isRequired?: boolean;
  isDisabled?: boolean;
  backgroundColor?: Background;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  label: 'Label',
  isRequired: false,
  isDisabled: false,
  backgroundColor: '#232323',
});

const id = computed(() => {
  return props.id ? props.id : Date.now().toString(36) + Math.random().toString(36).substring(2);
});

const formatedLabel = computed(() => {
  return props.isRequired ? `${props.label}*` : props.label;
});

const emit = defineEmits(['update:modelValue']);
const model = useVModel(props, emit);

const inputClasses = computed(() => {
  return {
    'text-field__input': true,
    'is-error': props.errorMessage,
  };
});
const backgroundStyle = computed(() => {
  return { 'background-color': props.backgroundColor };
});
</script>

<style lang="scss" scoped src="./QfcTextArea.scss" />
