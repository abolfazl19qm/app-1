import React, {VFC} from "react";

export interface IFooter {
    titleColor: string;
    titleFirst: string;
    subTitleFirst1: string;
    subTitleFirst2: string;
    subTitleFirst3: string;
    subTitleFirst4: string;
    subTitleFirst5: string;
    subTitleFirst6: string;
    titleSecond: string;
    subTitleSecond1: string;
    subTitleSecond2: string;
    subTitleSecond3: string;
    subTitleSecond4: string;
    subTitleSecond5: string;
    titleThird: string;
    subTitleThird1: string;
    subTitleThird2: string;
    subTitleThird3: string;
    titleFourth: string;
    subTitleFourth: string;
    imagesTitleFourth: string[];
    bgColor: string;
    className?: string;
    refContainer?: React.Ref<HTMLDivElement>;
}

/**
 * Create a responsive footer
 * @param {string} titleFirst : title 1
 * @param {string} titleColor : Titles Color
 * @param {string} titleSecond : title 2
 * @param {string} titleThird : title 3
 * @param {string} titleFourth : title 3
 * @param {string} subTitleFirst1 : sub Title First 1
 * @param {string} subTitleFirst2 : sub Title First 2
 * @param {string} subTitleFirst3 : sub Title First 3
 * @param {string} subTitleFirst4 : sub Title First 4
 * @param {string} subTitleFirst5 : sub Title First 5
 * @param {string} subTitleFirst6 : sub Title First 6
 * @param {string} subTitleSecond1 : sub Title Second 1
 * @param {string} subTitleSecond2 : sub Title Second 2
 * @param {string} subTitleSecond3 : sub Title Second 3
 * @param {string} subTitleSecond4 : sub Title Second 4
 * @param {string} subTitleSecond5 : sub Title Second 5
 * @param {string} subTitleThird1 : sub Title Third 1
 * @param {string} subTitleThird2 : sub Title Third 2
 * @param {string} subTitleThird3 : sub Title Third 3
 * @param {string} subTitleFourth : description Title Fourth
 * @param {string} className : add class
 * @param {React.Ref<HTMLDivElement>} refContainer : ref
 * @param {string} bgColor : background color
 * @param {string[]} imagesTitleFourth : The images
 * @return {JSX.Element}
 * @author Abolfazl Mehdizade <Abolfazl19qm@gmail.com>
 */

