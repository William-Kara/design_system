<template>
  <QfcButtonAction
    v-show="!isActive"
    :is-notification="false"
    icon="search"
    label="search"
    :is-active="false"
    @click="toggleActive()"
  />
  <Transition>
    <div class="search-field" v-show="isActive">
      <input name="label" placeholder="label" class="search-field__input" />
      <button class="search-field__button" role="link" @click="toggleActive()">
        <span class="search-field__button__icon material-icons-outlined">search</span>
      </button>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import QfcButtonAction from '@/components/QfcButtonAction/QfcButtonAction.vue';
import { ref } from 'vue';

const isActive = ref(false);
const toggleActive = () => {
  isActive.value = !isActive.value;
};
</script>

<style lang="scss" scoped src="./QfcSearchBar.scss" />
