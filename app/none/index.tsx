import {
  IImages,
  SlideItem,
} from "@components/siteUi/SlideShow/components/SlideItem";
import React, { VFC } from "react";

// import Swiper core and required modules
import { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowDimensions from "@hook/useWindowDimentions";

export interface ISlideShow {
  backgroundColor: string;
  slideshowHeight: "60vh" | "70vh" | "80vh" | "calc(100vh - 95px)";
  imageHeight: "cover" | "contain";
  slideshowSpeed: "7000" | "5000" | "3000" | "2000";
  autoScroll: "true" | "false";
  // images: IImages[];
  smallSlideshowImages: IImages[];
  slideshowImages: IImages[];
  refContainer?: React.Ref<HTMLDivElement>;
  className?: string;
  buttonColor: string;
  textColor: string;
  textButtonColor: string;
}

/**
 * create the slideshow of site.
 * @param {"60vh" | "70vh" | "80vh" | "calc(100vh - 95px)"} slideshowHeight:  is the height  of slideshow container
 * @param {"cover" | "contain"} imageHeight: determine the background image cover and content
 * @param {"7000" | "5000" | "3000" | "2000"} slideshowSpeed: determine the speed of autoplay
 * @param {"true" | "false"} autoScroll : is to set slideshow autoplay on or off.
 * @param {string} backgroundColor: is the background color of slideshow container
 * @param { IImages[]} images : is an array of images objects from slideItem
 * @param { React.Ref<HTMLDivElement>} refContainer
 * @param {string} className
 * @return {JSX.Element}
 * @author Reihaneh Rahmanipour <r.rahmanipour@gmail.com>
 */
export const SlideShow: VFC<ISlideShow> = ({
  slideshowHeight,
  imageHeight,
  slideshowSpeed,
  autoScroll,
  backgroundColor,
  slideshowImages = [],
  smallSlideshowImages,
  refContainer,
  className = "",
  buttonColor,
  textColor,
  textButtonColor,
}) => {
  //install swiper modules conditionally.
  // {
  //   autoScroll
  //     ? SwiperCore.use([Autoplay, Navigation])
  //     : SwiperCore.use([Navigation]);
  // }
  const { width } = useWindowDimensions();
  //get and display separate images on desktop and mobile, but if admin did not upload slide pictures for mobile displaying website images in the phone size.
  const Images =
    width < 768 && smallSlideshowImages.length > 0
      ? smallSlideshowImages
      : slideshowImages;
  if (Images.length === 0) {
    return null;
  }
  return (
    <>
      <div
        className={`flex items-center justify-center w-full ${className}`}
        style={{
          backgroundColor: backgroundColor,
          height: slideshowHeight,
        }}
        ref={refContainer}
      >
        <Swiper
          dir={"rtl"}
          navigation={true}
          centeredSlides={true}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: parseInt(slideshowSpeed),
            disableOnInteraction: true,
          }}
          slidesPerView={1}
          className={"swiper slideshow"}
        >
          {Images.map((item, index) => {
            return (
              <SwiperSlide
                key={"slideshow" + index}
                className={
                  "px-6 py-8 md:p-8 lg:px-[5.125rem] lg:py-[3.75rem] xl:px-[6.25rem]"
                }
              >
                <SlideItem
                  url={item?.url}
                  subject={item?.subject}
                  subjectColor={textColor}
                  btnText={item?.btnText}
                  btnColor={buttonColor}
                  imageHeight={imageHeight}
                  textAlign={item?.textAlign}
                  link={item?.link}
                  btnTextColor={textButtonColor}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <style jsx global>{`
          .slideshow > .swiper-button-prev {
            margin-right: 25px;
          }
          .slideshow > .swiper-button-next {
            margin-left: 25px;
          }
          @media screen and (min-width: 768px) {
            .slideshow > .swiper-button-prev {
              margin-right: 35px;
            }
            .slideshow > .swiper-button-next {
              margin-left: 35px;
            }
          }
          @media screen and (min-width: 1024px) {
            .slideshow > .swiper-button-prev {
              margin-right: 95px;
            }
            .slideshow > .swiper-button-next {
              margin-left: 95px;
            }
          }
          @media screen and (min-width: 1280px) {
            .slideshow > .swiper-button-prev {
              margin-right: 105px;
            }
            .slideshow > .swiper-button-next {
              margin-left: 105px;
            }
          }
        `}</style>
      </div>
    </>
  );
};
