import React from "react";
import './App.css';
import { Provider } from 'react-redux';
import Routes from './Routes';
import configureStore from './store';

function App() {
  return (
      <Provider store={configureStore()}>
        <Routes />
      </Provider>
  );
}

export default App;
