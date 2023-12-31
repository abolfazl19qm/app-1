"use client"
import React, {VFC} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {useEffect, useRef, useState} from "react";
import 'swiper/css';
// import Swiper core and required modules
import {EffectFade} from "swiper";
import 'swiper/css/effect-fade';
import Image from "next/image";

export interface ISectionSlider {
    img: string[];
    title1: string;
    volume1: string;
    btnText1: string;
    description1: string;
    price1: string;
    title2: string;
    volume2: string;
    btnText2: string;
    description2: string;
    price2: string;
    title3: string;
    volume3: string;
    btnText3: string;
    description3: string;
    price3: string;
    title4: string;
    volume4: string;
    btnText4: string;
    description4: string;
    price4: string;
    titleColor: string;
    descriptionColor: string;
    buttonColor: string;
    priceColor: string;
    bgColor: string;
    className?: string;
    refContainer?: React.Ref<HTMLDivElement>;
}

/**
 * Create a responsive section consisting of text at the left and Three images at the right.
 * @param {string} title : The title of Services
 * @param {string[]} price1 : The price
 * @param {string} description1 : The description
 * @param {string} bgColor : To change background color
 * @param {string[]} img : images slide
 * @return {JSX.Element}
 * @author Abolfazl Mehdizade <Abolfazl19qm@gmail.com>
 */
