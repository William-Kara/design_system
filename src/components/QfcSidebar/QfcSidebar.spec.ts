import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcSidebar from './QfcSidebar.vue';

let wrapper: any = null;

const propsValues = {
  items: [
    {
      icon: 'space_dashboard',
      label: 'Dashboard',
      to: '/dashboard',
    },
    {
      icon: 'people',
      label: 'FAQ/Communauté Discord',
      to: '/contacts',
    },
    {
      icon: 'settings',
      label: 'Settings',
      to: '/settings',
    },
  ],
  isOpen: false,
  screenId: 'storybook-root',
};

beforeEach(() => {
  wrapper = shallowMount(QfcSidebar, {
    propsData: propsValues,
  });
});

describe('QfcSidebar Component', () => {
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
