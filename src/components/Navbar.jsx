import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
    return (
        <>
            <div className="scroll-smooth container mx-auto">
                <nav className="bg-white px-2 sm:px-4 py-2.5 w-full z-30">
                    {/* <nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-30 top-0 left-0 shadow-md"> */}
                    <div className="container flex flex-wrap justify-between items-center mx-auto">
                        <a
                            href="/"
                            className="flex items-center lg:w-40 w-32 lg:pl-10 xl:pl-0 pl-0"
                        >
                            <img
                                src={Logo}
                                alt="Golflands Dental- Logo"
                                className="w-full h-full"
                            />
                        </a>
                        <div className="flex md:order-2"></div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;

{
    /* <div className="border-b-2 border-blue-600 py-5 container mx-auto">
            <div className="w-48">
                <a href="/">
                    <img
                        src={Logo}
                        alt="Golflands Dental- Logo"
                        className="w-full h-full"
                    />
                </a>
            </div>
        </div> */
}
