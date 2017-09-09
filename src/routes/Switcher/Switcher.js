import React from 'react';
import { connect } from 'react-redux';
import universal from 'react-universal-component';
import glamorous from 'glamorous';
import { defaultStyle } from './Switcher.style';

const UniversalComponent = universal(
  ({ page }) => import(`../${page}/${page}`),
  {
    minDelay: 500,
    loading: () => <div className='spinner'>Loading . . .</div>,
    error: () => <div className='notFound'>PAGE NOT FOUND - 404</div>,
  },
);

const Switcher = ({ className, page }) =>
  <div className={className}>
    <UniversalComponent page={page} />
  </div>;

const mapState = ({ page }) => ({ page });

export default glamorous(connect(mapState)(Switcher))(defaultStyle);
