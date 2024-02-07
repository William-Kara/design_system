import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcNotificationInline from './QfcNotificationInline.vue';

let wrapper: any = null;

const propsValues = {
  timeAgo: '1 hour ago',
  read: false,
  button: 'Secondary button',
  description: 'Information requiring notification',
  tag: 'Tag filter',
};

beforeEach(() => {
  wrapper = shallowMount(QfcNotificationInline, {
    propsData: propsValues,
  });
});

describe('QfcNotificationInline Component', () => {
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
