import React from 'react';
import { globalState, globalReducer } from '../reducers';

export const GlobalDispatch = React.createContext();
export const GlobalState = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(globalReducer, globalState);

  return (
    <GlobalState.Provider value={state}>
      <GlobalDispatch.Provider value={dispatch}>
        {children}
      </GlobalDispatch.Provider>
    </GlobalState.Provider>
  );
};
