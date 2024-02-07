import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcModal from './QfcModal.vue';

let wrapper: any = null;

const propsValues = {
  img: '/logo.svg',
  title: 'Title',
  content: 'Content',
  isOpen: true,
};

beforeEach(() => {
  wrapper = shallowMount(QfcModal, {
    propsData: propsValues,
  });
});

describe('QfcModal Component', () => {
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
