<template>
  <hr
    class="qfc-separator"
    :style="{
      height: thickness,
    }"
  />
</template>

<script lang="ts" setup>
interface Props {
  thickness: string;
}
withDefaults(defineProps<Props>(), {
  thickness: '1px',
});
</script>

<style lang="scss" scoped src="./QfcSeparator.scss" />
