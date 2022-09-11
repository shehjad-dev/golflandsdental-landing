import React, { useState } from "react";
import heroOptimized from "../assets/heroOptimized.webp";

const HeroSection = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = () => {
        console.log(formData);
        console.log(name);
        console.log(phone);
        console.log(email);
        console.log(date);
        console.log(time);
    };

    return (
        <div className="" id="top">
            <section className="text-gray-600 body-font relative md:mb-14 scroll-smooth">
                <div className="container sm:px-5 px-2 md:py-10 py-6 pb-10 mx-auto flex items-center justify-center md:gap-14 gap-0 sm:flex-nowrap flex-wrap">
                    <div className="flex flex-col items-center md:items-start md:justify-start justify-center">
                        <div className="lg:w-64 w-52 relative mt-4">
                            <div className="lg:w-64 w-52 lg:h-[24rem] h-[18.4rem] bg-[#98C4E2] absolute top-[-1.4rem] left-[1.4rem] z-10"></div>
                            <div>
                                <img
                                    src={heroOptimized}
                                    alt=""
                                    className="z-50 relative top-0 left-0 w-full h-auto"
                                />
                            </div>
                        </div>

                        <p className="md:text-base text-[#656668] mt-3 font-semibold md:text-left text-center">
                            Your teeths deserve the perfect smile.
                        </p>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-[#0A629C] flex flex-col w-full md:py-8 mt-8 md:mt-0 rounded-xl sm:py-8 py-5 sm:px-6 px-4 shadow-lg">
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
                                    onChange={(e) => setTime(e.target.value)}
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
