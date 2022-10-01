import React, { useState } from "react";
import axios from "axios";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import heroOptimizedMax from "../assets/heroImg.jpg";

const HeroSection = () => {
    const notyf = new Notyf({
        duration: 2000,
        dismissible: true,
        position: {
            x: "left",
            y: "bottom",
        },
    });

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [forcedTime, setForcedTime] = useState("");

    const handleTimeChange = (currentTime) => {
        var [h, m] = currentTime.split(":");
        const finalTime =
            ((h % 12) + 12 * (h % 12 == 0) + ":" + m,
            h >= 12 ? `${h - 12}:${m} PM` : `${Number(h).toString()}:${m} AM`);
        setForcedTime(currentTime);

        setTime(finalTime);
    };

    const handleSubmit = () => {
        //const phoneReg = /^\d+$/;
        const phoneReg = /^(\+)?(64)?[0-9]+$/;
        const emailReg = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
        console.log(name, phone, email, date, time.toString());

        //notyf.error("We will contact you soon");

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            date === "" ||
            time === ""
        ) {
            notyf.error("Please fill out the form");
            //console.log("Please Fill all the field");
        } else if (!phoneReg.test(phone)) {
            notyf.error("Please input a valid phone no.");
            //console.log("Please enter only numbers as phone");
        } else if (!emailReg.test(email)) {
            notyf.error("Please enter a valid email");
            //console.log("Please enter a valid email");
        } else {
            const data = {
                Name: name.toString(),
                Phone: phone.toString(),
                Email: email.toString(),
                Date: date,
                Time: time,
            };

            axios
                .post(
                    `https://sheetdb.io/api/v1/${API_KEY}
                `,
                    {
                        data,
                    }
                )
                .then((response) => {
                    //console.log(response.data);
                    setName("");
                    setPhone("");
                    setEmail("");
                    setDate("");
                    setTime("");
                    setForcedTime("");
                    notyf.success("We will contact you soon");
                })
                .catch((err) => {
                    //console.log(err);
                    setName("");
                    setPhone("");
                    setEmail("");
                    setDate("");
                    setTime("");
                    setForcedTime("");
                    notyf.error("There was an error!");
                });
        }
    };

    return (
        <div className="" id="top">
            <section className="text-gray-600 body-font relative md:mb-14 scroll-smooth">
                <div className="text-center">
                    <h3 className="block text-center sm:text-2xl text-xl font-bold text-[#033B62] sm:w-[18rem] w-[14rem] mx-auto mb-3 mt-4 leading-6">
                        {/* <h3 className="block text-center sm:text-2xl text-xl font-bold text-[#0A629C] sm:w-[18rem] w-[14rem] mx-auto mb-3 mt-4 leading-6"> */}
                        {/* Please make it “Dental Implant + Crown only at 3900” */}
                        <span className="text-[#033B62]">Dental Implant</span> +{" "}
                        <span className="text-[#033B62]">Crown </span>
                        only at <span className="text-[#033B62]">$3900</span>
                        {/* <span className="text-[#033B62]">Dental Implant</span>{" "}
                        surgery only at{" "}
                        <span className="text-[#033B62]">$3900.</span> */}
                    </h3>
                    <a
                        className="w-fit mx-auto cursor-pointer flex items-center justify-center animate-bounce hover:bg-blue-200 bg-white py-2 px-4 rounded-3xl transition-all ease-in duration-75"
                        href="#form"
                    >
                        <span className="text-[#0A629C] font-medium">
                            Book Free Consultation
                        </span>
                        <span className="text-[#033B62] ml-[0.25rem]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </a>
                </div>
                <div className="container sm:px-5 px-2 md:py-10 py-6 pb-10 mx-auto flex items-center justify-center md:gap-14 gap-0 sm:flex-nowrap flex-wrap">
                    <div className="flex flex-col items-center md:items-start md:justify-start justify-center">
                        <div className="lg:w-64 w-52 relative mt-4 bg-red-500">
                            <div className="lg:w-64 w-52 lg:h-[24rem] h-[18.4rem] bg-[#98C4E2] absolute top-[-1.4rem] left-[1.4rem] z-10"></div>
                            <div className="lg:w-64 w-52 lg:h-[24rem] h-[18.4rem] top-0 left-0 bg-[#0A629C]">
                                <img
                                    src={heroOptimizedMax}
                                    alt="Img of a Dental Patient at Golflands Dental"
                                    className="z-50 relative top-0 left-0 w-full h-full"
                                />
                            </div>
                        </div>

                        <p className="md:text-base text-[0.9rem] text-[#5f6061] sm:mt-3 mt-6 font-medium md:text-left text-center sm:font-semibold sm:max-w-[200px] max-w-[270px]">
                            Please send photos to{" "}
                            <a
                                href="mailto:info@golflandsdental.co.nz"
                                className="text-blue-400"
                            >
                                info@golflandsdental.co.nz
                            </a>{" "}
                            for consulation.
                        </p>
                        {/* <p className="md:text-base text-[0.9rem] text-[#5f6061] sm:mt-3 mt-6 font-medium md:text-left text-center sm:font-semibold">
                            Your deserve the perfect smile.
                        </p> */}
                    </div>
                    <div
                        className="lg:w-1/3 md:w-1/2 bg-[#0A629C] flex flex-col w-full md:py-8 mt-8 md:mt-0 rounded-xl sm:py-8 py-5 sm:px-6 px-4 shadow-lg scroll-mt-5"
                        id="form"
                    >
                        <h3 className="text-white text-xl mb-1 font-bold tracking-wide title-font text-center">
                            Appointment Form
                        </h3>

                        <div className="relative mb-4">
                            <label
                                htmlFor="name"
                                className="leading-7 text-sm text-[#9fd7ff] font-semibold"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-[#d8efff] rounded border border-gray-300 focus:border-[#00AEEF] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-[#033B62] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-[#47B3FF]"
                                placeholder="Enter your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="phone"
                                className="leading-7 text-sm text-[#9fd7ff] font-semibold"
                            >
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full bg-[#d8efff] rounded border border-gray-300 focus:border-[#00AEEF] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-[#033B62] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-[#47B3FF]"
                                placeholder="Enter your Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="email"
                                className="leading-7 text-sm text-[#9fd7ff] font-semibold"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-[#d8efff] rounded border border-gray-300 focus:border-[#00AEEF] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-[#033B62] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-[#47B3FF]"
                                placeholder="Enter your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="relative mb-6 flex xs:flex-row flex-col justify-between gap-4">
                            <div className="xs:w-[55%] w-full">
                                <label
                                    htmlFor="data"
                                    className="leading-7 text-sm text-[#9fd7ff] font-semibold"
                                >
                                    Date
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    className="w-full bg-[#d8efff] rounded border border-gray-300 focus:border-[#00AEEF] focus:ring-2 focus:ring-indigo-200 text-l outline-none text-[#033B62] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-[#47B3FF]"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                            <div className="xs:w-[45%] w-full">
                                <label
                                    htmlFor="data"
                                    className="leading-7 text-sm text-[#9fd7ff] font-semibold"
                                >
                                    Time
                                </label>
                                <input
                                    type="time"
                                    id="time"
                                    name="time"
                                    className="w-full bg-[#d8efff] rounded border border-gray-300 focus:border-[#00AEEF] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-[#033B62] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-[#47B3FF]"
                                    value={forcedTime}
                                    onChange={(e) =>
                                        handleTimeChange(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <button
                            className="block md:px-10 px-6 md:py-4 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-[#033B62] rounded-lg hover:bg-[#0d3856] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 border-white border-2"
                            onClick={() => handleSubmit()}
                        >
                            <a className="flex flex-row justify-center">
                                <span className="pr-2">Book </span>
                                <span className="w-3 h-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                        />
                                    </svg>
                                </span>
                            </a>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
