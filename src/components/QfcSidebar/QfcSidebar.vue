<template>
  <aside class="qfc-sidebar" :class="{ 'qfc-sidebar--open': !isOpen }">
    <div class="qfc-sidebar__header">
      <button @click="closeOnClick()">
        <i class="material-icons-outlined"> menu </i>
      </button>
    </div>
    <nav class="qfc-sidebar__nav">
      <QfcButtonSidebar
        v-for="({ label, to, icon }, index) in items"
        class="qfc-sidebar__item"
        :icon="icon"
        :key="index"
        :label="label"
        :to="to"
      />
    </nav>
  </aside>
</template>

<script lang="ts" setup>
import QfcButtonSidebar from '@/components/QfcButtonSidebar/QfcButtonSidebar.vue';
import { watch } from 'vue';

type ButtonSidebar = {
  icon: string;
  label: string;
  to: string;
};
interface Props {
  items: ButtonSidebar[];
  screenId: string;
  isOpen: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  screenId: '',
  isOpen: false,
});

const emit = defineEmits(['update:isOpen']);
function closeOnClick() {
  emit('update:isOpen', false);
}

function togglePushOffScreen(screenId: string, transition: string = 'margin-left 0.5s') {
  const screen = document.getElementById(screenId);
  const sideBarWidth = document.querySelector('.qfc-sidebar')?.clientWidth.toString();

  if (screen && sideBarWidth) {
    screen.style.transition = transition;
    screen.style.marginLeft = props.isOpen ? sideBarWidth + 'px' : '0';
  }
}
if (props.screenId.length) {
  watch(
    () => props.isOpen,
    () => {
      togglePushOffScreen(props.screenId);
    }
  );
}
</script>

<style lang="scss" scoped src="./QfcSidebar.scss" />
