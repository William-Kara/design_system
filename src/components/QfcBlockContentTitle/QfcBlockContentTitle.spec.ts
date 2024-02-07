import { it, describe, beforeEach, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import QfcBlockContentTitle from './QfcBlockContentTitle.vue';
import videoFile from '@/public/accueil-animation.mp4';

let wrapper: any = null;

const propsValues = {
  title: 'Nous construisons votre nouvelle plateforme de e-learning.',
  paragraph:
    'Vous souhaitez acquérir de nouvelles compétences ou simplement vous perfectionner sur un sujet en particulier ?',
  tagList: ['Cybersécurité', 'Développement', 'Design'],
  buttonLabel: 'Découvrez notre pédagogie',
  src: videoFile,
  alt: 'video presentation',
};

beforeEach(() => {
  wrapper = shallowMount(QfcBlockContentTitle, {
    propsData: propsValues,
  });
});

describe('QfcBlockContentTitle Component', () => {
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
