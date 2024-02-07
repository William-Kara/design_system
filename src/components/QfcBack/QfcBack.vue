<template>
  <a class="qfc-back" :href="href">
    <span class="qfc-back__icon material-icons-outlined" width="168" height="18">arrow_back</span>
    <span class="qfc-back__link">{{ label }}</span>
  </a>
</template>

<script lang="ts" setup>
interface Props {
  label: string;
  href: string;
}
withDefaults(defineProps<Props>(), {
  label: 'Retour à l’accueil',
  href: '/',
});
</script>
<style lang="scss" scoped src="./QfcBack.scss" />
