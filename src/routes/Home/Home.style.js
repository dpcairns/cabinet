export const defaultStyle = {
  boxSizing: 'border-box',
  padding: '10px',
  display: 'block !important',
};

export const mapPropsAndThemeToStyle = ({ theme }) => ({
  color: theme.secondary,
  background: theme.secondaryInverse,
});
