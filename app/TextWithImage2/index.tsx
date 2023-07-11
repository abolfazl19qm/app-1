import ChevronLeftIcon from "@icons/chevron-left.svg";
import homeImg from "./homePage.jpg"
import translator from "@translator";
import router from "next/router";
import React, { VFC } from "react";
import { getImage } from "@global/getImage";
import Image from "next/image";

export interface ITextWithImage2 {
  textTitle: string;
  text: string;
  textStyle: {
    Bold: boolean;
    Italic: boolean;
    Justify: boolean;
  };
  moreLink: string;
  bgColor: string;
  images: string[];

  className?: string;
  refContainer?: React.Ref<HTMLDivElement>;
  buttonColor: string;
  direction: string;
  textColor: string;
}

/**
 * Create a responsive section consisting of text at the left and Three images at the right.
 * @param {string} textTitle : The title of text
 * @param {string} text : The text displayed on the left side of the component
 * @param {string} moreLink : A link for going to the details page
 * @param {string} bgColor : To change background color
 * @param {string[]} images : Three images that display on the right side of the component
 * @return {JSX.Element}
 * @author Soudabeh Bolouri <soudabe.bolouri@gmail.com>
 */

const defaultNoImgURL = "/default_no_image.png";

export const TextWithImage2: VFC<ITextWithImage2> = ({
  textTitle = "",
  text = "",
  textStyle = { Bold: false, Italic: false, Justify: false },
  moreLink = "",
  bgColor = "",
  images = [],
  buttonColor,
  className = "",
  refContainer,
  direction = "ltr",
  textColor = "#000",
}) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      ref={refContainer}
      className={
        " justify-center w-full " + className
      }
    >
      <div className="flex flex-row relative">
        <div className="basis-5/12 content pr-[10rem] mt-[14rem]">
          <div>
            <p className="text-[2.4rem] font-semibold" >{textTitle}</p>
            <p className="mt-5 text-[1.3rem]">{text}</p>
          </div>
          <div className="absolute z-50">
            <div
              className="rounded-lg shadow-[0_5px_25px_-15px] border-0 mt-16 w-[32rem] h-[4.4rem] bg-white
              flex flex-row gap-6"
            >
              <div className="basis-4/6 py-2 pr-3">
                <input type="text" name="" id=""
                  className="bg-inherit h-full w-full text-center border-none outline-none text-[17px] mr-4" placeholder="آدرس ایمیلتان را وارد کنید" />
              </div>
              <div className="basis-2/6 text-left p-3 ">
                <button className="w-[90%] bg-[#606CEC] rounded-md h-full">
                  <p className="text-white">ساخت فروشگاه</p>
                </button>
              </div>
            </div>
            <div className="features mt-3 flex">
              <span className="flex text-gray-400 text-xs after:content-['_•'] ">
                <p>
                ثبت‌ نام رایگان
                </p>
              </span>
            </div>
          </div>

        </div>
        <div className="basis-7/12 image mb-[0px] p-4 ">
          <Image src={homeImg} className={"w-full h-full rounded-xl px-5"} />
          {/* <img
            src={images ? images[0] : defaultNoImgURL}
            alt={"name"}
            className={"w-full h-full"}
          /> */}
        </div>
      </div>
    </div>
  );
};
