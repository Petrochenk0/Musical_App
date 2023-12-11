import React from 'react';
import ReactDOM from 'react-dom/client';
import ContextProviderForAudio from './Context/Context';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProviderForAudio>
      <App />
    </ContextProviderForAudio>
  </React.StrictMode>,
);
