import {
    FaInstagram,
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="bg-zinc-800 text-white">

            <div className="max-w-7xl mx-auto px-6 py-14">

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* Left */}

                    <div>
                        <h2 className="text-3xl font-bold text-white">
                            Dhanendra Rajput
                        </h2>

                        <p className="mt-4 text-gray-400 leading-7">
                            Passionate Full Stack Developer creating modern,
                            responsive and user-friendly web applications
                            with React, Node.js and MongoDB.
                        </p>
                    </div>



                    {/* Right */}

                    <div>

                        <h3 className="text-xl font-semibold mb-5">
                            Connect With Me
                        </h3>

                        <div className="flex gap-5">

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/mr_dhanendra_9528?igsh=MWg1N2o2NGZwNTB6eQ=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-zinc-800 hover:bg-pink-600 flex items-center justify-center transition duration-300"
                            >
                                <FaInstagram size={22} />
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/dhanendra9528"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-zinc-800 hover:bg-gray-700 flex items-center justify-center transition duration-300"
                            >
                                <FaGithub size={22} />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/dhanendra-kumar-037048330"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-zinc-800 hover:bg-blue-600 flex items-center justify-center transition duration-300"
                            >
                                <FaLinkedin size={22} />
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:rajputdhanendra620@gmail.com"
                                className="w-12 h-12 rounded-full bg-zinc-800 hover:bg-red-500 flex items-center justify-center transition duration-300"
                            >
                                <FaEnvelope size={22} />
                            </a>

                        </div>

                        <p className="mt-6 text-gray-400">
                            Feel free to reach out for collaborations,
                            freelance work or just a friendly chat.
                        </p>

                    </div>

                </div>

            </div>

            {/* Bottom */}

            <div className="border-t border-zinc-800">

                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-gray-400 text-center md:text-left">
                        © {new Date().getFullYear()} Dhanendra. All Rights Reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center text-zinc-700 gap-2 bg-white hover:bg-zinc-500 hover:text-white px-4 py-2 rounded-full transition"
                    >
                        <FaArrowUp />
                        Back to Top
                    </button>

                </div>

            </div>

        </footer>
    );
};

export default Footer;