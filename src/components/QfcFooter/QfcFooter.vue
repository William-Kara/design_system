<script lang="ts" setup>
import QfcLink from './../QfcLink';
import QfcButton from './../QfcButton';

interface Links {
  title?: string;
  text?: string;
  links: Link[];
}
interface Link {
  label?: string;
  to: string;
  iconSrc?: string;
  isButton?: boolean;
  isExternalLink: boolean;
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
        isButton: false,
      },
      {
        label: 'Politique de confidentialité',
        to: '/politique-de-confidentialite',
        isExternalLink: false,
        isButton: false,
      },
      {
        label: 'Gestion des cookies',
        to: '/gestion-des-cookies',
        isExternalLink: true,
        isButton: false,
      },
    ],
  }),
  secondLinks: () => ({
    title: 'Réseaux sociaux',
    text: 'Suivez-nous pour ne rien manquer !',
    links: [
      {
        to: 'https://twitter.com/',
        iconSrc: '/twitter.svg',
        isExternalLink: true,
        isButton: false,
      },
      {
        to: 'https://fr.linkedin.com/company/',
        iconSrc: '/linkedin.svg',
        isExternalLink: true,
        isButton: false,
      },
    ],
  }),
  thirdLinks: () => ({
    title: 'Contact',
    text: 'Vous avez une question ?',
    links: [
      {
        label: 'Contactez-nous',
        to: '/',
        isExternalLink: false,
        isButton: true,
      },
    ],
  }),
});
</script>
<template>
  <footer class="footer py-6">
    <div class="columns container has-text-left">
      <div class="column footer__column is-2 is-desktop">
        <a class="footer__logo">
          <img src="/image-q.svg" width="168" height="18" alt="logo" />
        </a>
      </div>
      <div class="column footer__column">
        <div v-if="firstLinks && firstLinks.title" class="footer__title h5">
          {{ firstLinks.title }}
        </div>
        <div v-if="firstLinks && firstLinks.text" class="footer__description">
          {{ firstLinks.text }}
        </div>
        <template
          v-for="({ label, to, isExternalLink, iconSrc, isButton }, index) in firstLinks.links"
          :key="index"
        >
          <QfcButton
            class="footer__button"
            v-if="isButton"
            :label="label"
            secondary="true"
            size="small"
          />
          <QfcLink
            v-else
            :class="{
              footer__link: !iconSrc,
              footer__icon: iconSrc,
            }"
            :label="label"
            :href="to"
            :is-external-link="isExternalLink"
            :iconSrc="iconSrc"
          >
          </QfcLink>
        </template>
      </div>
      <div class="column footer__column">
        <div v-if="secondLinks && secondLinks.title" class="footer__title h5">
          {{ secondLinks.title }}
        </div>
        <div v-if="secondLinks && secondLinks.text" class="footer__description">
          {{ secondLinks.text }}
        </div>
        <template
          v-for="({ label, to, isExternalLink, iconSrc, isButton }, index) in secondLinks.links"
          :key="index"
        >
          <QfcButton
            class="footer__button"
            v-if="isButton"
            :label="label"
            secondary="true"
            size="small"
          />
          <QfcLink
            v-else
            :class="{
              footer__link: !iconSrc,
              footer__icon: iconSrc,
            }"
            :label="label"
            :href="to"
            :is-external-link="isExternalLink"
            :iconSrc="iconSrc"
          >
          </QfcLink>
        </template>
      </div>
      <div class="column footer__column">
        <div v-if="thirdLinks && thirdLinks.title" class="footer__title h5">
          {{ thirdLinks.title }}
        </div>
        <div v-if="thirdLinks && thirdLinks.text" class="footer__description">
          {{ thirdLinks.text }}
        </div>
        <template
          v-for="({ label, to, isExternalLink, iconSrc, isButton }, index) in thirdLinks.links"
          :key="index"
        >
          <QfcLink v-if="isButton" :href="to" :is-external-link="isExternalLink" icon-src="">
            <QfcButton class="footer__button" :label="label" secondary="true" size="small"
          /></QfcLink>
          <QfcLink
            v-else
            :class="{
              footer__link: !iconSrc,
              footer__icon: iconSrc,
            }"
            :label="label"
            :href="to"
            :is-external-link="isExternalLink"
            :iconSrc="iconSrc"
          >
          </QfcLink>
        </template>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped src="./QfcFooter.scss" />
