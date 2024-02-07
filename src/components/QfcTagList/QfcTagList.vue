<template>
  <div class="qfc-tag__list">
    <QfcTag v-for="(tag, index) in tagList" :label="tag" :key="index" />
  </div>
</template>

<script lang="ts" setup>
import QfcTag from '@/components/QfcTag/QfcTag.vue';

type Props = {
  tagList: string[];
};
defineProps<Props>();
</script>
<style lang="scss" scoped src="./QfcTagList.scss" />
