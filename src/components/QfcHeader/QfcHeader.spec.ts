import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcHeader from './QfcHeader.vue';

let wrapper: any = null;

const propsValues = {
  centerNavItems: [
    { label: 'Title 1', to: '' },
    { label: 'Title 2', to: '' },
    { label: 'Title 3', to: '' },
    { label: 'Title 4', to: '' },
  ],
  rightNavItems: [{ label: 'Title 5', to: 'https://test', isExternal: true }],
};

beforeEach(() => {
  wrapper = shallowMount(QfcHeader, {
    propsData: propsValues,
  });
});

describe('QfcHeader Component', () => {
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
