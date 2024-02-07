import { it, describe, beforeEach, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import QfcCardSlider from './QfcCardSlider.vue';

let wrapper: any = null;

const propsValues = {
  cards: [
    {
      title: 'Une plateforme accessible à tout moment',
      icon: 'timer',
      size: 'medium',
      content:
        'Grâce à une plateforme accessible partout et à tout moment, vous pourrez retrouver vos formations en cours rapidement et reprendre là où vous en étiez.',
    },
    {
      title: 'Des parcours adaptés à vos besoins',
      icon: 'explorer',
      size: 'medium',
      content:
        'Nous vous offrirons une expérience d’apprentissage sur-mesure avec des parcours de formation adaptés à vos besoins. Chaque module sera pensé de telle manière à ce que vous ayez uniquement accès à l’essentiel.',
    },
    {
      title: 'De la théorie et surtout de la mise en pratique',
      icon: 'explorer',
      size: 'medium',
      content:
        'Parce que la théorie ça se pratique, nous avons décider de vous proposer de nombreux exercices par module et ainsi de vous faire gagner en confiance. ',
    },
  ],
};

beforeEach(() => {
  wrapper = shallowMount(QfcCardSlider, {
    propsData: propsValues,
  });
});

describe('QfcCardSlider Component', () => {
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
