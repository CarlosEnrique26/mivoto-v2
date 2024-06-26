import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initialState } from './context/initialState';
import { StateProvider } from './context/store';
import { mainReducer } from './context/reducers';


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={mainReducer}>
      <App />
    </StateProvider>

    
  </React.StrictMode>,
  document.getElementById('root')
);

