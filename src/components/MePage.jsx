import React from "react";
import { Link } from "react-router-dom";

const MePage = () => {
  return (
    <div className="bg-white min-h-screen text-zinc-900 font-sans selection:bg-zinc-200 relative overflow-hidden">
      {/* Decorative vertical grid lines */}
      <div className="fixed top-0 bottom-0 left-0 right-0 w-full pointer-events-none z-0 flex justify-center">
        <div className="relative w-full max-w-[53rem] h-full">
          <div className="absolute left-0 top-0 h-full w-[1px] bg-zinc-100"></div>
          <div className="absolute right-0 top-0 h-full w-[1px] bg-zinc-100"></div>
        </div>
      </div>

      {/* Modern Glassmorphic Header / Navbar */}
      <header className="fixed top-[10px] md:top-[25px] w-full z-50 flex justify-center p-4">
        <div className="bg-white/80 backdrop-blur-md rounded-[20px] border border-zinc-200/60 shadow-sm transition-all duration-300">
          <nav className="flex items-center gap-1 p-[6px] relative z-10 text-sm">
            <div className="flex items-center">
              <Link
                to="/"
                className="p-[12px] md:p-[15px] hover:px-[20px] text-zinc-600 hover:text-zinc-900 rounded-[15px] hover:bg-zinc-100/50 transition-all duration-300 flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
                <span className="hidden md:inline font-medium">Home</span>
              </Link>
              <div className="h-5 w-[1px] bg-zinc-200 mx-1 md:mx-2"></div>
            </div>

            <div className="flex items-center">
              <a
                href="https://x.com/imam-bello"
                target="_blank"
                rel="noopener noreferrer"
                className="p-[12px] md:p-[15px] hover:px-[20px] text-zinc-600 hover:text-zinc-900 rounded-[15px] hover:bg-zinc-100/50 transition-all duration-300 flex items-center gap-2 font-medium"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="16"
                  width="16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
                <span className="hidden md:inline">Twitter</span>
              </a>
            </div>

            <div className="flex items-center">
              <a
                href="https://github.com/i-m-a-m-"
                target="_blank"
                rel="noopener noreferrer"
                className="p-[12px] md:p-[15px] hover:px-[20px] text-zinc-600 hover:text-zinc-900 rounded-[15px] hover:bg-zinc-100/50 transition-all duration-300 flex items-center gap-2 font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span className="hidden md:inline">Github</span>
              </a>
            </div>

            <div className="flex items-center">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-[12px] md:p-[15px] hover:px-[20px] text-zinc-600 hover:text-zinc-900 rounded-[15px] hover:bg-zinc-100/50 transition-all duration-300 flex items-center gap-2 font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
                <span className="hidden md:inline">Resume</span>
              </a>
            </div>

            <div className="h-5 w-[1px] bg-zinc-200 mx-1 md:mx-2"></div>
            <Link
              to="/blog"
              className="bg-black text-white py-[10px] px-[16px] md:py-[12px] md:px-[20px] rounded-[14px] hover:opacity-90 hover:px-[24px] duration-300 transition-all font-medium"
            >
              <span>Blog</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex flex-col relative items-center mx-auto z-10">
        <div className="w-full max-w-[53rem] p-6 flex flex-col pt-[150px] md:pt-[188px] pb-[4rem] px-[1.5rem] md:px-[8rem] items-start gap-[25px]">
          {/* Circular Avatar */}
          <div className="relative group">
            <img
              alt="Profile picture"
              src="/bime.png"
              className="rounded-full object-cover aspect-square w-24 h-24 border border-zinc-200 shadow-md transform hover:scale-105 transition-all duration-300"
            />
          </div>

          {/* Heading Text */}
          <div className="text-start">
            <h1 className="text-[32px] md:text-[46px] font-extrabold tracking-[-.04em] leading-[110%] text-zinc-950 mb-2 font-display">
              Hey, I'm <span className="text-zinc-800">Bello Imam.</span>
            </h1>
            <h2 className="text-[28px] md:text-[42px] font-bold tracking-[-.03em] leading-[110%] text-zinc-600 mb-6 font-display">
              Full-Stack Developer
            </h2>
            <p className="text-[17px] md:text-[18px] leading-[1.6] text-zinc-600 max-w-[36rem]">
              Creating innovative solutions and captivating designs.
              <br />
              Visionary developer building next-gen multi-platform applications.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MePage;
