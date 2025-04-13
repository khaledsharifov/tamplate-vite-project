import '../shared/config/i18n';
import './styles/index.css';

import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';

import App from './app';

createRoot(document.getElementById('root')!).render(
  <Suspense>
    <App />
  </Suspense>
);
