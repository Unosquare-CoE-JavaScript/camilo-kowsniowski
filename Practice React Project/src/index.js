import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

// we need to use Auth0  and axios

ReactDOM.render(
  <Auth0Provider
    domain='dev-bq-yuv5z.us.auth0.com'
    clientId='TUgQSAy7YvgUuSay2pz4oTPn45Ynm4NY'
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
