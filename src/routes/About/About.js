import React from 'react';
import glamorous from 'glamorous';
import { defaultStyle } from './About.style';

const About = ({ className }) =>
  <div className={className}>
    About me . . .
  </div>;

export default glamorous(About)(defaultStyle);
