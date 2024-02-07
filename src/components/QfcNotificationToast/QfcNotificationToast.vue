<template>
  <QfcNotificationBox :type="type">
    <div class="qfc-notification-toast">
      <div class="qfc-notification-toast__content">
        <span class="material-icons" :class="iconColorStyle">{{ icon }}</span>

        <div class="qfc-notification-toast__content__texts">
          <span class="texts__title" :class="blockStyle">{{ title }}</span>
          <span class="texts__description">{{ description }}</span>
        </div>
      </div>

      <span
        class="qfc-notification-toast__content__close-button material-icons pl-3"
        @click="emitClose"
        >close</span
      >
    </div>
  </QfcNotificationBox>
</template>

<script lang="ts" setup>
import QfcNotificationBox from '@/components/QfcNotificationBox/QfcNotificationBox.vue';
import { computed } from 'vue';

type NotificationType = 'success' | 'danger' | 'warning' | 'info';
interface Props {
  type: NotificationType;
  title: string;
  description: string;
  inline: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  inline: true,
});

const iconColorStyle = computed(() => `--color-${props.type}`);
const iconMap = {
  success: 'check_circle',
  danger: 'error',
  warning: 'warning',
  info: 'info',
};
const icon = computed(() => {
  return iconMap[props.type] || 'info';
});

const emits = defineEmits(['close']);
const emitClose = () => {
  emits('close');
};
const blockStyle = computed(() => (props.inline ? '' : '--block'));
</script>

<style lang="scss" scoped src="./QfcNotificationToast.scss" />
