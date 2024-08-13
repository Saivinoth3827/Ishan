import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-mdkgknx3lyw3sisr.us.auth0.com"
    clientId="uSmFwdxwmbI6oYNL9oAR4JNS1szcjfuv"
    authorizationParams={{
      redirect_uri: `${window.location.origin}/Home`
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);
