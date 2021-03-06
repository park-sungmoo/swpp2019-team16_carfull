import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { storiesOf } from '@storybook/react';

import CarpoolRequestSection from './CarpoolRequestSection';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../../lib/styles/theme';
import { CssBaseline } from '@material-ui/core';
import { fromLocationList, toLocationList } from '../../../types/location';

storiesOf('Request/CarpoolRequestSection', module)
  .addDecorator(story => (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {story()}
      </ThemeProvider>
    </BrowserRouter>
  ))
  .add('default', () => (
    <CarpoolRequestSection
      user={{}}
      fromLocationList={fromLocationList}
      toLocationList={toLocationList}
      minimumPassengerList={['2', '3', '4']}
      onClickRequest={() => {}}
    />
  ));
