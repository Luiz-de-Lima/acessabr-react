import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Curator from './components/Curator';

const Config={
  state:'SP',
  city:'São Paulo'
}
ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <Header  city={Config.city} state={Config.state}/>
      <Home city={Config.city}/>
      <Curator/>
    </div>
  </div>,

  document.getElementById('root')
);

