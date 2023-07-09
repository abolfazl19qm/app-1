"use client"
import { Swiper } from 'swiper/react';
export const SectionSlider = ({}) => {
    return (
        <section dir={"rtl"} className={"w-[90%] grid mt-96 grid-cols-9 grid-rows-[9] md:grid-rows-1  mx-auto gap-5 "}>

            <div className={"w-full md:col-span-4 col-span-9 row-span-3 md:row-span-1  md:h-full"}>
                <ProductTitle/>
            </div>
            <div className={"w-full md:col-span-4 col-span-9 row-span-5 md:row-span-1  md:h-full"}>
                <img className={"md:w-[80%] mx-auto h-3/5 md:h-full xl:h-[90%]"} src="https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-slider-pic7.webp" alt=""/>
                {/*<div className={"w-full h10  md:hidden "}>
                    <ul className={"flex justify-evenly"}>
                        <li className={"w-4 h-4 rounded-full  border-[2px] border-[#CA8F65]"}><button className={"w-full h-full"}></button></li>
                        <li className={"w-4 h-4 rounded-full  border-[2px] border-[#CA8F65]"}><button className={"w-full h-full"}></button></li>
                        <li className={"w-4 h-4 rounded-full  bg-[#CA8F65] border-[2px] border-[#CA8F65]"}><button className={"w-full h-full"}></button></li>
                        <li className={"w-4 h-4 rounded-full  border-[2px] border-[#CA8F65]"}><button className={"w-full h-full"}></button></li>
                    </ul>
                </div>*/}
            </div>
            {/*<div className={"w-full hidden md:flex-col justify-evenly md:col-span-1 col-span-9 row-span-1 md:row-span-1 md:ml-8 md:flex"}>
                <button className={"text-zinc-400 w-3/6 mx-auto font-medium text-xl"}>01</button>
                <button className={"text-zinc-400 w-3/6 mx-auto font-medium text-xl"}>02</button>
                <button className={"text-[#CA8F65] w-3/6 mx-auto font-medium text-xl"}>03</button>
                <button className={"text-zinc-400 w-3/6 mx-auto font-medium text-xl"}>04</button>
            </div>*/}
        </section>
    )
}

const ProductTitle = () => {
    return (
        <div className={"w-[80%]  xl:w-[55%] md:mt-10 xl:mt-20 mx-auto"}>
            <h2>ثخبتث ختبخث</h2>
            <p>1000ML|IR</p>
            <p >هثبثهابهثابهاث هثابهثب هابهثاب ثه</p>
            <div className={"flex  justify-between"}><p>400,000 تومان</p><button>خرید</button></div>
        </div>
    )
}