import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DetailEpisode from './routes/episodeDetail'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/"  element={<App />}/>
      <Route path="/episode"  element={<DetailEpisode />}>
        <Route path=":Id" element={<DetailEpisode />}/>
      </Route>
      <Route path="*" element={
        <h1>Page not found</h1>
      } />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