export const SectionSlider: VFC<ISectionSlider> = ({
                                                       img = [],
                                                       title1 = "",
                                                       volume1 = "",
                                                       btnText1 = "",
                                                       description1 = "",
                                                       price1 = "",
                                                       title2 = "",
                                                       volume2 = "",
                                                       btnText2 = "",
                                                       description2 = "",
                                                       price2 = "",
                                                       title3 = "",
                                                       volume3 = "",
                                                       btnText3 = "",
                                                       description3 = "",
                                                       price3 = "",
                                                       title4 = "",
                                                       volume4 = "",
                                                       btnText4 = "",
                                                       description4 = "",
                                                       price4 = "",
                                                       buttonColor = "",
                                                       titleColor = "",
                                                       descriptionColor = "",
                                                       priceColor = "",
                                                       bgColor = "",
                                                       className = "",
                                                       refContainer,
                                                   }) => {
    const swiperRef: any = useRef();
    const [slide, setSlide] = useState({
        btn1: "text-zinc-400 opacity-20 ",
        btn2: "text-zinc-400 opacity-20 ",
        btn3: "text-zinc-400 opacity-20 ",
        btn4: "text-zinc-400 opacity-20 ",
        slide1: "",
        slide2: "",
        slide3: "",
        slide4: "",
        slide5: "",
        slide6: "",
        slide7: "",
        slide8: ""
    })
    const btn1 = () => {
        swiperRef.current.slideTo(0);
        setSlide({
            btn1: "text-[#CA8F65]  scale-125 opacity-100",
            btn2: "text-zinc-400 opacity-20",
            btn3: "text-zinc-400 opacity-20",
            btn4: "text-zinc-400 opacity-20",
            slide1: "scale-100 lg:mr-10 opacity-100",
            slide2: "scale-75 lg:-mr-20 opacity-0",
            slide3: "scale-75 lg:-mr-20 opacity-0",
            slide4: "scale-75 lg:-mr-20 opacity-0",
            slide5: "scale-100 lg:ml-10 opacity-100",
            slide6: "scale-75 lg:-ml-20 opacity-0",
            slide7: "scale-75 lg:-ml-20 opacity-0",
            slide8: "scale-75 lg:-ml-20 opacity-0"
        });
    }
    const btn2 = () => {
        swiperRef.current.slideTo(1);
        setSlide({
            btn1: "text-zinc-400 opacity-20",
            btn2: "text-[#CA8F65] scale-125  opacity-100",
            btn3: "text-zinc-400 opacity-20",
            btn4: "text-zinc-400 opacity-20",
            slide1: "scale-75 lg:-mr-20 opacity-0",
            slide2: "scale-100 opacity-100 lg:mr-10",
            slide3: "scale-75 lg:-mr-20 opacity-0",
            slide4: "scale-75 lg:-mr-20 opacity-0",
            slide5: "scale-75 lg:-ml-20 opacity-0",
            slide6: "scale-100 opacity-100 lg:ml-10",
            slide7: "scale-75 lg:-ml-20 opacity-0",
            slide8: "scale-75 lg:-ml-20 opacity-0"
        });
    }
    const btn3 = () => {
        swiperRef.current.slideTo(2);
        setSlide({
            btn1: "text-zinc-400 opacity-20",
            btn2: "text-zinc-400 opacity-20",
            btn3: "text-[#CA8F65]",
            btn4: "text-zinc-400 opacity-20",
            slide1: "scale-75 lg:-mr-20 opacity-0",
            slide2: "scale-75 lg:-mr-20 opacity-0",
            slide3: "scale-100 lg:mr-10 opacity-100",
            slide4: "scale-75 lg:-mr-20 opacity-0",
            slide5: "scale-75 lg:-ml-20 opacity-0",
            slide6: "scale-75 lg:-ml-20 opacity-0",
            slide7: "scale-100 lg:ml-10 opacity-100",
            slide8: "scale-75 lg:-ml-20 opacity-0"
        });
    }
    const btn4 = () => {
        swiperRef.current.slideTo(3);
        setSlide({
            btn1: "text-zinc-400 opacity-20",
            btn2: "text-zinc-400 opacity-20",
            btn3: "text-zinc-400 opacity-20",
            btn4: "text-[#CA8F65] scale-125 opacity-100",
            slide1: "scale-75 lg:-mr-20 opacity-0",
            slide2: "scale-75 lg:-mr-20 opacity-0",
            slide3: "scale-75 lg:-mr-20 opacity-0",
            slide4: "scale-100 lg:mr-10 opacity-100",
            slide5: "scale-75 lg:-ml-20 opacity-0",
            slide6: "scale-75 lg:-ml-20 opacity-0",
            slide7: "scale-75 lg:-ml-20 opacity-0",
            slide8: "scale-100 lg:ml-10 opacity-100"

        });
    }

    useEffect(() => {
        async function run(list: Function[]) {
            const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

            while (true) {
                for (const item of list) {
                    // call buttons Function
                    item();
                    // delay 6 second
                    await delay(6000);
                }
            }
        }

        // Run(list of function for call in loop with delay 6s)
        run([btn1, btn2, btn3, btn4]);
    }, [slide]);
    return (
        <div style={{background: bgColor}} ref={refContainer} className={"relative  mt-5 md:mt-0 " + className}>
            <Swiper
                modules={[EffectFade]}
                fadeEffect={{crossFade: true}}
                effect={"fade"}
                slidesPerView={1}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                navigation={false}>
                <SwiperSlide>
                    <div><Slide title={title1}
                                buttonColor={buttonColor}
                                descriptionColor={descriptionColor}
                                titleColor={titleColor}
                                priceColor={priceColor}
                                img={img[0]}
                                btnText={btnText1}
                                price={price1}
                                description={description1}
                                volume={volume1}
                                slider={` ${slide.slide1} transition-all duration-[1.5s]`}
                                slidel={` ${slide.slide5} transition-all duration-[1.5s]`}/></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div><Slide title={title2}
                                buttonColor={buttonColor}
                                descriptionColor={descriptionColor}
                                titleColor={titleColor}
                                priceColor={priceColor}
                                img={img[1]}
                                btnText={btnText2}
                                price={price2}
                                description={description2}
                                volume={volume2}
                                slider={` ${slide.slide2} transition-all duration-[1.5s]`}
                                slidel={` ${slide.slide6} transition-all duration-[1.5s]`}/></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div><Slide title={title3}
                                buttonColor={buttonColor}
                                descriptionColor={descriptionColor}
                                titleColor={titleColor}
                                priceColor={priceColor}
                                img={img[2]}
                                btnText={btnText3}
                                price={price3}
                                description={description3}
                                volume={volume3}
                                slider={` ${slide.slide3} transition-all duration-[1.5s]`}
                                slidel={` ${slide.slide7} transition-all duration-[1.5s]`}/></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div><Slide title={title4}
                                buttonColor={buttonColor}
                                descriptionColor={descriptionColor}
                                titleColor={titleColor}
                                priceColor={priceColor}
                                img={img[3]}
                                btnText={btnText4}
                                price={price4}
                                description={description4}
                                volume={volume4}
                                slider={` ${slide.slide4} transition-all duration-[1.5s]`}
                                slidel={` ${slide.slide8} transition-all duration-[1.5s]`}/></div>
                </SwiperSlide>

            </Swiper>
            <div
                className={" md:left-5  md:w-10 h-[40%]  lg:top-44 md:top-28  md:z-10  md:absolute z-20   md:flex-col   justify-evenly flex"}>
                <button onClick={() => {
                    btn1()
                }}
                        className={`${slide.btn1} transition-all duration-500 hover:text-orange-400 mx-auto  md:w-3/6 md:h-full w-8 rounded-full h-8 bg-zinc-500 md:bg-transparent text-xl`}>01
                </button>
                <button onClick={() => {
                    btn2()
                }}
                        className={`${slide.btn2} transition-all duration-500 hover:text-orange-400 mx-auto  md:w-3/6 md:h-full w-8 rounded-full h-8 bg-zinc-500 md:bg-transparent text-xl`}>02
                </button>
                <button onClick={() => {
                    btn3()
                }}
                        className={`${slide.btn3} transition-all duration-500 hover:text-orange-400  mx-auto  md:w-3/6 md:h-full w-8 rounded-full h-8 bg-zinc-500 md:bg-transparent text-xl`}>03
                </button>
                <button onClick={() => {
                    btn4()
                }}
                        className={`${slide.btn4} transition-all duration-500 hover:text-orange-400  mx-auto  md:w-3/6 md:h-full w-8 rounded-full h-8 bg-zinc-500 md:bg-transparent text-xl`}>04
                </button>
            </div>
        </div>
    );
};

