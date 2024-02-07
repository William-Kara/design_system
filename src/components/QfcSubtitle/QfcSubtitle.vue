<template>
  <div :class="subtitleClasses">{{ text }}</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const subtitleType = [1, 2, 3, 4] as const;
type SubtitleType = (typeof subtitleType)[number];

interface Props {
  text: string;
  visualLevel?: SubtitleType;
}

const props = withDefaults(defineProps<Props>(), {});
const subtitleClasses = computed(() => {
  const level = props.visualLevel || '';
  return level ? `qfc-subtitle is-${level}` : `qfc-subtitle`;
});
</script>
<style lang="scss" scoped src="./QfcSubtitle.scss" />
