export const defaultStyle = {
  position: 'relative',
  height: 'calc(100vh - 40px)',
  overflow: 'hidden',
  flex: 1,

  /* NOT FOUND */
  '& .spinner': {
    color: 'red',
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
