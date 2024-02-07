<template>
  <QfcNotificationBox :type="readStatus">
    <div class="qfc-notification-inline">
      <div class="qfc-notification-inline__content">
        <div class="qfc-notification-inline__content__metadata">
          <span class="time">{{ timeAgo }}</span>
          <span class="tag-label px-3">{{ tag }}</span>
        </div>
        <span class="qfc-notification-inline__content__description">{{ description }}</span>
      </div>

      <QfcButton
        class="qfc-notification-inline__button"
        :label="button.label"
        :secondary="true"
        :transparent="true"
      />
    </div>
  </QfcNotificationBox>
</template>

<script lang="ts" setup>
import QfcNotificationBox from '@/components/QfcNotificationBox/QfcNotificationBox.vue';
import { computed } from 'vue';
import QfcButton from '@/components/QfcButton/QfcButton.vue';

interface Props {
  read: boolean;
  button: {
    label: string;
  };
  description: string;
  tag: string;
  timeAgo: string;
}
const props = defineProps<Props>();

const readStatus = computed(() => {
  return props.read ? 'none' : 'info';
});
</script>

<style lang="scss" scoped src="./QfcNotificationInline.scss" />
