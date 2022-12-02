import React from 'react';
import ReactDOM from 'react-dom/client';
import {IntlProvider} from 'react-intl';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import localeEnMessages from './locales/en.json';
import localeEsMessages from './locales/es.json';

const userLocale = 
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language

const localeMessages = 
  userLocale.includes("es")
    ? localeEsMessages
    : localeEnMessages

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IntlProvider locale={userLocale} messages={localeMessages}>
      <App/>
    </IntlProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
