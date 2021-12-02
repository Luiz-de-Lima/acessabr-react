import React from "react";
import './card.scss'
import Button from "../Button";
import IconAudio from '../../images/icon-audio-descricao.png'
import IconBanheiro from '../../images/icon-banheiro-acessivel.png'
import IconBraile from '../../images/icon-braile.png'
import IconCaoGuia from '../../images/icon-caoguia.png'
import IconElevador from '../../images/icon-elevador.png'
import IconEstacionamento from '../../images/icon-estacionamento.png'
import IconLibras from '../../images/icon-libras.png'
import IconPiso from '../../images/icon-piso-tatil.png'
import IconPorta from '../../images/icon-porta-larga.png'
import IconRampa from '../../images/icon-rampa.png'
import IconTop from '../../images/icon-top.png'




const Card = () => {
    return (
        <div className="card__container">
            <div className="card__image"></div>
            <div className="card__content">
                <h3>Nome do Local</h3>
                <ul className="card__facilities">
                    <li className="card__facilities__item">
                        <img src={IconBraile} alt="Sinalização em Braile" title="Sinalização em Braile" />
                    </li>
                    <li className="card__facilities__item card__facilities__item--unchecked">
                        <img src={IconAudio} alt="Audio descrição" title="Audio descrição" />
                    </li>
                    <li className="card__facilities__item">
                          <img src={IconBanheiro} alt="Banheiro Acessível" title="Banheiro Acessível" />
                    </li>
                    <li className="card__facilities__item">
                        <img src={IconElevador} alt="Elevador para cadeirantes" title="Elevador para cadeirantes" />
                    </li>
                    <li className="card__facilities__item">
                         <img src={IconEstacionamento} alt="Estacionamento para idosos/deficientes" title="Estacionamento para idosos/deficientes" />
                    </li>
                    <li className="card__facilities__item">
                         <img src={IconCaoGuia} alt="Permite acessoa de cães-guias" title="Permite acessoa de cães-guias" />
                    </li>
                    <li className="card__facilities__item">
                     <img src={IconPiso} alt="Portas largas" title="Portas largas" />
                    </li>
                    <li className="card__facilities__item">
                        <img src={IconPorta} alt="Portas Largas" title="Portas Largas" />
                    </li>
                    <li className="card__facilities__item">
                        <img src={IconRampa} alt="Rampas de Acesso para cadeirantes" title="Rampas de Acesso para cadeirantes" />
                    </li>
                    <li className="card__facilities__item">
                        <img src={IconLibras} alt="Atendimento em libras" title="Atendimento em libras" />
                    </li>
                </ul>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quas est voluptatem pariatur, rem eaque expedita nihil repudiandae, fugiat amet facere quo dolore quidem placeat, magnam ut distinctio. Assumenda, debitis.</p>
                <Button>Como chegar</Button>
            </div>
        </div>
    )
}

export default Card;