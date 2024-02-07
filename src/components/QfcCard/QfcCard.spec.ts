import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcCard from './QfcCard.vue';

let wrapper: any = null;

const propsValues = {
  size: 'medium',
  icon: 'explore',
  title: 'Title',
  content: 'Content',
};

beforeEach(() => {
  wrapper = shallowMount(QfcCard, {
    propsData: propsValues,
  });
});

describe('QfcCard Component', () => {
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
