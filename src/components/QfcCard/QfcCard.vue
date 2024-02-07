<template>
  <QfcBox
    :class="{ 'q-card': true, 'q-card--is-medium': size === 'medium' }"
    :size="size"
    ref="target"
    v-element-visibility="targetIsVisible"
  >
    <div class="q-card__icon">
      <i v-if="!srcVideo" class="material-icons-outlined">
        {{ icon }}
      </i>
      <video
        v-if="srcVideo && targetIsVisible"
        class="q-card__media"
        :src="srcVideo"
        autoplay
        muted
      />
    </div>

    <h3 class="q-card__title">{{ title }}</h3>

    <p class="q-card__content">
      {{ content }}
    </p>
  </QfcBox>
</template>

<script lang="ts" setup>
import QfcBox from '@/components/QfcBox/QfcBox.vue';
import { useElementVisibility } from '@vueuse/core';
import { ref } from 'vue';

const sizeType = ['small', 'medium', 'large', 'fullwidth'] as const;
type SizeType = (typeof sizeType)[number];

const target = ref(null);

const targetIsVisible = useElementVisibility(target);

interface Props {
  size: SizeType;
  srcVideo: string;
  icon: string;
  title: string;
  content: string;
}

withDefaults(defineProps<Props>(), {
  size: 'fullwidth',
});
</script>

<style lang="scss" scoped src="./QfcCard.scss" />
