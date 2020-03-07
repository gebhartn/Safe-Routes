export const globalState = {
  title: 'Hello World',
  fetching: false,
  error: '',
};

export const globalReducer = (state = globalState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        title: action.payload,
      };

    case 'FETCH_PENDING':
      return {
        ...state,
        fetching: true,
      };

    case 'FETCH_FAILURE':
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
