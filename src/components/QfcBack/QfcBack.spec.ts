import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcBack from './QfcBack.vue';

let wrapper: any = null;

const propsValues = {
  label: 'Retour à l’accueil',
  href: '/',
};

beforeEach(() => {
  wrapper = shallowMount(QfcBack, {
    propsData: propsValues,
  });
});

describe('QfcBack Component', () => {
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