interface ISlide {
    title: string
    volume: string
    description: string
    btnText: string
    price: string
    img: string
    slider: string
    slidel: string
    titleColor: string;
    descriptionColor: string;
    buttonColor: string;
    priceColor: string;
}

const Slide: VFC<ISlide> = ({
                                titleColor,
                                priceColor,
                                descriptionColor,
                                buttonColor,
                                img,
                                title,
                                volume,
                                btnText,
                                description,
                                price,
                                slider,
                                slidel
                            }) => {
    return (
        <section dir={"rtl"}
                 className={"w-[96%] md:w-[94%] lg:w-[90%] grid   grid-cols-9 grid-rows-[9] md:grid-rows-1  mx-auto gap-5 "}>
            <div className={"w-full md:col-span-4 col-span-9 row-span-3 md:row-span-1  md:h-full"}>
                <div dir={"rtl"} className={"w-[80%]   xl:w-[65%] md:mt-10 xl:mt-20 mx-auto" + slider}>
                    <h2 style={{color: titleColor}}
                        className={"text-center md:text-right text-5xl xl:text-7xl"}>{title}</h2>
                    <p style={{color: titleColor}}
                       className={"text-center md:text-right mt-10 lg:mt-12 xl:mt-14 "}>{volume}</p>
                    <p style={{color: descriptionColor}}
                       className={"text-center md:text-right xl:text-xl text-zinc-400 font-medium mt-10 hidden md:block"}>{description}</p>
                    <div className={"flex items-center mt-10 lg:mt-16 justify-between"}><p
                        className={"font-medium"} style={{color: priceColor}}>{price}</p>
                        <button
                            style={{color: buttonColor}}
                            className={"transition-all duration-300 w-28 h-12 border-2 md:hover:border-orange-100 md:hover:text-orange-100 border-[#CA8F65]"}>{btnText}
                        </button>
                        <div className={"hidden md:block"}></div>
                    </div>
                </div>
            </div>
            <div className={"md:col-span-1 col-span-9 hidden md:block row-span-5 md:row-span-1"}></div>
            <div className={"w-full md:col-span-4 col-span-9 row-span-5 md:row-span-1  md:h-full"}>
                <Image
                    className={"w-[85%] sm:[70%] md:w-[85%]  lg:w-[80%]   mt-10 mx-auto h-96 md:h-96 xl:h-[650px]" + slidel}
                    src={img}
                    alt="DRINK"/>
            </div>
        </section>
    )
}




