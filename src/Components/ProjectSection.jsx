// import { useState, useEffect } from "react";
// import {
//   ExternalLink,
//   Layers,
//   Globe,
//   GitBranch,
//   Lock,
//   Unlock,
// } from "lucide-react";
// import FadeIn from "./FadeIn";

// const PROJECTS = [
//   {
//     id: "1",
//     title: "Kinetic UI",
//     category: "Component Library",
//     img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     tech: ["React", "Framer Motion", "Tailwind"],
//   },
//   {
//     id: "2",
//     title: "SysMonitor",
//     category: "Web Application",
//     img: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     tech: ["Next.js", "TypeScript", "WebGL"],
//   },
//   {
//     id: "3",
//     title: "CodeVault",
//     category: "Developer Tool",
//     img: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     tech: ["Electron", "React", "Rust"],
//   },
//   {
//     id: "4",
//     title: "Weather Matrix",
//     category: "Utility",
//     img: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     tech: ["Vue", "D3.js", "Firebase"],
//   },
// ];

// const DecryptionCard = ({ project }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [displayText, setDisplayText] = useState(project.title);
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

//   useEffect(() => {
//     let interval;
//     if (!isHovered) {
//       interval = setInterval(() => {
//         setDisplayText(
//           project.title
//             .split("")
//             .map(() => chars[Math.floor(Math.random() * chars.length)])
//             .join(""),
//         );
//       }, 50);
//     } else {
//       let iteration = 0;
//       interval = setInterval(() => {
//         setDisplayText(
//           project.title
//             .split("")
//             .map((letter, index) => {
//               if (index < iteration) return project.title[index];
//               return chars[Math.floor(Math.random() * chars.length)];
//             })
//             .join(""),
//         );
//         if (iteration >= project.title.length) clearInterval(interval);
//         iteration += 1 / 3;
//       }, 30);
//     }
//     return () => clearInterval(interval);
//   }, [isHovered, project.title]);

