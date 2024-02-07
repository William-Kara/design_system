<template>
  <span class="qfc-tag tag">{{ label }}</span>
</template>

<script lang="ts" setup>
interface Props {
  label: string;
}
defineProps<Props>();
</script>
<style lang="scss" scoped src="./QfcTag.scss" />
