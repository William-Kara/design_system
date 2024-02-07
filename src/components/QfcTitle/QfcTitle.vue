<template>
  <component :is="titleElement" :class="titleClasses">{{ text }}</component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const titleType = [1, 2, 3, 4, 5, 6] as const;
type TitleType = (typeof titleType)[number];

interface Props {
  text: string;
  level?: TitleType;
  visualLevel?: TitleType;
}

const props = defineProps<Props>();
const titleElement = computed(() => (props.level ? `h${props.level}` : 'div'));
const titleClasses = computed(() => {
  const level = props.visualLevel || props.level;
  return level ? `qfc-title is-h${level}` : `qfc-title`;
});
</script>
<style lang="scss" scoped src="./QfcTitle.scss" />
