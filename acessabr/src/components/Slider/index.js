import React, { useState, useEffect, useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Card from "../Card";
import api from "../../config/api";

import 'swiper/swiper-bundle.css'

SwiperCore.use([Pagination])


function Slider() {
    const {filteredPlaces,setFilteredPlace}=useContext(FilterContext)
    const [places,setPlaces]=useState([])

    useEffect(()=>{
        const fecthPlaces=async()=>{
            const result=await api.get(`/places?category=${filteredPlaces}`)
            if(result.status===200){
                setPlaces(result.data)
            }
        }
        fecthPlaces
    },[filteredPlaces])
    return (
        <Swiper 
            breakpoints={{
                300:{ slidesPerview:1
                },
                767:{
                    slidesPerview:2
                },
                1024: {
                    slidesPerview: 4
                }
            }}>
                {
                    places.map(item=>{

            <SwiperSlide key={item.id}>
                <Card key={item.id} item={item}/>
            </SwiperSlide>
                    })
                }

        </Swiper>
    )
}

export default Slider