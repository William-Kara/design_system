import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcSyntaxHighlighter from './QfcSyntaxHighlighter.vue';

let wrapper: any = null;

const propsValues = {};

beforeEach(() => {
  wrapper = shallowMount(QfcSyntaxHighlighter, {
    propsData: propsValues,
  });
});

describe('QfcBanner Component', () => {
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
