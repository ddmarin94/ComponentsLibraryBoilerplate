import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {Button} from '../packages/button/src'
import {text, boolean, number } from '@storybook/addon-knobs';

storiesOf('Button', module)
  .add('Basic', 
  () => (
      <Button 
        disabled={boolean('disabled', false)} 
        action={action('clicked')} >
          Hello world
      </Button>), 
      { notes: 'A very simple component' }
    )

