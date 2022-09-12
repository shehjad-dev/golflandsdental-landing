import React from "react";
import FlashIcon from "../assets/FlashIcon.svg";

const MapsSection = () => {
    return (
        <div className="md:px-28 pt-4 sm:pb-6 pb-14  bg-[#D2EDFF] flex items-center justify-center flex-col">
            <div className="text-center md:mt-16 mt-8 scroll-smooth">
                <h3 className="text-center sm:text-3xl text-2xl text-[#033B62] font-bold tracking-wide sm:mb-8 mb-0">
                    Visit Our Office
                </h3>
            </div>
            <section className="text-gray-600 body-font md:mb-14 scroll-smooth flex sm:flex-row flex-col items-center justify-center w-fit">
                <div className="flex flex-col items-start justify-center lg:mt-0 mt-12 sm:mb-16 mb-4 text-left lg:flex-grow lg:w-1/2 md:mb-0 xl:mt-0">
                    <span className="xl:mb-4 sm:mb-4 mb-4 text-xs font-bold tracking-widest flex sm:items-center items-center justify-center">
                        {" "}
                        <img
                            src={FlashIcon}
                            alt="Teeth Flash Icon"
                            className="text-blue-500 sm:w-10 h-auto mr-2 w-7 sm:mt-0 mt-[5px]"
                        />
                        <p className="text-[#0F75BC] sm:text-xl text-base">
                            Opening Hours
                        </p>
                    </span>

                    <p className="xl:mb-0 sm:mb-[0rem] mb-[0] sm:text-base leading-relaxed text-left text-[#0F75BC] text-[0.9rem] w-60 mr-6">
                        Monday to Friday - 9am to 5pm.
                    </p>
                </div>
                <div className="sm:w-full w-[85vw] h-[450px] bg-gray-300 rounded-lg overflow-hidden sm:p-10 p-0 flex items-end justify-start relative border-2 border-[#033B62] border-opacity-100">
                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        title="map"
                        marginHeight="0"
                        marginWidth="0"
                        scrolling="no"
                        /* src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" */
                        /* src="https://maps.google.com/maps?q=eurobath&t=&z=15&ie=UTF8&iwloc=&output=embed" */
                        /* src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=81 Bir Uttam C.R Datta Sarak, Hatirpool, Dhaka-1205&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" */
                        src="https://maps.google.com/maps?q=Golflands%20Dental&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    ></iframe>

                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md w-full">
                        <div className="lg:w-1/2 sm:px-6 px-2">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1 text-[0.9rem]">
                                301E Botany Road, Botany Downs, Auckland 2013,
                                New Zealand
                            </p>
                        </div>
                        <div className="lg:w-1/2 sm:px-6 px-2 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-indigo-500 leading-relaxed text-[0.9rem]">
                                info@golflandsdental.co.nz
                            </a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed text-[0.9rem]">
                                0800 4653 3368
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MapsSection;
