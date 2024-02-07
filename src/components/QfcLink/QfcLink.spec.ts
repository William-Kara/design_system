import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcLink from './QfcLink.vue';

let wrapper: any = null;

const propsValues = {
  label: 'Link',
  href: 'https://www.qongzi.com',
  isExternalLink: true,
  underline: false,
};

beforeEach(() => {
  wrapper = shallowMount(QfcLink, {
    propsData: propsValues,
  });
});

describe('QfcLink Component', () => {
  it('should mount properly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have correct props', () => {
    expect(wrapper.props()).toEqual(propsValues);
  });

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render router-link when isExternalLink is false', () => {
    const props = {
      label: 'Link',
      href: 'https://www.qongzi.com',
      isExternalLink: false,
    };

    const wrapper = shallowMount(QfcLink, {
      propsData: props,
    });

    expect(wrapper.find('router-link').exists()).toBe(true);
  });

  it('should render a tag when isExternalLink is true', () => {
    expect(wrapper.props().isExternalLink).toBe(true);
    expect(wrapper.find('a').exists()).toBe(true);
  });

  it('sets target to _blank when isExternalLink is true', () => {
    expect(wrapper.props().isExternalLink).toBe(true);
    const link = wrapper.find('a');
    expect(link.attributes('target')).toBe('_blank');
  });

  it('sets target to _self when isExternalLink is false', () => {
    const props = {
      label: 'Link',
      href: 'https://www.qongzi.com',
      isExternalLink: false,
    };

    const wrapper = shallowMount(QfcLink, {
      propsData: props,
    });
    const link = wrapper.find('router-link');
    expect(link.attributes().target).toBe('_self');
  });
});
