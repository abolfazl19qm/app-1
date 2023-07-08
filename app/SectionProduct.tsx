import {VFC} from "react";

export interface ISection2 {
    imageCenter: string
    icon1: string
    icon2: string
    icon3: string
    title1: string
    title2: string
    title3: string
    description1: string
    description2: string
    description3: string
}


export const SectionProduct: VFC<ISection2> = ({
                                                   imageCenter,
                                                   icon3,
                                                   icon2,
                                                   icon1,
                                                   title1,
                                                   title2,
                                                   title3,
                                                   description3,
                                                   description2,
                                                   description1
                                               }) => {
    return (
        <section className={"flex items-center flex-col"}>
            <img className={"w-[90%]"} src={imageCenter ? imageCenter : "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-home-pic3.webp"}/>
            <div dir="rtl" className={"w-8/12 mt-5 gap-x-5  gap-y-10  h-56 grid grid-cols-3"}>
                <div className={" col-span-3  md:col-span-1"}>
                    <div
                        className={"w-3/6 relative group  mx-auto h-[35%] md:hover:border-b-2 transition-all duration-300 border-[#CA8F65]"}>
                        <img className={"mx-auto group-hover:scale-110 transition-all duration-500"} src={icon1 ? icon1 : "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-home-icon3.svg"} alt="Shipping in 24 hours"/></div>
                    <p className={"text-center text-zinc-100 text-xl font-medium mt-3"}>{title1}</p>
                    <p className={"text-[#8E8E8E] font-medium text-center text-[18px] mt-5"}>{description1}</p>
                </div>
                <div className={"col-span-3 md:col-span-1"}>
                    <div
                        className={"w-3/6 group  mx-auto h-[35%] md:hover:border-b-2 transition-all duration-300 border-[#CA8F65]"}>
                        <img className={"mx-auto group-hover:scale-110 transition-all duration-500"} src={icon2 ? icon2 : "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-home-icon2.svg"} alt="128 available products"/></div>
                    <p className={"text-center text-zinc-100 text-xl font-medium mt-3"}>{title2}</p>
                    <p className={"text-[#8E8E8E] font-medium text-center text-[18px] mt-5"}>{description2}</p>
                </div>
                <div className={"col-span-3 md:col-span-1"}>
                    <div
                        className={"w-3/6 group  hover:mt-0 mx-auto h-[35%] md:hover:border-b-2 transition-all duration-300 border-[#CA8F65]"}>
                        <img className={"mx-auto group-hover:scale-110 transition-all duration-500"} src={icon3 ? icon3 : "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-home-icon1.svg"} alt="11 years on the market"/></div>
                    <p className={"text-center text-zinc-100 text-xl font-medium mt-3"}>{title3}</p>
                    <p className={"text-[#8E8E8E] font-medium text-center text-[18px] mt-5"}>{description3}</p>
                </div>
            </div>
        </section>

    )
}