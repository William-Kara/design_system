import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcTextArea from './QfcTextArea.vue';

let wrapper: any = null;

const propsValues = {
  id: 'string',
  modelValue: 'string',
  label: 'string',
  errorMessage: 'string',
  minLength: 0,
  maxLength: 0,
  rows: 0,
  isRequired: false,
  isDisabled: false,
  backgroundColor: '#CCCCCC',
};

beforeEach(() => {
  wrapper = shallowMount(QfcTextArea, {
    propsData: propsValues,
  });
});

describe('QfcTextArea Component', () => {
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
