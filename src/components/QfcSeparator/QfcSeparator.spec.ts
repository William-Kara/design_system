import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcSeparator from './QfcSeparator.vue';

let wrapper: any = null;

const propsValues = {
  thickness: '2px',
};

beforeEach(() => {
  wrapper = shallowMount(QfcSeparator, {
    propsData: propsValues,
  });
});

describe('QfcSeparator Component', () => {
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
