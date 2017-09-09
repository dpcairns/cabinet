import React from 'react';
import glamorous from 'glamorous';
import { Switcher } from '../';
import { Footer } from '../../components';
import { defaultStyle } from './App.style';

const App = ({ className }) =>
  <div className={className}>
    <Switcher />
    <Footer />
  </div>;

export default glamorous(App)(defaultStyle);
