import { it, describe, beforeEach, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import Subtitle from './QfcSubtitle.vue';

let wrapper: any = null;

const propsValues = {
  text: 'Subtitle',
};

beforeEach(() => {
  wrapper = shallowMount(Subtitle, {
    propsData: propsValues,
  });
});

describe('Subtitle Component', () => {
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
