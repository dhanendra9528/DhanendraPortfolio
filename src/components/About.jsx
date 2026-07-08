import React from "react";
import { assets, profileData } from "../assets/asstes";
import { FaCode } from "react-icons/fa6";

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* Content */}
                    <div className="order-2 lg:order-1">

                        <h2 className="text-4xl md:text-5xl font-bold mb-5">
                            <span className="text-teal-600">About </span>
                            <span>Me</span>
                        </h2>

                        <p className="text-gray-600 leading-8 mb-4">
                            I'm a frontend developer passionate about building modern,
                            responsive, and engaging web applications. I enjoy turning
                            creative ideas into interactive digital experiences using the
                            latest web technologies.
                        </p>

                        <p className="text-gray-600 leading-8 mb-8">
                            My approach combines clean, efficient code with thoughtful
                            design to create websites that are fast, user-friendly,
                            and visually appealing.
                        </p>

                        {/* Cards */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">

                            {profileData.map((data, index) => (
                                <div
                                    key={index}
                                    className="p-6 border border-zinc-300 rounded-xl hover:border-zinc-700 hover:border-r-4 hover:border-b-4 transition duration-300 hover:-translate-y-1"
                                >
                                    <div className="text-3xl mb-4 text-teal-600" />

                                    <h3 className="text-xl font-bold mb-3">
                                        {data.title}
                                    </h3>

                                    <p className="text-gray-600">
                                        {data.technologies.join(", ")}
                                    </p>
                                </div>
                            ))}

                        </div>

                        <button className="w-full sm:w-auto px-8 py-4 bg-zinc-700 text-white rounded-full hover:bg-zinc-900 transition duration-300">
                            Download Resume
                        </button>

                        {/* Resume Button
                                                <a
                                                    href="/resume.pdf"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 bg-zinc-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-zinc-800 transition"
                                                >
                                                    <FaDownload />
                                                    Resume
                                                </a> */}

                    </div>

                    {/* Image */}

                    <div className="order-1 lg:order-2 flex justify-center">

                        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">

                            <img
                                src={assets.profileImg}
                                alt="Profile"
                                className="w-full rounded-2xl object-cover shadow-xl"
                            />

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;