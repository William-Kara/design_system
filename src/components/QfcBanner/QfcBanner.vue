<template>
  <section class="qfc-banner hero">
    <div class="qfc-banner__body hero-body" :style="{ 'background-image': `url(${imgSrc})` }">
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps({
  imgSrc: String,
});
</script>
<style lang="scss" scoped src="./QfcBanner.scss" />
