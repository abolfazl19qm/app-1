import {SectionLogo} from "@/app/SectionLogo";
import {SectionServices} from "@/app/SectionServices";
import {SectionEvent} from "@/app/SectionEvent";
import {SectionSlider} from "@/app/SectionSlider";



const sectionLogo = {
    textColor: "text-[#CA8F65]",
    logo: "",
    title: "100 Years of tradition",
    description: "Lorem ipsum dolor sit amet,ebitis ducimus, est explicabo ipsam ipsum iste molestiae quae quidem repudiandae soluta tempore ut vero voluptatibus! Laborum quidem sed tempore."

}
const sectionProduct = {
    description2: " ساختگی ب نامفهوم از صنعت چاپ و با استفاده از که لازم است",
    description3: "طراحان گرافیک است چاپگرها و متون بلکه روزنامه  سطرآنچنان ",
    description1: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    title3: "11 سال در بازار",
    title1: "ارسال در 24 ساعت",
    title2: "128 محصول موجود",
    icon3: "",
    icon2: "",
    icon1: "",
    imageCenter: ""

}
const sectionEvent = {
    title: " ساختگی با تولید سادگی نامفهوم تولید ",
    eventTitle: "پیشنهاد در تاریخ منقضی می شود :",
    btnText: "خرید",
    btnColor: "bg-[#CA8F65]",
    image: "",
    days: 0,
    hours: 0,
    minutes: 1,
    seconds: 0

}
const sectionSlider = {
    title1: "ویسکی آبس",
    img1: "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-slider-pic4.webp",
    volume1: "300ML|TH",
    description1: "آبجو در حجم ۵۰۰ سی سی محاسبه شده است و اگر حجم آن بیشتر باشد به همان نسبت به  ارزش آن اضافه گردد.",
    price1: "تومان80,000",
    btnText1: "خرید",
    title2: "ویسکی بلک",
    img2: "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-slider-pic5.webp",
    volume2: "700ML|IRAN",
    description2: "آبجو در حجم ۵۰۰ سی سی محاسبه شده است و اگر حجم آن بیشتر باشد به همان نسبت به  ارزش آن اضافه گردد.",
    price2: "تومان420,000",
    btnText2: "خرید",
    title3: "ویسکی تیچ",
    img3: "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-slider-pic6.webp",
    volume3: "700ML|US",
    description3: "آبجو در حجم ۵۰۰ سی سی محاسبه شده است و اگر حجم آن بیشتر باشد به همان نسبت به  ارزش آن اضافه گردد.",
    price3: "تومان100,000",
    btnText3: "خرید",
    title4: "ویسکی انکو",
    img4: "https://themes.muffingroup.com/be/whiskey2/wp-content/uploads/2021/12/whiskey2-slider-pic7.webp",
    volume4: "1500ML|IRLAND",
    description4: "آبجو در حجم ۵۰۰ سی سی محاسبه شده است و اگر حجم آن بیشتر باشد به همان نسبت به  ارزش آن اضافه گردد.",
    price4: "تومان690,000",
    btnText4: "خرید",

}
export default function Home() {
    return (
        <div className={"bg-zinc-800"}>
            <br/>
            <br/>
            <SectionLogo {...sectionLogo} />
            <SectionSlider {...sectionSlider} />
            <SectionServices {...sectionProduct} />
            <SectionEvent {...sectionEvent}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}
