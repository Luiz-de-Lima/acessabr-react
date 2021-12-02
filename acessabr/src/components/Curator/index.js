import React from "react";
import './curator.scss'
import curatorPhoto from '../../images/image-profile.jpg'

const CuratorItem=()=>{
    return (
<div className="curator__container">
    <div className="curator__photo">
        <img src={curatorPhoto} alt="foto curador Luiz de Lima"/>
    </div>
    <div className="curator__details">
        <div>
        <h3>Luiz de Lima</h3>
        <h6>Curadoria</h6>
        </div>
        
        <p>Desenvolvedor desde 2019,recém formado em análise e desenvolvimento de sistemas</p>
    </div>

</div>
    )
}

export default CuratorItem;