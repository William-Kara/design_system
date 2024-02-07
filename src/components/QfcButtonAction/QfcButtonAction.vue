<template>
  <router-link :to="to" custom>
    <button class="qfc-btn-action" :class="{ 'button-is-active': isActive }" role="link">
      <span class="qfc-btn-action__content">
        <span
          class="qfc-btn-action__content__icon material-icons-outlined"
          :class="{ 'icon-is-active': isActive }"
          >{{ icon }}</span
        >
      </span>
      <span v-if="isNotification" class="qfc-btn-action__dot"></span>
    </button>
  </router-link>
</template>

<script lang="ts" setup>
type RelativePath = `/${string}`;
interface Props {
  icon: string;
  label: string;
  to: RelativePath;
  isNotification: boolean;
  isActive: boolean;
}

defineProps<Props>();
</script>

<style lang="scss" scoped src="./QfcButtonAction.scss" />
