<template>
  <div
    class="qfc-progress-bar"
    role="progressbar"
    :title="title"
    :aria-valuenow="value"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div class="qfc-progress-bar__line">
      <Transition>
        <div class="qfc-progress-bar__completed" :style="completedStyle"></div>
      </Transition>
    </div>
    <div class="qfc-progress-bar__value">{{ percentage }}%</div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

type Color = `#${string}`;
interface Props {
  value: number;
  title: string;
  color?: Color;
}

const props = defineProps<Props>();

const percentage = computed(() => {
  return props.value <= 100 ? props.value : 100;
});
const completedStyle = computed(() => {
  return { width: percentage.value + '%', 'background-color': props.color };
});
</script>

<style lang="scss" scoped src="./QfcProgressBar.scss" />
