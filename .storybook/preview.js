import { defineComponent } from 'vue';
import { setup } from '@storybook/vue3';

import "@fontsource/poppins/latin-200.css";
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";;
import "@fontsource/poppins/latin-700.css";

import "@fontsource/material-icons";
import "@fontsource/material-icons-rounded";
import "@fontsource/material-icons-outlined";
import "@fontsource/material-icons-sharp";
import "@fontsource/material-icons-two-tone";

import '@/styles/bulma/elements/tag.scss';
import '@/styles/bulma/components/navbar.scss';
import '@/styles/bulma/elements/box.scss';
import '@/styles/bulma/elements/button.scss';
import '@/styles/bulma/elements/title.scss';
import '@/styles/bulma/layout/footer.scss';
import '@/styles/bulma/components/navbar.scss';
import '@/styles/bulma/components/modal.scss'; 

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Foundations', 'Elements', 'Modules', 'Prototypes'],
    },
  },
  backgrounds: {
    default: 'bckg',
    values: [
      {
        name: 'bckg',
        value: '#232323',
      },
      {
        name: 'white',
        value: '#ffff',
      },
    ],
  },
};

const RouterLink = defineComponent({
  name: 'router-link',
  props: {
    to: String,
  },
  template: `
    <a :href="to" v-bind="$attrs"><slot /></a>
  `,
});

setup((app) => {
  app.component('router-link', RouterLink);
});