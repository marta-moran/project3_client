import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/auth.context';
import { MessageToast } from './context/message.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Router>
    <AuthProvider>
      <MessageToast>
        <App />
      </MessageToast>
    </AuthProvider>
  </Router>
  // </React.StrictMode>
);


