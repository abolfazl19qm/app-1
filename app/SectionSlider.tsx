"use client"
import {VFC} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {useEffect, useRef, useState} from "react";
import 'swiper/css';

interface ISlider {
    img1: string
    title1: string
    volume1: string
    btnText1: string
    description1: string
    price1: string
    img2: string
    title2: string
    volume2: string
    btnText2: string
    description2: string
    price2: string
    img3: string
    title3: string
    volume3: string
    btnText3: string
    description3: string
    price3: string
    img4: string
    title4: string
    volume4: string
    btnText4: string
    description4: string
    price4: string


}

export const SectionSlider: VFC<ISlider> = ({
                                                img1,
                                                title1,
                                                volume1,
                                                btnText1,
                                                description1,
                                                price1,
                                                img2,
                                                title2,
                                                volume2,
                                                btnText2,
                                                description2,
                                                price2,
                                                img3,
                                                title3,
                                                volume3,
                                                btnText3,
                                                description3,
                                                price3,
                                                img4,
                                                title4,
                                                volume4,
                                                btnText4,
                                                description4,
                                                price4,
                                            }) => {
    const swiperRef: any = useRef();
    const [btnColor, setBtnColor] = useState({
        btn1: "text-zinc-400",
        btn2: "text-zinc-400",
        btn3: "text-zinc-400",
        btn4: "text-zinc-400",
    })
    const btn1 = () => {
        swiperRef.current.slideTo(0);
        setBtnColor({
            btn1: "text-[#CA8F65]",
            btn2: "text-zinc-400",
            btn3: "text-zinc-400",
            btn4: "text-zinc-400",
        });
    }
    const btn2 = () => {
        swiperRef.current.slideTo(1);
        setBtnColor({
            btn1: "text-zinc-400",
            btn2: "text-[#CA8F65]",
            btn3: "text-zinc-400",
            btn4: "text-zinc-400",
        });
    }
    const btn3 = () => {
        swiperRef.current.slideTo(2);
        setBtnColor({
            btn1: "text-zinc-400",
            btn2: "text-zinc-400",
            btn3: "text-[#CA8F65]",
            btn4: "text-zinc-400",
        });
    }
    const btn4 = () => {
        swiperRef.current.slideTo(3);
        setBtnColor({
            btn1: "text-zinc-400",
            btn2: "text-zinc-400",
            btn3: "text-zinc-400",
            btn4: "text-[#CA8F65]",
        });
    }

    useEffect(() => {
        async function Run(list: Function[]) {

            const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

            while (true) {
                for (const item of list) {
                    item();
                    await delay(6000);
                }
            }
        }

        Run([btn1, btn2, btn3, btn4]);
    }, []);
    return (
        <div className={"relative mt-5 md:mt-0"}>
            <Swiper
                slidesPerView={1}
                loop={true}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                <SwiperSlide>
                    <div><Slide title={title1} img={img1} btnText={btnText1} price={price1} description={description1}
                                volume={volume1}/></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div><Slide title={title2} img={img2} btnText={btnText2} price={price2} description={description2}
                                volume={volume2}/></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div><Slide title={title3} img={img3} btnText={btnText3} price={price3} description={description3}
                                volume={volume3}/></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div><Slide title={title4} img={img4} btnText={btnText4} price={price4} description={description4}
                                volume={volume4}/></div>
                </SwiperSlide>

            </Swiper>
            <div
                className={" md:left-5 md:w-10 h-[40%] lg:top-44 md:top-28  md:z-10  md:absolute z-20   md:flex-col   justify-evenly flex"}>


                <button onClick={() => {
                    btn1()
                }}
                        className={`${btnColor.btn1} transition-all duration-500 hover:text-orange-400 mx-auto  md:w-3/6 md:h-full w-8 rounded-full h-8 bg-zinc-500 md:bg-transparent text-xl`}>01
                </button>
                <button onClick={() => {
                    btn2()
                }}
                        className={`${btnColor.btn2} transition-all duration-500 hover:text-orange-400 mx-auto  md:w-3/6 md:h-full w-8 rounded-full h-8 bg-zinc-500 md:bg-transparent text-xl`}>02
                </button>
                <button onClick={() => {
                    btn3()
                }}
                        className={`${btnColor.btn3} transition-all duration-500 hover:text-orange-400  mx-auto  md:w-3/6 md:h-full w-8 rounded-full h-8 bg-zinc-500 md:bg-transparent text-xl`}>03
                </button>
                <button onClick={() => {
                    btn4()
                }}
                        className={`${btnColor.btn4} transition-all duration-500 hover:text-orange-400  mx-auto  md:w-3/6 md:h-full w-8 rounded-full h-8 bg-zinc-500 md:bg-transparent text-xl`}>04
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
}

const Slide: VFC<ISlide> = ({img, title, volume, btnText, description, price}) => {


    return (
        <section dir={"rtl"} className={"w-[90%] grid  grid-cols-9 grid-rows-[9] md:grid-rows-1  mx-auto gap-5 "}>

            <div className={"w-full md:col-span-4 col-span-9 row-span-3 md:row-span-1  md:h-full"}>
                <div dir={"rtl"} className={"w-[80%]  xl:w-[65%] md:mt-10 xl:mt-20 mx-auto"}>
                    <h2 className={"text-center md:text-right text-5xl xl:text-7xl text-[#CA8F65]"}>{title}</h2>
                    <p className={"text-center md:text-right mt-10 lg:mt-12 xl:mt-14 text-orange-100"}>{volume}</p>
                    <p className={"text-center md:text-right xl:text-xl text-zinc-400 font-medium mt-10 hidden md:block"}>{description}</p>
                    <div className={"flex items-center mt-10 lg:mt-16 justify-between"}><p
                        className={"text-[#CA8F65] font-medium"}>{price}</p>
                        <button
                            className={"text-[#CA8F65] transition-all duration-300 w-28 h-12 border-2 md:hover:border-orange-100 md:hover:text-orange-100 border-[#CA8F65]"}>{btnText}
                        </button>
                        <div className={"hidden md:block"}></div>
                    </div>
                </div>
            </div>
            <div className={"md:col-span-1 col-span-9 hidden lg:block row-span-5 md:row-span-1"}></div>
            <div className={"w-full md:col-span-4 col-span-9 row-span-5 md:row-span-1  md:h-full"}>
                <img className={"md:w-[80%] xl:w-full mt-10 mx-auto h-96 md:h-96 xl:h-[650px]"}
                     src={img}
                     alt="DRINK"/>
            </div>
        </section>
    )
}

