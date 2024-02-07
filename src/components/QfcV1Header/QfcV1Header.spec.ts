import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcV1Header from './QfcV1Header.vue';

let wrapper: any = null;

const propsValues = {
  isSidebarOpen: false,
};

beforeEach(() => {
  wrapper = shallowMount(QfcV1Header, {
    propsData: propsValues,
  });
});

describe('QfcV1Header Component', () => {
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
