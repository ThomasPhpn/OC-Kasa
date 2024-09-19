/** @type { import('@storybook/react').Preview } */
import "../src/index.css";

const link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

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
