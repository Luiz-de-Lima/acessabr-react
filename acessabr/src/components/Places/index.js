import React from 'react'
import './places.scss'
import Slider from '../Slider'

const Places = () => {
    return (
        <section className="places">
            <div className="places__header">
                <h2 className="places__title">Locais <span>Acessiveis</span></h2>
                <div className="places__select">
                    <h5>Ordenar por:</h5>
                    <select name="" id="">
                        <option value="">distancia
                        </option>
                        <option value="">alfabeto</option>
                    </select>
                </div>

            </div>
            <div className="places__content">
                <Slider/>
            </div>
        </section>
    )
}

export default Places