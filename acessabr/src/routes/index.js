import React from 'react'
import { BrouserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import SaoPaulo from'../pages/Sao-Paulo'
import RioDeJaneiro from'../pages/Sao-Paulo'




const Routes = props => {
    return (
        <Router>
            <Switch>
                
               {/* <Route path="/:state/:city" element={<Home />}/> */}
                <Route path="/sp/sao-paulo" element={<Home city={props.city} />}/>
                <Route path="/mg/minas-gerais" element={<SaoPaulo city={props.city} />}/>
                <Route path="/rg/rio-de-janeiro" element={<RioDeJaneiro city={props.city} />}/>

            </Switch>
        </Router>
    )
}

export default Routes;