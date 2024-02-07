import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcButtonSidebar from './QfcButtonSidebar.vue';

let wrapper: any = null;

const propsValues = { icon: 'space_dashboard', label: 'Dashboard', to: '/dashboard' };

beforeEach(() => {
  wrapper = shallowMount(QfcButtonSidebar, {
    propsData: propsValues,
  });
});

describe('QfcButtonSidebar Component', () => {
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