export const Footer: VFC<IFooter> = ({
                                         className = "",
                                         refContainer,
                                         bgColor = "",
                                         titleColor = "#ca8f65",
                                         titleFirst = "Blenders pride",
                                         titleSecond = "Customer service",
                                         subTitleFirst1 = "Contact us",
                                         subTitleFirst2 = "Help & About us",
                                         subTitleFirst3 = "Shipping & Returns",
                                         subTitleFirst4 = "Refund Policy",
                                         subTitleFirst5 = "Shipping & Returns",
                                         subTitleFirst6 = "Contact us",
                                         subTitleSecond1 = "Refund Policy",
                                         subTitleSecond2 = "Help & About us",
                                         subTitleSecond3 = "Contact us",
                                         subTitleSecond4 = "Help & About us",
                                         subTitleSecond5 = "Customer service",
                                         titleThird = "Working time",
                                         subTitleThird1 = "Level 13, 2 Elizabeth St, Melbourne, Victoria",
                                         subTitleThird2 = "Monday - Friday 09:00 AM - 06:00 PM",
                                         subTitleThird3 = "Saturday-Friday 07:00 AM - 08:00 PM",
                                         titleFourth = "Payment methods",
                                         subTitleFourth = "Cras at augue id enim. Phasellus in nibh consectetuer tincidunt sed, erat",
                                         imagesTitleFourth = ["https://img.freepik.com/free-icon/paypal_318-674245.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"]
                                     }) => {
    return (
        <footer className={"w-full " + className} ref={refContainer} style={{backgroundColor: bgColor}}>
            <div className={"xl:w-[75%] lg:w-[85%] md:ml-10  xl:h-[320px] lg:mx-auto"}>
                <ul className={"w-full h-full gap-5 justify-between grid grid-cols-5"}>
                    <li className={"md:col-span-1  h-full col-span-5 text-center md:text-left "}>
                        <span style={{color: titleColor}} className={"h-[10%] font-medium text-sm lg:text-xl"}>{titleFirst}</span>
                        <ul className={"mt-5 h-[60%] flex flex-col justify-evenly "}>
                            <li className={"text-[12px] lg:text-sm xl:text-[20px]  text-[#8e8e8e] md:hover:decoration-1 transition-all duration-500 md:hover:text-[#ca8f65]  hover:underline decoration-[#ca8f65] cursor-pointer"}>
                                {subTitleFirst1}
                            </li>
                            <li className={"text-[12px] xl:text-[20px] lg:text-sm  text-[#8e8e8e] md:hover:decoration-1 transition-all duration-500 md:hover:text-[#ca8f65]  hover:underline decoration-[#ca8f65] cursor-pointer"}>
                                {subTitleFirst2}
                            </li>
                            <li className={"text-[12px] xl:text-[20px] lg:text-sm  text-[#8e8e8e] md:hover:decoration-1 transition-all duration-500 md:hover:text-[#ca8f65]  hover:underline decoration-[#ca8f65] cursor-pointer"}>
                                {subTitleFirst3}
                            </li>
                            <li className={"text-[12px] xl:text-[20px] lg:text-sm  text-[#8e8e8e] md:hover:decoration-1 transition-all duration-500 md:hover:text-[#ca8f65]  hover:underline decoration-[#ca8f65] cursor-pointer"}>
                                {subTitleFirst4}
                            </li>
                            <li className={"text-[12px] xl:text-[20px] lg:text-sm text-[#8e8e8e] md:hover:decoration-1 transition-all duration-500 md:hover:text-[#ca8f65]  hover:underline decoration-[#ca8f65] cursor-pointer"}>
                                {subTitleFirst5}
                            </li>
                            <li className={"text-[12px] xl:text-[20px] lg:text-sm  text-[#8e8e8e] md:hover:decoration-1 transition-all duration-500 md:hover:text-[#ca8f65]  hover:underline decoration-[#ca8f65] cursor-pointer"}>
                                {subTitleFirst6}
                            </li>
                        </ul>
                    </li>
                    <li className={"md:col-span-1  col-span-5 text-center md:text-left "}>
                        <span style={{color: titleColor}} className={"h-[10%]  font-medium text-sm lg:text-xl"}>{titleSecond}</span>
                        <ul className={"mt-5 h-[60%] flex flex-col justify-evenly "}>
                            <li className={" xl:text-[20px] text-[#8e8e8e] text-[12px] lg:text-sm md:hover:decoration-1 transition-all duration-500 md:hover:text-[#ca8f65]  hover:underline decoration-[#ca8f65] cursor-pointer"}>
                                {subTitleSecond1}
                            </li>
                            <li className={" xl:text-[20px] text-[#8e8e8e] text-[12px] lg:text-sm md:hover:decoration-1 transition-all duration-500 md:hover:text-[#ca8f65]  hover:underline decoration-[#ca8f65] cursor-pointer"}>{subTitleSecond2}
                            </li>
                            <li className={" text-[#8e8e8e] xl:text-[20px] md:hover:decoration-1 text-[12px] lg:text-sm transition-all duration-500 md:hover:text-[#ca8f65]  hover:underline decoration-[#ca8f65] cursor-pointer"}>{subTitleSecond3}
                            </li>
                            <li className={" text-[#8e8e8e] md:hover:decoration-1 xl:text-[20px] transition-all text-[12px] lg:text-sm duration-500 md:hover:text-[#ca8f65]  hover:underline decoration-[#ca8f65] cursor-pointer"}>{subTitleSecond4}
                            </li>
                            <li className={" text-[#8e8e8e] md:hover:decoration-1 transition-all xl:text-[20px] duration-500 text-[12px] lg:text-sm md:hover:text-[#ca8f65]  hover:underline decoration-[#ca8f65] cursor-pointer"}>{subTitleSecond5}
                            </li>
                        </ul>
                    </li>
                    <li  className={"md:col-span-1 col-span-5 text-center md:text-left "}>
                        <span style={{color: titleColor}} className={"h-[10%] font-medium text-sm lg:text-xl"}>{titleThird}</span>
                        <ul className={"mt-5 h-[70%] lg:w-[80%] w-full flex flex-col justify-evenly "}>
                            <li className={" text-[#8e8e8e] text-[12px] lg:text-sm xl:text-[16px]"}>{subTitleThird1}
                            </li>
                            <li className={" text-[#8e8e8e] text-[12px] lg:text-sm xl:text-[16px]"}>{subTitleThird2}
                            </li>
                            <li className={" text-[#8e8e8e] text-[12px] lg:text-sm xl:text-[16px]"}>{subTitleThird3}
                            </li>

                        </ul>
                    </li>
                    <li className={"md:col-span-2 w-4/6 mx-auto col-span-5 mt-5 md:mt-0 text-center md:text-left "}>
                        <span style={{color: titleColor}} className={"h-[10%] font-medium text-sm lg:text-xl"}>{titleFourth}</span>
                        <p className={"text-[#8e8e8e] mt-5 xl:text-[20px]"}>
                            {subTitleFourth}</p>
                        <div className={"flex mt-14 justify-evenly"}>
                            <div><img
                                width={40}
                                height={40}
                                src={imagesTitleFourth[0]}
                                alt=""/></div>
                            <div><img
                                width={40}
                                height={40}
                                src={imagesTitleFourth[1]}
                                alt=""/></div>
                            <div><img
                                width={40}
                                height={40}
                                src={imagesTitleFourth[2]}
                                alt=""/></div>
                        </div>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
