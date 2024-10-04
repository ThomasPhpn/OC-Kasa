/** @type { import('@storybook/react').Preview } */
import "../src/index.css";

const googleFontLink = document.createElement("link");
googleFontLink.href =
  "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap";
googleFontLink.rel = "stylesheet";
document.head.appendChild(googleFontLink);

const fontAwesomeLink = document.createElement("link");
fontAwesomeLink.href =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
fontAwesomeLink.rel = "stylesheet";
document.head.appendChild(fontAwesomeLink);

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
