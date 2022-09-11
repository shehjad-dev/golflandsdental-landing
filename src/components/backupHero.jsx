import React from "react";
import heroImg from "../assets/heroImg.jpg";

const HeroSection = () => {
    return (
        <div className="bg-red-300 container ">
            <div className="flex flex-row mx-auto items-center bg-yellow-500 justify-center">
                <div className="w-96">
                    <img src={heroImg} alt="" />
                </div>
                <div className="bg-orange-500">
                    <form className="bg-white">
                        <h3 className="text-center text-xl font-bold text-white">
                            Appointment Form
                        </h3>
                        <div class="mb-4">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="name"
                            >
                                Name
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                            />
                        </div>
                        {/* <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="password"
                            >
                                Password
                            </label>
                            <input
                                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******************"
                            />
                            <p class="text-red-500 text-xs italic">
                                Please choose a password.
                            </p>
                        </div> */}
                        <div class="flex items-center justify-between">
                            <button
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Sign In
                            </button>
                            <a
                                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                                href="#"
                            >
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
