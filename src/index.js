import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Redux Imports:
import { Provider } from 'react-redux';
// Import Config Funciton of App Store
import {createAppStore} from './store/config/storeConfig'

//We create the App Store
let appStore = createAppStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  
);
