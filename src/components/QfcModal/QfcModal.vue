<template>
  <div role="dialog" class="modal" :class="{ 'is-active': isOpen }">
    <div class="modal-background" @click="toggleModal()"></div>
    <div class="modal-content">
      <QfcBox class="q-modal-card">
        <div class="q-modal-card__content">
          <slot name="close-button">
            <button
              class="q-modal-card__close modal-close is-large"
              aria-label="close"
              type="button"
              @click="toggleModal()"
            />
          </slot>
          <img class="q-modal-card__img" :src="img" width="168" height="18" alt="logo" />
          <h3 class="q-modal-card__title">
            {{ title }}
            <slot name="title" />
          </h3>
          <p class="q-modal-card__txt">
            {{ content }}
            <slot name="content" />
          </p>
        </div>
      </QfcBox>
    </div>
  </div>
</template>

<script lang="ts" setup>
import QfcBox from '@/components/QfcBox/QfcBox.vue';

interface Props {
  img?: string;
  title: string;
  content: string;
  isOpen: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  img: '/logo.svg',
  isOpen: false,
});
const emit = defineEmits(['update:isOpen']);
const toggleModal = () => emit('update:isOpen', !props.isOpen);
</script>

<style lang="scss" scoped src="./QfcModal.scss" />
