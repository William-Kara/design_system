<template>
  <span v-if="iconSrc">
    <a v-if="isExternalLink" :class="classes" :href="href" target="_blank">
      <img :src="iconSrc" width="24" height="24" alt="link icon" />
    </a>

    <router-link v-else :class="classes" :to="href" target="_self">
      <img :src="iconSrc" width="24" height="24" alt="link icon" />
    </router-link>
  </span>

  <span v-else>
    <a v-if="isExternalLink" :class="classes" :href="href" target="_blank">
      <slot>{{ label }}</slot>
    </a>

    <router-link v-else :class="classes" :to="href" target="_self">
      <slot>{{ label }}</slot>
    </router-link>
  </span>
</template>

<script lang="ts" setup>
type Props = {
  label?: string;
  href: string;
  isExternalLink?: boolean;
  iconSrc: string;
  underline?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  isExternalLink: false,
});

const classes = {
  'qfc-link': true,
  'qfc-link--underline': props.underline,
};
</script>

<style lang="scss" scoped src="./QfcLink.scss" />
