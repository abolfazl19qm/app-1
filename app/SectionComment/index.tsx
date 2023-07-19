import React, {VFC} from "react";

export interface ISectionComment {
    title: string;
    titleColor: string;
    comment: string;
    commentColor: string;
    image: string[];
    bgColor: string;
    className?: string;
    refContainer?: React.Ref<HTMLDivElement>;

}

/**
 * Create a responsive section consisting of text at the left and Three images at the right.
 * @param {string} title : The title of Comment
 * @param {string} titleColor : The Title color
 * @param {string} comment : The Comment
 * @param {string} commentColor : The Comment color
 * @param {string} className : add class
 * @param {React.Ref<HTMLDivElement>} refContainer : ref
 * @param {string} bgColor : background color
 * @param {string[]} image : The image
 * @return {JSX.Element}
 * @author Abolfazl Mehdizade <Abolfazl19qm@gmail.com>
 */
export const SectionComment: VFC<ISectionComment> = ({
                                                         className = "",
                                                         refContainer,
                                                         bgColor = "rgb(60, 60, 60)",
                                                         titleColor = "white",
                                                         commentColor = "#8e8e8e",
                                                         image = ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-post-pic1.png"],
                                                         comment = "Cursus venenatis arcu in quis ac. Faucibus cras arcu consequat sed eget lorem. Diam sagittis arcu vitae gravida. Molestie ut amet in tincidunt at elit ac, dignissim sagittis. Ac risus, lectus dolor sit condimentum euismod morbi arcu morbi. Ornare odio in diam scelerisque eget suspendisse.",
                                                         title = "Robert Fox"
                                                     }) => {
    return (
        <div ref={refContainer} style={{backgroundColor: bgColor}} className={"w-full py-4 " + className}>
            <div
                className={"flex xl:w-[85%] lg:w-8/12 w-10/12 items-center mx-auto gap-x-10"}>
                <div className={"rounded-full xl:w-[8%] lg:w-[15%] md:w-[25%] sm:w-[27%] w-1/3  "}><img
                    className={"w-full h-[80%] "}

                    src={image[0]}
                    alt=""/></div>
                <div className={"w-[80%]"}>
                    <h1 style={{color: titleColor}} className={"text-2xl"}>{title}</h1>
                    <p style={{color: commentColor}} className={"mt-4"}>{comment}</p>
                </div>
            </div>
        </div>
    )
}