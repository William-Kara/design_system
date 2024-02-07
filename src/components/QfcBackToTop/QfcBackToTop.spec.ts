import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcBackToTop from './QfcBackToTop.vue';

let wrapper: any = null;

const propsValues = {};

beforeEach(() => {
  wrapper = shallowMount(QfcBackToTop, {
    propsData: propsValues,
  });
});

describe('QfcBackToTop Component', () => {
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
