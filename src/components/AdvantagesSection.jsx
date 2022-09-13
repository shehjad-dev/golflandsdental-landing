import React from "react";
import FlashIcon from "../assets/FlashIcon.svg";
import AdvantagesImg from "../assets/advantageImg.svg";

const AdvantagesSection = () => {
    return (
        <section className="bg-white">
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
                            <p className="text-[#033B62] sm:text-xl text-base">
                                Advantages of Dental Implants
                            </p>
                        </span>

                        <div className="xl:mb-0 sm:mb-[0rem] mb-[0] sm:text-base leading-relaxed text-left text-[#A4DBFF] max-w-sm text-[0.9rem]">
                            <ul className="list-disc text-[#0D75BC] list-inside pl-[4px]">
                                <li>Permanent fixed solution.</li>
                                <li>Maintains bone height.</li>
                                <li>
                                    Looks and feels like your natural teeth.
                                </li>
                                <li>
                                    Tooth will not move while you cough or
                                    laugh.
                                </li>
                                <li>
                                    Eating and speaking becomes normal again.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:max-w-lg md:w-1/2 w-[75%]  rounded-xl sm:ml-8 ml-0">
                        <div className="">
                            <div className="relative w-full max-w-lg mx-auto">
                                <div className="relative">
                                    <img
                                        src={AdvantagesImg}
                                        alt="Advantages Image of Dental Implants"
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

export default AdvantagesSection;
