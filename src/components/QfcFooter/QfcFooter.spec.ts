import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcFooter from './QfcFooter.vue';

let wrapper: any = null;

const propsValues = {
  firstLinks: {
    links: [
      {
        label: 'link 1',
        to: '/link-1',
        isExternalLink: false,
        isButton: false,
      },
      {
        label: 'link 2',
        to: '/link-2',
        isExternalLink: false,
        isButton: false,
      },
      {
        label: 'link 3',
        to: '/link-3',
        isExternalLink: false,
        isButton: false,
      },
    ],
  },
  secondLinks: {
    title: 'Réseaux sociaux',
    text: 'Suivez-nous pour ne rien manquer !',
    links: [
      {
        to: '/',
        iconSrc: '/twitter.svg',
        isButton: false,
      },
      {
        to: '/',
        iconSrc: '/linkedin.svg',
        isButton: false,
      },
    ],
  },
  thirdLinks: {
    title: 'Contact',
    text: 'Vous avez une question ?',
    links: [
      {
        label: 'Contactez-nous',
        to: '/',
        isButton: true,
      },
    ],
  },
};

beforeEach(() => {
  wrapper = shallowMount(QfcFooter, {
    propsData: propsValues,
  });
});

describe('QfcFooter Component', () => {
  it('should mount properly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have correct props', () => {
    expect(wrapper.props()).toEqual(propsValues);
  });

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
