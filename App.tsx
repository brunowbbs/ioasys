import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from './src/theme';
import Reducers from './src/redux/reducers';
import Routes from "./src/routes";

export default function App() {
  const Store = createStore(Reducers);


  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  )
}