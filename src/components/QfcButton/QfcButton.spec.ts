import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcButton from './QfcButton.vue';

let wrapper: any = null;

const propsValues = {
  label: 'Text1',
  isDisabled: false,
  secondary: false,
  size: 'large',
};

beforeEach(() => {
  wrapper = shallowMount(QfcButton, {
    propsData: propsValues,
  });
});

describe('QfcButton Component', () => {
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
