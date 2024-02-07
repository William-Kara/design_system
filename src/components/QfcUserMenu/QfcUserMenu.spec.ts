import { it, describe, beforeEach, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import QfcUserMenu from './QfcUserMenu.vue';

let wrapper: any = null;

const propsValues = {
  links: [
    {
      link: '#',
      title: 'Paramètre du compte',
    },
    {
      link: '#',
      title: 'Formule',
    },
    {
      link: '#',
      title: 'Se déconnecter',
    },
  ],
  name: 'John Doe',
  avatar: '/avatar.svg',
};

beforeEach(() => {
  wrapper = shallowMount(QfcUserMenu, {
    propsData: propsValues,
  });
});

describe('QfcUserMenu Component', () => {
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
