// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   User,
//   Activity,
//   Briefcase,
//   LayoutGrid,
//   MapPin,
//   Layers,
//   Terminal,
//   Copy,
// } from "lucide-react";

// // Inlined FadeIn so the component is completely standalone
// const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
//   const directions = {
//     up: { y: 40, x: 0 },
//     down: { y: -40, x: 0 },
//     left: { x: 40, y: 0 },
//     right: { x: -40, y: 0 },
//   };

//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         scale: 0.95,
//         filter: "blur(8px)",
//         ...directions[direction],
//       }}
//       whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", x: 0, y: 0 }}
//       viewport={{ once: true, margin: "0px 0px -50px 0px" }}
//       transition={{
//         duration: 1.4,
//         delay: delay / 1000,
//         ease: [0.25, 1, 0.5, 1],
//       }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// };

// const AboutTracingBox = ({ children, className = "" }) => {
//   return (
//     <div
//       className={`tracing-box rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-xl flex flex-col ${className}`}
//     >
//       {/* Actual Content Container with a slightly smaller border radius to nest perfectly inside the padding-box */}
//       <div className="relative z-10 w-full h-full flex flex-col rounded-[10px] overflow-hidden">
//         {children}
//       </div>
//     </div>
//   );
// };

// const AboutSection = ({ isDarkMode }) => {
//   useEffect(() => {
//     const style = document.createElement("style");
//     style.innerHTML = `
//       /* =======================================
//          TRACING BOX ANIMATION STYLES
//          ======================================= */
//       @property --border-angle {
//         syntax: "<angle>";
//         inherits: true;
//         initial-value: 0turn;
//       }

//       @keyframes border-spin {
//         to { --border-angle: 1turn; }
//       }

//       .tracing-box {
//         border: 2px solid transparent;
//         background:
//           linear-gradient(var(--md-sys-color-surface), var(--md-sys-color-surface)) padding-box,
//           var(--md-sys-color-outline-variant) border-box;
//         transition: transform 1s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 1s cubic-bezier(0.25, 1, 0.5, 1);
//       }

//       .tracing-box:hover {
//         background:
//           linear-gradient(var(--md-sys-color-surface), var(--md-sys-color-surface)) padding-box,
//           conic-gradient(
//             from var(--border-angle),
//             var(--md-sys-color-outline-variant) 0%,
//             var(--md-sys-color-outline-variant) 80%,
//             color-mix(in srgb, var(--md-sys-color-primary) 30%, var(--md-sys-color-outline-variant)) 88%,
//             var(--md-sys-color-primary) 96%,
//             var(--md-sys-color-outline-variant) 100%
//           ) border-box;
//         animation: border-spin 3s linear infinite;
//       }

//       @keyframes float-blob {
//         0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
//         33% { transform: translate(40px, -40px) scale(1.05) rotate(120deg); }
//         66% { transform: translate(-20px, 20px) scale(0.95) rotate(240deg); }
//         100% { transform: translate(0px, 0px) scale(1) rotate(360deg); }
//       }
//       @keyframes float-avatar {
//         0%, 100% { transform: translateY(0px) rotate(0deg); }
//         50% { transform: translateY(-10px) rotate(1deg); }
//       }
//       @keyframes spin-slow {
//         from { transform: rotate(0deg); }
//         to { transform: rotate(360deg); }
//       }

//       .animate-blob-1 { animation: float-blob 35s infinite ease-in-out alternate; }
//       .animate-blob-2 { animation: float-blob 40s infinite ease-in-out alternate-reverse; }
//       .animate-float { animation: float-avatar 10s infinite ease-in-out; }
//       .animate-spin-slow { animation: spin-slow 12s infinite linear; }
//     `;
//     document.head.appendChild(style);
//     return () => document.head.removeChild(style);
//   }, []);

//   const SKILLS = [
//     { id: "s1", name: "React & Next.js" },
//     { id: "s2", name: "TypeScript" },
//     { id: "s3", name: "GNOME HIG" },
//     { id: "s4", name: "Material 3" },
//     { id: "s5", name: "Framer Motion" },
//     { id: "s6", name: "WebGL" },
//   ];

