<script lang="ts" setup>
import QfcLink from './../QfcLink';

interface Links {
  links: Link[];
}
interface Link {
  to: string;
  isExternalLink: boolean;
  iconSrc: string;
}
interface Props {
  firstLinks: Links;
  secondLinks: Links;
  thirdLinks: Links;
}
withDefaults(defineProps<Props>(), {
  firstLinks: () => ({
    links: [
      {
        label: 'Mentions légales',
        to: '/mentions-legales',
        isExternalLink: false,
      },
      {
        label: 'Politique de confidentialité',
        to: '/politique-de-confidentialite',
        isExternalLink: false,
      },
      {
        label: 'Gestion des cookies',
        to: '/gestion-des-cookies',
        isExternalLink: false,
      },
    ],
  }),
});
</script>
<template>
  <footer class="footer py-6">
    <div class="columns container has-text-centered">
      <div class="column footer__column">
        <template v-for="({ label, to, isExternalLink }, index) in firstLinks.links" :key="index">
          <QfcLink :label="label" :href="to" :is-external-link="isExternalLink" :iconSrc="iconSrc">
          </QfcLink>
        </template>
      </div>
      <div class="column footer__column">
        <template v-for="({ label, to, isExternalLink }, index) in secondLinks.links" :key="index">
          <QfcLink :label="label" :href="to" :is-external-link="isExternalLink" :iconSrc="iconSrc">
          </QfcLink>
        </template>
      </div>
      <div class="column footer__column">
        <template v-for="({ label, to, isExternalLink }, index) in thirdLinks.links" :key="index">
          <QfcLink :label="label" :href="to" :is-external-link="isExternalLink" :iconSrc="iconSrc">
          </QfcLink>
        </template>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped src="./QfcFooterForm.scss" />
