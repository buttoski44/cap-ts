import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss';
import {BrowserRouter} from "react-router-dom";
import {store, persistor}  from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from './utils/stripe/stripe.utils';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter >
          {/* <Elements stripe={stripePromise}> */}
            <App/>
          {/* </Elements> */}
        </BrowserRouter> 
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)




  
