import { it, describe, beforeEach, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import Toggle from './QfcToggle.vue';

let wrapper: any = null;
let toggleButton: any = null;

const propsValues = {
  modelValue: false,
  disabled: false,
  label: 'Toggle',
};
const inputTag = 'input[type="checkbox"]';

beforeEach(() => {
  wrapper = shallowMount(Toggle, {
    propsData: propsValues,
  });
  toggleButton = wrapper.find(inputTag);
});

describe('Toggle Component', () => {
  it('should mount properly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have correct props', () => {
    expect(wrapper.props()).toEqual(propsValues);
  });

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should be toggled ON when modelValue is true', async () => {
    await wrapper.setProps({
      modelValue: true,
    });

    expect(toggleButton.element.checked).toBe(true);
  });

  it('should be unchecked when modelValue is false', async () => {
    await wrapper.setProps({
      modelValue: false,
    });

    expect(toggleButton.element.checked).toBe(false);
  });

  it('should be disabled when disabled prop become true', async () => {
    expect(toggleButton.element.disabled).toBe(false);
    await wrapper.setProps({ disabled: true });
    expect(toggleButton.element.disabled).toBe(true);
  });

  it('should be not disabled when disabled prop become false', async () => {
    await wrapper.setProps({ disabled: true });
    expect(toggleButton.element.disabled).toBe(true);

    await wrapper.setProps({ disabled: false });
    expect(toggleButton.element.disabled).toBe(false);
  });

  it('should emit update:modelValue event when modelValue prop is updated', async () => {
    toggleButton.setValue();
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0][0]).toEqual(true);
  });
});
