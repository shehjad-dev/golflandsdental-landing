import React from "react";
import FlashIcon from "../assets/FlashIcon.svg";
import DetailsImage from "../assets/DescriptionImg.svg";

const DetailsSection = () => {
    return (
        <section className="bg-[#033B62]">
            <div className="px-4 pt-12 md:pb-12 pb-0 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 md:scroll-mt-16 scroll-mt-14">
                <div className="flex md:flex-row flex-col-reverse mx-auto max-w-4xl items-center justify-center">
                    <div className="flex flex-col items-start justify-center lg:mt-0 mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 md:mb-0 xl:mt-0">
                        <span className="xl:mb-4 sm:mb-4 mb-4 text-xs font-bold tracking-widest flex sm:items-center items-start justify-center">
                            {" "}
                            <img
                                src={FlashIcon}
                                alt="Teeth Flash Icon"
                                className="text-blue-500 sm:w-10 h-auto mr-2 w-7 sm:mt-0 mt-[5px]"
                            />
                            <p className="text-white sm:text-xl text-base">
                                Best Solutions for Missing teeth
                            </p>
                        </span>

                        <p className="xl:mb-0 sm:mb-[0rem] mb-[0] sm:text-base leading-relaxed text-left text-[#A4DBFF] max-w-sm text-[0.9rem]">
                            Missing a tooth? What better way to replace it than
                            a dental implant. A dental implant is a stable
                            solution whereby a biocompatible component is placed
                            in the jaw bone. A white crown (looks like a natural
                            tooth) is placed on top of this component. The jaw
                            bone naturally fuses with the prosthesis and your
                            tooth is back to new.
                        </p>
                    </div>
                    <div className="lg:max-w-lg md:w-1/2 w-[75%]  rounded-xl sm:ml-8 ml-0">
                        <div className="">
                            <div className="relative w-full max-w-lg mx-auto">
                                <div className="relative">
                                    <img
                                        src={DetailsImage}
                                        alt="Dental Implant Details Image"
                                        className=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailsSection;
