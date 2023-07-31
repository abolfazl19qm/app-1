import {Blog} from "./Blog/index";
import React, {VFC} from "react";

const date = {
    "1": {
        "name": "Admin",
        "caption": "quis wisi donec vitae libero  In arcu maecenas blandit",
        "images": ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-blog-pic11-960x641.webp"],
        "time": "December 30, 2021",
    },
    "2": {
        "name": "Admin",
        "caption": "quis wisi donec vitae libero  In arcu maecenas blandit",
        "images": ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-blog-pic11-960x641.webp"],
        "time": "December 30, 2021",
    },
    "3": {
        "name": "Admin",
        "caption": "quis wisi donec vitae libero  In arcu maecenas blandit",
        "images": ["https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-blog-pic11-960x641.webp"],
        "time": "December 30, 2021",
    }
}

const ListProps = [
    {
        image: date["1"].images[0],
        writer: date["1"].name,
        time: date["1"].time,
        description: date["1"].caption
    },
    {
        image: date["2"].images[0],
        writer: date["2"].name,
        time: date["2"].time,
        description: date["2"].caption
    },
    {
        image: date["3"].images[0],
        writer: date["3"].name,
        time: date["3"].time,
        description: date["3"].caption
    }]

export interface ISectionBlog {
    timeColor: string;
    descriptionColor: string;
    bgColor: string;
    className?: string;
    refContainer?: React.Ref<HTMLDivElement>;
}

export const SectionBlog: VFC<ISectionBlog> = ({
                                                   className = "",
                                                   timeColor = "",
                                                   descriptionColor = "",
                                                   bgColor = "",
                                                   refContainer
                                               }) => {
    return (
        <div ref={refContainer}
             className={className + " xl:w-[1100px] w-[96%] mx-auto md:h-[380px] grid grid-cols-3 gap-5"}>
            {ListProps.map((value, index) => (
                <Blog bgColor={bgColor} descriptionColor={descriptionColor} timeColor={timeColor} {...value}
                      key={value.writer}/>
            ))}
        </div>
    )
}