export const globalState = {
  title: 'Hello World',
};

export const globalReducer = (state = globalState, action) => {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        title: action.payload,
      };

    default:
      return state;
  }
};
