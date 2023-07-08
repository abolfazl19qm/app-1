import {VFC} from "react";

export interface ISection {
    title: string
    eventTitle: string
    btnText: string
    btnColor: string
    image: string
}

export const SectionEvent: VFC<ISection> = ({title, image, eventTitle, btnText, btnColor}) => {
    return (
        <section className={"w-[90%] md:p-10 overflow-hidden mt-[400px] relative  md:mt-5 lg:w-[75%] mx-auto h-[900px] md:h-[625px] border-[#CA8F65]  bg-[#2A2A2A] border-2"}>
            <div className={"absolute right-0  bottom-0"}><img className={"w-96 md:w-[620px]"} src={image ? image : "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-home-pic2.webp"} alt="Drink"/></div>
            <div className={"md:w-[60%] absolute  w-full mt-5 float-left"}>
                <div className={"h-[30%]  flex items-center justify-center"}>
                    <h3 className={"text-center w-72 text-[#CA8F65] font-medium mt-5 text-4xl"}>{title}</h3>
                </div>
                <div className={"w-full mt-10 text-zinc-500 h-[40%]"}>
                    <p dir={"rtl"} className={"text-center md:text-2xl text-xl  text-zinc-100"}>{eventTitle}</p>
                    <div className={"mt-10"}>
                        <ul className={"grid gap-5 grid-cols-4"}>
                            <li className={" col-span-4 md:col-span-1 flex flex-col items-center"}><p className={"text-5xl text-[#CA8F65]"}>00</p><p className={"mt-5 text-zinc-200 font-medium text-xl"}>روز</p></li>
                            <li className={" col-span-4 md:col-span-1 flex flex-col items-center"}><p className={"text-5xl text-[#CA8F65]"}>00</p><p className={"mt-5 text-zinc-200 font-medium text-xl"}>ساعت</p></li>
                            <li className={" col-span-4 md:col-span-1 flex flex-col items-center"}><p className={"text-5xl text-[#CA8F65]"}>00</p><p className={"mt-5 text-zinc-200 font-medium text-xl"}>دقیقه</p></li>
                            <li className={" col-span-4 md:col-span-1 flex flex-col items-center"}><p className={"text-5xl text-[#CA8F65]"}>00</p><p className={"mt-5 text-zinc-200 font-medium text-xl"}>ثانیه</p></li>
                        </ul>
                    </div>
                    <div className={"flex justify-center items-center h-[20%]"}><button className={`w-[150px] h-[54px] text-black ${btnColor} font-medium text-xl hover:bg-amber-100 mt-20`}>{btnText}</button></div>
                </div>
            </div>

        </section>
    )
}