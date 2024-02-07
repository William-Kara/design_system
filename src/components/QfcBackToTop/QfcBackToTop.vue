<template>
  <Transition>
    <div v-if="isScrolling" @click="scrollToTop" class="qfc-back-to-top">
      <span class="material-icons">north</span>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core';
import { computed } from 'vue';

const { y } = useWindowScroll();
const isScrolling = computed(() => y.value > 20);
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
</script>

<style lang="scss" scoped src="./QfcBackToTop.scss" />
