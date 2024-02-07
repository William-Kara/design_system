import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcTag from './QfcTag.vue';

let wrapper: any = null;

beforeEach(() => {
  wrapper = shallowMount(QfcTag, {
    propsData: {
      label: 'Tag test',
    },
  });
});

describe('QfcTag Component', () => {
  it('mounts properly', () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.text()).toContain('Tag test');
  });

  it('has correct props', () => {
    expect(wrapper.props().label).toBe('Tag test');
  });

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
