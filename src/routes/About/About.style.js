export const defaultStyle = {
  background: 'lightgreen',
  boxSizing: 'border-box',
  padding: '10px',
  display: 'block !important',
};

export const mapPropsAndThemeToStyle = ({ theme }) => ({
  color: theme.primary,
  background: theme.primaryInverse,
});
