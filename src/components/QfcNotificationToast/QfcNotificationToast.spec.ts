import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcNotificationToast from './QfcNotificationToast.vue';

let wrapper: any = null;

const propsValues = {
  type: 'info',
  title: 'Title exemple',
  description: 'Lorem exemple',
  inline: true,
};

beforeEach(() => {
  wrapper = shallowMount(QfcNotificationToast, {
    propsData: propsValues,
  });
});

describe('QfcNotificationToast Component', () => {
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
