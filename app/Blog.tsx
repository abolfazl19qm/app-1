"use client"
import {useState, VFC} from "react";

type props = {
    image: string;
    time: string;
    writer: string;
    description: string
    timeColor: string;
    descriptionColor: string;
    bgColor: string;
}


export const Blog: VFC<props> = ({
                                     image = "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-blog-pic11-960x641.webp",
                                     time = "December 30, 2021",
                                     writer = "Admin",
                                     description = "In arcu quis wisi donec vitae libero maecenas blandit",
                                     descriptionColor = "#a19d9d",
                                     timeColor = "#6c6b6b",
                                     bgColor = "rgb(53,53,53)"
                                 }) => {
    const [displayImage, setDisplayImage] = useState<string>("opacity-0 invisible")
    return (
        <div style={{backgroundColor: bgColor}} className={"grid col-span-3 relative md:col-span-1  group "}>
            <div className={"w-8 top-10  absolute md:group-hover:top-4 transition-all duration-700 right-4 "}>
                <button
                    onClick={() => {
                        setDisplayImage("opacity-100 visible top-20")
                    }}
                    className={"w-8 h-8   text-zinc-200 transition-all duration-700  opacity-0 md:group-hover:opacity-100 flex justify-center items-center rounded-full "}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                    </svg>
                </button>
                <button
                    className={"w-8 h-8  mt-2  text-zinc-200 transition-all duration-700 opacity-0 group-hover:opacity-100 flex justify-center items-center rounded-full "}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"/>
                    </svg>
                </button>
            </div>
            <div className={"w-full lg:h-[60%] sm:h-3/6  h-[65%] bg-white"}><img src={image} alt="blog"/></div>
            <div className={"w-full lg:h-[40%] sm:h-3/6  lg:p-5 p-5 sm:p-1 "}>
                <div style={{color: timeColor}} className={"flex gap-x-2  text-left"}>
                    <div className={"flex gap-x-1"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-6 h-6">
                            <path fillRule="evenodd"
                                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                  clipRule="evenodd"/>
                        </svg>
                        <p>{writer}</p>
                    </div>
                    <div className={"flex gap-x-1"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <p>{time}</p>
                    </div>
                </div>
                <div style={{color: descriptionColor}} className={"mt-3 text-xl "}><p
                    className={"text-left"}>{description}</p></div>
            </div>
            <div onClick={() => {
                setDisplayImage("opacity-0 invisible")
            }}
                 className={`w-[80%]  mx-auto flex justify-center items-center left-[50%] transition-all duration-700 -translate-x-[50%] z-20 top-0  fixed h-[80%] ${displayImage}`}>
                <div className={"relative"}>
                    <div onClick={() => {
                        setDisplayImage("opacity-0 invisible")
                    }} className={"absolute top-5 right-5 text-zinc-50 text-xl hover:rotate-180 "}>x
                    </div>
                    <img src={image} alt="blog"/></div>
            </div>
        </div>
    )
}