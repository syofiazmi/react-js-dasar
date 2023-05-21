import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import StateProps from './ReactJsDasar/StateProps';
// import Map from './ReactJsDasar/Map';
// import LifeCycle from './ReactJsDasar/LifeCycle';

import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StateProps /> */}
    {/* <Map /> */}
    {/* <LifeCycle /> */}
    <Crud />
  </React.StrictMode>
);

