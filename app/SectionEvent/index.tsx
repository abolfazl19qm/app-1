"use client"
import React, {useState, useEffect} from 'react';
import {VFC} from "react";
import Image from "next/image";

export interface ISectionEvent {
    eventTitle: string;
    timerTitle: string;
    btnText: string;
    btnColor: string;
    image: string[];
    bgColor: string;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

/**
 * Create a responsive section consisting of text at the left and Three images at the right.
 * @param {string} eventTitle : The title of Event
 * @param {string} timerTitle : The title of Timer
 * @param {string[]} image : The image
 * @param {string} bgColor : To change background color
 * @return {JSX.Element}
 * @author Abolfazl Mehdizade <Abolfazl19qm@gmail.com>
 */

export const SectionEvent: VFC<ISectionEvent> = ({
                                                     timerTitle = "",
                                                     image = [],
                                                     eventTitle = "",
                                                     btnText = "",
                                                     btnColor = "",
                                                     days = 0,
                                                     hours = 0,
                                                     minutes = 0,
                                                     seconds = 0
                                                 }) => {
    // Hook for time(D-H-M-S)
    const [time, setTime] = useState({days, hours, minutes, seconds});
    // Hook for hide Section
    const [display, setDisplay] = useState("hidden");

    useEffect(() => {
        let interval = setInterval(() => {
            setDisplay("");
            // Condition for Hide section
            if (time.days === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
                clearInterval(interval);
                setDisplay("hidden");
            } else {
                if (time.seconds > 0) {
                    setTime(prevTime => ({...prevTime, seconds: prevTime.seconds - 1}));
                } else {
                    if (time.minutes > 0) {
                        setTime(prevTime => ({
                            ...prevTime,
                            minutes: prevTime.minutes - 1,
                            seconds: 59
                        }));
                    } else {
                        if (time.hours > 0) {
                            setTime(prevTime => ({
                                ...prevTime,
                                hours: prevTime.hours - 1,
                                minutes: 59,
                                seconds: 59
                            }));
                        } else {
                            setTime(prevTime => ({
                                ...prevTime,
                                days: prevTime.days - 1,
                                hours: 23,
                                minutes: 59,
                                seconds: 59
                            }));
                        }
                    }
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);
    return (
        <section
            className={`w-[90%] ${display} md:p-10 overflow-hidden mt-[400px] relative   md:mt-5 lg:w-[75%] mx-auto h-[900px] md:h-[625px] border-[#CA8F65]  bg-[#2A2A2A] border-2`}>
            <div className={"absolute right-0  bottom-0"}><Image className={"w-96 md:w-[620px]"}
                                                                 src={image[0]}
                                                                 alt="Drink"/></div>
            <div className={"md:w-[60%] absolute  w-full mt-5 float-left"}>
                <div className={"h-[30%]  flex items-center justify-center"}>
                    <h3 className={"text-center w-72 text-[#CA8F65] font-medium mt-5 text-4xl"}>{eventTitle}</h3>
                </div>
                <div className={"w-full mt-10 text-zinc-500 h-[40%]"}>
                    <p dir={"rtl"} className={"text-center md:text-2xl text-xl  text-zinc-100"}>{timerTitle}</p>
                    <div className={"mt-10"}>
                        <ul className={"grid gap-5 grid-cols-4"}>
                            <li className={" col-span-4 md:col-span-1 flex flex-col items-center"}><p
                                className={"text-5xl text-[#CA8F65]"}>{time.days}</p><p
                                className={"mt-5 text-zinc-200 font-medium text-xl"}>روز</p></li>
                            <li className={" col-span-4 md:col-span-1 flex flex-col items-center"}><p
                                className={"text-5xl text-[#CA8F65]"}>{time.hours}</p><p
                                className={"mt-5 text-zinc-200 font-medium text-xl"}>ساعت</p></li>
                            <li className={" col-span-4 md:col-span-1 flex flex-col items-center"}><p
                                className={"text-5xl text-[#CA8F65]"}>{time.minutes}</p><p
                                className={"mt-5 text-zinc-200 font-medium text-xl"}>دقیقه</p></li>
                            <li className={" col-span-4 md:col-span-1 flex flex-col items-center"}><p
                                className={"text-5xl text-[#CA8F65]"}>{time.seconds}</p><p
                                className={"mt-5 text-zinc-200 font-medium text-xl"}>ثانیه</p></li>
                        </ul>
                    </div>
                    <div className={"flex justify-center items-center h-[20%]"}>
                        <button
                            style={{color: btnColor}}
                            className={`w-[150px] h-[54px] text-black font-medium text-xl hover:bg-amber-100 mt-20`}>{btnText}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
