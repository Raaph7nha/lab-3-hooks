import React from 'react';
import ReactDOM from 'react-dom/client';
import { Tienda } from './Tienda';
import './styles.css';

// Conecta el componente Tienda con el <div id="root"> del index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Tienda />
  </React.StrictMode>
);