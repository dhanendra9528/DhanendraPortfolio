import React from "react";
import { skillsData } from "../assets/asstes";

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-20 bg-white dark:bg-zinc-950 transition-all duration-300"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

                {/* Heading */}

                <div className="text-center mb-14">

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">

                        <span className="text-teal-600 dark:text-teal-400">
                            Technical
                        </span>{" "}
                        Skills

                    </h2>

                    <p className="mt-5 text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-3xl mx-auto leading-8 transition-colors duration-300">

                        Experienced with the technologies behind modern web
                        applications and scalable digital products.

                    </p>

                </div>

                {/* Skills Grid */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                    {skillsData.map((skill, index) => (

                        <div
                            key={index}
                            className="
                            group
                            bg-white
                            dark:bg-zinc-900
                            border
                            border-gray-200
                            dark:border-zinc-700
                            rounded-2xl
                            p-6
                            shadow-md
                            hover:shadow-2xl
                            hover:-translate-y-2
                            transition-all
                            duration-300
                            flex
                            flex-col
                            "
                        >

                            {/* Icon */}

                            <div
                                className="
                                w-16
                                h-16
                                sm:w-20
                                sm:h-20
                                mx-auto
                                rounded-2xl
                                bg-teal-50
                                dark:bg-zinc-800
                                flex
                                items-center
                                justify-center
                                group-hover:bg-teal-600
                                transition-all
                                duration-300
                                "
                            >

                                <skill.icon
                                    className="
                                    w-8
                                    h-8
                                    sm:w-10
                                    sm:h-10
                                    text-teal-600
                                    dark:text-teal-400
                                    group-hover:text-white
                                    transition-all
                                    duration-300
                                    "
                                />

                            </div>

                            {/* Title */}

                            <h3 className="text-xl font-bold text-center mt-6 text-zinc-800 dark:text-white">

                                {skill.title}

                            </h3>

                            {/* Technologies */}

                            <p className="text-zinc-500 dark:text-zinc-400 text-sm text-center leading-7 mt-4 flex-grow">

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