//   return (
//     <section id="about" className="scroll-mt-28 sm:scroll-mt-24">
//       <FadeIn>
//         <div className="flex items-center gap-3 mb-6 sm:mb-8 group cursor-default">
//           <User className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--md-sys-color-primary)] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" />
//           <h2 className="text-2xl sm:text-3xl font-bold text-[var(--md-sys-color-on-surface)]">
//             User Details
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
//           {/* Left Column: Avatar & Bio (User Profile) */}
//           <div className="lg:col-span-5 flex flex-col gap-6">
//             <AboutTracingBox className="h-full">
//               <div className="p-6 sm:p-8 flex flex-col items-center text-center h-full justify-center">
//                 <motion.div
//                   animate={{ y: [0, -10, 0] }}
//                   transition={{
//                     duration: 6,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[var(--md-sys-color-surface-variant)] shadow-lg mb-6 bg-[var(--md-sys-color-primary-container)] relative"
//                 >
//                   <img
//                     src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
//                     alt="Avatar"
//                     className={`w-full h-full object-cover sepia-[.4] hue-rotate-[40deg] saturate-50 group-hover:sepia-0 group-hover:saturate-100 transition-all duration-1000 ease-out ${isDarkMode ? "opacity-80 group-hover:opacity-100" : "opacity-100"}`}
//                   />
//                 </motion.div>

//                 <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[var(--md-sys-color-on-surface)]">
//                   Mohammed Ansari
//                 </h3>

//                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--md-sys-color-surface-variant)] text-[var(--md-sys-color-primary)] text-xs font-mono font-bold mb-6 border border-[var(--md-sys-color-outline-variant)]">
//                   <Terminal className="w-3 h-3" />
//                   root@kinetic-env
//                 </div>

//                 <p className="text-[var(--md-sys-color-on-surface-variant)] text-sm sm:text-base leading-relaxed font-medium">
//                   Software should respect the user through clarity and
//                   structure. By adhering to human interface guidelines—while
//                   utilizing an earthy, olive monochrome palette and smooth,
//                   deliberate physics—I create tools that are hyper-professional
//                   yet deeply alive.
//                 </p>
//               </div>
//             </AboutTracingBox>
//           </div>

//           {/* Right Column: Libadwaita Specs & Dependencies */}
//           <div className="lg:col-span-7 flex flex-col gap-6">
//             {/* GTK4 Style Preference Group / Action Rows */}
//             <AboutTracingBox>
//               <div className="px-5 py-3 border-b border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface-variant)] text-xs font-bold tracking-wider text-[var(--md-sys-color-on-surface-variant)] uppercase flex items-center gap-2">
//                 <Activity className="w-4 h-4" />
//                 System Specifications
//               </div>
//               {[
//                 {
//                   label: "Role",
//                   value: "Senior Frontend Engineer",
//                   icon: Briefcase,
//                 },
//                 {
//                   label: "Location",
//                   value: "Remote / Worldwide",
//                   icon: MapPin,
//                 },
//                 { label: "Experience", value: "8+ Years", icon: Layers },
//                 {
//                   label: "Focus",
//                   value: "Design Systems & Kinetic UI",
//                   icon: LayoutGrid,
//                 },
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="adw-boxed-list-item px-5 py-4 flex items-center justify-between group cursor-default"
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="w-9 h-9 rounded-lg bg-[var(--md-sys-color-surface-variant)] flex items-center justify-center group-hover:bg-[var(--md-sys-color-primary-container)] group-hover:scale-110 transition-all duration-500">
//                       <item.icon className="w-4 h-4 text-[var(--md-sys-color-on-surface-variant)] group-hover:text-[var(--md-sys-color-primary)] transition-colors duration-500" />
//                     </div>
//                     <span className="font-semibold text-[var(--md-sys-color-on-surface)] group-hover:text-[var(--md-sys-color-primary)] transition-colors duration-500">
//                       {item.label}
//                     </span>
//                   </div>
//                   <span className="text-sm font-semibold text-[var(--md-sys-color-on-surface-variant)] bg-[var(--md-sys-color-surface-variant)] px-3 py-1.5 rounded-md group-hover:bg-[var(--md-sys-color-background)] transition-colors duration-500">
//                     {item.value}
//                   </span>
//                 </div>
//               ))}
//             </AboutTracingBox>

