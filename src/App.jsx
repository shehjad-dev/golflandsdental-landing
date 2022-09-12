import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DetailsSection from "./components/DetailsSection";
import AdvantagesSection from "./components/AdvantagesSection";
import ChooseUsSection from "./components/ChooseUsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import MapsSection from "./components/MapsSection";
import Footer from "./components/Footer";
import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div className="shadow-md">
                <Navbar />
            </div>

            <HeroSection />
            <DetailsSection />
            <AdvantagesSection />
            <ChooseUsSection />
            <TestimonialsSection />
            <MapsSection />
            <Footer />

            <div className="relative container">
                <a className="bg-[#ADE8FA] border-[1.4px] border-[#033B62] fixed bottom-[15px] right-[15px] text-[#033B62] cursor-pointer shadow-2xl shadow-blue-300 p-2 rounded-full z-50">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default App;
