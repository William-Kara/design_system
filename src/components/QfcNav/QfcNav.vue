<script lang="ts" setup>
import QfcNavItem from './QfcNavItem.vue';

interface NavItems {
  label: string;
  to: string;
}
interface Props {
  navItems: NavItems[];
}
withDefaults(defineProps<Props>(), {});
</script>
<template>
  <div class="navbar-center">
    <QfcNavItem
      v-for="({ label, to, isExternal }, index) in navItems"
      :key="index"
      :label="label"
      :to="to"
      :isExternal="isExternal"
    >
    </QfcNavItem>
  </div>
</template>
<style lang="scss" scoped src="./QfcNav.scss" />
