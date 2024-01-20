import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { RouterApp } from './Router.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import { Footer } from './components/Footer.tsx';
import { HeaderSite } from './components/HeaderSite.tsx';
import { WhatsApp } from './common/components/WhatsApp.tsx';
import { initMercadoPago } from '@mercadopago/sdk-react';

initMercadoPago(import.meta.env.VITE_CHAVE_FRONT_MERCADO_PAGO, {
  locale: 'pt-BR'
});

const router = RouterApp();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <HeaderSite />
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    <WhatsApp />
    <Footer />
  </>,
)
