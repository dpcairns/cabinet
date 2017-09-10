import { css } from 'glamor';
import flexboxGrid from './flexbox-grid';

export default () =>
  css.global(
    'html, body',
    {
      padding: 0,
      margin: 0,
      backgroundColor: 'pink',
    },
    ('*': {
      boxSizing: 'border-box'
    }),
  );

export const makeFlexboxGrid = () => css.insert(flexboxGrid);
