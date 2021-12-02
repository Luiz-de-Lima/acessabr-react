import React from 'react'
import './header.scss'
import LogoAcessaBr from '../../images/logo-acessabr.svg'
import LogoEbac from '../../images/logo-ebac.svg'


const Header =(props)=>{
    return(
        <header className="header__container">
            <div className="header__logo header__logo--state">
                <img src={LogoAcessaBr} alt="Logo AcessaBR"/>
                <span className="header__city"> {props.city} {props.state} </span>
            </div>
            <div className="header__logo--ebac">
                <span className="header__span">Apoio:</span>
                <img src={LogoEbac} alt="Logo Ebac"/>
            </div>

        </header>
    )
}

export default Header;