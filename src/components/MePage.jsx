import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects, experiences } from "../constants";

const MePage = () => {
  const [showResume, setShowResume] = useState(false);

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
              <button
                onClick={() => setShowResume(true)}
                className="p-[12px] md:p-[15px] hover:px-[20px] text-zinc-600 hover:text-zinc-900 rounded-[15px] hover:bg-zinc-100/50 transition-all duration-300 flex items-center gap-2 font-medium cursor-pointer bg-transparent border-none outline-none"
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
              </button>
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

        {/* How Can I Help? Banner Section */}
        <div className="w-full max-w-[53rem] px-6 mt-16 select-none">
          <div
            className="w-full rounded-[32px] overflow-hidden bg-black py-12 px-6 flex flex-col items-center justify-center text-center relative shadow-xl border border-zinc-900"
            style={{
              backgroundImage: 'url("/me page doddle image.webp")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Sleek Dark Overlay to ensure maximum contrast and premium aesthetics */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-[28px] md:text-[36px] font-bold text-white mb-2 font-display">
                How Can I Help?
              </h2>
              <p className="text-zinc-300 text-[14px] md:text-[15px] mb-8">
                Let's turn your vision into something amazing.
              </p>
              
              {/* Glassmorphic Sliding Badges */}
              <div className="w-full overflow-hidden max-w-[40rem]">
                <div className="animate-scroll gap-4 items-center">
                  {["GitHub", "Figma", "Photoshop", "Premiere Pro", "TailwindCSS", "Bootstrap", "React", "Next.js", "Tauri"].map((badge, idx) => (
                    <span
                      key={`b1-${idx}`}
                      className="bg-white/95 hover:bg-white text-zinc-800 font-bold text-[13px] sm:text-[14px] px-5 py-2.5 rounded-full shadow-sm whitespace-nowrap mx-2 select-none cursor-default transition-all duration-200"
                    >
                      {badge}
                    </span>
                  ))}
                  {/* Duplicate Loop */}
                  {["GitHub", "Figma", "Photoshop", "Premiere Pro", "TailwindCSS", "Bootstrap", "React", "Next.js", "Tauri"].map((badge, idx) => (
                    <span
                      key={`b2-${idx}`}
                      className="bg-white/95 hover:bg-white text-zinc-800 font-bold text-[13px] sm:text-[14px] px-5 py-2.5 rounded-full shadow-sm whitespace-nowrap mx-2 select-none cursor-default transition-all duration-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get in touch Form Section */}
        <div className="w-full max-w-[53rem] px-6 py-16 flex flex-col items-start select-none">
          <h2 className="text-[28px] md:text-[36px] font-bold text-zinc-950 tracking-tight mb-4 font-display text-left">
            Get in touch
          </h2>
          <p className="text-zinc-500 text-[14px] sm:text-[15px] leading-relaxed mb-8 max-w-[42rem] text-left">
            I'm always interested in exploring new opportunities, collaborating, or exchanging
            ideas with like-minded individuals. Feel free to book a call or email me if you'd like
            to see my portfolio deck or to discuss a potential project.
          </p>

          <form className="w-full flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-zinc-50/50 border border-zinc-200 focus:border-zinc-400 focus:outline-none rounded-[16px] py-4 px-5 text-[14px] text-zinc-800 placeholder-zinc-400 transition-all duration-200"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-zinc-50/50 border border-zinc-200 focus:border-zinc-400 focus:outline-none rounded-[16px] py-4 px-5 text-[14px] text-zinc-800 placeholder-zinc-400 transition-all duration-200"
              />
            </div>
            <textarea
              placeholder="Write your Message"
              rows="5"
              className="w-full bg-zinc-50/50 border border-zinc-200 focus:border-zinc-400 focus:outline-none rounded-[20px] py-4 px-5 text-[14px] text-zinc-800 placeholder-zinc-400 transition-all duration-200 resize-none h-[150px]"
            />
            <button
              type="submit"
              className="w-full bg-black hover:bg-zinc-900 text-white font-semibold py-4 rounded-[20px] text-[15px] cursor-pointer transition-all duration-200 mt-2 shadow-md flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
            </button>
          </form>
        </div>

        {/* Footer Section */}
        <div className="w-full max-w-[53rem] px-6 flex flex-col items-center">
          <div className="w-full h-[1px] bg-zinc-100 my-8"></div>
          
          <div className="flex flex-col items-center gap-4 py-8 w-full select-none">
            <span className="text-[12px] sm:text-[13px] text-zinc-400 font-medium tracking-tight text-center">
              © MMXXVI - Bello Imam - All rights reserved
            </span>
            
            {/* Modern Social Icons Row */}
            <div className="flex items-center justify-center gap-6 mt-1">
              <a href="https://x.com" target="_blank" rel="noreferrer" title="Twitter / X">
                <svg className="w-4 h-4 text-zinc-400 hover:text-zinc-800 transition-colors cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram">
                <svg className="w-4 h-4 text-zinc-400 hover:text-zinc-800 transition-colors cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://github.com/imam-bello" target="_blank" rel="noreferrer" title="GitHub">
                <svg className="w-4 h-4 text-zinc-400 hover:text-zinc-800 transition-colors cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              <a href="mailto:contact@bime.dev" title="Email">
                <svg className="w-4 h-4 text-zinc-400 hover:text-zinc-800 transition-colors cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Interactive Beautiful Resume Lightbox Modal */}
      {showResume && (
        <div className="fixed inset-0 z-[10000] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
          {/* Main Modal container */}
          <div className="bg-white max-w-[54rem] w-full max-h-[85vh] overflow-y-auto rounded-[24px] shadow-2xl relative border border-zinc-100 flex flex-col p-6 sm:p-10 md:p-12 text-zinc-900 select-text">
            
            {/* Header / Actions Row */}
            <div className="absolute top-6 right-6 flex items-center gap-4 z-20">
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(`Bello Imam\nFrontend Developer | Full-Stack Engineer | Graphics Designer\nbelloimam@gmail.com\nLagos, Nigeria\nGitHub: github.com/i-m-a-m-\nLinkedIn: linkedin.com/in/imam-bello`);
                  alert("Contact details copied to clipboard!");
                }}
                className="text-[11px] font-mono tracking-wider uppercase text-zinc-500 hover:text-zinc-800 bg-zinc-100 hover:bg-zinc-200/80 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                title="Copy Info"
              >
                Copy Info
              </button>
              <button 
                onClick={() => setShowResume(false)} 
                className="text-zinc-400 hover:text-zinc-800 p-1.5 rounded-full hover:bg-zinc-100 transition-colors cursor-pointer flex items-center justify-center"
                title="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Document Content */}
            <div className="flex flex-col text-left">
              {/* Header section */}
              <div className="flex flex-col mb-6">
                <h2 className="text-[28px] sm:text-[36px] font-extrabold text-zinc-950 leading-tight tracking-tight font-display">
                  Bello Imam
                </h2>
                <span className="text-zinc-600 font-semibold text-[13px] sm:text-[15px] uppercase tracking-wider mt-1.5">
                  Frontend Developer | Full-Stack Engineer | Graphics Designer
                </span>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-zinc-500 text-[13px] sm:text-[14px] mt-3 font-mono">
                  <a href="mailto:belloimam@gmail.com" className="hover:text-zinc-800 transition-colors">belloimam@gmail.com</a>
                  <span className="text-zinc-300">|</span>
                  <span>Lagos, Nigeria</span>
                  <span className="text-zinc-300">|</span>
                  <a href="https://github.com/i-m-a-m-" target="_blank" rel="noreferrer" className="hover:text-zinc-800 transition-colors font-bold">GitHub: github.com/i-m-a-m-</a>
                  <span className="text-zinc-300">|</span>
                  <a href="https://linkedin.com/in/imam-bello" target="_blank" rel="noreferrer" className="hover:text-zinc-800 transition-colors font-bold">LinkedIn: linkedin.com/in/imam-bello</a>
                </div>
              </div>

              <div className="h-[1px] bg-zinc-200 w-full mb-6"></div>

              {/* Professional Summary */}
              <div className="flex flex-col mb-8">
                <h3 className="text-[12px] font-mono tracking-[0.2em] uppercase font-bold text-zinc-400 mb-2.5">
                  Professional Summary
                </h3>
                <p className="text-zinc-700 text-[14px] sm:text-[15.5px] leading-relaxed">
                  Dynamic and results-driven Frontend Developer with a strong foundation in building scalable, user-centric web applications. Expert in React and Next.js, with a proven track record of delivering high-impact projects ranging from AI-powered SaaS platforms to complex e-commerce solutions. Passionate about integrating AI technologies to solve real-world business challenges and creating seamless digital experiences through a combination of technical excellence and creative design.
                </p>
              </div>

              {/* Core Skills */}
              <div className="flex flex-col mb-8">
                <h3 className="text-[12px] font-mono tracking-[0.2em] uppercase font-bold text-zinc-400 mb-4">
                  Core Skills
                </h3>
                <div className="overflow-x-auto border border-zinc-200/60 rounded-xl">
                  <table className="min-w-full divide-y divide-zinc-200/60 text-[13px] sm:text-[14px]">
                    <thead className="bg-zinc-50">
                      <tr>
                        <th className="px-6 py-3 text-left font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider w-1/3">Category</th>
                        <th className="px-6 py-3 text-left font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider w-2/3">Technologies & Tools</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-zinc-100">
                      <tr>
                        <td className="px-6 py-3.5 font-semibold text-zinc-800">Frontend</td>
                        <td className="px-6 py-3.5 text-zinc-600">React, Next.js, JavaScript (ES+), TypeScript, HTML, CSS, Tailwind CSS</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3.5 font-semibold text-zinc-800">Backend & Database</td>
                        <td className="px-6 py-3.5 text-zinc-600">Firebase, Node.js, RESTful APIs</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3.5 font-semibold text-zinc-800">Tools & Platforms</td>
                        <td className="px-6 py-3.5 text-zinc-600">Vercel, Git/GitHub, PWA, AI, SEO, Analytics</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3.5 font-semibold text-zinc-800">Design Specializations</td>
                        <td className="px-6 py-3.5 text-zinc-600">Graphics Design, UI/UX Principles, Figma</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3.5 font-semibold text-zinc-800">Technologies & Tools</td>
                        <td className="px-6 py-3.5 text-zinc-600">AI Integration, SaaS Development, E-commerce, Inventory Management Systems</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Projects */}
              <div className="flex flex-col mb-8">
                <h3 className="text-[12px] font-mono tracking-[0.2em] uppercase font-bold text-zinc-400 mb-4">
                  Key Projects
                </h3>
                
                {/* Zeneva */}
                <div className="flex flex-col mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <h4 className="font-bold text-[16px] sm:text-[18px] text-zinc-950">Zeneva ‒ Business Operating System</h4>
                    <span className="text-[12px] sm:text-[13px] text-zinc-500 font-mono">Lead Developer | <a href="https://zeneva.vercel.app" target="_blank" rel="noreferrer" className="hover:underline text-zinc-800">zeneva.vercel.app</a></span>
                  </div>
                  <ul className="list-disc list-outside pl-5 text-zinc-700 text-[13.5px] sm:text-[14.5px] space-y-1.5 leading-relaxed">
                    <li>Engineered an all-in-one SaaS platform for retail businesses, integrating POS, inventory management, CRM, and AI forecasting.</li>
                    <li>Developed Zen AI, an intelligent engine that predicts demand, prevents stockouts, and identifies revenue opportunities.</li>
                    <li>Implemented offline capabilities using PWA technology to ensure uninterrupted business operations.</li>
                    <li>Built a customizable e-commerce storefront for SMEs to scale their businesses online seamlessly.</li>
                  </ul>
                </div>

                {/* Selected Portfolio Projects */}
                <div className="flex flex-col">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2.5">
                    <h4 className="font-bold text-[16px] sm:text-[18px] text-zinc-950">Selected Portfolio Projects</h4>
                    <span className="text-[12px] sm:text-[13px] text-zinc-500 font-mono">Full-Stack Developer</span>
                  </div>
                  <ul className="list-disc list-outside pl-5 text-zinc-700 text-[13.5px] sm:text-[14.5px] space-y-2 leading-relaxed">
                    <li><strong className="text-zinc-950">Alansororphan Care</strong>: Developed a comprehensive NGO website for a charity platform (<a href="https://alansororphancare.com" target="_blank" rel="noreferrer" className="hover:underline font-bold text-zinc-800">alansororphancare.com</a>).</li>
                    <li><strong className="text-zinc-950">Scale with Olaiya</strong>: Built a full-stack personal branding and e-commerce platform with a custom admin dashboard using Firebase (<a href="https://scalewitholaiya.com" target="_blank" rel="noreferrer" className="hover:underline font-bold text-zinc-800">scalewitholaiya.com</a>).</li>
                    <li><strong className="text-zinc-950">Tech Ink</strong>: Launched an AI-powered news platform focused on data-driven analysis and tech media (<a href="https://tech-ink.vercel.app" target="_blank" rel="noreferrer" className="hover:underline font-bold text-zinc-800">tech-ink.vercel.app</a>).</li>
                    <li><strong className="text-zinc-950">Skincare NG</strong>: Engineered a comprehensive healthcare e-commerce platform integrating professional services (<a href="https://skincareng.com" target="_blank" rel="noreferrer" className="hover:underline font-bold text-zinc-800">skincareng.com</a>).</li>
                    <li><strong className="text-zinc-950">ORELIS EMR</strong>: Created a futuristic Electronic Medical Record (EMR) system for doctors (<a href="https://orelis-med.vercel.app" target="_blank" rel="noreferrer" className="hover:underline font-bold text-zinc-800">orelis-med.vercel.app</a>).</li>
                  </ul>
                </div>
              </div>

              {/* Professional Experience */}
              <div className="flex flex-col">
                <h3 className="text-[12px] font-mono tracking-[0.2em] uppercase font-bold text-zinc-400 mb-4">
                  Professional Experience
                </h3>
                
                {/* Independent Full-Stack */}
                <div className="flex flex-col mb-5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <h4 className="font-bold text-[16px] sm:text-[17px] text-zinc-950">Independent Full-Stack Developer</h4>
                    <span className="text-[12px] sm:text-[13px] text-zinc-500 font-mono">January ‒ Present</span>
                  </div>
                  <ul className="list-disc list-outside pl-5 text-zinc-700 text-[13.5px] sm:text-[14.5px] space-y-1.5 leading-relaxed">
                    <li>Architected and deployed multiple high-performance web applications for diverse industries including Healthcare, Education, and E-commerce.</li>
                    <li>Collaborated with clients to translate business requirements into technical roadmaps and scalable digital products.</li>
                    <li>Optimized web performance and SEO, resulting in improved user engagement and search rankings for client platforms.</li>
                  </ul>
                </div>

                {/* Graphics Designer */}
                <div className="flex flex-col">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <h4 className="font-bold text-[16px] sm:text-[17px] text-zinc-950">Graphics Designer & Brand Strategist</h4>
                    <span className="text-[12px] sm:text-[13px] text-zinc-500 font-mono">Ongoing</span>
                  </div>
                  <ul className="list-disc list-outside pl-5 text-zinc-700 text-[13.5px] sm:text-[14.5px] space-y-1.5 leading-relaxed">
                    <li>Crafted visual identities and marketing materials for various startups, ensuring brand consistency across digital and print media.</li>
                    <li>Leveraged design expertise to enhance UI/UX of developed web applications, focusing on intuitive user journeys.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MePage;
