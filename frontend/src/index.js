/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { AddGIG } from './components/AddGIG';
import { ManageGigs } from './components/ManageGigs';
import { UpdateGig } from './components/UpdateGig';

const root = ReactDOM.createRoot(document.getElementById('root'));
 

 root.render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={ <App /> }>
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  // </React.StrictMode>,

    <App/>

);