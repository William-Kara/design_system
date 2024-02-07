<template>
  <div class="qfc-block">
    <div class="qfc-block__text">
      <h2 class="qfc-block__text__title"><slot name="title" />{{ title }}</h2>
      <p class="qfc-block__text__paragraph"><slot name="paragraph" />{{ paragraph }}</p>
    </div>

    <div class="qfc-block__content">
      <QfcTagList v-if="tagList.length" class="qfc-block__content__tags" :tag-list="tagList" />
      <QfcButton
        class="qfc-block__content__button"
        :label="buttonLabel"
        :icon="false"
        size="medium"
        @click="$emit('button-click')"
      />
    </div>

    <video class="qfc-block__media" :src="src" loop autoplay>
      Sorry, your browser doesn't support HTML5 video tag.
    </video>
  </div>
</template>

<script lang="ts" setup>
import QfcTagList from '@/components/QfcTagList/QfcTagList.vue';
import QfcButton from '@/components/QfcButton/QfcButton.vue';

type Props = {
  title: string;
  paragraph: string;
  tagList: string[];
  buttonLabel: string;
  src: string;
  alt: string;
};

defineProps<Props>();
</script>

<style lang="scss" scoped src="./QfcBlockContentTitle.scss" />
