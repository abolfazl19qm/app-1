import {VFC} from "react";

export interface ISection {
    logo: string
    title: string
    description: string
}
export const Section: VFC<ISection> = ({logo, title, description}) => {
    return (
        <section className={"mt-60"}>
            <span className={"flex justify-center"} ><img width={50} height={50} src={logo ? logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"} alt="logo"/></span>
            <h4 className={"text-amber-700 w-44 text-center mx-auto mt-5  text-3xl"}>{title}</h4>
            <p className={"lg:w-3/6 md:w-4/6 w-5/6 mx-auto text-center mt-12 text-zinc-400 font-medium"}>{description}</p>
        </section>
    )
}