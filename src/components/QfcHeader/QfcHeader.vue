<script lang="ts" setup>
import { ref } from 'vue';
import QfcNav from './../QfcNav';
import QfcNavItem from './../QfcNav/QfcNavItem.vue';
import QfcSeparator from './../QfcSeparator';
interface NavItems {
  label: string;
  to: string;
}
interface Props {
  centerNavItems: NavItems[];
  rightNavItems: NavItems[];
}
withDefaults(defineProps<Props>(), {});

const isActive = ref(false);
const toggleActive = () => {
  isActive.value = !isActive.value;
};
</script>
<template>
  <div class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="/logo.svg" width="168" height="18" alt="logo" />
      </a>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        :aria-expanded="isActive"
        :class="{ 'is-active': isActive }"
        @click="toggleActive()"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div :class="{ 'is-active': isActive }" class="navbar-menu">
      <div class="navbar-menu__header navbar-item">
        <div class="navbar-menu__title">Menu.</div>
        <QfcSeparator class="navbar-menu__separator" />
      </div>
      <QfcNav :navItems="centerNavItems" />
      <div class="navbar-end">
        <QfcNavItem
          v-for="({ label, to, isExternal }, index) in rightNavItems"
          :key="index"
          :label="label"
          :to="to"
          :isExternal="isExternal"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./QfcHeader.scss" />
