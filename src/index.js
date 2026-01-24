import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/main-component/App/App';
import reportWebVitals from './reportWebVitals';
import './css/font-awesome.min.css';
import './css/themify-icons.css';
import './css/flaticon.css';
import './sass/style.scss';

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/index";
import { Provider } from "react-redux";
import Whatsapp from './components/Whatsapp';

// ✅ ADD THIS
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Whatsapp />
      </PersistGate>
    </Provider>
  </HelmetProvider>
);

// Performance monitoring
reportWebVitals();