import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcNotificationBox from './QfcNotificationBox.vue';

let wrapper: any = null;

const propsValues = {
  type: 'success',
};

beforeEach(() => {
  wrapper = shallowMount(QfcNotificationBox, {
    propsData: propsValues,
  });
});

describe('QfcNotificationBox Component', () => {
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
