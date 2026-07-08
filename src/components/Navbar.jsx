import { useContext, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaDownload, FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, setTheme } = useContext(ThemeContext);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        setMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white dark:bg-zinc-950 text-black dark:text-white shadow-md dark:shadow-zinc-800 transition-all duration-300 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1
                    onClick={() => scrollToSection("home")}
                    className="text-2xl font-bold text-teal-600 cursor-pointer"
                >
                    <span className="text-black dark:text-white">THE-</span>
                    DHANENDRA
                </h1>

                {/* Right Side */}
                <div className="hidden md:flex items-center gap-8">

                    {/* Desktop Menu */}
                    <ul className="flex gap-8 font-medium">

                        <li
                            onClick={() => scrollToSection("home")}
                            className="cursor-pointer hover:text-teal-600 transition"
                        >
                            Home
                        </li>

                        <li
                            onClick={() => scrollToSection("work")}
                            className="cursor-pointer hover:text-teal-600 transition"
                        >
                            Projects
                        </li>

                        <li
                            onClick={() => scrollToSection("skills")}
                            className="cursor-pointer hover:text-teal-600 transition"
                        >
                            Skills
                        </li>

                        <li
                            onClick={() => scrollToSection("about")}
                            className="cursor-pointer hover:text-teal-600 transition"
                        >
                            About
                        </li>

                        <li
                            onClick={() => scrollToSection("contact")}
                            className="cursor-pointer hover:text-teal-600 transition"
                        >
                            Contact
                        </li>

                    </ul>

                    <button
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-100 dark:bg-zinc-800 hover:scale-110 transition-all duration-300"
                    >
                        {theme === "light" ? (
                            <FaMoon className="text-lg" />
                        ) : (
                            <FaSun className="text-yellow-400 text-lg" />
                        )}
                    </button>
                    {/* Resume Button */}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white dark:bg-teal-500 dark:hover:bg-teal-600 px-5 py-2 rounded-full font-semibold hover:bg-zinc-800 transition"
                    >
                        <FaDownload />
                        Resume
                    </a>

                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-3xl"
                >
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white dark:bg-zinc-950 text-black dark:text-white shadow-lg transition-all duration-300">

                    <ul className="flex flex-col items-center gap-5 py-6 font-medium">

                        <li
                            onClick={() => scrollToSection("home")}
                            className="cursor-pointer hover:text-teal-600"
                        >
                            Home
                        </li>

                        <li
                            onClick={() => scrollToSection("work")}
                            className="cursor-pointer hover:text-teal-600"
                        >
                            Projects
                        </li>

                        <li
                            onClick={() => scrollToSection("skills")}
                            className="cursor-pointer hover:text-teal-600"
                        >
                            Skills
                        </li>

                        <li
                            onClick={() => scrollToSection("about")}
                            className="cursor-pointer hover:text-teal-600"
                        >
                            About
                        </li>

                        <li
                            onClick={() => scrollToSection("contact")}
                            className="cursor-pointer hover:text-teal-600"
                        >
                            Contact
                        </li>
                        <button
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                            className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-100 dark:bg-zinc-800"
                        >
                            {theme === "light" ? (
                                <FaMoon />
                            ) : (
                                <FaSun className="text-yellow-400" />
                            )}
                        </button>

                        {/* Resume Button */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white dark:bg-teal-500 dark:hover:bg-teal-600 px-6 py-2 rounded-full font-semibold hover:bg-zinc-800 transition"
                        >
                            <FaDownload />
                            Resume
                        </a>

                    </ul>

                </div>
            )}
        </nav>
    );
};

export default Navbar;