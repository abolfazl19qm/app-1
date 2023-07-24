import {onAddToCart} from "@atoms/shoppingCard";
import BascketIcon from "@icons/bascket.svg";
import User from "./user-150.svg";
import HumberMenuIcon from "@icons/humber-menu.svg";
import LogoWH from "./whiskey2.svg";
import HumberMenu from "./icons8-menu (1).svg";
import UserIcon from "./icons8-user-48.png";
import mapPin from "./icons8-map-pin-24.png";
import Shoppingbag from "./icons8-shopping-bag-50.png";
import {checkoutURL, homeURL, loginURL, contactUsURL} from "@routes";
import translator from "@translator";
import {useRouter} from "next/router";
import React, {useState, VFC} from "react";
import {useRecoilValue} from "recoil";
import Image from "next/image";

export interface ISiteHeaderWh {
    bgColor: string;

    title1: string;
    link1: string;

    title2: string;
    link2: string;

    title3: string;
    link3: string;

    title4: string;
    link4: string;

    title5: string;
    link5: string;

    logo?: string;

    refContainer?: React.Ref<HTMLDivElement>;
    className?: string;
}

type HeaderLinksType = { title: string; link: string; className?: string };

const HeaderLink: VFC<HeaderLinksType> = ({
                                              title,
                                              link,
                                              className,
                                          }) => {
    const router = useRouter();
    return (
        <button
            className={`mx-2 cursor-pointer ${className} text-[#ca8f65]`}
            onClick={() => router.push(link)}
        >
            {title}
        </button>
    );
};

/**
 * Create a responsive Special Banner.
 * @param {string} bannerTitle : The title of banner
 * @param {string} bgColor : To change background color
 * @param {React.Ref<HTMLDivElement} refContainer
 * @return {JSX.Element}
 * @author Soudabeh Bolouri <soudabe.bolouri@gmail.com>
 */

