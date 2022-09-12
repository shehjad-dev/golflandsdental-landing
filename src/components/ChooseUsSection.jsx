import React from "react";
import CircleTeethIcon from "../assets/CircleTeethIcon.svg";

const ChooseUsSection = () => {
    return (
        <section className="bg-[#033B62] sm:pb-6 pb-6">
            <div className="px-4 pt-12 md:pb-12 pb-0 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 md:scroll-mt-16 scroll-mt-14 flex items-center flex-col">
                <h3 className="text-center sm:text-3xl text-2xl text-white font-bold tracking-wide">
                    Why Choose Us?
                </h3>
                <div className="flex flex-col w-full sm:mt-16 mt-10 sm:p-0 p-4">
                    <div className="flex flex-col sm:flex-row justify-around sm:mb-8 mb-0">
                        <div className="flex flex-row items-center sm:mb-0 mb-4">
                            <span className="mr-2">
                                <img
                                    src={CircleTeethIcon}
                                    alt="Circular Teeth Icon"
                                />
                            </span>
                            <p className="sm:w-80 w-full text-[#A4DBFF] lg:text-lg text-[0.9rem]">
                                Cone Beam CT Imaging for Precise Implant
                                Placement.
                            </p>
                        </div>
                        <div className="flex flex-row items-center sm:mb-0 mb-4">
                            <span className="mr-2">
                                <img
                                    src={CircleTeethIcon}
                                    alt="Circular Teeth Icon"
                                />
                            </span>
                            <p className="sm:w-80 w-full text-[#A4DBFF] lg:text-lg text-[0.9rem]">
                                Pain free and done under local anesthetic.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-around">
                        <div className="flex flex-row items-center sm:mb-0 mb-4">
                            <span className="mr-2">
                                <img
                                    src={CircleTeethIcon}
                                    alt="Circular Teeth Icon"
                                />
                            </span>
                            <p className="sm:w-80 w-full text-[#A4DBFF] lg:text-lg text-[0.9rem]">
                                The implant has a lifetime guarantee.
                            </p>
                        </div>
                        <div className="flex flex-row items-center sm:mb-0 mb-4">
                            <span className="mr-2">
                                <img
                                    src={CircleTeethIcon}
                                    alt="Circular Teeth Icon"
                                />
                            </span>
                            <p className="sm:w-80 w-full text-[#A4DBFF] lg:text-lg text-[0.9rem]">
                                Customer friendly environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUsSection;
