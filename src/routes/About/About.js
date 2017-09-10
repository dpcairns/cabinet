import React from 'react';
import glamorous from 'glamorous';
import { defaultStyle, mapPropsAndThemeToStyle } from './About.style';

const About = ({ className }) => <div className={className}>About me . . .</div>;

export default glamorous(About)(defaultStyle, mapPropsAndThemeToStyle);
