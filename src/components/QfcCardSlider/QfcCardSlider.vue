<template>
  <div class="qfc-slider">
    <QfcCard
      v-for="({ icon, title, content, size, srcVideo }, index) in cards"
      :key="`card-container-${index}`"
      class="qfc-slider__slide"
      :icon="icon"
      :srcVideo="srcVideo"
      :size="size"
      :title="title"
      :content="content"
    />
  </div>
</template>

<script lang="ts" setup>
import QfcCard from '@/components/QfcCard/QfcCard.vue';

type Card = {
  srcVideo: string;
  icon: string;
  title: string;
  content: string;
  size: string;
};
interface Props {
  cards: Card[];
}
defineProps<Props>();
</script>

<style lang="scss" scoped src="./QfcCardSlider.scss" />
