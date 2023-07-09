import {SectionLogo} from "@/app/SectionLogo";
import {SectionProduct} from "@/app/SectionProduct";
import {SectionEvent} from "@/app/SectionEvent";
import {SectionSlider} from "@/app/SectionSlider";
import App from "@/app/None";


const Section1 = {
    textColor: "text-[#CA8F65]",
    logo: "",
    title: "100 Years of tradition",
    description: "Lorem ipsum dolor sit amet,ebitis ducimus, est explicabo ipsam ipsum iste molestiae quae quidem repudiandae soluta tempore ut vero voluptatibus! Laborum quidem sed tempore."

}
const Section2 = {
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
const Section3 = {
    title: " ساختگی با تولید سادگی نامفهوم تولید ",
    eventTitle: "پیشنهاد در تاریخ منقضی می شود :",
    btnText: "خرید",
    btnColor: "bg-[#CA8F65]",
    image: "",
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0

}
export default function Home() {
    return (
        <div className={"bg-zinc-800"}>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <SectionLogo {...Section1} />
            <SectionProduct {...Section2} />
            <SectionEvent {...Section3}/>
            <App/>
            <br/>
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
