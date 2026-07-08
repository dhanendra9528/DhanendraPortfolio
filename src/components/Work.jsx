import React from "react";
import { projectData } from "../assets/asstes";
import { FaExternalLinkAlt } from "react-icons/fa";

const Work = () => {
  return (
    <section
      id="work"
      className="min-h-screen py-20 bg-white dark:bg-zinc-950 scroll-mt-24 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white">

            Featured{" "}

            <span className="text-teal-600 dark:text-teal-400">
              Projects
            </span>

          </h2>

          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto transition-colors duration-300">

            Crafting innovative web experiences with the latest technologies.

          </p>

        </div>

        {/* Projects */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {projectData.map((project, index) => (

            <div
              key={index}
              className="
              group
              rounded-2xl
              overflow-hidden
              border
              border-gray-200
              dark:border-zinc-700
              bg-white
              dark:bg-zinc-900
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >

              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />

              </div>

              {/* Content */}

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">

                  {project.title}

                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-7">

                  {project.description}

                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((tech, i) => (

                    <span
                      key={i}
                      className="
                      px-3
                      py-1
                      rounded-full
                      bg-gray-100
                      dark:bg-zinc-800
                      text-zinc-700
                      dark:text-zinc-300
                      text-xs
                      font-semibold
                      "
                    >

                      {tech}

                    </span>

                  ))}

                </div>

                {/* Button */}

                {project.link && (

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    mt-6
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    w-full
                    bg-teal-600
                    hover:bg-teal-700
                    dark:bg-teal-500
                    dark:hover:bg-teal-600
                    text-white
                    rounded-full
                    py-3
                    font-semibold
                    transition-all
                    duration-300
                    hover:scale-105
                    "
                  >

                    Visit Website

                    <FaExternalLinkAlt size={14} />

                  </a>

                )}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Work;