import React from "react";
import beforeTreatment from "../assets/testBefore.png";
import afterTreatment from "../assets/after.png";

const BeforeAfterSection = () => {
    return (
        <section className="bg-[#D2EDFF] sm:pb-6 pb-6">
            <div className="px-4 pt-12 md:pb-12 pb-0 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 md:scroll-mt-16 scroll-mt-14 flex items-center flex-col">
                <h3 className="text-center sm:text-3xl text-2xl text-[#033B62] font-bold tracking-wide">
                    Our Results
                </h3>
                <div className="flex sm:flex-row flex-col w-full sm:mt-16 mt-10 sm:mb-0 mb-6 sm:p-0 p-4 items-center justify-center gap-4">
                    <div className="">
                        <div className="w-[250px] h-[320px] bg-[#74ACD0] backdrop-blur-lg bg-opacity-80 rounded-xl p-3 relative">
                            <div className="w-full h-full rounded-xl bg-[#0F75BC] absolute top-0 left-0 opacity-20"></div>
                            <img
                                src={beforeTreatment}
                                alt="Golflands Dental Patient Image before Dental Implant"
                                className="w-full h-full rounded-xl"
                            />
                        </div>
                        <p className="text-[#0F75BC] text-center font-medium sm:text-lg text-base mt-2">
                            Before
                        </p>
                    </div>
                    <div className="text-[#0F75BC] sm:mx-4 mx-0 sm:my-0 my-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 sm:rotate-0 rotate-90"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                            />
                        </svg>
                    </div>
                    <div className="">
                        <div className="w-[250px] h-[320px] bg-[#74ACD0] backdrop-blur-lg bg-opacity-80 rounded-xl p-3 relative">
                            <div className="w-full h-full rounded-xl bg-[#0F75BC] absolute top-0 left-0 opacity-20"></div>
                            <img
                                src={afterTreatment}
                                alt="Golflands Dental Patient Image before Dental Implant"
                                className="w-full h-full rounded-xl"
                            />
                        </div>
                        <p className="text-[#0F75BC] text-center font-medium sm:text-lg text-base mt-2">
                            After
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfterSection;
