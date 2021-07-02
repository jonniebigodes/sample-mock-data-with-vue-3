import { addDecorator } from '@storybook/vue3'
import { initializeWorker, mswDecorator } from 'msw-storybook-addon';

initializeWorker();
addDecorator(mswDecorator);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
