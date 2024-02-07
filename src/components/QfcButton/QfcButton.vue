<script lang="ts" setup>
const sizeType = ['small', 'medium', 'large'] as const;
type SizeType = (typeof sizeType)[number];
interface Props {
  isDisabled?: Boolean;
  label: string;
  secondary?: Boolean;
  icon?: String;
  size: SizeType;
}
withDefaults(defineProps<Props>(), {
  isDisabled: false,
  label: 'Label',
  secondary: false,
  size: 'large',
});
</script>
<template>
  <button
    ref="btn"
    :class="{
      button: true,
      'qfc-btn': true,
      'qfc-btn--lg': size === 'large',
      'qfc-btn--md': size === 'medium',
      'qfc-btn--sm': size === 'small',
      'qfc-btn--secondary': secondary,
    }"
    :title="label"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
  >
    <span v-if="icon" class="qfc-btn__icon material-icons">{{ icon }}</span>
    {{ label }}
  </button>
</template>

<style lang="scss" scoped src="./QfcButton.scss" />