export const SiteHeaderWh: VFC<ISiteHeaderWh> = ({
                                                     title1 = "",
                                                     link1 = "",

                                                     title2 = "",
                                                     link2 = "",

                                                     title3 = "",
                                                     link3 = "",

                                                     title4 = "",
                                                     link4 = "",

                                                     title5 = "",
                                                     link5 = "",

                                                     logo,

                                                     refContainer,
                                                     bgColor,
                                                     className = "",
                                                 }) => {
    const router = useRouter();
    const {shoppingCard = []} = useRecoilValue(onAddToCart);
    const data = useRecoilValue(onAddToCart);
    const [activeHumberMenu, setActiveHumberMenu] = useState<boolean>(false);
    const image = './icons8-user-48.png'

    // state (show: true , hide: false) login components
    const [loginDisplay, setLoginDisplay] = useState<boolean>(false)

    // state (show: "right-0" , hide: "-right-[440px]") Sidebar components
    const [sideBarDisplay, setSideBarDisplay] = useState<string>("-right-[440px]")

    return (
        <div
            ref={refContainer}
            className={"flex flex-col w-full md:min-w-[1200px] " + className}>
            {/* sideBar */}
            <aside
                className={`w-[440px] gap-y-5 flex flex-col transition-all duration-700 h-full fixed bg-[rgba(48,48,48,0.997)]  z-50 ${sideBarDisplay}`}>
                <div className={"flex h-[10%] border-zinc-700 border-b-[1px] px-5 items-center justify-between"}>
                    <button
                        // use setSideBarDisplay for hide sideBar components
                        onClick={() => setSideBarDisplay("-right-[440px]")}
                        className={"text-zinc-500 hover:rotate-180 hover:text-zinc-200 transition-transform duration-500"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-6 h-6">
                            <path fillRule="evenodd"
                                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                  clipRule="evenodd"/>
                        </svg>

                    </button>
                    <div className={"text-2xl text-[#ca8f65]"}>Cart</div>
                    <div></div>
                </div>
                <div className={"h-[65%] flex justify-center items-center  w-full"}><p
                    className={"text-zinc-500 font-medium"}>Your cart is currently empty.</p></div>
                <div className={"h-[25%] bg-[rgb(50,50,50)]  w-full"}>
                    <div
                        className={"w-[90%] text-zinc-500 mt-2 h-12 border-zinc-700 border-b-[2px] mx-auto flex justify-between items-center"}>
                        <p className={"font-medium"}>Subtotal:</p><p>$0.00</p></div>
                    <div className={"w-[90%] text-zinc-500 mt-2 h-12  mx-auto flex justify-between items-center"}><p
                        className={"font-medium"}>total:</p><p className={"text-xl font-bold"}>$0.00</p></div>
                </div>
            </aside>
            {/* sideBar */}
            <div className="justify-center items-center "
                 style={{backgroundColor: bgColor}}
            >
                <div
                    className={`flex h-24 items-center bg-transparent
                      justify-between  m-auto md:w-[80%] lg:w-[70%] w-[70%] px-[5rem] md:px-0  `}
                >
                    <div className={"hidden md:flex text-[13px]"}>
                        <HeaderLink title={title1} link={link1}/>
                        <HeaderLink title={title2} link={link2}/>
                        <HeaderLink title={title3} link={link3}/>
                        <HeaderLink title={title4} link={link4}/>
                        <HeaderLink title={title5} link={link5}/>
                    </div>
                    <div className={"flex items-center ml-[10rem] md:ml-[1rem]"}>
                        <button
                            className={"-mr-20 md:hidden"}
                            onClick={() => setActiveHumberMenu(true)}
                        >
                            <HumberMenu className='w-7 ml-28'/>

                        </button>
                        <button onClick={() => router.push(homeURL)}>
                            {/* <img
                  src={logo ? logo : "/logo.png"}
                  className={"ml-16 w-7 lg:w-11"}
                  alt={"logo"}
                />  */}
                            <LogoWH className='mr-25 sm:mr-[12rem] md:-mr-20'/>
                        </button>
                    </div>
                    <div className={"flex items-center"}>
                        <div>
                            <button
                                // use setLoginDisplay for show login components
                                onClick={() => {
                                    !loginDisplay ? setLoginDisplay(true) : setLoginDisplay(false);
                                    router.push(contactUsURL)
                                }}
                                className={`flex relative items-center ml-4 cursor-pointer `}>
                                <p
                                    className={
                                        "hidden md:flex text-xs md:text-sm mr-1 md:mr-2 text-[#ca8f65]"
                                    }
                                >
                                    <div className="text-[#ca8f65]">
                                        <Image src={mapPin} width={20} height={20}/>
                                    </div>
                                    فروشگاه ما
                                </p>
                            </button>
                            {/* login */}
                            {loginDisplay &&
                                <div className={"absolute top-24 w-80 h-96 bg-[#2a2a2a] z-40"}>
                                    <div className={"flex mt-6 justify-between px-5"}><p
                                        className={"text-3xl text-[#ca8f65]"}>Login</p>
                                        <button
                                            // use setLoginDisplay for hide login components
                                            onClick={() => setLoginDisplay(false)}
                                            className={"text-zinc-500 hover:rotate-[360deg] hover:text-zinc-200 transition-transform duration-500"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                 fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd"
                                                      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                                      clipRule="evenodd"/>
                                            </svg>

                                        </button>
                                    </div>
                                    <div
                                        className={" h-12 w-[90%] border-b-[2px] mt-6 border-zinc-500 hover:border-zinc-300 transition-all duration-500 mx-auto flex gap-x-1 items-center"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                             className="w-7 mb-2 text-zinc-500 h-7">
                                            <path fillRule="evenodd"
                                                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <div className={"relative"}>
                                            <input
                                                type="text"
                                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] text-xl  focus:text-sm text-white leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                id="exampleFormControlInputHelper" placeholder="Username or Email"/>
                                            <label htmlFor="exampleFormControlInputHelper"
                                                   className="pointer-events-none absolute  left-3 -top-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Username
                                                or Email</label>
                                            <div
                                                className="absolute w-full text-sm text-neutral-500 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary"></div>
                                        </div>
                                    </div>
                                    <div
                                        className={" h-12 w-[90%] border-b-[2px] mt-6 border-zinc-500 hover:border-zinc-300 transition-all duration-500 mx-auto flex gap-x-1 items-center"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                             className="w-7 mb-2 text-zinc-500 h-7">
                                            <path fillRule="evenodd"
                                                  d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <div className={"relative"}>
                                            <input
                                                type="password"
                                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] text-xl focus:text-sm  text-white leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                id="exampleFormControlInputHelper" placeholder="Password"/>
                                            <label htmlFor="exampleFormControlInputHelper"
                                                   className="pointer-events-none absolute  left-3 -top-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Password</label>
                                            <div
                                                className="absolute w-full text-sm text-neutral-500 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary"></div>
                                        </div>
                                    </div>
                                    <div className={"flex gap-x-2 items-center h-16  w-[90%] mx-auto"}><input
                                        type="checkbox"/><p className={"text-zinc-500  text-xl"}>Remember me</p></div>
                                    <button
                                        className={"bg-[#ca8f65] text-zinc-900  w-[90%] hover:bg-orange-200 mx-auto h-12 mt-3 text-sm flex justify-center items-center"}>Login
                                    </button>
                                    <p className={"text-zinc-500 cursor-pointer hover:text-zinc-200 text-center mt-2 text-[10px]"}>Lost
                                        your password?</p>
                                </div>}
                            {/* login */}
                        </div>


                        <button
                            className={`flex items-center ml-4 cursor-pointer`}
                            onClick={() => router.push(loginURL)}
                        >
                            <p
                                className={
                                    "hidden md:flex text-xs md:text-sm text-neutral mr-1 md:mr-2"
                                }
                            >
                                <div className="text-[#ca8f65]">
                                    <Image src={UserIcon} width={20} height={20}/>
                                </div>
                            </p>
                        </button>

                        <div className={`hidden md:flex flex-row relative`}>
                            {shoppingCard.length > 0 && (
                                <div
                                    className="w-3 h-3 rounded-full bg-[#ca8f65] flex justify-center items-center absolute -top-2 -right-2 z-[1]"
                                >
                                    <div className="text-white text-[12px] ">
                                        {translator("global", {text: shoppingCard.length})}
                                    </div>
                                </div>
                            )}

                            <button
                                // use setSideBarDisplay for show sideBar components
                                onClick={() => {
                                    router.push(checkoutURL);
                                    setSideBarDisplay("right-0")
                                }}>
                                <Image src={Shoppingbag} width={17} height={17}/>
                                <span
                                    className="text-[#ca8f65] mr-2 text-[15px]">{translator("global", {text: data._totalPrice})}</span>
                                <span className="text-[#ca8f65] text-[12px] mr-1">تومان</span>
                            </button>
                            {" "}

                        </div>
                    </div>
                </div>
            </div>


            {
                //humber menu
                activeHumberMenu && (
                    <div className={"flex fixed w-full z-50"}>
                        <div
                            className={`flex flex-col bg-[#2B2B2A] h-screen right-0 top-0 w-60 p-6  ${activeHumberMenu ? "mr-0" : "-mr-60"
                            }`}
                        >
              <span
                  className={"w-full flex justify-start text-3xl text-[#ca8f65]"}
                  onClick={() => setActiveHumberMenu(false)}
              >
                &times;
              </span>

                            <button
                                className={`flex items-center ml-4 cursor-pointer `}
                                onClick={() => router.push(contactUsURL)}
                            >
                                <p
                                    className={
                                        "flex text-lg my-5 m-auto text-[#ca8f65]"
                                    }
                                >
                                    <div className="text-[#ca8f65]">
                                        <Image src={mapPin} width={20} height={20}/>
                                    </div>
                                    فروشگاه ما
                                </p>
                            </button>

                            <div className="flex justify-between mx-14">
                                <div className={`flex flex-row relative`}>
                                    {shoppingCard.length > 0 && (
                                        <div
                                            className="w-3 h-3 rounded-full bg-[#ca8f65] flex justify-center items-center absolute -top-2 -right-2 z-[1]"
                                        >
                                            <div className="text-white text-[12px] ">
                                                {translator("global", {text: shoppingCard.length})}
                                            </div>
                                        </div>
                                    )}
                                    <button onClick={() => router.push(checkoutURL)}>
                                        <Image src={Shoppingbag} width={20} height={20}/>
                                    </button>
                                    {" "}
                                </div>
                                <div>
                                    <button
                                        className={`flex items-center  cursor-pointer`}
                                        onClick={() => router.push(loginURL)}
                                    >
                                        <p
                                            className={
                                                "flex text-xs md:text-sm text-neutral mr-1 md:mr-2"
                                            }
                                        >
                                            <div className="text-[#ca8f65]">
                                                <Image src={UserIcon} width={23} height={23}/>
                                            </div>
                                        </p>
                                    </button>
                                </div>
                            </div>
                            <div className="line w-[100%] mx-auto bg-[#585857] h-[1px] mt-4"/>
                            <HeaderLink title={title1} link={link1} className={"my-2"}/>
                            <div className="line w-[100%] mx-auto bg-[#585857] h-[0.5px]"/>
                            <HeaderLink title={title2} link={link2} className={"my-2"}/>
                            <div className="line w-[100%] mx-auto bg-[#585857] h-[0.5px]"/>
                            <HeaderLink title={title3} link={link3} className={"my-2"}/>
                            <div className="line w-[100%] mx-auto bg-[#585857] h-[0.5px]"/>
                            <HeaderLink title={title4} link={link4} className={"my-2"}/>
                            <div className="line w-[100%] mx-auto bg-[#585857] h-[0.5px]"/>
                            <HeaderLink title={title5} link={link5} className={"my-2"}/>
                            <div className="line w-[100%] mx-auto bg-[#585857] h-[0.5px]"/>

                        </div>
                        <div
                            className={"bg-black opacity-50"}
                            style={{width: "calc(100vw - 15rem)"}}
                            onClick={() => setActiveHumberMenu(false)}
                        />
                    </div>
                )
            }
        </div>
    );
};
