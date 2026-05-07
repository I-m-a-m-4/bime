import React from "react";
import { Link } from "react-router-dom";
import { projects, experiences } from "../constants";

const MePage = () => {

  return (
    <div className="bg-white min-h-screen text-zinc-900 font-sans selection:bg-zinc-200 relative overflow-x-hidden">
      {/* CSS Keyframes for infinite scrolling marquees */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .pixel-text {
          font-family: 'Geist Mono', monospace;
          background-image: linear-gradient(rgba(24, 24, 27, 0.85) 50%, transparent 50%), linear-gradient(90deg, rgba(24, 24, 27, 0.85) 50%, transparent 50%);
          background-size: 4px 4px;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Decorative vertical grid lines */}
      <div className="fixed top-0 bottom-0 left-0 right-0 w-full pointer-events-none z-0 flex justify-center">
        <div className="relative w-full max-w-[53rem] h-full">
          <div className="absolute left-0 top-0 h-full w-[1px] bg-zinc-100"></div>
          <div className="absolute right-0 top-0 h-full w-[1px] bg-zinc-100"></div>
        </div>
      </div>

      {/* Glassmorphic Navbar */}
      <header className="fixed top-[10px] md:top-[25px] w-full z-50 flex justify-center p-4">
        <div className="bg-[#ffffff80] backdrop-blur-md rounded-[20px] border border-zinc-200/60 shadow-sm">
          <nav className="flex items-center gap-1 p-[6px] text-sm">
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

      {/* Main Container */}
      <main className="flex flex-col relative items-center mx-auto z-10">
        {/* Hero Section */}
        <div className="w-full max-w-[53rem] p-6 flex flex-col pt-[150px] md:pt-[188px] pb-[2rem] px-[1.5rem] md:px-[8rem] items-start gap-[25px]">
          <div className="relative group">
            <img
              alt="Profile picture"
              src="/bime.png"
              className="rounded-full object-cover aspect-square w-24 h-24 border border-zinc-200 shadow-md transform hover:scale-105 transition-all duration-300"
            />
          </div>

          <div className="text-start">
            <h1 className="text-[32px] md:text-[46px] font-extrabold tracking-[-.04em] leading-[110%] text-zinc-950 mb-2 font-display">
              Hey, I'm <span className="text-zinc-800 font-black">Bello Imam.</span>
            </h1>
            <h2 className="text-[28px] md:text-[42px] font-bold tracking-[-.03em] leading-[110%] text-zinc-600 mb-6 font-display">
              Full-Stack Developer
            </h2>
            <p className="text-[17px] md:text-[18px] leading-[1.6] text-zinc-500 max-w-[36rem]">
              Creating innovative solutions and captivating designs.
              <br />
              Visionary developer building next-gen multi-platform applications.
            </p>
          </div>
        </div>

        {/* Project Infinite Marquee */}
        <div className="w-full overflow-hidden border-y border-zinc-100 py-4 my-8 bg-zinc-50/50">
          <div className="animate-scroll gap-6 px-4">
            {/* First Set of Projects */}
            {projects.map((proj, idx) => (
              <div
                key={`p1-${idx}`}
                className="flex min-w-[300px] md:min-w-[400px] rounded-[20px] overflow-hidden border border-zinc-200 bg-white relative transition-all hover:scale-[1.02] cursor-pointer shadow-sm p-4 md:p-6"
                onClick={() => proj.source_code_link && window.open(proj.source_code_link, "_blank")}
              >
                <div className="w-full h-[200px] md:h-[250px] rounded-[10px] overflow-hidden relative">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-[10px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/30 z-10"></div>
                  <div className="absolute bottom-4 left-4 z-20 text-white font-bold drop-shadow-md">
                    {proj.name}
                  </div>
                  {/* Decorative Rivets */}
                  <div className="absolute w-2 h-2 top-3 left-3 rounded-full bg-zinc-300/80 z-20 shadow-inner"></div>
                  <div className="absolute w-2 h-2 bottom-3 left-3 rounded-full bg-zinc-300/80 z-20 shadow-inner"></div>
                  <div className="absolute w-2 h-2 top-3 right-3 rounded-full bg-zinc-300/80 z-20 shadow-inner"></div>
                  <div className="absolute w-2 h-2 bottom-3 right-3 rounded-full bg-zinc-300/80 z-20 shadow-inner"></div>
                </div>
              </div>
            ))}
            {/* Duplicate Set for Seamless Loop */}
            {projects.map((proj, idx) => (
              <div
                key={`p2-${idx}`}
                className="flex min-w-[300px] md:min-w-[400px] rounded-[20px] overflow-hidden border border-zinc-200 bg-white relative transition-all hover:scale-[1.02] cursor-pointer shadow-sm p-4 md:p-6"
                onClick={() => proj.source_code_link && window.open(proj.source_code_link, "_blank")}
              >
                <div className="w-full h-[200px] md:h-[250px] rounded-[10px] overflow-hidden relative">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-[10px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/30 z-10"></div>
                  <div className="absolute bottom-4 left-4 z-20 text-white font-bold drop-shadow-md">
                    {proj.name}
                  </div>
                  {/* Decorative Rivets */}
                  <div className="absolute w-2 h-2 top-3 left-3 rounded-full bg-zinc-300/80 z-20 shadow-inner"></div>
                  <div className="absolute w-2 h-2 bottom-3 left-3 rounded-full bg-zinc-300/80 z-20 shadow-inner"></div>
                  <div className="absolute w-2 h-2 top-3 right-3 rounded-full bg-zinc-300/80 z-20 shadow-inner"></div>
                  <div className="absolute w-2 h-2 bottom-3 right-3 rounded-full bg-zinc-300/80 z-20 shadow-inner"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="w-full max-w-[53rem] p-6 flex flex-col py-[40px] px-[1.5rem] md:px-[8rem] items-start gap-[25px]">
          <h2 className="text-[25px] md:text-[32px] font-bold tracking-[-.03em] leading-[110%] text-zinc-900 border-b-2 border-zinc-100 pb-2 w-full">
            About Me
          </h2>
          <div className="flex flex-col gap-6 text-[16px] leading-[1.6] text-zinc-600">
            <p>
              I specialize in crafting high-performance, robust, and scalable systems with captivating designs and exceptional user experiences.
            </p>
            <p>
              With multiple years of active engineering experience, my background spans advanced multi-platform application design, web architectures, and high-performance offline synchronization systems.
            </p>
            <p>
              As the lead software architect behind modern cloud systems and local-first commercial synchronization layers, I focus on removing complexities and engineering reliable, distributed, and fast software.
            </p>

            {/* Rotating Photo Stack Frame */}
            <div className="relative w-full h-[280px] mt-8 group flex justify-center items-center">
              <div className="absolute left-[15%] md:left-[25%] bg-white p-2 -rotate-12 shadow-lg rounded-lg border border-zinc-100 overflow-hidden transition-all duration-500 group-hover:-rotate-6 group-hover:-translate-x-4 group-hover:scale-105">
                <div className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] bg-zinc-50 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    alt="Bime Logo"
                    src="/bime.png"
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="text-[11px] flex justify-center py-1 italic text-zinc-400 w-full text-center">
                  @bime_dev
                </span>
              </div>
              <div className="absolute right-[15%] md:right-[25%] bg-white p-2 rotate-12 shadow-lg rounded-lg border border-zinc-100 overflow-hidden transition-all duration-500 group-hover:rotate-6 group-hover:translate-x-4 group-hover:scale-105">
                <div className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] bg-zinc-50 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    alt="Bello Avatar"
                    src="/bime.png"
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="text-[11px] flex justify-center py-1 italic text-zinc-400 w-full text-center">
                  @imam-bello
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Here's What I've Been Up To Section */}
        <div className="w-full max-w-[53rem] p-6 flex flex-col py-[50px] px-[1.5rem] md:px-[2rem] items-center gap-[30px]">
          {/* Centered Tech Icons above Heading */}
          <div className="flex items-center justify-center gap-6 opacity-30 grayscale">
            <svg className="w-7 h-7 text-zinc-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
            <svg className="w-7 h-7 text-zinc-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c5.522 0 10 4.477 10 10s-4.478 10-10 10S2 17.523 2 12 6.478 2 12 2zm-1 6H9v8h2V8zm4 0h-2v8h2V8z"/>
            </svg>
            <svg className="w-7 h-7 text-zinc-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9zm1 14h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          </div>

          <h2 className="text-[28px] md:text-[36px] font-bold tracking-[-.03em] leading-[110%] text-zinc-900 text-center font-display">
            Here's What I've Been Up To.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-6">
            {projects.slice(0, 4).map((proj, idx) => (
              <div
                key={idx}
                className="bg-white border border-zinc-200/80 rounded-[32px] p-6 flex flex-col justify-between hover:shadow-md hover:border-zinc-300 transition-all duration-300 w-full"
              >
                <div>
                  {/* Image container with rounded corners and border */}
                  <div className="w-full h-[200px] rounded-[24px] overflow-hidden mb-5 border border-zinc-100 bg-zinc-50">
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-zinc-900 text-[22px] font-bold tracking-tight mb-2 font-display text-left">
                    {proj.name}
                  </h3>
                  <p className="text-zinc-500 text-[14px] leading-relaxed mb-6 text-left">
                    {proj.description}
                  </p>
                </div>

                {/* View Project Button */}
                <button
                  onClick={() => proj.source_code_link && window.open(proj.source_code_link, "_blank")}
                  className="bg-[#f4f4f5] hover:bg-zinc-200/80 text-zinc-800 font-semibold py-3 px-5 rounded-[16px] text-[14px] flex items-center gap-1.5 self-start transition-all duration-200"
                >
                  <span>View Project</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 mt-0.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Centered View All Button */}
          <div className="flex justify-center w-full mt-10 mb-12">
            <button
              onClick={() => window.open("https://github.com/imam-bello", "_blank")}
              className="bg-black hover:bg-zinc-800 text-white font-semibold py-3.5 px-7 rounded-full text-[14px] flex items-center gap-1.5 shadow-md transition-all duration-200"
            >
              <span>View All</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Giant Custom BIME Pixel Ticker Section */}
        <div className="w-full flex justify-center py-6 overflow-hidden select-none">
          <span className="pixel-text text-[100px] sm:text-[140px] md:text-[200px] font-black tracking-tighter leading-none text-zinc-900 select-none uppercase">
            BIME
          </span>
        </div>

        {/* Thin Divider Line */}
        <div className="w-full max-w-[53rem] px-6">
          <div className="w-full h-[1px] bg-zinc-100 my-8"></div>
        </div>

        {/* Modern Work Experience Row Section */}
        <div className="w-full max-w-[53rem] px-6 py-12 flex flex-col items-start">
          <h2 className="text-[24px] md:text-[28px] font-bold text-zinc-950 tracking-tight mb-8 font-display">
            Work Experience
          </h2>
          
          <div className="flex flex-col w-full">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-zinc-100 w-full hover:bg-zinc-50/50 px-4 rounded-[16px] transition-all duration-200"
              >
                <span className="text-zinc-400 font-medium text-[14px] w-[160px] shrink-0 text-left mb-2 sm:mb-0">
                  {exp.date}
                </span>
                
                <div className="flex items-center gap-2 mt-1 sm:mt-0 flex-wrap">
                  <span className="text-zinc-700 font-medium text-[15px]">
                    {exp.title} at
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-[#eff6ff] border border-blue-100 text-blue-600 font-semibold text-[13px] px-3.5 py-1.5 rounded-full select-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                    {exp.company_name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Infinite Marquee */}
        <div className="w-full overflow-hidden border-t border-zinc-100 py-6 bg-zinc-50/30">
          <div className="animate-scroll gap-12 items-center">
            {/* Tech Badges Loop 1 */}
            {["React", "Next.js", "Tauri", "Node.js", "TailwindCSS", "JavaScript", "HTML5", "CSS3", "Git"].map((tech, idx) => (
              <span
                key={`t1-${idx}`}
                className="text-zinc-400 hover:text-zinc-900 font-extrabold text-[16px] md:text-[20px] uppercase tracking-wider transition-colors cursor-default whitespace-nowrap mx-4"
              >
                // {tech}
              </span>
            ))}
            {/* Duplicate for Seamless Loop */}
            {["React", "Next.js", "Tauri", "Node.js", "TailwindCSS", "JavaScript", "HTML5", "CSS3", "Git"].map((tech, idx) => (
              <span
                key={`t2-${idx}`}
                className="text-zinc-400 hover:text-zinc-900 font-extrabold text-[16px] md:text-[20px] uppercase tracking-wider transition-colors cursor-default whitespace-nowrap mx-4"
              >
                // {tech}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MePage;
