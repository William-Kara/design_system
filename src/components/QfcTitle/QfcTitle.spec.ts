import { it, describe, beforeEach, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import Title from './QfcTitle.vue';

let wrapper: any = null;

const propsValues = {
  text: 'Title',
};

beforeEach(() => {
  wrapper = shallowMount(Title, {
    propsData: propsValues,
  });
});

describe('Title Component', () => {
  it('should mount properly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have correct props', () => {
    expect(wrapper.props()).toEqual(propsValues);
  });

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('should display a div title', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });
  it('should display a h1 title', () => {
    wrapper = shallowMount(Title, {
      propsData: {
        ...propsValues,
        level: 1,
      },
    });
    expect(wrapper.find('h1').exists()).toBe(true);
  });
  it('should display a h3 title', () => {
    wrapper = shallowMount(Title, {
      propsData: {
        ...propsValues,
        level: 3,
      },
    });
    expect(wrapper.find('h3').exists()).toBe(true);
  });
});
