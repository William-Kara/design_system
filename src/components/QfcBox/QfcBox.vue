<template>
  <div
    :class="{
      box: true,
      '--small': size === 'large',
      '--medium': size === 'medium',
      '--large': size === 'small',
      '--padding-small': padding === 'small',
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
const sizeType = ['small', 'medium', 'large', 'fullwidth'] as const;
type SizeType = (typeof sizeType)[number];

interface Props {
  size: SizeType;
  padding: SizeType;
}
withDefaults(defineProps<Props>(), {
  size: 'fullwidth',
  padding: 'medium',
});
</script>

<style lang="scss" scoped src="./QfcBox.scss" />
