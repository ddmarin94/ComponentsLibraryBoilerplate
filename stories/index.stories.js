import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from '../packages/button/src'

storiesOf('Button', module)
  .add('Basic', () => <Button>Hello world</Button>)