//             {/* Core Dependencies (Skills) */}
//             <AboutTracingBox className="h-full">
//               <div className="px-5 py-3 border-b border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface-variant)] text-xs font-bold tracking-wider text-[var(--md-sys-color-on-surface-variant)] uppercase flex items-center gap-2">
//                 <Copy className="w-4 h-4" />
//                 Core Dependencies
//               </div>
//               <div className="p-5 flex flex-wrap gap-2 sm:gap-3 flex-1 items-start content-start">
//                 {SKILLS.map((skill) => (
//                   <span
//                     key={skill.id}
//                     className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-[var(--md-sys-color-background)] text-[var(--md-sys-color-on-surface)] text-xs sm:text-sm font-bold border border-[var(--md-sys-color-outline-variant)] hover:bg-[var(--md-sys-color-primary)] hover:text-[var(--md-sys-color-on-primary)] hover:-translate-y-0.5 hover:shadow-sm transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-default"
//                   >
//                     {skill.name}
//                   </span>
//                 ))}
//               </div>
//             </AboutTracingBox>
//           </div>
//         </div>
//       </FadeIn>
//     </section>
//   );
// };

// export default AboutSection;

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  User,
  Activity,
  Briefcase,
  LayoutGrid,
  MapPin,
  Layers,
  Terminal,
  Copy,
} from "lucide-react";
import profileImage from "../assets/my.jpeg";

// --- BACKEND SCOPE PREPARATION ---
// Replace this static object with state populated by your Django API later
const aboutData = {
  name: "Mohammed Ansari",
  username: "mohammed@kinetic-env",
  bio: "Aspiring Software Developer with a solid foundation in full-stack web technologies (React, Django), multiple programming languages (Python, Java, C++), and Linux environments. Passionate about continuous learning and contributing to impactful software projects.",
  role: "Software Developer",
  location: "Mumbai, Maharashtra",
  experience: "Fresher",
  focus: "Full-Stack (React & Django)",
  skills: [
    { id: "s1", name: "React" },
    { id: "s2", name: "Django" },
    { id: "s3", name: "Tailwind CSS" },
    { id: "s4", name: "Python" },
    { id: "s5", name: "JavaScript" },
    { id: "s6", name: "Linux CLI" },
    { id: "s7", name: "Git" },
    { id: "s8", name: "MySQL" },
    { id: "s9", name: "Java & C++" },
  ],
};

