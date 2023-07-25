import React, {VFC} from "react";

const data = {
    "background_image": 'https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-section-bg2.webp',
    "Logo": "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-about-pic1.svg"
}

/**
 * Create a responsive Header for About page
 * @param {string} title : title
 * @param {string} titleColor : Titles Color
 * @param {string} className : add class
 * @param {React.Ref<HTMLDivElement>} refContainer : ref
 * @param {string} bgColor : background color
 * @return {JSX.Element}
 * @author Abolfazl Mehdizade <Abolfazl19qm@gmail.com>
 */

export interface IHeaderAbout {
    title: string;
    titleColor: string;
    bgColor: string;
    className?: string;
    refContainer?: React.Ref<HTMLDivElement>;
}

export const SectionAbout: VFC<IHeaderAbout> = ({
                                                   title = "Scelerisque maecenasagittis pharetranunc dane.",
                                                   titleColor = "#ca8f65",
                                                   bgColor = "",
                                                   refContainer,
                                                   className = ""
                                               }) => {
    return (
        <section
            style={{backgroundImage: `url(${data.background_image})`, backgroundColor: bgColor}}
            ref={refContainer}
            className={`w-full  overflow-hidden bg-top  bg-no-repeat h-[800px] xl:h-[1000px] relative ${className}`}>
            <div
                className={"w-full lg:w-[90%] absolute translate-x-[-50%] left-[50%] lg:top-80 md:top-72 top-96 mx-auto"}>
                <div className={"grid  h-72 mx-auto gap-4   grid-cols-3"}>
                    <div className={"col-span-3 lg:col-span-1 flex justify-center lg:justify-end items-center"}><img
                        className={"lg:w-96 w-60 h-60 lg:h-96"}
                        src={data.Logo}
                        alt="Logo"/></div>
                    <div className={"col-span-3 lg:col-span-1 gap-y-8 flex justify-center flex-col items-center"}><h1
                        style={{color: titleColor}}
                        className={"xl:text-5xl lg:text-3xl text-2xl font-medium w-[70%] lg:w-full text-center "}>{title}</h1>
                        <img className={""}
                             src="https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-sep1.svg"
                             alt="Logo"/>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    )
}