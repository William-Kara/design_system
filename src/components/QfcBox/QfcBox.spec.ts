import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcBox from './QfcBox.vue';

let wrapper: any = null;

const propsValues = {
  size: 'fullwidth',
  padding: 'medium',
};

beforeEach(() => {
  wrapper = shallowMount(QfcBox, {
    propsData: propsValues,
  });
});

describe('QfcBox Component', () => {
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
