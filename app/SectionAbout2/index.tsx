"use client"
import React, {useState, VFC} from "react";

export interface ISectionAbout2 {
    title1: string;
    description1: string;
    title2: string;
    description2: string;
    title3: string;
    description3: string;
    title4: string;
    description4: string;
    titleColor: string;
    descriptionColor: string;
    bgColor: string;
    className?: string;
    refContainer?: React.Ref<HTMLDivElement>;
}

/**
 * Create a responsive section About
 * @param {string} title : The title
 * @param {string} titleColor : The Title color
 * @param {string} descriptionColor : The Descriptions color
 * @param {string} className : add class
 * @param {React.Ref<HTMLDivElement>} refContainer : ref
 * @param {string} bgColor : background color
 * @return {JSX.Element}
 * @author Abolfazl Mehdizade <Abolfazl19qm@gmail.com>
 */


export const SectionAbout2: VFC<ISectionAbout2> = ({
                                                       title1 = "BeWhiskey first distillery",
                                                       description1 = "Aenean mollis faucibus, tortor lacus scelerisque a, tristique purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra Curabitur at sapien sapien, lacinia erat.",
                                                       title2 = "BeWhiskey first distillery",
                                                       description2 = "Aenean mollis faucibus, tortor lacus scelerisque a, tristique purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra Curabitur at sapien sapien, lacinia erat.",
                                                       title3 = "BeWhiskey first distillery",
                                                       description3 = "Aenean mollis faucibus, tortor lacus scelerisque a, tristique purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra Curabitur at sapien sapien, lacinia erat.",
                                                       title4 = "BeWhiskey first distillery",
                                                       description4 = "Aenean mollis faucibus, tortor lacus scelerisque a, tristique purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra Curabitur at sapien sapien, lacinia erat.",
                                                       titleColor = "#ca8f65",
                                                       descriptionColor = "#707070",
                                                       bgColor = "",
                                                       className = "",
                                                       refContainer
                                                   }) => {

    // states for border hover (false: bg-zinc, true: bg-bg-orange)
    const [isHover1, setIsHover1] = useState<boolean>(false)
    const [isHover2, setIsHover2] = useState<boolean>(false)
    const [isHover3, setIsHover3] = useState<boolean>(false)
    const [isHover4, setIsHover4] = useState<boolean>(false)

    return (
        <section ref={refContainer} style={{backgroundColor: bgColor}}
                 className={className + " xl:w-[800px] flex flex-col justify-between lg:w-[80%] mx-auto gap-y-5  h-[1100px] md:h-[950px] overflow-hidden"}>
            <div className={"w-full h-[23%] items-center flex md:justify-end"}>
                <div
                    style={isHover1 ? {borderColor: titleColor} : {borderColor: "#262626"}}
                    onMouseEnter={() => setIsHover1(true)}
                    onMouseLeave={() => setIsHover1(false)}
                    className={`md:w-3/6 w-[80%] mx-auto md:mx-0 p-5 h-full border-zinc-800 transition-all duration-700  border-l-[2px] text-left`}>
                    <h1 className={`relative text-2xl text-[${titleColor}] `}>{title1}
                        <p
                            className={"absolute -left-28 top-2 text-zinc-400 md:text-[12px] text-[10px] hidden md:flex items-center gap-x-1"}>29.12.1964 <svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="md:w-3 w-2 h-2 md:h-3 text-zinc-100">
                            <path
                                d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"/>
                        </svg>
                        </p>
                    </h1>
                    <p style={{color: descriptionColor}} className={"mt-5 text-sm"}>{description1}</p>
                </div>
            </div>
            <div className={"w-full h-[23%] items-center   flex md:justify-start"}>
                <div
                    style={isHover2 ? {borderColor: titleColor} : {borderColor: "#262626"}}
                    onMouseEnter={() => setIsHover2(true)}
                    onMouseLeave={() => setIsHover2(false)}
                    className={`md:w-3/6 w-[80%] mx-auto md:mx-0 p-5 h-full  transition-all duration-700  border-r-[2px] text-right`}>
                    <h1 className={`relative text-2xl text-[${titleColor}] `}>{title2}<p
                        className={"absolute -right-28 top-2 text-[10px] text-zinc-400 md:text-[12px] hidden md:flex items-center gap-x-1"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="md:w-3 w-2 h-2 md:h-3 text-zinc-100 rotate-180">
                            <path
                                d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"/>
                        </svg>
                        29.12.1964
                    </p></h1>
                    <p style={{color: descriptionColor}} className={"mt-5 text-sm"}>{description2}</p>
                </div>
            </div>
            <div className={"w-full h-[23%] items-center  flex md:justify-end"}>
                <div
                    style={isHover3 ? {borderColor: titleColor} : {borderColor: "#262626"}}
                    onMouseEnter={() => setIsHover3(true)}
                    onMouseLeave={() => setIsHover3(false)}
                    className={`md:w-3/6 w-[80%] mx-auto md:mx-0 p-5 h-full border-zinc-800 transition-all duration-700  border-l-[2px] text-left`}>
                    <h1 className={`relative text-2xl text-[${titleColor}] `}>{title3}<p
                        className={"absolute -left-28 top-2 text-zinc-400 md:text-[12px] text-[10px] hidden md:flex items-center gap-x-1"}>29.12.1964 <svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        className="md:w-3 w-2 h-2 md:h-3 text-zinc-100">
                        <path
                            d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"/>
                    </svg>
                    </p></h1>
                    <p style={{color: descriptionColor}} className={"mt-5 text-sm"}>{description3}</p>
                </div>
            </div>
            <div className={"w-full h-[23%] items-center   flex md:justify-start"}>
                <div
                    style={isHover4 ? {borderColor: titleColor} : {borderColor: "#262626"}}
                    onMouseEnter={() => setIsHover4(true)}
                    onMouseLeave={() => setIsHover4(false)}
                    className={`md:w-3/6 w-[80%] mx-auto md:mx-0 p-5 h-full transition-all duration-700  border-r-[2px] text-right`}>
                    <h1 className={`relative text-2xl text-[${titleColor}] `}>{title4}<p
                        className={"absolute -right-28 top-2 text-[10px] text-zinc-400 md:text-[12px] hidden md:flex items-center gap-x-1"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="md:w-3 w-2 h-2 md:h-3 text-zinc-100 rotate-180">
                            <path
                                d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"/>
                        </svg>
                        29.12.1964
                    </p></h1>
                    <p style={{color: descriptionColor}} className={"mt-5 text-sm"}>{description4}</p>
                </div>
            </div>
        </section>
    )
}