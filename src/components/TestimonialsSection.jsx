import React, { useState, useEffect } from "react";
import { testimonialsData } from "../data/testimonialsData.js";
import GoogleReviewsImg from "../assets/GoogleReviewsImg.svg";

const TestimonialsSection = () => {
    const [testimonialData, setTestimonialData] = useState([]);
    const [activeTestimonial, setActiveTestimonial] = useState({});
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setTestimonialData(testimonialsData);
        setActiveTestimonial(testimonialsData[activeIndex]);
    });

    const rightClick = () => {
        if (activeIndex === 2) {
            setActiveIndex(0);
        } else {
            setActiveIndex(activeIndex + 1);
        }
    };
    const leftClick = () => {
        if (activeIndex === 0) {
            setActiveIndex(2);
        } else {
            setActiveIndex(activeIndex - 1);
        }
    };
    return (
        <div
            className="w-full bg-white bg-cover bg-no-repeat bg-blend-overlay bg-fixed md:pt-16 pt-8 md:pb-14 pb-8  mt-4 flex items-center justify-center scroll-smooth md:scroll-mt-20 scroll-mt-18"
            id="testimonials"
        >
            <div className="container">
                <h3 className="text-center sm:text-3xl text-2xl text-[#033B62] font-bold tracking-wide sm:mb-16 mb-8">
                    Testimonials
                </h3>
                <div className="flex flex-col items-start justify-start bg-[#D2EDFF] md:w-[500px] w-[92%] sm:h-[220px] h-[280px] md:px-6 px-4 md:py-6 py-4 mx-auto rounded-2xl animate-fade-in-down shadow-md">
                    <div className="mb-6 flex flex-row items-center justify-center">
                        <div className="text-[#033B62] bg-[#D2EDFF] w-max p-2 rounded-full  border-[2px] border-[#033B62] flex items-center justify-center mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        </div>
                        <div>
                            <span className="text-[#033B62] font-bold">
                                {testimonialData[activeIndex]?.clientName}
                            </span>
                        </div>
                    </div>
                    <div className="italic bg-[#D2EDFF] text-[#0A629C] font-medium">
                        &quot;{testimonialData[activeIndex]?.reviews}&quot;
                    </div>
                </div>
                <div className="bg-[#0A629C] text-white w-max rounded-l-xl rounded-r-xl mx-auto my-4 border-2 border-[#033B62]">
                    <button className="p-2 border-r-[2px]" onClick={leftClick}>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </a>
                    </button>
                    <button className="p-2" onClick={rightClick}>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </a>
                    </button>
                </div>
                <div className="flex items-center justify-center mt-8 mb-6">
                    <p className="text-[#0A629C] font-medium text-base">
                        Powered by
                    </p>
                    <img
                        src={GoogleReviewsImg}
                        alt="Google Reviews Image"
                        className="sm:w-28 w-20 ml-4"
                    />
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;
