// import { useState, useEffect } from "react";
// import { Layers, Globe, GitBranch, Lock, Unlock, Activity } from "lucide-react";
// import FadeIn from "./FadeIn";
// import { API_BASE_URL } from "../config";

// // --- STATIC FALLBACK DATA ---
// const fallbackProjects = [
//   {
//     id: "1",
//     title: "Diagnostic Center App",
//     category: "Full-Stack Web App",
//     img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     tech: ["React", "Django", "MySQL", "REST API"],
//     live_url: "https://www.fortius.co.in/",
//     github_url: "#",
//     long_description:
//       "Engineered a comprehensive medical appointment system bridging patient bookings with clinic workflows. Built using React and Django REST Framework, the platform features role-based access control.",
//   },
//   {
//     id: "2",
//     title: "E-Commerce Platform",
//     category: "Full-Stack Web App",
//     img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     tech: ["React", "Django", "Tailwind CSS"],
//     live_url: "#",
//     github_url: "#",
//     long_description:
//       "Developed a responsive e-commerce application handling the complete customer journey. Built with React and Django REST Framework, featuring a dynamic product catalog and secure JWT authentication.",
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

//   const isLiveValid = project.live_url && project.live_url !== "#";
//   const isGithubValid = project.github_url && project.github_url !== "#";

//   return (
//     <div
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className={`relative h-[400px] sm:h-[450px] rounded-2xl overflow-hidden border border-[var(--md-sys-color-outline-variant)] cursor-pointer group transition-all duration-700 ${isHovered ? "bg-[var(--md-sys-color-surface)] shadow-2xl scale-[1.02]" : "bg-[#0a0f0a] scale-100"}`}
//     >
//       <img
//         src={project.img}
//         alt={project.title}
//         className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${isHovered ? "opacity-100 filter-none" : "opacity-15 grayscale sepia-[0.8] hue-rotate-90 saturate-200 contrast-200 blur-[2px]"}`}
//       />
//       <div
//         className={`absolute left-0 right-0 h-[2px] bg-[var(--md-sys-color-primary)] shadow-[0_0_15px_var(--md-sys-color-primary)] z-20 pointer-events-none ${isHovered ? "opacity-100 neural-scanner" : "opacity-0"}`}
//       />
//       <div
//         className={`absolute inset-0 p-6 sm:p-8 flex flex-col transition-colors duration-700 ${isHovered ? "bg-gradient-to-t from-black via-black/90 to-black/30 justify-end" : "bg-transparent justify-center items-center"}`}
//       >
//         <div
//           className={`mb-4 transition-all duration-500 ${isHovered ? "absolute top-6 right-6 text-[var(--md-sys-color-primary)]" : "text-[var(--md-sys-color-primary)] opacity-60"}`}
//         >
//           {isHovered ? (
//             <Unlock className="w-5 h-5 sm:w-6 sm:h-6" />
//           ) : (
//             <Lock className="w-8 h-8 sm:w-12 sm:h-12 mb-4" />
//           )}
//         </div>

//         <h3
//           className={`font-terminal font-bold tracking-widest uppercase transition-all duration-500 ${isHovered ? "text-2xl sm:text-3xl text-white mb-2" : "text-xl sm:text-2xl text-[var(--md-sys-color-primary)] drop-shadow-[0_0_8px_var(--md-sys-color-primary)]"}`}
//         >
//           {displayText}
//         </h3>

//         <div
//           className={`transition-all duration-700 transform flex flex-col ${isHovered ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-4 absolute pointer-events-none"}`}
//         >
//           <div className="flex items-center mb-4">
//             <span className="font-ide text-[10px] sm:text-xs font-bold px-3 py-1 rounded-sm bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] uppercase tracking-widest shadow-[0_0_15px_rgba(var(--md-sys-color-primary-rgb),0.4)]">
//               {project.category}
//             </span>
//           </div>

//           {project.long_description && (
//             <p className="font-ide text-xs sm:text-sm text-white/95 leading-relaxed tracking-wide mb-6 line-clamp-3 font-medium">
//               {project.long_description}
//             </p>
//           )}

