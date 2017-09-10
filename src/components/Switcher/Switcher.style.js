export const defaultStyle = {
  position: 'relative',
  margin: '0 10px',
  height: 'calc(100vh)',
  overflow: 'hidden',
  flex: 1,

  /* NOT FOUND */
  '& .spinner': {
    color: 'pink',
  },

  '.notFound': {
    background: '#141414',
    border: '1px solid rgb(30,30,30)',
    boxSizing: 'border-box',
    padding: '10px',
    color: 'red !important',
    fontSize: '32px',
    textShadow: '1px 1px 1px black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
