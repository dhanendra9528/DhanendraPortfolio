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
    <footer className="bg-zinc-100 dark:bg-black transition-all duration-300 border-t border-zinc-200 dark:border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}

          <div>
            <h2 className="text-3xl font-bold text-black dark:text-white">
              Dhanendra Rajput
            </h2>

            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-7">
              Passionate Full Stack Developer creating modern,
              responsive and user-friendly web applications
              with React, Node.js and MongoDB.
            </p>
          </div>

          {/* Right */}

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-5">
              Connect With Me
            </h3>

            <div className="flex gap-5">

              {/* Instagram */}

              <a
                href="https://www.instagram.com/mr_dhanendra_9528?igsh=MWg1N2o2NGZwNTB6eQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-white hover:bg-pink-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaInstagram size={22} />
              </a>

              {/* GitHub */}

              <a
                href="https://github.com/dhanendra9528"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-white hover:bg-zinc-700 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaGithub size={22} />
              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/dhanendra-kumar-037048330"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-white hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin size={22} />
              </a>

              {/* Email */}

              <a
                href="mailto:rajputdhanendra620@gmail.com"
                className="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-white hover:bg-red-500 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaEnvelope size={22} />
              </a>

            </div>

            <p className="mt-6 text-zinc-600 dark:text-zinc-400">
              Feel free to reach out for collaborations,
              freelance work or just a friendly chat.
            </p>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-zinc-300 dark:border-zinc-800">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-zinc-600 dark:text-zinc-500 text-center md:text-left">
            © {new Date().getFullYear()} Dhanendra. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-5 py-2 rounded-full transition-all duration-300 hover:scale-105"
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