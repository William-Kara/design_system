import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcProgressBar from './QfcProgressBar.vue';

let wrapper: any = null;

const propsValues = {
  color: '#F5DE8D',
  value: 10,
  title: 'Lesson Progression',
};

beforeEach(() => {
  wrapper = shallowMount(QfcProgressBar, {
    propsData: propsValues,
  });
});

describe('QfcProgressBar Component', () => {
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