//   return (
//     <div
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className={`relative h-[400px] sm:h-[450px] rounded-2xl overflow-hidden border border-[var(--md-sys-color-outline-variant)] cursor-pointer group transition-all duration-700 ${isHovered ? "bg-[var(--md-sys-color-surface)] shadow-2xl scale-[1.02]" : "bg-[#0a0f0a] scale-100"}`}
//     >
//       <img
//         src={project.img}
//         alt={project.title}
//         className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${isHovered ? "opacity-100 filter-none" : "opacity-10 grayscale sepia-[0.8] hue-rotate-90 saturate-200 contrast-200 blur-[2px]"}`}
//       />
//       <div
//         className={`absolute left-0 right-0 h-[2px] bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)] z-20 pointer-events-none ${isHovered ? "opacity-100 neural-scanner" : "opacity-0"}`}
//       />
//       <div
//         className={`absolute inset-0 p-6 sm:p-8 flex flex-col transition-colors duration-700 ${isHovered ? "bg-gradient-to-t from-black/95 via-black/40 to-transparent justify-end" : "bg-transparent justify-center items-center"}`}
//       >
//         <div
//           className={`mb-4 transition-all duration-500 ${isHovered ? "absolute top-6 right-6 text-[var(--md-sys-color-primary)]" : "text-green-500/50"}`}
//         >
//           {isHovered ? (
//             <Unlock className="w-5 h-5 sm:w-6 sm:h-6" />
//           ) : (
//             <Lock className="w-8 h-8 sm:w-12 sm:h-12 mb-4" />
//           )}
//         </div>
//         <h3
//           className={`font-mono font-bold tracking-widest uppercase transition-all duration-500 ${isHovered ? "text-2xl sm:text-3xl text-white mb-2" : "text-xl sm:text-2xl text-green-500/80 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"}`}
//         >
//           {displayText}
//         </h3>
//         <div
//           className={`transition-all duration-700 transform ${isHovered ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-4 absolute"}`}
//         >
//           <span className="text-[10px] sm:text-xs font-bold px-2 py-1 rounded bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] uppercase tracking-wider mb-4 inline-block shadow-sm">
//             {project.category}
//           </span>
//           <div className="flex flex-wrap gap-2 mb-6">
//             {project.tech.map((t) => (
//               <span
//                 key={t}
//                 className="text-xs text-white/90 bg-white/20 px-2 py-1 rounded backdrop-blur-md border border-white/30"
//               >
//                 {t}
//               </span>
//             ))}
//           </div>
//           <div className="flex flex-col sm:flex-row gap-3">
//             <a
//               href="#"
//               className="adw-btn adw-btn-primary px-5 py-2.5 text-xs sm:text-sm flex items-center justify-center gap-2 hover:scale-105 shadow-xl transition-all"
//             >
//               <Globe className="w-4 h-4" /> Live Demo
//             </a>
//             <a
//               href="#"
//               className="adw-btn bg-white/10 text-white border border-white/20 hover:bg-white/20 px-5 py-2.5 text-xs sm:text-sm flex items-center justify-center gap-2 hover:scale-105 transition-all"
//             >
//               <GitBranch className="w-4 h-4" /> Source Code
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ProjectsSection = () => (
//   <section id="projects" className="scroll-mt-28 sm:scroll-mt-24">
//     <FadeIn>
//       <div className="flex items-center gap-3 mb-6 sm:mb-8">
//         <Layers className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--md-sys-color-primary)]" />
//         <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-widest">
//           Encrypted Archives
//         </h2>
//       </div>
//       <div className="text-[var(--md-sys-color-on-surface-variant)] mb-8 max-w-2xl font-mono text-sm tracking-wide opacity-80">
//         <p>{" > "} SYSTEM: 4 CLASSIFIED FILES DETECTED.</p>
//         <p>{" > "} HOVER TO INITIATE DECRYPTION PROTOCOL...</p>
//       </div>
//     </FadeIn>
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
//       {PROJECTS.map((project, i) => (
//         <FadeIn
//           key={project.id}
//           delay={i * 200}
//           direction={i % 2 === 0 ? "right" : "left"}
//         >
//           <DecryptionCard project={project} />
//         </FadeIn>
//       ))}
//     </div>
//   </section>
// );
// export default ProjectsSection;

import { useState, useEffect } from "react";
import {
  ExternalLink,
  Layers,
  Globe,
  GitBranch,
  Lock,
  Unlock,
} from "lucide-react";
import FadeIn from "./FadeIn";

// --- BACKEND SCOPE PREPARATION ---
// Later, replace this static array with state populated by your Django API
const projectsData = [
  {
    id: "1",
    title: "Diagnostic Center App",
    category: "Full-Stack Web App",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Medical/Tech visualization
    tech: ["React", "Django", "MySQL", "REST API"],
    liveLink: "https://www.fortius.co.in/",
    sourceLink: "#", // Add your github link here later
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    category: "Full-Stack Web App",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // E-commerce/transaction visualization
    tech: ["React", "Django", "Tailwind CSS"],
    liveLink: "#", // Add live demo link if hosted
    sourceLink: "#", // Add your github link here later
  },
];

const DecryptionCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState(project.title);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setDisplayText(
          project.title
            .split("")
            .map(() => chars[Math.floor(Math.random() * chars.length)])
            .join(""),
        );
      }, 50);
    } else {
      let iteration = 0;
      interval = setInterval(() => {
        setDisplayText(
          project.title
            .split("")
            .map((letter, index) => {
              if (index < iteration) return project.title[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join(""),
        );
        if (iteration >= project.title.length) clearInterval(interval);
        iteration += 1 / 3;
      }, 30);
    }
    return () => clearInterval(interval);
  }, [isHovered, project.title]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative h-[400px] sm:h-[450px] rounded-2xl overflow-hidden border border-[var(--md-sys-color-outline-variant)] cursor-pointer group transition-all duration-700 ${isHovered ? "bg-[var(--md-sys-color-surface)] shadow-2xl scale-[1.02]" : "bg-[#0a0f0a] scale-100"}`}
    >
      <img
        src={project.img}
        alt={project.title}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${isHovered ? "opacity-100 filter-none" : "opacity-10 grayscale sepia-[0.8] hue-rotate-90 saturate-200 contrast-200 blur-[2px]"}`}
      />
      <div
        className={`absolute left-0 right-0 h-[2px] bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)] z-20 pointer-events-none ${isHovered ? "opacity-100 neural-scanner" : "opacity-0"}`}
      />
      <div
        className={`absolute inset-0 p-6 sm:p-8 flex flex-col transition-colors duration-700 ${isHovered ? "bg-gradient-to-t from-black/95 via-black/40 to-transparent justify-end" : "bg-transparent justify-center items-center"}`}
      >
        <div
          className={`mb-4 transition-all duration-500 ${isHovered ? "absolute top-6 right-6 text-[var(--md-sys-color-primary)]" : "text-green-500/50"}`}
        >
          {isHovered ? (
            <Unlock className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Lock className="w-8 h-8 sm:w-12 sm:h-12 mb-4" />
          )}
        </div>
        <h3
          className={`font-mono font-bold tracking-widest uppercase transition-all duration-500 ${isHovered ? "text-2xl sm:text-3xl text-white mb-2" : "text-xl sm:text-2xl text-green-500/80 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"}`}
        >
          {displayText}
        </h3>
        <div
          className={`transition-all duration-700 transform ${isHovered ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-4 absolute"}`}
        >
          <span className="text-[10px] sm:text-xs font-bold px-2 py-1 rounded bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] uppercase tracking-wider mb-4 inline-block shadow-sm">
            {project.category}
          </span>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs text-white/90 bg-white/20 px-2 py-1 rounded backdrop-blur-md border border-white/30"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="adw-btn adw-btn-primary px-5 py-2.5 text-xs sm:text-sm flex items-center justify-center gap-2 hover:scale-105 shadow-xl transition-all"
            >
              <Globe className="w-4 h-4" /> Live Demo
            </a>
            <a
              href={project.sourceLink}
              target="_blank"
              rel="noreferrer"
              className="adw-btn bg-white/10 text-white border border-white/20 hover:bg-white/20 px-5 py-2.5 text-xs sm:text-sm flex items-center justify-center gap-2 hover:scale-105 transition-all"
            >
              <GitBranch className="w-4 h-4" /> Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="scroll-mt-28 sm:scroll-mt-24">
    <FadeIn>
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <Layers className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--md-sys-color-primary)]" />
        <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-widest">
          Encrypted Archives
        </h2>
      </div>
      <div className="text-[var(--md-sys-color-on-surface-variant)] mb-8 max-w-2xl font-mono text-sm tracking-wide opacity-80">
        <p>
          {" > "} SYSTEM: {projectsData.length} CLASSIFIED FILES DETECTED.
        </p>
        <p>{" > "} HOVER TO INITIATE DECRYPTION PROTOCOL...</p>
      </div>
    </FadeIn>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
      {projectsData.map((project, i) => (
        <FadeIn
          key={project.id}
          delay={i * 200}
          direction={i % 2 === 0 ? "right" : "left"}
        >
          <DecryptionCard project={project} />
        </FadeIn>
      ))}
    </div>
  </section>
);
export default ProjectsSection;
