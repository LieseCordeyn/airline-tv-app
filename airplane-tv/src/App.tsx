import React from 'react';
import logo from './logo.svg';
import './App.css';
import EpisodeList from './components/Episode-list/episode-list'
import Header from './components/Header/header'


function App() {
  return (
    <div>
      <Header/>
      <EpisodeList/>
    </div>
  );
}



export default App;
