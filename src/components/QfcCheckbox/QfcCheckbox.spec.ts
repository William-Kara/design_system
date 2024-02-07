import { it, describe, beforeEach, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import Checkbox from './QfcCheckbox.vue';

let wrapper: any = null;
let checkbox: any = null;

const propsValues = {
  modelValue: false,
  value: false,
  disabled: false,
  label: 'Checkbox',
  isLarge: false,
};
const testValue = { id: 1, name: 'Test' };
const inputTag = 'input[type="checkbox"]';

beforeEach(() => {
  wrapper = shallowMount(Checkbox, {
    propsData: propsValues,
  });
  checkbox = wrapper.find(inputTag);
});

describe('Checkbox Component', () => {
  it('should mount properly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have correct props', () => {
    expect(wrapper.props()).toEqual(propsValues);
  });

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should be checked when item is in modelValue', async () => {
    await wrapper.setProps({
      modelValue: [testValue],
      value: testValue,
    });

    expect(checkbox.element.checked).toBe(true);
  });

  it('should be unchecked when item is not in modelValue', async () => {
    await wrapper.setProps({
      modelValue: [],
      value: testValue,
    });

    expect(checkbox.element.checked).toBe(false);
  });

  it('should be disabled when disabled prop become true', async () => {
    expect(checkbox.element.disabled).toBe(false);
    await wrapper.setProps({ disabled: true });
    expect(checkbox.element.disabled).toBe(true);
  });

  it('should be not disabled when disabled prop become false', async () => {
    await wrapper.setProps({ disabled: true });
    expect(checkbox.element.disabled).toBe(true);

    await wrapper.setProps({ disabled: false });
    expect(checkbox.element.disabled).toBe(false);
  });

  it('should emit update:modelValue event when modelValue prop is updated', async () => {
    await wrapper.setProps({
      modelValue: [],
      value: testValue,
    });

    checkbox.setValue();
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0][0]).toEqual([testValue]);
  });
});
