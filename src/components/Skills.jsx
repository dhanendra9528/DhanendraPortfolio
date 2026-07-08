import React from "react";
import { skillsData } from "../assets/asstes";

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

                {/* Heading */}

                <div className="text-center mb-14">

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">

                        <span className="text-teal-600">Technical </span>

                        Skills

                    </h2>

                    <p className="mt-5 text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-8">

                        Experienced with the technologies behind modern web
                        applications and scalable digital products.

                    </p>

                </div>

                {/* Skills Grid */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                    {skillsData.map((skill, index) => (

                        <div
                            key={index}
                            className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                        >

                            {/* Icon */}

                            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-600 transition">

                                <skill.icon className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600 group-hover:text-white transition" />

                            </div>

                            {/* Title */}

                            <h3 className="text-xl font-bold text-center mt-6 text-gray-800">

                                {skill.title}

                            </h3>

                            {/* Technologies */}

                            <p className="text-gray-500 text-sm text-center leading-7 mt-4 flex-grow">

                                {skill.technologies.join(" • ")}

                            </p>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default Skills;