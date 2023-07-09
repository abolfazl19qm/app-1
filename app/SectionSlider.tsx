"use client"
import {Swiper} from 'swiper/react';
import {VFC} from "react";
interface ISection {

}
interface ISection {
    title: string
    volume: string
    description: string
    btnText: string
    price: string
    img: string
}
export const SectionSlider: VFC<ISection> = ({img, title, volume, btnText, description, price }) => {
    return (
        <section dir={"rtl"} className={"w-[90%] grid mt-96 grid-cols-9 grid-rows-[9] md:grid-rows-1  mx-auto gap-5 "}>

            <div className={"w-full md:col-span-4 col-span-9 row-span-3 md:row-span-1  md:h-full"}>
                <ProductTitle title={title} volume={volume} description={description} price={price} btnText={btnText}/>
            </div>
            <div className={"w-full md:col-span-4 col-span-9 row-span-5 md:row-span-1  md:h-full"}>
                <img className={"md:w-[80%] mt-10 mx-auto h-3/5 md:h-full xl:h-[90%]"}
                     src={img}
                     alt="DRINK"/>
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

interface Product {
    title: string
    volume: string
    description: string
    btnText: string
    price: string


}

const ProductTitle: VFC<Product>  = ({title, volume, btnText, description, price}) => {
    return (
        <div dir={"rtl"} className={"w-[80%]  xl:w-[55%] md:mt-10 xl:mt-20 mx-auto"}>
            <h2 className={"text-center md:text-right text-5xl text-[#CA8F65]"}>{title}</h2>
            <p className={"text-center md:text-right mt-10 text-orange-100"}>{volume}</p>
            <p className={"text-center md:text-right text-zinc-400 font-medium mt-10 hidden md:block"}>{description}</p>
            <div className={"flex items-center mt-10 justify-between"}><p
                className={"text-[#CA8F65] font-medium"}>{price}</p>
                <button
                    className={"text-[#CA8F65] transition-all duration-300 w-28 h-12 border-2 md:hover:border-orange-100 md:hover:text-orange-100 border-[#CA8F65]"}>{btnText}
                </button>
            </div>
        </div>
    )
}