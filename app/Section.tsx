import {VFC} from "react";

export interface ISection {
    logo: string
    title: string
    description: string
    textColor: string
}
export const Section: VFC<ISection> = ({logo, title, description, textColor}) => {
    return (
        <section>
            <span className={"flex justify-center"} ><img width={50} height={50} src={logo ? logo : "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-icon1.svg"} alt="logo"/></span>
            <h4 className={`w-44 text-center mx-auto mt-5  text-3xl ${textColor}`}>{title}</h4>
        </section>
    )
}