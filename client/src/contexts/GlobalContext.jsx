import React from 'react';
import { globalState, globalReducer } from '../reducers';

const thunkDispatch = (dispatch, state) => input =>
  input instanceof Function ? input(dispatch, state) : dispatch(input);

export const GlobalState = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(globalReducer, globalState);

  const contextValue = React.useMemo(
    () => ({
      state,
      dispatch: thunkDispatch(dispatch, state),
    }),
    [dispatch, state]
  );

  return (
    <GlobalState.Provider value={contextValue}>{children}</GlobalState.Provider>
  );
};
