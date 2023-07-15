import React, {VFC} from "react";
import Image from "next/image";

export interface ISectionServices {
    imageCenter: string[];
    icon: string[];
    title1: string;
    title2: string;
    title3: string;
    textStyle: {
        Bold: boolean;
        Italic: boolean; Justify: boolean;
    };
    description1: string;
    description2: string;
    description3: string;
    bgColor: string;
    titleColor: string;
    descriptionColor: string;
    className?: string;
    refContainer?: React.Ref<HTMLDivElement>;
}
/**
 * Create a responsive section consisting of text at the left and Three images at the right.
 * @param {string} title : The title of Services
 * @param {string[]} icon : The icons
 * @param {string} description1 : The description
 * @param {string} bgColor : To change background color
 * @param {string[]} imageCenter : Three images that display on the center and top side of the component
 * @return {JSX.Element}
 * @author Abolfazl Mehdizade <Abolfazl19qm@gmail.com>
 */


export const SectionServices: VFC<ISectionServices> = ({
                                                           imageCenter = [],
                                                           icon = [],
                                                           textStyle = {Bold: false, Italic: false, Justify: false},
                                                           title1 = "",
                                                           title2 = "",
                                                           title3 = "",
                                                           description3 = "",
                                                           description2 = "",
                                                           description1 = "",
                                                           className = "",
                                                           titleColor = "",
                                                           descriptionColor = "",
                                                           bgColor = "",
                                                           refContainer
                                                       }) => {
    return (
        <section style={{backgroundColor: bgColor}} ref={refContainer}
                 className={"flex items-center h-full flex-col" + className}>
            <Image className={"w-[90%]"} alt={"Shipping in 24 hours"}
                   src={imageCenter[0]}/>
            <div dir="rtl" className={"w-8/12 mt-5 gap-x-5  gap-y-10  h-56 grid grid-cols-3"}>
                <div className={" col-span-3  md:col-span-1"}>
                    <div
                        className={"w-3/6 relative group after:absolute after:content-[''] after:left-0 after:bottom-0 after:ease-in-out md:hover:after:scale-x-100 after:w-full after:h-1 after:bg-[#CA8F65] after:scale-x-0 after:origin-left    mx-auto h-[35%]  after:transition-transform after:transform after:duration-700"}>
                        <Image className={"mx-auto group-hover:scale-110 transition-all duration-500"}
                               src={icon[0]}
                               alt="Shipping in 24 hours"/></div>
                    <p style={{color: titleColor}}
                       className={"text-center text-zinc-100 text-xl font-medium mt-3"}>{title1}</p>
                    <p style={{color: descriptionColor}}
                       className={"text-[#8E8E8E] font-medium text-center text-[18px] mt-5"}>{description1}</p>
                </div>
                <div className={"col-span-3 md:col-span-1"}>
                    <div
                        className={"w-3/6 relative group after:absolute after:content-[''] after:left-0 after:bottom-0 after:ease-in-out md:hover:after:scale-x-100 after:w-full after:h-1 after:bg-[#CA8F65] after:scale-x-0 after:origin-left    mx-auto h-[35%]  after:transition-transform after:transform after:duration-700"}>
                        <Image className={"mx-auto group-hover:scale-110 transition-all duration-500"}
                               src={icon[1]}
                               alt="128 available products"/></div>
                    <p style={{color: titleColor}}
                       className={"text-center text-zinc-100 text-xl font-medium mt-3"}>{title2}</p>
                    <p style={{color: descriptionColor}}
                       className={"text-[#8E8E8E] font-medium text-center text-[18px] mt-5"}>{description2}</p>
                </div>
                <div className={"col-span-3 md:col-span-1"}>
                    <div
                        className={"w-3/6 relative group after:absolute after:content-[''] after:left-0 after:bottom-0 after:ease-in-out md:hover:after:scale-x-100 after:w-full after:h-1 after:bg-[#CA8F65] after:scale-x-0 after:origin-left    mx-auto h-[35%]  after:transition-transform after:transform after:duration-700"}>
                        <Image className={"mx-auto group-hover:scale-110 transition-all duration-500"}
                               src={icon[2]}
                               alt="11 years on the market"/></div>
                    <p style={{color: titleColor}}
                       className={"text-center text-zinc-100 text-xl font-medium mt-3"}>{title3}</p>
                    <p style={{color: descriptionColor}}
                       className={"text-[#8E8E8E] font-medium text-center text-[18px] mt-5"}>{description3}</p>
                </div>
            </div>
        </section>
    )
}