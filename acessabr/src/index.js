import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Curator from './components/Curator';
import Footer from './components/Footer'
import Places from './components/Places';


const Config={
  state:'SP',
  city:'São Paulo'
}
ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <Header  city={Config.city} state={Config.state}/>
      <Home city={Config.city}/>
      <Places/>
      <Curator/>
    </div>
    <Footer/>

  </div>,

  document.getElementById('root')
);

