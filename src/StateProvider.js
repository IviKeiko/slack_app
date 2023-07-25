import { useReducer, useContext, createContext } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    {/* children is going to be entire app */}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
