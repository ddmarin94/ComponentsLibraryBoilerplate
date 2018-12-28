import { configure, addDecorator } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';
import { withOptions } from "@storybook/addon-options";
import { withInfo } from "@storybook/addon-info";

const screenOptions = withOptions({
  name: "Storybook",
  url: "https://test.com",
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: true
})

addDecorator(screenOptions);
addDecorator(withNotes);
addDecorator(withKnobs);
addDecorator(withInfo);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);