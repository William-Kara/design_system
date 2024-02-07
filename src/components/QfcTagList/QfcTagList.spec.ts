import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcTagList from './QfcTagList.vue';

let wrapper: any = null;

const propsValues = {
  tagList: ['tag1', 'tag2', 'tag3'],
};

beforeEach(() => {
  wrapper = shallowMount(QfcTagList, {
    propsData: propsValues,
  });
});

describe('QfcTagList Component', () => {
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
