import React from 'react';
import glamorous from 'glamorous';
import Link from 'redux-first-router-link';
import { defaultStyle } from './Footer.style';

const Footer = ({ className }) =>
  <div className={className}>
    <Link to={{ type: 'HOME' }}>Go Home</Link>
    <Link to={{ type: 'ABOUT' }}>About</Link>
  </div>;

export default glamorous(Footer)(defaultStyle);
