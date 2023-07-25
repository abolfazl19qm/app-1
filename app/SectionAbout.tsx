export const SectionAbout = () => {
    return (
        <section className={"w-full mx-auto max-w-[1500px]  bg-[url('https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-section-bg2.webp')] bg-top  bg-no-repeat h-[800px] lg:h-[1000px] xl:h-[1100px] relative "}>
            <div className={"grid grid-cols-3 h-full w-full px-24 absolute top-60 md:top-72 lg:t-80 xl:top-96 gap-5"}>
                <div className={"lg:col-span-1 col-span-3 lg:w-10/12 w-full h-full  lg:h-10/12 flex justify-center items-center"}><img src="https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-about-pic1.svg" alt=""/></div>
                <div className={"lg:col-span-1 col-span-3 w-full h-full flex justify-center items-center text-center "}><h1 className={"w-full text-[#ca8f65] text-center text-2xl sm:text-3xl md:text-4xl"}>Scelerisque et maecenas sagittis pharetra nunc.</h1></div>
                <div className={"lg:col-span-1 col-span-3 w-full h-full "}></div>
            </div>
        </section>
    )
}