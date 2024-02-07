import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcButtonAction from './QfcSearchBar.vue';

let wrapper: any = null;

const propsValues = {};

beforeEach(() => {
  wrapper = shallowMount(QfcButtonAction, {
    propsData: propsValues,
  });
});

describe('QfcButtonAction Component', () => {
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
