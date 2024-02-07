<template>
  <header class="qfc-header">
    <div class="qfc-header__left-container">
      <TransitionGroup name="fade">
        <button
          class="qfc-header__left-container__burger-container"
          @click="toggleSidebar"
          v-show="!isSidebarOpen"
          key="burger"
        >
          <i class="material-icons-outlined"> menu </i> Menu
        </button>
        <router-link to="/" class="qfc-header__left-container__logo" key="logo">
          <img src="/image-q.svg" width="32" height="25" alt="logo" />
        </router-link>
      </TransitionGroup>
    </div>

    <nav class="qfc-header__nav">
      <QfcSearchBar />
      <QfcButtonAction icon="notifications" label="notifications" v-bind="notificationButton" />
      <QfcUserMenu v-bind="userMenu" />
    </nav>
  </header>
</template>

<script lang="ts" setup>
import QfcUserMenu from '@/components/QfcUserMenu/QfcUserMenu.vue';
import QfcButtonAction from '@/components/QfcButtonAction/QfcButtonAction.vue';
import QfcSearchBar from '@/components/QfcSearchBar/QfcSearchBar.vue';

type RelativePath = `/${string}`;
type Links = { link: RelativePath; title: string }[];
interface Props {
  isSidebarOpen: boolean;
  userMenu: { name: string; links: Links; avatar: string };
  notificationButton: { to: RelativePath; isActive: boolean; isNotification: boolean };
}
defineProps<Props>();

const emit = defineEmits(['update:isSidebarOpen']);
function toggleSidebar() {
  emit('update:isSidebarOpen', true);
}
</script>

<style lang="scss" scoped src="./QfcV1Header.scss" />
