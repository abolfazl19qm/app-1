import React, { VFC } from "react";
import Button from "@uikits/Button";
import BackIcon from "@icons/back.svg";

export interface IImages {
  url: string;
  subject: string;
  link: string;
  btnText: string;
  textAlign: "right" | "center" | "left";
  subjectColor: string;
  btnColor: string;
  btnTextColor: string;
  imageHeight: "cover" | "contain";
  images?: string;
}

/**
 * create each slide of the slideshow with its special settings.
 * @param {string} subject: is the subject of each slide
 * @param {string} url: is the url of slide background image
 * @param {string} link: is the link of each slide button
 * @param {"cover" | "contain"} imageHeight: is to handle displaying the background image cover or contain.
 * @param {string} btnText: is the text of link button
 * @param {string} btnColor: is the color of link button
 * @param {string} subjectColor: is the color of slide subject.
 * @param {"right" | "center" | "left"} textAlign: specify the text align of the slide's subject: left/right/center.
 * @param {string} btnTextColor : is the color og
 * @return JSX.Element
 * @author Reihaneh Rahmanipour <r.rahmanipour@gmail.com>
 */
export const SlideItem: VFC<IImages> = ({
  url,
  subject,
  link,
  imageHeight,
  btnText,
  btnColor,
  subjectColor,
  textAlign,
  btnTextColor,
}) => {
  return (
    <div
      className={"flex flex-col flex-1"}
      style={{
        backgroundImage: `url(${url})`,
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: imageHeight,
        backgroundPosition: "center",
      }}
    >
      <div
        className={
          "border border-[0.375rem] lg:border-[0.625] border-white rounded-lg h-full mx-6 my-4 md:m-6 lg:m-8 xl:m-10"
        }
      >
        <p
          className={"font-bold text-xl mt-8 mx-10"}
          style={{ color: subjectColor, textAlign: textAlign }}
        >
          {subject}
        </p>
        <Button
          onClick={() => window.location.assign(link)}
          className={"max-w-max h-[2.375rem] mt-4 mr-10 justify-center px-3"}
          style={{ backgroundColor: btnColor }}
        >
          <p className={"text-sm"} style={{ color: btnTextColor }}>
            {btnText}
          </p>
          <BackIcon
            width={5.5}
            height={11}
            fill={btnTextColor}
            viewBox="0 0 12 20"
            className={"rotate-180 hidden md:flex mr-4 ml-1"}
          />
        </Button>
      </div>
    </div>
  );
};
