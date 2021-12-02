import React from "react";
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Card from "../Card";

import 'swiper/swiper-bundle'
SwiperCore.use(Pagination)


function Slider() {
    return (
        <Swiper slidesPerview={1}
            breakpoints={{
                767: {
                    slidesPerview: 2
                },
                1024: {
                    slidesPerview: 4
                }
            }}>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider