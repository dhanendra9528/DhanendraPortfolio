import React from "react";
import { assets, profileData } from "../assets/asstes";

const About = () => {
    return (
        <section
            id="about"
            className="py-20 bg-white dark:bg-zinc-950 transition-all duration-300"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* Content */}
                    <div className="order-2 lg:order-1">

                        <h2 className="text-4xl md:text-5xl font-bold mb-5 text-black dark:text-white">
                            <span className="text-teal-600 dark:text-teal-400">
                                About
                            </span>{" "}
                            Me
                        </h2>

                        <p className="text-zinc-700 dark:text-zinc-300 leading-8 mb-4 transition-colors duration-300">
                            I'm a frontend developer passionate about building
                            modern, responsive, and engaging web applications.
                            I enjoy turning creative ideas into interactive
                            digital experiences using the latest web
                            technologies.
                        </p>

                        <p className="text-zinc-700 dark:text-zinc-300 leading-8 mb-8 transition-colors duration-300">
                            My approach combines clean, efficient code with
                            thoughtful design to create websites that are fast,
                            user-friendly, and visually appealing.
                        </p>

                        {/* Cards */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">

                            {profileData.map((data, index) => (
                                <div
                                    key={index}
                                    className="
                                    p-6
                                    rounded-xl
                                    border
                                    border-zinc-300
                                    dark:border-zinc-700
                                    bg-white
                                    dark:bg-zinc-900
                                    hover:border-teal-500
                                    hover:-translate-y-2
                                    hover:shadow-xl
                                    transition-all
                                    duration-300
                                    "
                                >

                                    <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                                        {data.title}
                                    </h3>

                                    <p className="text-zinc-600 dark:text-zinc-400">
                                        {data.technologies.join(", ")}
                                    </p>

                                </div>
                            ))}

                        </div>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            inline-flex
                            items-center
                            justify-center
                            px-8
                            py-4
                            rounded-full
                            bg-teal-600
                            hover:bg-teal-700
                            dark:bg-teal-500
                            dark:hover:bg-teal-600
                            text-white
                            font-semibold
                            transition-all
                            duration-300
                            hover:scale-105
                            "
                        >
                            Download Resume
                        </a>

                    </div>

                    {/* Image */}

                    <div className="order-1 lg:order-2 flex justify-center">

                        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">

                            <img
                                src={assets.profileImg}
                                alt="Profile"
                                className="
                                w-full
                                rounded-2xl
                                object-cover
                                shadow-2xl
                                border
                                border-zinc-300
                                dark:border-zinc-700
                                transition-all
                                duration-300
                                "
                            />

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;