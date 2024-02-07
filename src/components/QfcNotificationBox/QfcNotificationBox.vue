<template>
  <div class="qfc-notification-box">
    <div class="qfc-notification-box__edge" :class="notificationColorStyle"></div>
    <QfcBox padding="small" class="qfc-notification-box__content-container">
      <slot />
    </QfcBox>
  </div>
</template>

<script lang="ts" setup>
import QfcBox from '@/components/QfcBox/QfcBox.vue';
import { computed } from 'vue';

type NotificationType = 'success' | 'danger' | 'warning' | 'info' | 'none';
interface Props {
  type: NotificationType;
}
const props = withDefaults(defineProps<Props>(), {
  type: 'none',
});

const notificationColorStyle = computed(() => `--${props.type}`);
</script>

<style lang="scss" scoped src="./QfcNotificationBox.scss" />
