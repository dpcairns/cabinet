import React from 'react';
import glamorous from 'glamorous';
import { Switcher } from '../';
import { Header } from '../../components';
import { defaultStyle } from './App.style';

const App = ({ className }) =>
  <div className={className}>
    <Header />
    <Switcher />
  </div>;

export default glamorous(App)(defaultStyle);
