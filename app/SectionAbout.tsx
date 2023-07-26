import React, {VFC} from "react";

export interface ISectionAbout {
    image: string[]
    title: string;
    titleColor: string;
    description: string;
    descriptionColor: string;
    bgColor: string;
    className?: string;
    refContainer?: React.Ref<HTMLDivElement>;

}

/**
 * Create a responsive section
 * @param {string} title : The title
 * @param {string} titleColor : The Title color
 * @param {string} description : The Description
 * @param {string} descriptionColor : The Descriptions color
 * @param {string} className : add class
 * @param {React.Ref<HTMLDivElement>} refContainer : ref
 * @param {string} bgColor : background color
 * @param {string[]} image : The image
 * @return {JSX.Element}
 * @author Abolfazl Mehdizade <Abolfazl19qm@gmail.com>
 */

export const SectionAbout: VFC<ISectionAbout> = ({
                                                     className = "",
                                                     refContainer,
                                                     bgColor = "",
                                                     image = ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-about-pic2.webp"],
                                                     title = "About us",
                                                     description = "Convallis taciti netus aptent himenaeos proin at posuere eget tempus sollicitudin fringilla dictum duis etiam enim posuere eget posuere eget tempus sollicitudin fringilla dictum duis etiam enim quisque pulvinar elementum semper i tempus sollicitudin fringilla dictum duis etiam enim quisque pulvinar elementum semper i quisque pulvinar elementum semper imperdiet cursus praesent elementum dictum cursus amet ornare sagittis congue sed habitasse quis volutpat velit posuere bibendum dictum etiam facilisis convallis donec nisl vivamus cursus eget sapien dictum lectus ligula.",
                                                     titleColor = "#ca8f65",
                                                     descriptionColor = "#8e8e8e",

                                                 }) => {
    return (
        <section style={{backgroundColor: bgColor}} ref={refContainer}
                 className={className + " w-[96%] md:w-full mx-auto  xl:w-[1200px] xl:h-[660px]  grid grid-cols-12 overflow-hidden"}>
            <div className={"md:col-span-6 relative col-span-12 w-[90%] mx-auto h-full lg:w-full"}>
                <img className={"w-full md:absolute   top-0"}
                     src={image[0]}
                     alt="man"/>
            </div>
            <div className={"col-span-1 hidden lg:block"}></div>
            <div className={" md:col-span-6 lg:col-span-5 col-span-12 h-full w-full "}>
                <h1 style={{color: titleColor}}
                    className={" text-center mt-5 lg:mt-24 text-3xl lg:text-5xl"}>{title}</h1>

                <p style={{color: descriptionColor}}
                   className={"mt-16  md:text-[16px] w-[90%] text-[10px] mx-auto text-center"}>{description}</p>
            </div>
        </section>
    )
}