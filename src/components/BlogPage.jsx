import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [showResume, setShowResume] = useState(false);

  const blogPosts = [
    {
      title: "Building Zeneva: Reimagining the Modern Business Operating System",
      date: "12/20/2025",
      readTime: "6 min",
      description: "An insider look into how I engineered Zeneva—an all-in-one SaaS platform integrating real-time POS, live inventory management, and business analytics to help retail businesses scale.",
      link: "https://zeneva.vercel.app",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      tags: ["zeneva", "saas-development", "react-nextjs"]
    },
    {
      title: "How AI is Revolutionizing Inventory Forecasting for SMEs",
      date: "11/15/2025",
      readTime: "5 min",
      description: "A deep dive into Zen AI, the intelligent forecasting engine built into Zeneva to help retail shop owners predict product demand, prevent stockouts, and optimize overall cash flow.",
      link: "https://github.com/I-m-a-m-4",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
      tags: ["zen-ai", "machine-learning", "inventory-management"]
    },
    {
      title: "Implementing Offline-First PWA Capabilities in Retail Web Applications",
      date: "10/02/2025",
      readTime: "5 min",
      description: "Exploring the challenges and architectural strategies for implementing offline caching, local data persistence, and background sync to ensure zero POS downtime for businesses.",
      link: "https://github.com/I-m-a-m-4",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
      tags: ["offline-first", "progressive-web-apps", "web-performance"]
    },
    {
      title: "Designing Seamless Multi-Tenant E-commerce Architectures",
      date: "08/24/2025",
      readTime: "6 min",
      description: "Best practices and architectural decisions behind launching custom, secure, and fast digital storefronts for hundreds of online shops running on a shared, robust backend database.",
      link: "https://github.com/I-m-a-m-4",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
      tags: ["saas-architecture", "multi-tenant", "firebase"]
    },
    {
      title: "Crafting Breathtakingly Beautiful Interfaces: The Art of UI/UX",
      date: "06/12/2025",
      readTime: "5 min",
      description: "My personal principles of combining frontend engineering excellence with premium design systems, smooth gradients, and interactive micro-animations to create products users love.",
      link: "https://github.com/I-m-a-m-4",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
      tags: ["ui-ux-design", "css-animation", "tailwindcss"]
    },
    {
      title: "Bello Imam: Engineering Scalable Full-Stack Web Experiences",
      date: "04/05/2025",
      readTime: "5 min",
      description: "A reflective journey of building robust software solutions for Healthcare, NGOs, and Personal Branding platforms, focusing on clean code, solid architectures, and user-centric flows.",
      link: "https://github.com/I-m-a-m-4",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
      tags: ["clean-code", "full-stack", "software-craftsmanship"]
    }
  ];

  return (
    <div className="bg-white min-h-screen text-zinc-900 font-sans selection:bg-zinc-200 relative overflow-x-hidden">
      
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
                href="https://github.com/I-m-a-m-4"
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

      {/* Main Content Section */}
      <main className="flex flex-col relative items-center mx-auto z-10">
        <div className="w-full max-w-[53rem] px-6 flex flex-col py-[8rem] md:py-[10rem] items-center gap-[25px]">
          <div className="w-full mx-auto md:py-[3rem]">
            <div className="flex flex-col gap-12">
              {/* Header Title Section */}
              <div className="flex flex-col gap-4 text-center">
                <h1 className="text-[32px] md:text-[42px] font-bold tracking-[-.03em] leading-[110%] text-black">
                  Blog Posts
                </h1>
                <p className="md:text-[18px] text-[#5a5a5a]">
                  Thoughts, tutorials and insights about software development
                </p>
              </div>

              {/* Grid of Blog Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, idx) => (
                  <a
                    key={idx}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-[20px] overflow-hidden border border-[#0000001a] relative transition-all hover:scale-[1.02] hover:shadow-lg duration-300 bg-white flex flex-col"
                    style={{ boxShadow: "rgb(255, 255, 255) 0px 3px 0px 0px inset" }}
                  >
                    <div className="relative h-[240px] overflow-hidden">
                      <img
                        alt={post.title}
                        src={post.image}
                        loading="lazy"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3 text-sm text-[#5a5a5a] font-medium font-mono">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-[20px] sm:text-[22px] leading-tight font-bold mb-3 text-zinc-900 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-[#5a5a5a] text-[14.5px] sm:text-[15px] leading-relaxed line-clamp-3 mb-6">
                        {post.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {post.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="bg-[#e1f9dc] text-[#178d00] px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer inside MePage wrapper format */}
          <div className="w-full flex flex-col items-center mt-12">
            <div className="w-full h-[1px] bg-zinc-100 my-8"></div>
            
            <div className="flex flex-col items-center gap-4 py-8 w-full select-none">
              <span className="text-[12px] sm:text-[13px] text-zinc-400 font-medium tracking-tight text-center">
                © MMXXVI - Bello Imam - All rights reserved
              </span>
              
              {/* Modern Social Icons Row */}
              <div className="flex items-center justify-center gap-6 mt-1">
                <a href="https://x.com/imam-bello" target="_blank" rel="noreferrer" title="Twitter / X">
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
                <a href="https://github.com/I-m-a-m-4" target="_blank" rel="noreferrer" title="GitHub">
                  <svg className="w-4 h-4 text-zinc-400 hover:text-zinc-800 transition-colors cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </a>
                <a href="mailto:belloimam@gmail.com" title="Email">
                  <svg className="w-4 h-4 text-zinc-400 hover:text-zinc-800 transition-colors cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </a>
              </div>
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
                  navigator.clipboard.writeText(`Bello Imam\nFrontend Developer | Full-Stack Engineer | Graphics Designer\nbelloimam@gmail.com\nLagos, Nigeria\nGitHub: github.com/I-m-a-m-4\nLinkedIn: linkedin.com/in/imam-bello`);
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
                  <a href="https://github.com/I-m-a-m-4" target="_blank" rel="noreferrer" className="hover:text-zinc-800 transition-colors font-bold">GitHub: github.com/I-m-a-m-4</a>
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

export default BlogPage;
