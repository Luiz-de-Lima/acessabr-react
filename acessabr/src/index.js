import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss'
import Header from './components/Header'
import SaoPaulo from './pages/Sao-Paulo'
import Curator from './components/Curator';
import Footer from './components/Footer'
import Places from './components/Places';
import Routes from 'react-router'



ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <BrowserRouter>
      <Routes />
      <Places/>
      <Curator/>
      </BrowserRouter>
    </div>
    <Footer/>

  </div>,

  document.getElementById('root')
);

