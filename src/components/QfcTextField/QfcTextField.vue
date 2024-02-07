<template>
  <div class="text-field">
    <input
      :id="id"
      v-model="model"
      :name="label"
      :type="formatedType"
      :placeholder="label"
      :disabled="isDisabled"
      :class="inputClasses"
      :style="backgroundStyle"
      :required="isRequired"
      :maxlength="maxLength"
      :step="step"
      :min="min"
      :max="max"
      :pattern="pattern"
    />
    <label :for="id" class="text-field__label" :style="backgroundStyle">{{ formatedLabel }}</label>
    <span
      v-if="isPassword"
      class="text-field__img material-icons-outlined"
      @click="toggleVisibility"
      >{{ eyeIcon }}</span
    >
    <p class="text-field__error-message">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useVModel } from '@/utils/useVModel';

const inputType = ['text', 'password', 'email', 'number'] as const;
type InputType = (typeof inputType)[number];

type Background = `#${string}`;

interface Props {
  id: string;
  type?: InputType;
  modelValue: string;
  label: string;
  errorMessage?: string;
  maxLength?: number;
  rows?: number;
  min?: number;
  max?: number;
  step?: number;
  pattern?: string;
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

const isPassword = props.type === 'password';
let isVisible = ref(!isPassword);
let eyeIcon = computed(() => (isVisible.value ? 'visibility' : 'visibility_off'));
const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};

const formatedType = computed(() => {
  if (props.type === 'email') return 'email';
  if (props.type === 'number') return 'number';
  return isVisible.value ? 'text' : 'password';
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
<style lang="scss" scoped src="./QfcTextField.scss" />
