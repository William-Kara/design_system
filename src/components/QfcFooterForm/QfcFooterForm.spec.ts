import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcFooterForm from './QfcFooterForm.vue';

let wrapper: any = null;

const propsValues = {
  firstLinks: {
    links: [
      {
        label: 'link 1',
        to: '/link-1',
        isExternalLink: false,
      },
    ],
  },
  secondLinks: {
    links: [
      {
        label: 'link 2',
        to: '/link-2',
        isExternalLink: false,
      },
    ],
  },
  thirdLinks: {
    links: [
      {
        label: 'link 3',
        to: '/link-3',
        isExternalLink: false,
      },
    ],
  },
};

beforeEach(() => {
  wrapper = shallowMount(QfcFooterForm, {
    propsData: propsValues,
  });
});

describe('QfcFooterForm Component', () => {
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
