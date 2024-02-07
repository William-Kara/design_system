<template>
  <router-link :to="to" class="qfc-btn-sidebar" role="link">
    <span class="qfc-btn-sidebar__content">
      <span class="qfc-btn-sidebar__content__icon material-icons-outlined">{{ icon }}</span>
      <label class="qfc-btn-sidebar__content__label">{{ label }}</label>
    </span>
  </router-link>
</template>

<script lang="ts" setup>
interface Props {
  icon: string;
  label: string;
  to: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped src="./QfcButtonSidebar.scss" />
