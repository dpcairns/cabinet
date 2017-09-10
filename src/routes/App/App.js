import React from 'react';
import glamorous, { ThemeProvider } from 'glamorous';
import { Switcher } from '../';
import { Header } from '../../components';
import { defaultStyle } from './App.style';
import { defaultTheme } from '../../style';

const App = ({ className }) => (
  <ThemeProvider theme={defaultTheme}>
    <div className={className}>
      <Header />
      <Switcher />
    </div>
  </ThemeProvider>
);

export default glamorous(App)(defaultStyle);
