import React from 'react';
import glamorous from 'glamorous';
import Link from 'redux-first-router-link';
import { defaultStyle } from './Header.style';

const Header = ({ className }) => (
  <div className={`${className} col-xs-offset-3 col-xs-6`}>
    <Link to={{ type: 'HOME' }}>Go Home</Link>
    <Link to={{ type: 'ABOUT' }}>About</Link>
  </div>
);

export default glamorous(Header)(defaultStyle);
