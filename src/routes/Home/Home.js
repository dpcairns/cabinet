import React from 'react';
import glamorous from 'glamorous';
import { defaultStyle } from './Home.style';

const Home = ({ className }) =>
  <div className={className}>
    Welcome home!
  </div>;

export default glamorous(Home)(defaultStyle);
