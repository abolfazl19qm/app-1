"use client"
import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

const Slide = [
    {
        title: "ویسکی آبسلوت",
        volume: "300ML|TH",
        description: "آبجو در حجم ۵۰۰ سی سی محاسبه شده است و اگر حجم آن بیشتر باشد به همان نسبت به  ارزش آن اضافه گردد.",
        btnText: "خرید",
        img: "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-slider-pic4.webp",
        price: " تومان80,000 "
    }
    ,
    {
        title: "ویسکی بلک لیبل",
        volume: "900ML|US",
        description: "آبجو در حجم ۵۰۰ سی سی محاسبه شده است و اگر حجم آن بیشتر باشد به همان نسبت به  ارزش آن اضافه گردد.",
        btnText: "خرید",
        img: "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-slider-pic5.webp",
        price: " تومان420,000 "
    },
    {
        title: "ویسکی تیچرز",
        volume: "450ML|KR",
        description: "آبجو در حجم ۵۰۰ سی سی محاسبه شده است و اگر حجم آن بیشتر باشد به همان نسبت به  ارزش آن اضافه گردد.",
        btnText: "خرید",
        img: "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-slider-pic6.webp",
        price: " تومان690,000 "
    },
    {
        title: "ویسکی دانزانکو",
        volume: "1000ML|IR",
        description: "آبجو در حجم ۵۰۰ سی سی محاسبه شده است و اگر حجم آن بیشتر باشد به همان نسبت به  ارزش آن اضافه گردد.",
        btnText: "خرید",
        img: "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-slider-pic7.webp",
        price: " تومان100,000 "
    }
]

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import {Pagination, Navigation} from 'swiper/modules';
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
                <SwiperSlide><SectionSlider {...Slide[0]}/></SwiperSlide>
                <SwiperSlide><SectionSlider {...Slide[1]}/></SwiperSlide>
                <SwiperSlide><SectionSlider {...Slide[2]}/></SwiperSlide>
                <SwiperSlide><SectionSlider {...Slide[3]}/></SwiperSlide>

            </Swiper>
        </>
    );
}