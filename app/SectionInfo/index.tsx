import React, {VFC} from "react";

export interface ISectionInfo {
    image: string[]
    phoneNumber: string;
    email: string;
    title: string;
    subTitle: string;
    titleAddress: string;
    address1: string;
    address2: string;
    nr1: string;
    nr2: string;
    bgColor: string;
    className?: string;
    refContainer?: React.Ref<HTMLDivElement>;
}

/**
 * Create a responsive section consisting of text at the left and Three images at the right.
 * @param {string} title : The title of Component
 * @param {string} phoneNumber : The Phone Number
 * @param {string} email : The Email
 * @param {string} className : add class
 * @param {string} subTitle : Description
 * @param {string} titleAddress : title Address
 * @param {string} address1 : Address
 * @param {string} address2 : Address
 * @param {string} nr1 : NR
 * @param {string} nr2 : NR
 * @param {React.Ref<HTMLDivElement>} refContainer : ref
 * @param {string} bgColor : background color
 * @param {string[]} image : The image
 * @return {JSX.Element}
 * @author Abolfazl Mehdizade <Abolfazl19qm@gmail.com>
 */

export const SectionInfo: VFC<ISectionInfo> = ({
                                                   className = "",
                                                   bgColor = "",
                                                   refContainer,
                                                   image = ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-contact-pic1.webp"],
                                                   phoneNumber = "+61 (0) 3 8376 6284",
                                                   email = "noreply@envato.com",
                                                   title = "We are here for you",
                                                   subTitle = "At habitant varius eros aliquet habitasse senectus quisque rhoncus volutpat nisi pellentesque porta in molestie: 7:00 am - 9:00 pm",
                                                   titleAddress = "Address",
                                                   address1 = "Level 13, 2 Elizabeth Victoria 3000 Australia",
                                                   address2 = "Level 16, 1 Mid-Atlantic NewYork city usa",
                                                   nr1 = "NR 000 000 00 00 00",
                                                   nr2 = "NR 000 000 00 00 00"
                                               }) => {
    return (
        <div className={className} ref={refContainer} style={{backgroundColor: bgColor}}>
            <section
                className={"h-[770px] w-[90%] md:w-[85%] lg:w-[75%] xl:w-[66%] bg-[#2a2a2a] my-[500px] md:my-10  mx-auto"}>
                <header className={"lg:text-3xl mb-20 xl:text-4xl text-2xl text-center  font-medium text-[#ca8f65]"}>
                    <h1>{phoneNumber}</h1>
                    <h2 className={"mt-2"}>{email}</h2>
                </header>
                <div className={"flex mt-10 flex-col md:flex-row gap-1 p-5"}>
                    <div className={"w-full md:w-3/6 h-[45%] md:h-full "}>
                        <h1 className={"lg:text-3xl xl:text-[44px] text-2xl text-[#ca8f65] md:w-7/12 text-center md:text-left "}>
                            {title}</h1>
                        <div className={"my-16 md:my-8 flex justify-center md:block"}><img
                            src="https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-sep1.svg"
                            alt=""/></div>
                        <p className={"text-[#ca8f65] md:w-9/12 text-center my-5 md:text-left"}>{subTitle}</p>
                        <div className={"flex justify-center md:w-10/12 mt-16 items-center"}>
                            <div className={"flex gap-2 justify-between "}>
                                <div>
                                    <div className={"flex justify-center md:block"}><img
                                        src="https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-icon4.svg"
                                        alt="loc"/></div>
                                    <h3 className={"text-center md:text-left mt-3 text-[#ca8f65] font-medium"}>{titleAddress}</h3>
                                    <p className={"text-center md:text-left mt-2 md:w-9/12 text-[#8e8e8e]"}>{address1}</p>
                                </div>
                                <div>
                                    <div className={"flex justify-center md:block"}><img
                                        src="https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-icon4.svg"
                                        alt="loc"/></div>
                                    <h3 className={"text-center mt-3 md:text-left text-[#ca8f65] font-medium"}>{titleAddress}</h3>
                                    <p className={"text-center mt-2 md:text-left md:w-9/12 text-[#8e8e8e]"}>{address2}</p>
                                </div>

                            </div>

                        </div>
                        <p className={"text-[#8e8e8e] text-center md:text-left mt-14 text-sm"}>{nr1}</p><p
                        className={"text-sm text-center md:text-left text-[#8e8e8e]"}>{nr2}</p>
                    </div>
                    <div className={"w-full relative md:w-[55%] xl:w-[50%] h-3/6 md:h-full mt-10 md:my-0"}><img
                        className={"absolute scale-125 w-full  top-10 left-0"}
                        src={image[0]}
                        alt="Man"/></div>
                </div>
            </section>
        </div>
    )
}
