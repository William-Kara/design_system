import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcTextField from './QfcTextField.vue';

let wrapper: any = null;

const propsValues = {
  id: 'test',
  modelValue: '',
  label: 'Email',
  type: 'email',
  errorMessage: '',
  isRequired: true,
  isDisabled: false,
  backgroundColor: '#232323',
  max: 3,
  maxLength: 4,
  min: 1,
  rows: 5,
  pattern: '',
  step: 5,
};

beforeEach(() => {
  wrapper = shallowMount(QfcTextField, {
    propsData: propsValues,
  });
});

describe('QfcTextField Component', () => {
  it('should mount properly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have correct props', () => {
    expect(wrapper.props()).toEqual(propsValues);
  });

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should emit update event when value is changed', () => {
    const input = wrapper.find('input');
    input.setValue('test@example.com');
    expect(wrapper.emitted('update:modelValue')[0][0]).toEqual('test@example.com');
  });

  it('should display the error when an error message is given', () => {
    wrapper = shallowMount(QfcTextField, {
      propsData: {
        ...propsValues,
        errorMessage: 'Invalid email',
      },
    });

    expect(wrapper.find('.text-field__error-message').text()).toBe('Invalid email');
  });

  it('should have label ending by an aster when isRequired is true', () => {
    expect(wrapper.props().isRequired).toBe(true);
    expect(wrapper.find('.text-field__label').text()).toBe(`${propsValues.label}*`);
  });

  it('should have label without an aster when isRequired is false', () => {
    wrapper = shallowMount(QfcTextField, {
      propsData: {
        ...propsValues,
        isRequired: false,
      },
    });

    expect(wrapper.props().isRequired).toBe(false);
    expect(wrapper.find('.text-field__label').text()).toBe(propsValues.label);
  });
});
