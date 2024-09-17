/** @type { import('@storybook/react').Preview } */
import "../src/index.css"; // Import the Tailwind CSS file

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
