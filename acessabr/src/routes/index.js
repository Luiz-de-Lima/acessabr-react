import React from 'react'
import { BrouserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from '../pages/Home'
import Header from '../components/Header'

import { LocationContext } from '../context/locationContext.js'




const Routes = props => {
    const [city, setCity] = useState('')
    const [state, steState] = useState('')
    return (
        <LocationContext.Provider value={{city,setCity,state,steState}}>
            <Header/>
            
                <Switch>
                    {<Route path="/:state/:city" element={<Home />} />}
                </Switch>
           
        </LocationContext.Provider>
    )

}

export default Routes;