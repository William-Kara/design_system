import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcNav from './QfcNav.vue';

let wrapper: any = null;

const propsValues = {
  navItems: [
    { label: 'Title 1', to: '' },
    { label: 'Title 2', to: '' },
    { label: 'Title 3', to: '' },
    { label: 'Title 4', to: '' },
  ],
};

beforeEach(() => {
  wrapper = shallowMount(QfcNav, {
    propsData: propsValues,
  });
});

describe('QfcNav Component', () => {
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
