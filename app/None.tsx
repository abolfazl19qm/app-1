"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import {SectionSlider} from "@/app/SectionSlider";

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="w-full h-full"
            >
                <SwiperSlide><SectionSlider/></SwiperSlide>
                <SwiperSlide><SectionSlider/></SwiperSlide>
                <SwiperSlide><SectionSlider/></SwiperSlide>
                <SwiperSlide><SectionSlider/></SwiperSlide>
            </Swiper>
        </>
    );
}