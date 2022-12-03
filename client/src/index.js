import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ContainerProvider from './hooks/useContainer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContainerProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContainerProvider>
);