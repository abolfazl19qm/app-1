import {Blog} from "@/app/Blog";


const ListProps = [
    {
        image: "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-blog-pic11-960x641.webp",
        writer: "Admin",
        time: "December 30, 2021",
        description: "quis wisi donec vitae libero  In arcu maecenas blandit"
    },
    {
        image: "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-blog-pic10-960x641.webp",
        writer: "Admin",
        time: "December 30, 2021",
        description: "vitae libero maecenas blandit In arcu quis wisi donec"
    },
    {
        image: "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-blog-pic9-960x653.webp",
        writer: "Admin",
        time: "December 30, 2021",
        description: "In arcu quis wisi donec vitae libero maecenas blandit"
    }]

interface ISectionBlog {
}
export const SectionBlog = () => {
    return (
        <>
            <div className={"xl:w-[1100px] w-[96%] mx-auto md:h-[380px] grid grid-cols-3 gap-5"}>
                {ListProps.map((value, index) => (
                    <Blog key={value.writer} {...value}/>
                ))}
            </div>
        </>
    )
}