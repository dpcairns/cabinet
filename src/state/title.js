export default (state = 'Cabinet', action = {}) => {
  switch (action.type) {
    case 'HOME':
      return 'Cabinet - Home';
    case 'ABOUT':
      return 'Cabinet - About';
    default:
      return state;
  }
};

// RFR automatically changes the document.title for you :)