//           {/* TECH STACK: HIGH VISIBILITY REWRITE */}
//           <div className="flex flex-wrap gap-2 mb-8">
//             {project.tech.map((t) => (
//               <span
//                 key={t}
//                 className="font-ide text-[10px] font-bold text-[var(--md-sys-color-primary)] bg-black/80 px-3 py-1.5 rounded-md border-2 border-[var(--md-sys-color-primary)] uppercase tracking-[0.1em] shadow-[inset_0_0_10px_rgba(var(--md-sys-color-primary-rgb),0.2)] hover:bg-[var(--md-sys-color-primary)] hover:text-[var(--md-sys-color-on-primary)] transition-colors duration-300"
//               >
//                 {t}
//               </span>
//             ))}
//           </div>

//           {/* BUTTONS */}
//           <div className="flex flex-col sm:flex-row gap-3 mt-auto font-terminal">
//             <a
//               href={project.live_url || "#"}
//               target={isLiveValid ? "_blank" : "_self"}
//               rel="noreferrer"
//               className={`px-5 py-3 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 rounded-md transition-all ${isLiveValid ? "bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] hover:scale-105 shadow-xl" : "bg-gray-500/50 text-white/50 cursor-not-allowed"}`}
//               onClick={(e) => !isLiveValid && e.preventDefault()}
//             >
//               <Globe className="w-4 h-4" /> LIVE_DEMO
//             </a>
//             <a
//               href={project.github_url || "#"}
//               target={isGithubValid ? "_blank" : "_self"}
//               rel="noreferrer"
//               className={`px-5 py-3 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 rounded-md border-2 transition-all ${isGithubValid ? "bg-white/10 text-white border-white/60 hover:bg-white/20 hover:scale-105" : "bg-gray-500/10 text-white/30 border-gray-500/20 cursor-not-allowed"}`}
//               onClick={(e) => !isGithubValid && e.preventDefault()}
//             >
//               <GitBranch className="w-4 h-4" /> SOURCE_CODE
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ProjectsSection = () => {
//   const [projects, setProjects] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetch(`${API_BASE_URL}api/v1/projects/`)
//       .then((res) => (res.ok ? res.json() : []))
//       .then((data) => {
//         setProjects(data);
//         setIsLoading(false);
//       })
//       .catch(() => {
//         setProjects(fallbackProjects);
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <section id="projects" className="scroll-mt-28 sm:scroll-mt-24">
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&family=Share+Tech+Mono&display=swap');
//           .font-terminal { font-family: 'Share Tech Mono', monospace; }
//           .font-ide { font-family: 'Fira Code', monospace; }

//           .neural-scanner {
//             animation: scan-line 3s ease-in-out infinite;
//           }
//           @keyframes scan-line {
//             0% { top: 0%; opacity: 0; }
//             10% { opacity: 1; }
//             90% { opacity: 1; }
//             100% { top: 100%; opacity: 0; }
//           }
//         `}
//       </style>
//       <FadeIn>
//         <div className="flex items-center gap-3 mb-6 sm:mb-8">
//           <Layers className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--md-sys-color-primary)]" />
//           <h2 className="font-terminal text-3xl sm:text-5xl font-bold uppercase tracking-widest text-[var(--md-sys-color-on-surface)]">
//             Projects
//           </h2>
//         </div>
//         <div className="text-[var(--md-sys-color-on-surface)] font-ide text-sm tracking-wide mb-8 max-w-2xl font-bold">
//           <p className="mb-1 uppercase tracking-wider">
//             {"> "} STATUS:{" "}
//             {isLoading
//               ? "SEARCHING_LOCAL_NODES..."
//               : `${projects.length} ARCHIVES_UNLOCKED`}
//           </p>
//           <p className="opacity-70 uppercase tracking-widest text-[11px]">
//             {" > "} SECURITY_PROTOCOL: HOVER_FOR_DECRYPTION
//           </p>
//         </div>
//       </FadeIn>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
//         {isLoading ? (
//           <div className="col-span-full flex flex-col items-center py-16 gap-4">
//             <Activity className="w-10 h-10 animate-spin text-[var(--md-sys-color-primary)]" />
//             <div className="font-ide text-sm tracking-[0.4em] uppercase text-[var(--md-sys-color-primary)] font-bold">
//               Initializing_Sync...
//             </div>
//           </div>
//         ) : (
//           projects.map((project, i) => (
//             <FadeIn
//               key={project.id}
//               delay={i * 200}
//               direction={i % 2 === 0 ? "right" : "left"}
//             >
//               <DecryptionCard project={project} />
//             </FadeIn>
//           ))
//         )}
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;

import { useState, useEffect } from "react";
import {
  Layers,
  Globe,
  GitBranch,
  Lock,
  Unlock,
  Activity,
  AlertTriangle,
} from "lucide-react";
import FadeIn from "./FadeIn";
import { API_BASE_URL } from "../config";

// --- STATIC FALLBACK DATA (MODIFIED FOR OFFLINE DETECTION) ---
const fallbackProjects = [
  {
    id: "1",
    title: "[Local] Diagnostic Center",
    category: "Full-Stack Web App",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Django", "MySQL", "REST API"],
    live_url: "https://www.fortius.co.in/",
    github_url: "#",
    long_description:
      "[SYS_WARN: API OFFLINE] Loading local memory... Engineered a comprehensive medical appointment system bridging patient bookings with clinic workflows. Built using React and Django REST Framework, the platform features role-based access control.",
  },
  {
    id: "2",
    title: "[Local] E-Commerce App",
    category: "Full-Stack Web App",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Django", "Tailwind CSS"],
    live_url: "#",
    github_url: "#",
    long_description:
      "[SYS_WARN: API OFFLINE] Loading local memory... Developed a responsive e-commerce application handling the complete customer journey. Built with React and Django REST Framework, featuring a dynamic product catalog and secure JWT authentication.",
  },
];

const DecryptionCard = ({ project, isOffline }) => {
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

  const isLiveValid = project.live_url && project.live_url !== "#";
  const isGithubValid = project.github_url && project.github_url !== "#";

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Added subtle offline border tint
      className={`relative h-[400px] sm:h-[450px] rounded-2xl overflow-hidden border ${isOffline ? "border-red-500/20" : "border-[var(--md-sys-color-outline-variant)]"} cursor-pointer group transition-all duration-700 ${isHovered ? "bg-[var(--md-sys-color-surface)] shadow-2xl scale-[1.02]" : "bg-[#0a0f0a] scale-100"}`}
    >
      <img
        src={project.img}
        alt={project.title}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${isHovered ? "opacity-100 filter-none" : "opacity-15 grayscale sepia-[0.8] hue-rotate-90 saturate-200 contrast-200 blur-[2px]"}`}
      />
      <div
        className={`absolute left-0 right-0 h-[2px] bg-[var(--md-sys-color-primary)] shadow-[0_0_15px_var(--md-sys-color-primary)] z-20 pointer-events-none ${isHovered ? "opacity-100 neural-scanner" : "opacity-0"}`}
      />
      <div
        className={`absolute inset-0 p-6 sm:p-8 flex flex-col transition-colors duration-700 ${isHovered ? "bg-gradient-to-t from-black via-black/90 to-black/30 justify-end" : "bg-transparent justify-center items-center"}`}
      >
        <div
          className={`mb-4 transition-all duration-500 ${isHovered ? "absolute top-6 right-6 text-[var(--md-sys-color-primary)]" : "text-[var(--md-sys-color-primary)] opacity-60"}`}
        >
          {isHovered ? (
            <Unlock className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Lock className="w-8 h-8 sm:w-12 sm:h-12 mb-4" />
          )}
        </div>

        <h3
          className={`font-terminal font-bold tracking-widest uppercase transition-all duration-500 ${isHovered ? "text-2xl sm:text-3xl text-white mb-2" : "text-xl sm:text-2xl text-[var(--md-sys-color-primary)] drop-shadow-[0_0_8px_var(--md-sys-color-primary)]"}`}
        >
          {displayText}
        </h3>

        <div
          className={`transition-all duration-700 transform flex flex-col ${isHovered ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-4 absolute pointer-events-none"}`}
        >
          <div className="flex items-center mb-4">
            <span className="font-ide text-[10px] sm:text-xs font-bold px-3 py-1 rounded-sm bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] uppercase tracking-widest shadow-[0_0_15px_rgba(var(--md-sys-color-primary-rgb),0.4)]">
              {project.category}
            </span>
          </div>

          {project.long_description && (
            <p className="font-ide text-xs sm:text-sm text-white/95 leading-relaxed tracking-wide mb-6 line-clamp-3 font-medium">
              {project.long_description}
            </p>
          )}

          {/* TECH STACK: HIGH VISIBILITY REWRITE */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-ide text-[10px] font-bold text-[var(--md-sys-color-primary)] bg-black/80 px-3 py-1.5 rounded-md border-2 border-[var(--md-sys-color-primary)] uppercase tracking-[0.1em] shadow-[inset_0_0_10px_rgba(var(--md-sys-color-primary-rgb),0.2)] hover:bg-[var(--md-sys-color-primary)] hover:text-[var(--md-sys-color-on-primary)] transition-colors duration-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 mt-auto font-terminal">
            <a
              href={project.live_url || "#"}
              target={isLiveValid ? "_blank" : "_self"}
              rel="noreferrer"
              className={`px-5 py-3 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 rounded-md transition-all ${isLiveValid ? "bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] hover:scale-105 shadow-xl" : "bg-gray-500/50 text-white/50 cursor-not-allowed"}`}
              onClick={(e) => !isLiveValid && e.preventDefault()}
            >
              <Globe className="w-4 h-4" /> LIVE_DEMO
            </a>
            <a
              href={project.github_url || "#"}
              target={isGithubValid ? "_blank" : "_self"}
              rel="noreferrer"
              className={`px-5 py-3 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 rounded-md border-2 transition-all ${isGithubValid ? "bg-white/10 text-white border-white/60 hover:bg-white/20 hover:scale-105" : "bg-gray-500/10 text-white/30 border-gray-500/20 cursor-not-allowed"}`}
              onClick={(e) => !isGithubValid && e.preventDefault()}
            >
              <GitBranch className="w-4 h-4" /> SOURCE_CODE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(false); // --- Added Offline State ---

  useEffect(() => {
    fetch(`${API_BASE_URL}api/v1/projects/`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          setProjects(data);
        } else {
          setProjects(fallbackProjects);
          setIsOffline(true);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch projects:", error);
        setProjects(fallbackProjects);
        setIsOffline(true); // --- Trigger Offline UI ---
        setIsLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="scroll-mt-28 sm:scroll-mt-24">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&family=Share+Tech+Mono&display=swap');
          .font-terminal { font-family: 'Share Tech Mono', monospace; }
          .font-ide { font-family: 'Fira Code', monospace; }

          .neural-scanner {
            animation: scan-line 3s ease-in-out infinite;
          }
          @keyframes scan-line {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        `}
      </style>
      <FadeIn>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-3">
            <Layers className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--md-sys-color-primary)]" />
            <h2 className="font-terminal text-3xl sm:text-5xl font-bold uppercase tracking-widest text-[var(--md-sys-color-on-surface)]">
              Projects
            </h2>
          </div>

          {/* --- Subtle Offline Indicator --- */}
          {isOffline && (
            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/50 text-red-500 px-3 py-1.5 rounded-md font-ide text-[10px] sm:text-xs font-bold tracking-widest uppercase animate-pulse w-fit">
              <AlertTriangle className="w-4 h-4" /> System_Fallback_Active
            </div>
          )}
        </div>
        <div className="text-[var(--md-sys-color-on-surface)] font-ide text-sm tracking-wide mb-8 max-w-2xl font-bold">
          <p className="mb-1 uppercase tracking-wider">
            {"> "} STATUS:{" "}
            {isLoading
              ? "SEARCHING_LOCAL_NODES..."
              : isOffline
                ? "OFFLINE_CACHE_DEPLOYED"
                : `${projects.length} ARCHIVES_UNLOCKED`}
          </p>
          <p className="opacity-70 uppercase tracking-widest text-[11px]">
            {" > "} SECURITY_PROTOCOL: HOVER_FOR_DECRYPTION
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
        {isLoading ? (
          <div className="col-span-full flex flex-col items-center py-16 gap-4">
            <Activity className="w-10 h-10 animate-spin text-[var(--md-sys-color-primary)]" />
            <div className="font-ide text-sm tracking-[0.4em] uppercase text-[var(--md-sys-color-primary)] font-bold">
              Initializing_Sync...
            </div>
          </div>
        ) : (
          projects.map((project, i) => (
            <FadeIn
              key={project.id}
              delay={i * 200}
              direction={i % 2 === 0 ? "right" : "left"}
            >
              <DecryptionCard project={project} isOffline={isOffline} />
            </FadeIn>
          ))
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
