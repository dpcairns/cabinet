import React from 'react';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import universal from 'react-universal-component';
import { defaultStyle } from './Switcher.style';

const UniversalComponent = universal(
  ({ page }) => import(`../${page}/${page}`),
  {
    minDelay: 500,
    loading: () => <div><div /></div>,
    error: () => <div>PAGE NOT FOUND - 404</div>,
  },
);

const Switcher = ({ page, className }) =>
  <div className={className}>
    <UniversalComponent page={page} />
  </div>;

const mapState = ({ page }) => ({ page });

export default glamorous(connect(mapState)(Switcher))(defaultStyle);