// Inlined FadeIn so the component is completely standalone
const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
        filter: "blur(8px)",
        ...directions[direction],
      }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{
        duration: 1.4,
        delay: delay / 1000,
        ease: [0.25, 1, 0.5, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const AboutTracingBox = ({ children, className = "" }) => {
  return (
    <div
      className={`tracing-box rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-xl flex flex-col ${className}`}
    >
      {/* Actual Content Container with a slightly smaller border radius to nest perfectly inside the padding-box */}
      <div className="relative z-10 w-full h-full flex flex-col rounded-[10px] overflow-hidden">
        {children}
      </div>
    </div>
  );
};

const AboutSection = ({ isDarkMode }) => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      /* =======================================
         TRACING BOX ANIMATION STYLES
         ======================================= */
      @property --border-angle {
        syntax: "<angle>";
        inherits: true;
        initial-value: 0turn;
      }

      @keyframes border-spin {
        to { --border-angle: 1turn; }
      }

      .tracing-box {
        border: 2px solid transparent;
        background:
          linear-gradient(var(--md-sys-color-surface), var(--md-sys-color-surface)) padding-box,
          var(--md-sys-color-outline-variant) border-box;
        transition: transform 1s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 1s cubic-bezier(0.25, 1, 0.5, 1);
      }

      .tracing-box:hover {
        background:
          linear-gradient(var(--md-sys-color-surface), var(--md-sys-color-surface)) padding-box,
          conic-gradient(
            from var(--border-angle),
            var(--md-sys-color-outline-variant) 0%,
            var(--md-sys-color-outline-variant) 80%,
            color-mix(in srgb, var(--md-sys-color-primary) 30%, var(--md-sys-color-outline-variant)) 88%,
            var(--md-sys-color-primary) 96%,
            var(--md-sys-color-outline-variant) 100%
          ) border-box;
        animation: border-spin 3s linear infinite;
      }

      @keyframes float-blob {
        0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
        33% { transform: translate(40px, -40px) scale(1.05) rotate(120deg); }
        66% { transform: translate(-20px, 20px) scale(0.95) rotate(240deg); }
        100% { transform: translate(0px, 0px) scale(1) rotate(360deg); }
      }
      @keyframes float-avatar {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(1deg); }
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .animate-blob-1 { animation: float-blob 35s infinite ease-in-out alternate; }
      .animate-blob-2 { animation: float-blob 40s infinite ease-in-out alternate-reverse; }
      .animate-float { animation: float-avatar 10s infinite ease-in-out; }
      .animate-spin-slow { animation: spin-slow 12s infinite linear; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section id="about" className="scroll-mt-28 sm:scroll-mt-24">
      <FadeIn>
        <div className="flex items-center gap-3 mb-6 sm:mb-8 group cursor-default">
          <User className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--md-sys-color-primary)] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--md-sys-color-on-surface)]">
            User Details
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Left Column: Avatar & Bio (User Profile) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <AboutTracingBox className="h-full">
              <div className="p-6 sm:p-8 flex flex-col items-center text-center h-full justify-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[var(--md-sys-color-surface-variant)] shadow-lg mb-6 bg-[var(--md-sys-color-primary-container)] relative"
                >
                  <img
                    src={profileImage}
                    alt="Mohammed Ansari"
                    className={`w-full h-full object-cover sepia-[.4] hue-rotate-[40deg] saturate-50 group-hover:sepia-0 group-hover:saturate-100 transition-all duration-1000 ease-out ${isDarkMode ? "opacity-80 group-hover:opacity-100" : "opacity-100"}`}
                  />
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[var(--md-sys-color-on-surface)]">
                  {aboutData.name}
                </h3>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--md-sys-color-surface-variant)] text-[var(--md-sys-color-primary)] text-xs font-mono font-bold mb-6 border border-[var(--md-sys-color-outline-variant)]">
                  <Terminal className="w-3 h-3" />
                  {aboutData.username}
                </div>

                <p className="text-[var(--md-sys-color-on-surface-variant)] text-sm sm:text-base leading-relaxed font-medium">
                  {aboutData.bio}
                </p>
              </div>
            </AboutTracingBox>
          </div>

          {/* Right Column: Libadwaita Specs & Dependencies */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* GTK4 Style Preference Group / Action Rows */}
            <AboutTracingBox>
              <div className="px-5 py-3 border-b border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface-variant)] text-xs font-bold tracking-wider text-[var(--md-sys-color-on-surface-variant)] uppercase flex items-center gap-2">
                <Activity className="w-4 h-4" />
                System Specifications
              </div>
              {[
                {
                  label: "Role",
                  value: aboutData.role,
                  icon: Briefcase,
                },
                {
                  label: "Location",
                  value: aboutData.location,
                  icon: MapPin,
                },
                {
                  label: "Experience",
                  value: aboutData.experience,
                  icon: Layers,
                },
                {
                  label: "Focus",
                  value: aboutData.focus,
                  icon: LayoutGrid,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="adw-boxed-list-item px-5 py-4 flex items-center justify-between group cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[var(--md-sys-color-surface-variant)] flex items-center justify-center group-hover:bg-[var(--md-sys-color-primary-container)] group-hover:scale-110 transition-all duration-500">
                      <item.icon className="w-4 h-4 text-[var(--md-sys-color-on-surface-variant)] group-hover:text-[var(--md-sys-color-primary)] transition-colors duration-500" />
                    </div>
                    <span className="font-semibold text-[var(--md-sys-color-on-surface)] group-hover:text-[var(--md-sys-color-primary)] transition-colors duration-500">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-[var(--md-sys-color-on-surface-variant)] bg-[var(--md-sys-color-surface-variant)] px-3 py-1.5 rounded-md group-hover:bg-[var(--md-sys-color-background)] transition-colors duration-500">
                    {item.value}
                  </span>
                </div>
              ))}
            </AboutTracingBox>

            {/* Core Dependencies (Skills) */}
            <AboutTracingBox className="h-full">
              <div className="px-5 py-3 border-b border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface-variant)] text-xs font-bold tracking-wider text-[var(--md-sys-color-on-surface-variant)] uppercase flex items-center gap-2">
                <Copy className="w-4 h-4" />
                Core Dependencies
              </div>
              <div className="p-5 flex flex-wrap gap-2 sm:gap-3 flex-1 items-start content-start">
                {aboutData.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-[var(--md-sys-color-background)] text-[var(--md-sys-color-on-surface)] text-xs sm:text-sm font-bold border border-[var(--md-sys-color-outline-variant)] hover:bg-[var(--md-sys-color-primary)] hover:text-[var(--md-sys-color-on-primary)] hover:-translate-y-0.5 hover:shadow-sm transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </AboutTracingBox>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default AboutSection;
