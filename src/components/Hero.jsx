import React from "react";
import { FaArrowRight } from "react-icons/fa";
import profileImg from "../assets/profile2.jpeg";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center pt-20 bg-white dark:bg-zinc-950 transition-all duration-300"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12 lg:py-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Side */}
                    <div className="text-center lg:text-left order-2 lg:order-1">

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-black dark:text-white transition-colors duration-300">
                            <span className="text-teal-600 dark:text-teal-400">
                                FullStack Developer
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-zinc-700 dark:text-zinc-300 mb-8 max-w-xl mx-auto lg:mx-0 transition-colors duration-300">
                            I design and develop modern, responsive, and immersive
                            web applications that combine creativity, performance,
                            and the latest technologies to deliver exceptional
                            digital experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">

                            <button
                                onClick={() => {
                                    document.getElementById("work")?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                                }}
                                className="flex items-center gap-2 px-8 py-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300 shadow-xl hover:scale-105 w-full sm:w-auto justify-center"
                            >
                                View My Work
                                <FaArrowRight />
                            </button>

                        </div>

                    </div>

                    {/* Right Side Image */}

                    <div className="flex justify-center order-1 lg:order-2">

                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]">

                            <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-slate-300 dark:border-zinc-700 shadow-2xl transition-all duration-300">

                                <img
                                    src={profileImg}
                                    alt="profile"
                                    className="w-full h-full object-cover"
                                />

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;