import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const handleExploreMe = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate("/me");
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Full Screen Portal Transition Loading Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden animate-fade-in">
          {/* Keyframes style embedded directly */}
          <style>{`
            @keyframes spin-slow {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes pulse-fast {
              0%, 100% { opacity: 0.15; transform: scale(0.9); }
              50% { opacity: 0.35; transform: scale(1.1); }
            }
            .portal-ring {
              animation: spin-slow 2.5s linear infinite;
            }
            .portal-pulse {
              animation: pulse-fast 1.5s ease-in-out infinite;
            }
          `}</style>
          
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(24,24,27,0.4),#000000_80%)]"></div>
          
          <div className="relative flex flex-col items-center">
            {/* Spinning futuristic outer ring */}
            <div className="w-[160px] h-[160px] rounded-full border-4 border-dashed border-zinc-400 portal-ring"></div>
            
            {/* Inner pulsing energetic glow */}
            <div className="absolute top-[30px] w-[100px] h-[100px] rounded-full bg-white portal-pulse blur-xl"></div>
            
            {/* Teleporting/Loading text */}
            <span className="absolute top-[68px] text-white font-mono text-[13px] tracking-[0.35em] uppercase font-bold animate-pulse">
              LOADING ME...
            </span>
          </div>
        </div>
      )}

      {/* Main Contact Section Row */}
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden w-full">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      {/* Interactive Me Page Transition CTA Section */}
      <div className="w-full mt-20 flex flex-col items-center">
        <div
          className="relative group w-full rounded-[32px] p-[1.5px] cursor-pointer select-none"
          onClick={handleExploreMe}
        >
          {/* Back Glowing Aura (Smooth transition blur) */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-[32px] opacity-0 group-hover:opacity-50 blur-2xl transition-all duration-700 group-hover:duration-500"></div>

          {/* Default Border Gradient (Transitions out on hover) */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-950/60 via-violet-900/40 to-blue-950/60 rounded-[32px] transition-opacity duration-700 opacity-100 group-hover:opacity-0"></div>

          {/* Hover Border Gradient (Transitions in on hover) */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-[32px] transition-opacity duration-700 opacity-0 group-hover:opacity-100"></div>
          
          <div className="relative z-10 w-full bg-black-100 rounded-[30.5px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
            {/* Background Ambient Cosmic Tints inside */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/20 to-blue-950/20 opacity-40 group-hover:opacity-70 group-hover:scale-[1.02] transition-all duration-700 rounded-[30.5px]"></div>

            <div className="relative z-10 flex flex-col items-start text-left max-w-[32rem]">
              <span className="text-[11px] text-purple-400 font-mono tracking-[0.25em] uppercase mb-3.5 font-semibold flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                </span>
                Interactive Portal
              </span>
              <h4 className="text-[24px] sm:text-[30px] font-bold text-white tracking-tight leading-[120%] mb-3 font-display">
                Step Into My Full Digital World.
              </h4>
              <p className="text-zinc-400 text-[14px] sm:text-[15px] leading-relaxed">
                Discover my interactive personal story, live timelines, specialized toolsets, and premium NGO & e-commerce products built with pure craftsmanship.
              </p>
            </div>

            <button className="relative z-10 overflow-hidden group/btn bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-extrabold text-[13px] uppercase py-4 px-8 rounded-2xl flex items-center gap-2 transition-all duration-500 shadow-xl shrink-0 group-hover:shadow-purple-500/20">
              <span className="relative z-10 tracking-wider">Explore Me Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5 relative z-10"
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
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
