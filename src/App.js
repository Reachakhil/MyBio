import React, {useReducer} from 'react';
import { ThemeProvider, createGlobalStyle } from "styled-components";
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MainBody from './MainBody';
import Context from "./context";
import reducer from "./reducer";
import { light, dark } from "./theme";

export const GlobalStyles = createGlobalStyle`
  body, #root {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

function App() {
  const [state, dispatch] = useReducer(reducer, {
    isDark: false
  });

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.isDark ? dark : light}>
      <GlobalStyles />
    <div className="App">
   <Header/>
   <MainBody/>
    </div>
    </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
