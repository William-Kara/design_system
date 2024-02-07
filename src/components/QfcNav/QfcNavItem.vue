<script lang="ts" setup>
type Props = {
  label: string;
  to: string;
  isExternal?: Boolean;
};
defineProps<Props>();
const emit = defineEmits(['on-click']);
const onClick = () => {
  emit('on-click');
};
</script>

<template>
  <a v-if="isExternal" class="navbar-item" :href="to" @click="onClick" target="_blank">
    {{ label }}
  </a>
  <router-link v-else class="navbar-item" :to="to" @click="onClick">
    {{ label }}
  </router-link>
</template>
<style lang="scss" scoped src="./QfcNavItem.scss" />
