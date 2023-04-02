import './styles/App.scss';
import './styles/fonts.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import SidebarContextProvider from 'contexts/sidebar';
import DateContextProvider from 'contexts/date';
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DateContextProvider>
      <SidebarContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SidebarContextProvider>
    </DateContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
