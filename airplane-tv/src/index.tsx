import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.scss';
import App from './App';
import DetailEpisode from './routes/episodeDetail'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {store} from './Store/index'

ReactDOM.render(
  <Provider store = {store}>
  <BrowserRouter>
    <Routes>
      <Route path="/"  element={<App />}/>
      <Route path="/episode/:Id"  element={<DetailEpisode />}/>
      <Route path="episode/:Id/show/:show" element={<DetailEpisode />}/>
      <Route path="*" element={
        <h1>Page not found</h1>
      } />
    </Routes>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
