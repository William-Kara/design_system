import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcButtonAction from './QfcButtonAction.vue';

let wrapper: any = null;

const propsValues = {
  icon: 'space_dashboard',
  label: 'Dashboard',
  to: '/dashboard',
  isActive: false,
  isNotification: false,
};

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
