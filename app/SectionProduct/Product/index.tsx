"use client"
import React, {useState, VFC} from 'react';
import Link from "next/link";

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import {Navigation, Autoplay} from 'swiper';


interface IProduct {
    captionColor: string;
    titleColor: string;
    image: string;
    bgColor: string;
    title: string;
    price: string;
    description: string;
    CapacityTitle: string;
    Capacity: string[];
    Discount: string;
    btnText: string;
    categoriesTitle: string;
    categories: string[];
    categoriesLink: string[];
    productId: string;
    btnColor: string;
    slideImage: string[];

}

export const Product: VFC<IProduct> = ({
                                           btnColor,
                                           captionColor,
                                           titleColor,
                                           image,
                                           price,
                                           title,
                                           Capacity,
                                           CapacityTitle,
                                           Discount,
                                           description,
                                           bgColor,
                                           btnText,
                                           categoriesTitle,
                                           categories,
                                           categoriesLink,
                                           productId,
                                           slideImage,

                                       }) => {
    const [display, setDisplay] = useState("opacity-0 invisible top-10")
    const [countProduct, setCountProduct] = useState(1)
    const [favourite, setFavourite] = useState(false)
    const SwiperStyle : object = {'--swiper-navigation-color': "rgb(59,57,57)"}
    return (
        <>
            <div className={"col-span-3 md:col-span-2 group flex justify-center relative items-center flex-col"}>
                <img
                    src={image}
                    alt="drink"/>
                <div
                    style={{backgroundColor: bgColor}}
                    className={display + " fixed xl:w-[60%] grid transition-all  duration-700   lg:w-[70%] md:w-[80%] w-[90%] xl:h-[470px] md:h-80 lg:h-96 h-[700px]  grid-cols-2 gap-x-5 overflow-y-scroll  overflow-x-hidden z-20 translate-x-[-50%] translate-y-[-50%]  left-[50%]"}>
                    <button onClick={() => setDisplay("opacity-0 invisible top-10")}
                            className={"text-zinc-400 hover:rotate-[360deg] transition-all z-30 duration-700 text-2xl absolute right-3 top-5"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>

                    </button>
                    <div className={"col-span-2 md:col-span-1"}>
                        <div className={""}>
                            <Swiper navigation={true} style={SwiperStyle}
                                    modules={[Navigation, Autoplay]} autoplay={true} loop={true} className="mySwiper">
                                {slideImage.map((value, index) => (
                                    <SwiperSlide key={value + index}><img src={value} alt="drink"/></SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className={"col-span-2 md:col-span-1 p-4"}>
                        <h1 style={{color: titleColor}} className={"mt-4 font-medium text-4xl "}>{title}</h1>
                        <p style={{color: titleColor}} className={"mt-4 text-xl"}>{price}</p>
                        <p style={{color: captionColor}} className={"mt-4 "}>{description}</p>
                        <div className={"lg:w-[50%] w-[75%]  mt-8 flex items-center justify-between h-2 lg:h-5"}>
                            <p style={{color: captionColor}} className={"text-xl "}>{CapacityTitle}</p>
                            <div className={"flex gap-x-1"}>
                                {Capacity.map((value, index) => (
                                    <button key={value + index}
                                            className={"border-[1px] border-zinc-700 text-zinc-500 rounded-md flex justify-center text-[11px] lg:py-2  mg:px-3 px-1 py-0.5 items-center"}>{value}</button>
                                ))}

                            </div>
                        </div>
                        <div className={"gap-x-2  lg:w-[85%] w-[96%] flex mt-12"}>
                            <div
                                className={"w-[35%] flex h-12 border-[1px] border-zinc-500  justify-around items-center "}>
                                <button
                                    onClick={() => countProduct > 1 ? setCountProduct(countProduct - 1) : null}
                                    className={"text-white font-bold text-2xl"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                         className="w-6 h-6">
                                        <path fillRule="evenodd"
                                              d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </button>
                                <p className={"text-zinc-400  text-xl"}>{countProduct}</p>
                                <button
                                    onClick={() => setCountProduct(countProduct + 1)}
                                    className={"text-white font-bold text-2xl"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                         className="w-6 h-6">
                                        <path fillRule="evenodd"
                                              d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </button>
                            </div>
                            <button
                                style={{backgroundColor: btnColor}}
                                className={"w-[35%]  flex items-center justify-center font-medium text-[15px] h-12"}>{btnText}</button>
                            <button style={{color: btnColor}}
                                    className={"w-[15%] h-12 flex items-center justify-center"}>
                                {!favourite &&
                                    <svg onClick={() => setFavourite(true)} xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                         stroke="currentColor" className="w-7  h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                                    </svg>}
                                {favourite &&
                                    <svg onClick={() => setFavourite(false)} xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 24 24" fill="currentColor"
                                         className="w-7 h-7">
                                        <path
                                            d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
                                    </svg>}
                            </button>
                        </div>
                        <div className={"mt-10 mb-5 flex gap-x-1 items-center"}>
                            <h1 className={"text-zinc-500"}>{categoriesTitle}:</h1>
                            <p className={"text-zinc-600"}>
                                <Link className={"text-[#ca8f65] hover:underline"}
                                      href={categoriesLink[0]}>{categories[0]}</Link>
                                ,
                                <Link className={"text-[#ca8f65] hover:underline"}
                                      href={categoriesLink[1]}>{categories[1]}</Link>
                            </p>
                            <div
                                className={" flex text-zinc-500 text-[10px] border-[1px] border-zinc-700 rounded-[5px] p-1.5 ml-2  justify-around items-center"}>{productId}</div>
                        </div>
                    </div>
                </div>
                <p style={{color: "white"}} className={"mt-5 text-xl "}>{title}</p>
                <span style={{color: titleColor}} className={"mt-2 "}>{price}</span>
                <span
                    className={"w-10 h-6 bg-[#ca8f65] text-white  absolute text-[12px] left-5 lg:top-5 top-1 flex justify-center items-center  rounded-[3px]"}>{Discount}</span>
                <div
                    className={"w-8 md:h-28 h-20 md:group-hover:opacity-100 opacity-100 duration-500 transition-all md:opacity-0  group-hover:top-5  flex-col flex justify-between text-white absolute top-0 md:top-7 right-0 "}>
                    <button
                        className={"text-white hover:text-[#ca8f65] group relative transition-all duration-300"}>
                        <span
                            className={"w-28 h-5 opacity-0  md:hover:opacity-60 text-[10px] -mt-2 -left-24 rounded-md text-white font-medium absolute  "}><p
                            className={"w-[70%] py-5 rounded-md h-full flex justify-center items-center float-left relative bg-zinc-600"}>View Product</p><div
                            className={"w-5 h-5 absolute right-7 mt-2 bg-zinc-600 -z-10 rotate-45"}></div></span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-5 hidden  md:block h-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                        </svg>
                    </button>
                    <button className={"text-white hover:text-[#ca8f65] transition-all relative duration-300"}>
                        <span
                            className={"w-28 h-5 opacity-0 hover:opacity-60 text-[10px] -mt-2 -left-24 rounded-md text-white font-medium absolute  "}><p
                            className={"w-[70%] py-5 rounded-md h-full flex justify-center items-center float-left relative bg-zinc-600"}>Add Favourite</p><div
                            className={"w-5 h-5 absolute right-7 mt-2 bg-zinc-600 -z-10 rotate-45"}></div></span>
                        {!favourite &&
                            <svg onClick={() => setFavourite(true)} xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-5  h-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                            </svg>}
                        {favourite &&
                            <svg onClick={() => setFavourite(false)} xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" fill="currentColor"
                                 className="w-5 h-5">
                                <path
                                    d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
                            </svg>}
                    </button>
                    <button
                        onClick={() => setDisplay("opacity-100  visible top-[50%]")}
                        className={"text-white hover:text-[#ca8f65] relative transition-all duration-300"}>
                        <span
                            className={"w-28 h-5 opacity-0 hover:opacity-60 text-[10px] -mt-2 -left-24 rounded-md text-white font-medium absolute  "}><p
                            className={"w-[70%] py-5 rounded-md h-full flex justify-center items-center float-left relative bg-zinc-600"}>Preview</p><div
                            className={"w-5 h-5 absolute right-7 mt-2 bg-zinc-600 -z-10 rotate-45"}></div></span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}