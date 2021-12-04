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




const Card = ({ item }) => {

    const imagePath = require('../../images' + item.image)

    return (
        <div className="card__container">
            <div className="card__image">
                <img src={imagePath.default} alt={item.name} title={item.title} />
            </div>
            <div className="card__content">
                <h3>{item.name}</h3>
                <ul className="card__facilities">
                    <li className={`card__facilities__item ${item.facilities.item[0]} ${!item.facilities.status ? 'unchecked' : ''}`}>
                        <img src={IconBraile} alt="Sinalização em Braile" title="Sinalização em Braile" />
                    </li>
                    <li className={`card__facilities__item ${item.facilities[1].item} ${!item.facilities[1].status ? 'unchecked' : ''}`}>
                        <img src={IconAudio} alt="Audio descrição" title="Audio descrição" />
                    </li>
                    <li className={`card__facilities__item ${item.facilities[3].item} ${!item.facilities[4].status ? 'unchecked' : ''}`}>
                        <img src={IconBanheiro} alt="Banheiro Acessível" title="Banheiro Acessível" />
                    </li>
                    <li className={`card__facilities__item ${item.facilities[3].item} ${!item.facilities[3].status ? 'unchecked' : ''}`}>
                        <img src={IconElevador} alt="Elevador para cadeirantes" title="Elevador para cadeirantes" />
                    </li>
                    <li className={`card__facilities__item ${item.facilities[4].item} ${!item.facilities[4].status ? 'unchecked' : ''}`}>
                        <img src={IconEstacionamento} alt="Estacionamento para idosos/deficientes" title="Estacionamento para idosos/deficientes" />
                    </li>
                    <li className={`card__facilities__item ${item.facilities[5].item} ${!item.facilities[5].status ? 'unchecked' : ''}`}>
                        <img src={IconCaoGuia} alt="Permite acessoa de cães-guias" title="Permite acessoa de cães-guias" />
                    </li>
                    <li className={`card__facilities__item ${item.facilities[6].item} ${!item.facilities[6].status ? 'unchecked' : ''}`}>
                        <img src={IconPiso} alt="Portas largas" title="Portas largas" />
                    </li>
                    <li className={`card__facilities__item ${item.facilities[7].item} ${!item.facilities[7].status ? 'unchecked' : ''}`}>
                        <img src={IconPorta} alt="Portas Largas" title="Portas Largas" />
                    </li>
                    <li className={`card__facilities__item ${item.facilities[8].item} ${!item.facilities[8].status ? 'unchecked' : ''}`}>
                        <img src={IconRampa} alt="Rampas de Acesso para cadeirantes" title="Rampas de Acesso para cadeirantes" />
                    </li>
                    <li className={`card__facilities__item ${item.facilities[9].item} ${!item.facilities[9].status ? 'unchecked' : ''}`}>
                        <img src={IconLibras} alt="Atendimento em libras" title="Atendimento em libras" />
                    </li>
                </ul>

                <p>{item.description}</p>
                <Button>Como chegar</Button>
            </div>
        </div>
    )
}

export default Card;