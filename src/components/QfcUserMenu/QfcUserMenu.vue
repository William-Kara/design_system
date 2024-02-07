<template>
  <nav class="dropdown" :class="{ 'is-active': isActive }" @click="toggleActive()">
    <div class="dropdown-trigger">
      <button
        class="button qfc-dropdown-button"
        aria-haspopup="true"
        aria-controls="dropdown-menu3"
      >
        <span class="qfc-dropdown-avatar__holder">
          <img class="qfc-dropdown-avatar__img" :src="avatar" width="45" height="45" alt="avatar" />
        </span>
        <span class="qfc-dropdown__name">{{ name }}</span>
        <span class="qfc-dropdown-button__icon icon is-small">
          <i
            class="material-icons-outlined"
            :class="{
              'qfc-dropdown-button__icon__active': isActive,
              'qfc-dropdown-button__icon__inactive': !isActive,
            }"
          >
            expand_more
          </i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu qfc-dropdown-menu" id="dropdown-menu3" role="menu">
      <div class="dropdown-content qfc-dropdown-menu__content">
        <router-link
          v-for="({ title, link }, index) in links"
          :to="link"
          class="dropdown-item qfc-dropdown-menu__content__item"
          :key="`dropdown-link-${index}`"
          target="_self"
        >
          {{ title }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isActive = ref(false);

type Link = {
  title: string;
  link: string;
};
interface Props {
  links: Link[];
  avatar: string;
  name: string;
}
defineProps<Props>();
const toggleActive = () => {
  isActive.value = !isActive.value;
};
</script>
<style lang="scss" scoped src="./QfcUserMenu.scss" />
