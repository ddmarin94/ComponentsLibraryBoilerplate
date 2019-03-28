import { configure, addDecorator } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';
import { withOptions } from "@storybook/addon-options";
import { withInfo } from "@storybook/addon-info";
import { withA11y } from '@storybook/addon-a11y';


const screenOptions = withOptions({
  name: "Storybook",
  url: "https://test.com",
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: true
})

addDecorator(screenOptions);
addDecorator(withNotes);
addDecorator(withKnobs);
addDecorator(withInfo);
addDecorator(withA11y)

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);