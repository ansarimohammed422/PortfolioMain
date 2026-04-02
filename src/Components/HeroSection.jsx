// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import FadeIn from "./FadeIn";
// import {
//   ArrowRight,
//   Terminal,
//   Menu,
//   X,
//   BookOpen,
//   GitBranch,
//   ArrowLeft,
//   BookText,
// } from "lucide-react";

// // --- BACKEND SCOPE PREPARATION ---
// // Later, replace this static object with state populated by your Django API
// const profileData = {
//   name: "Mohammed Ansari",
//   role: "Software Developer",
//   subRole: "Full-Stack Programmer.",
//   status: "Fresher. Ready to contribute.",
//   bio: "Aspiring Software Developer with a solid foundation in full-stack web technologies (React, Django), multiple programming languages, and Linux environments.",
//   email: "ansarimohammed122@gmail.com",
//   phone: "+91 9326797184",
//   linkedin: "https://www.linkedin.com/in/mohammed-ansari-690524266",
//   github: "https://github.com", // Add your specific link here
//   location: "Mumbai, Maharashtra",
//   education: "B.Sc in Information Technology",
//   skillsList:
//     "> Frontend: React, Tailwind CSS, HTML, CSS\n> Backend: Django, REST APIs, PHP\n> Languages: Python, JavaScript, Java, C++, C\n> Tools & DB: Linux CLI, Git, MySQL",
// };

// const HeroSection = ({ scrollTo, isDarkMode }) => {
//   const [history, setHistory] = useState([
//     {
//       cmd: "",
//       output:
//         'Welcome to Kinetic Env v1.0.0\nType "help" to see available commands.',
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [showDocs, setShowDocs] = useState(false);
//   const terminalRef = useRef(null);

//   // Inverse M3E Theme Mapping for Terminal (Opposite of Site)
//   // Highly optimized for WCAG contrast readability
//   const termColors = isDarkMode
//     ? {
//         surface: "bg-[#F4F6E9]",
//         surfaceVariant: "bg-[#E2E6D5]",
//         border: "border-[#C6CAB9]",
//         text: "text-[#131410]", // Darkened for pure contrast
//         textMuted: "text-[#2E3128]", // Darkened to improve readability
//         primary: "text-[#435033]",
//         secondary: "text-[#161F0A]",
//         placeholder: "placeholder:text-[#5E6355]", // Darkened placeholder
//         scrollThumb: "scrollbar-thumb-[#C6CAB9]",
//         btnHover: "hover:bg-[#C6CAB9]",
//       }
//     : {
//         surface: "bg-[#0E120A]", // Darkened for better background contrast
//         surfaceVariant: "bg-[#25301B]",
//         border: "border-[#3A4A2B]",
//         text: "text-[#F4F6E9]", // Brightened off-white
//         textMuted: "text-[#D3DAC6]", // Brightened muted text
//         primary: "text-[#A5D27E]",
//         secondary: "text-[#C2F098]",
//         placeholder: "placeholder:text-[#A1AD8E]", // Brightened placeholder
//         scrollThumb: "scrollbar-thumb-[#3A4A2B]",
//         btnHover: "hover:bg-[#2A361F]",
//       };

//   // Documentation Theme Mapping (Matches Native Site Theme)
//   const docColors = {
//     surface: "bg-[var(--md-sys-color-surface)]",
//     surfaceVariant: "bg-[var(--md-sys-color-surface-variant)]",
//     border: "border-[var(--md-sys-color-outline-variant)]",
//     text: "text-[var(--md-sys-color-on-surface)]",
//     textMuted: "text-[var(--md-sys-color-on-surface-variant)]",
//     primary: "text-[var(--md-sys-color-primary)]",
//     bgHover: "hover:bg-[var(--md-sys-color-surface-variant-hover)]",
//     scrollThumb: "scrollbar-thumb-[var(--md-sys-color-outline-variant)]",
//   };

//   useEffect(() => {
//     if (terminalRef.current && !showDocs) {
//       terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
//     }
//   }, [history, showDocs]);

//   const handleCommand = (e) => {
//     if (e.key === "Enter") {
//       const rawCmd = input.trim();
//       const cmd = rawCmd.toLowerCase();
//       let output = "";

//       if (cmd === "clear") {
//         setHistory([]);
//         setInput("");
//         return;
//       }

//       // 1. Dynamic Section Routing
//       const validSections = [
//         "about",
//         "services",
//         "experience",
//         "education",
//         "projects",
//         "contact",
//       ];
//       if (validSections.includes(cmd)) {
//         output = `Executing scroll sequence to module: [${cmd.toUpperCase()}]...`;
//         setTimeout(() => scrollTo(`#${cmd}`), 600);
//       }
//       // 2. Standard Commands
//       else {
//         switch (cmd) {
//           case "help":
//             output =
//               "Available commands:\n  whoami     - Print user information\n  skills     - List technical proficiencies\n  details    - View personal data\n  [section]  - Type any section (e.g., education, projects) to navigate\n  email      - Output contact email\n  github     - Display GitHub profile link\n  linkedin   - Display LinkedIn profile link\n  twitter    - Display Twitter profile link\n  neofetch   - Display system information\n  date       - Print current date and time\n  reboot     - Restart the kinetic environment\n  clear      - Clear terminal output";
//             break;
//           case "whoami":
//             output = `${profileData.name}\n${profileData.role} | ${profileData.subRole}`;
//             break;
//           case "details":
//           case "info":
//             output = `NAME: ${profileData.name}\nROLE: ${profileData.role}\nLOCATION: ${profileData.location}\nEDUCATION: ${profileData.education}\nFOCUS: React, Django, Full-Stack Web Development`;
//             break;
//           case "skills":
//             output = profileData.skillsList;
//             break;
//           case "email":
//             output = `Contact Email: ${profileData.email}\nPhone: ${profileData.phone}`;
//             break;
//           case "github":
//             output = `GitHub Repository: ${profileData.github}\n(Command+Click or Ctrl+Click to open)`;
//             break;
//           case "linkedin":
//             output = `LinkedIn Network: ${profileData.linkedin}`;
//             break;
//           case "twitter":
//           case "x":
//             output = "Twitter/X: Not currently active on this frequency.";
//             break;
//           case "neofetch":
//             output = `
//        .--------------.     mohammed@kinetic-env
//        |    < / >     |     --------------------
//        |   React.js   |     OS: Web Env v1.0
//        |   Django     |     Host: React DOM
//        '--------------'     Kernel: JavaScript (V8)
//         /============\\       Uptime: ${Math.floor(performance.now() / 1000)}s
//       /==============\\       Role: ${profileData.role}
//                              Stack: React, Django, Tailwind
//                              Location: ${profileData.location}
//                              Education: ${profileData.education}
//                              CPU: Brain (1 core, continuous learning)
//                              Memory: High capacity for new tech
//             `;
//             break;
//           case "date":
//             output = new Date().toString();
//             break;
//           case "reboot":
//             output = "Rebooting system...";
//             setTimeout(() => window.location.reload(), 1200);
//             break;
//           case "sudo":
//             output =
//               "mohammed is not in the sudoers file. This incident will be reported.";
//             break;
//           case "":
//             output = "";
//             break;
//           default:
//             if (cmd.startsWith("echo ")) {
//               output = rawCmd.substring(5);
//             } else {
//               output = `zsh: command not found: ${cmd}\nType "help" for a list of available commands.`;
//             }
//         }
//       }

//       setHistory((prev) => [...prev, { cmd: rawCmd, output }]);
//       setInput("");
//     }
//   };

//   const handleBlogDemo = (e) => {
//     e.preventDefault();
//     setHistory((prev) => [
//       ...prev,
//       {
//         cmd: "curl -O https://blog.kinetic.env",
//         output:
//           "> Resolving host blog.kinetic.env...\n> Connecting to server...\n> Rendering latest articles...\n(Integration coming soon!)",
//       },
//     ]);
//   };

//   return (
//     <section className="min-h-[75vh] flex flex-col justify-center pt-8 sm:pt-16 relative">
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&family=Share+Tech+Mono&display=swap');

//           .font-terminal {
//             font-family: 'Share Tech Mono', monospace;
//           }
//           .font-ide {
//             font-family: 'Fira Code', monospace;
//           }
//         `}
//       </style>

//       {/* Background Ambient Glow */}
//       <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-[var(--md-sys-color-primary)]/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none" />

//       {/* Top Row: Text & Terminal */}
//       <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between z-10 mb-12">
//         {/* Left Column: Cinematic Typography & Actions */}
//         <div className="flex-1 w-full relative z-10 flex flex-col items-start text-left min-w-[280px] sm:min-w-[320px]">
//           <FadeIn delay={100}>
//             {/* Added font-ide for the technical status badge */}
//             <div className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--md-sys-color-surface-variant)] text-[var(--md-sys-color-on-surface)] font-bold text-xs sm:text-sm mb-8 border border-[var(--md-sys-color-outline-variant)] hover:border-[var(--md-sys-color-primary)] hover:bg-[var(--md-sys-color-primary-container)] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-md cursor-default">
//               <span className="relative flex h-2.5 w-2.5">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--md-sys-color-primary)] opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--md-sys-color-primary)]"></span>
//               </span>
//               <span className="font-ide">{profileData.status}</span>
//             </div>
//           </FadeIn>

//           {/* Changed font-mono to font-terminal for maximum hacking impact */}
//           <h1 className="text-[3rem] sm:text-5xl md:text-[3.5rem] lg:text-[4.5rem] font-extrabold tracking-tight leading-[1] text-[var(--md-sys-color-on-surface)] mb-6 font-terminal transition-colors duration-700">
//             <span className="block overflow-hidden pb-1">
//               <motion.span
//                 initial={{ y: "100%" }}
//                 animate={{ y: 0 }}
//                 transition={{
//                   duration: 0.8,
//                   ease: [0.25, 1, 0.5, 1],
//                   delay: 0.1,
//                 }}
//                 className="inline-block text-[var(--md-sys-color-primary)]"
//               >
//                 Software
//               </motion.span>
//             </span>
//             <span className="block overflow-hidden pb-1">
//               <motion.span
//                 initial={{ y: "100%" }}
//                 animate={{ y: 0 }}
//                 transition={{
//                   duration: 0.8,
//                   ease: [0.25, 1, 0.5, 1],
//                   delay: 0.2,
//                 }}
//                 className="inline-block"
//               >
//                 Developer.
//               </motion.span>
//             </span>
//             <span className="block overflow-hidden mt-3 sm:mt-4">
//               <motion.span
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{
//                   duration: 1,
//                   ease: [0.25, 1, 0.5, 1],
//                   delay: 0.6,
//                 }}
//                 className="inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[var(--md-sys-color-on-surface-variant)] font-semibold tracking-wide font-sans"
//               >
//                 {profileData.subRole}
//               </motion.span>
//             </span>
//           </h1>

//           <FadeIn delay={400}>
//             <p className="text-base sm:text-lg md:text-xl text-[var(--md-sys-color-on-surface)] max-w-[480px] leading-relaxed mb-6 font-medium">
//               {profileData.bio}
//             </p>
//           </FadeIn>
//         </div>

//         {/* Right Column: Interactive Console */}
//         <FadeIn
//           delay={700}
//           className="block flex-[1.4] w-full max-w-[600px] xl:max-w-[640px] min-w-[280px] lg:ml-auto shrink transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
//         >
//           <div
//             className={`w-full aspect-[4/3] rounded-xl ${showDocs ? docColors.surface : termColors.surface} border ${showDocs ? docColors.border : termColors.border} shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden group hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)] transition-all duration-700`}
//           >
//             {/* Window Header Bar */}
//             <div
//               className={`h-12 ${showDocs ? docColors.surfaceVariant : termColors.surfaceVariant} border-b ${showDocs ? docColors.border : termColors.border} flex items-center justify-between px-3 shrink-0 select-none transition-colors duration-700`}
//             >
//               <div className="flex-1 flex items-center justify-start">
//                 <div
//                   onClick={() => setShowDocs(!showDocs)}
//                   className={`p-1.5 rounded-md ${showDocs ? docColors.bgHover : termColors.btnHover} transition-colors cursor-pointer`}
//                   title={showDocs ? "Back to Terminal" : "Open Documentation"}
//                 >
//                   {showDocs ? (
//                     <ArrowLeft
//                       className={`w-4 h-4 ${docColors.textMuted} transition-colors duration-700`}
//                     />
//                   ) : (
//                     <Menu
//                       className={`w-4 h-4 ${termColors.textMuted} transition-colors duration-700`}
//                     />
//                   )}
//                 </div>
//               </div>

//               {/* Added font-ide for the top bar title */}
//               <div
//                 className={`font-ide text-[12px] font-semibold ${showDocs ? docColors.text : termColors.text} tracking-wider flex items-center gap-2 transition-colors duration-700`}
//               >
//                 {showDocs ? (
//                   <>
//                     <BookText className="w-3.5 h-3.5" /> Reference Manual
//                   </>
//                 ) : (
//                   "mohammed@kinetic-env:~"
//                 )}
//               </div>

//               <div className="flex-1 flex items-center justify-end">
//                 <div className="p-1.5 rounded-full hover:bg-[#cc3333] hover:text-white transition-colors cursor-pointer ml-1 flex items-center justify-center group/close">
//                   <X
//                     className={`w-4 h-4 ${showDocs ? docColors.textMuted : termColors.textMuted} transition-colors duration-700 group-hover/close:text-white`}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Window Body Swapper */}
//             {showDocs ? (
//               /* Documentation View */
//               <div
//                 className={`flex-1 p-5 overflow-y-auto text-[13px] sm:text-sm ${docColors.textMuted} flex flex-col gap-6 scrollbar-thin ${docColors.scrollThumb} scrollbar-track-transparent transition-colors duration-700`}
//               >
//                 <div>
//                   <h3
//                     className={`text-lg sm:text-xl font-bold ${docColors.text} mb-2 tracking-wide font-terminal uppercase`}
//                   >
//                     Terminal Commands
//                   </h3>
//                   <p className="leading-relaxed">
//                     Welcome to the Kinetic Environment. The terminal interface
//                     supports standard navigation and execution commands to
//                     explore this portfolio.
//                   </p>
//                 </div>

//                 <div className="space-y-4">
//                   <h4
//                     className={`text-xs font-bold uppercase tracking-wider ${docColors.text}`}
//                   >
//                     Navigation Actions
//                   </h4>
//                   <div className="grid grid-cols-1 gap-3">
//                     {[
//                       {
//                         cmd: "about, projects, contact...",
//                         desc: "Type any section name to scroll there directly.",
//                       },
//                       {
//                         cmd: "clear",
//                         desc: "Clear the terminal output history.",
//                       },
//                     ].map((item) => (
//                       <div key={item.cmd} className="flex flex-col gap-1.5">
//                         <code
//                           className={`font-ide font-bold px-2.5 py-1.5 rounded-md w-fit bg-[var(--md-sys-color-surface-variant)] ${docColors.primary} border border-[var(--md-sys-color-outline-variant)]`}
//                         >
//                           {item.cmd}
//                         </code>
//                         <span className="text-xs font-medium">{item.desc}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <h4
//                     className={`text-xs font-bold uppercase tracking-wider ${docColors.text}`}
//                   >
//                     System & Data Queries
//                   </h4>
//                   <div className="grid grid-cols-1 gap-3">
//                     {[
//                       {
//                         cmd: "whoami",
//                         desc: "Print current user identity and role.",
//                       },
//                       {
//                         cmd: "details / info",
//                         desc: "View expanded personal and focus data.",
//                       },
//                       {
//                         cmd: "skills",
//                         desc: "List technical proficiencies and tooling.",
//                       },
//                       {
//                         cmd: "email / github / linkedin",
//                         desc: "Output respective professional links.",
//                       },
//                       {
//                         cmd: "neofetch",
//                         desc: "Display system information and ASCII art.",
//                       },
//                       {
//                         cmd: "date",
//                         desc: "Print current system date and time.",
//                       },
//                       {
//                         cmd: "reboot",
//                         desc: "Restart the kinetic environment.",
//                       },
//                     ].map((item) => (
//                       <div key={item.cmd} className="flex flex-col gap-1.5">
//                         <code
//                           className={`font-ide font-bold px-2.5 py-1.5 rounded-md w-fit bg-[var(--md-sys-color-surface-variant)] ${docColors.primary} border border-[var(--md-sys-color-outline-variant)]`}
//                         >
//                           {item.cmd}
//                         </code>
//                         <span className="text-xs font-medium">{item.desc}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               /* Terminal View */
//               <div
//                 ref={terminalRef}
//                 // Replaced font-mono with font-ide for the entire terminal body
//                 className={`flex-1 p-5 overflow-y-auto font-ide text-[12px] sm:text-[13px] ${termColors.textMuted} flex flex-col gap-3 cursor-text scrollbar-thin ${termColors.scrollThumb} scrollbar-track-transparent transition-colors duration-700`}
//                 onClick={() =>
//                   document.getElementById("terminal-input")?.focus()
//                 }
//               >
//                 {history.map((entry, i) => (
//                   <div
//                     key={i}
//                     className="flex flex-col gap-1 whitespace-pre-wrap break-words"
//                   >
//                     {entry.cmd && (
//                       <div className="flex items-center gap-2">
//                         <span
//                           className={`${termColors.primary} font-bold transition-colors duration-700`}
//                         >
//                           ➜
//                         </span>
//                         <span
//                           className={`${termColors.secondary} font-bold transition-colors duration-700`}
//                         >
//                           ~
//                         </span>
//                         <span
//                           className={`${termColors.text} font-medium transition-colors duration-700`}
//                         >
//                           {entry.cmd}
//                         </span>
//                       </div>
//                     )}
//                     {entry.output && (
//                       <div
//                         className={`${termColors.textMuted} font-medium leading-relaxed tracking-wide transition-colors duration-700`}
//                       >
//                         {entry.output}
//                       </div>
//                     )}
//                   </div>
//                 ))}

//                 {/* Active Input Line */}
//                 <div className="flex items-center gap-2 mt-1">
//                   <span
//                     className={`${termColors.primary} font-bold transition-colors duration-700`}
//                   >
//                     ➜
//                   </span>
//                   <span
//                     className={`${termColors.secondary} font-bold transition-colors duration-700`}
//                   >
//                     ~
//                   </span>
//                   <input
//                     id="terminal-input"
//                     type="text"
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     onKeyDown={handleCommand}
//                     // Applied font-ide here to ensure input matches the history logs
//                     className={`flex-1 bg-transparent outline-none ${termColors.text} font-ide font-medium ${termColors.placeholder} tracking-wide transition-colors duration-700 w-full`}
//                     autoComplete="off"
//                     spellCheck="false"
//                     autoFocus
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//         </FadeIn>
//       </div>

//       {/* Bottom Row: External Actions */}
//       <FadeIn
//         delay={500}
//         className="w-full flex flex-col sm:flex-row gap-4 z-10"
//       >
//         <a
//           href="#projects"
//           onClick={() => scrollTo("#projects")}
//           className="adw-btn adw-btn-primary w-full sm:w-1/2 group flex items-center justify-center gap-3 px-4 py-4 text-sm sm:text-base font-bold whitespace-nowrap cursor-pointer tracking-wide"
//         >
//           <BookOpen className="w-5 h-5 shrink-0 group-hover:-translate-y-1 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" />
//           <span className="font-ide uppercase tracking-wider">
//             View My Projects
//           </span>
//         </a>
//         <a
//           href={profileData.github}
//           target="_blank"
//           rel="noreferrer"
//           className="adw-btn adw-btn-secondary bg-transparent border-2 w-full sm:w-1/2 flex items-center justify-center gap-3 px-4 py-4 text-sm sm:text-base font-bold hover:bg-[var(--md-sys-color-surface-variant)] whitespace-nowrap cursor-pointer tracking-wide"
//         >
//           <GitBranch className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" />
//           <span className="font-ide uppercase tracking-wider">
//             GitHub Profile
//           </span>
//         </a>
//       </FadeIn>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import {
  ArrowRight,
  Terminal,
  Menu,
  X,
  BookOpen,
  GitBranch,
  ArrowLeft,
  BookText,
} from "lucide-react";
import { API_BASE_URL } from "../config"; // Ensure this path matches where you created config.js

// --- BACKEND SCOPE PREPARATION ---
const profileData = {
  name: "Mohammed Ansari",
  role: "Software Developer",
  subRole: "Full-Stack Programmer.",
  status: "Fresher. Ready to contribute.",
  bio: "Aspiring Software Developer with a solid foundation in full-stack web technologies (React, Django), multiple programming languages, and Linux environments.",
  email: "ansarimohammed122@gmail.com",
  phone: "+91 9326797184",
  linkedin: "https://www.linkedin.com/in/mohammed-ansari-690524266",
  github: "https://github.com",
  location: "Mumbai, Maharashtra",
  education: "B.Sc in Information Technology",
  // Fallback skills if the API is offline
  skillsList:
    "> Frontend: React, Tailwind CSS, HTML, CSS\n> Backend: Django, REST APIs, PHP\n> Languages: Python, JavaScript, Java, C++, C\n> Tools & DB: Linux CLI, Git, MySQL",
};

const HeroSection = ({ scrollTo, isDarkMode }) => {
  const [history, setHistory] = useState([
    {
      cmd: "",
      output:
        'Welcome to Kinetic Env v1.0.0\nType "help" to see available commands.',
    },
  ]);
  const [input, setInput] = useState("");
  const [showDocs, setShowDocs] = useState(false);
  const [dynamicSkills, setDynamicSkills] = useState(null);
  const terminalRef = useRef(null);

  // --- FETCH SKILLS FOR TERMINAL ---
  useEffect(() => {
    console.log("CURRENT API TARGET:", API_BASE_URL);
    fetch(`${API_BASE_URL}api/v1/skills/`)
      .then((res) => {
        if (!res.ok) throw new Error("API Offline");
        return res.json();
      })
      .then((data) => {
        // Map the array of objects into a clean terminal string
        const formattedSkills =
          "SYSTEM DEPENDENCIES:\n> " + data.map((s) => s.name).join("\n> ");
        setDynamicSkills(formattedSkills);
      })
      .catch((error) => {
        console.error("Failed to fetch skills for terminal:", error);
      });
  }, []);

  // Inverse M3E Theme Mapping for Terminal
  const termColors = isDarkMode
    ? {
        surface: "bg-[#F4F6E9]",
        surfaceVariant: "bg-[#E2E6D5]",
        border: "border-[#C6CAB9]",
        text: "text-[#131410]",
        textMuted: "text-[#2E3128]",
        primary: "text-[#435033]",
        secondary: "text-[#161F0A]",
        placeholder: "placeholder:text-[#5E6355]",
        scrollThumb: "scrollbar-thumb-[#C6CAB9]",
        btnHover: "hover:bg-[#C6CAB9]",
      }
    : {
        surface: "bg-[#0E120A]",
        surfaceVariant: "bg-[#25301B]",
        border: "border-[#3A4A2B]",
        text: "text-[#F4F6E9]",
        textMuted: "text-[#D3DAC6]",
        primary: "text-[#A5D27E]",
        secondary: "text-[#C2F098]",
        placeholder: "placeholder:text-[#A1AD8E]",
        scrollThumb: "scrollbar-thumb-[#3A4A2B]",
        btnHover: "hover:bg-[#2A361F]",
      };

  const docColors = {
    surface: "bg-[var(--md-sys-color-surface)]",
    surfaceVariant: "bg-[var(--md-sys-color-surface-variant)]",
    border: "border-[var(--md-sys-color-outline-variant)]",
    text: "text-[var(--md-sys-color-on-surface)]",
    textMuted: "text-[var(--md-sys-color-on-surface-variant)]",
    primary: "text-[var(--md-sys-color-primary)]",
    bgHover: "hover:bg-[var(--md-sys-color-surface-variant-hover)]",
    scrollThumb: "scrollbar-thumb-[var(--md-sys-color-outline-variant)]",
  };

  useEffect(() => {
    if (terminalRef.current && !showDocs) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, showDocs]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const rawCmd = input.trim();
      const cmd = rawCmd.toLowerCase();
      let output = "";

      if (cmd === "clear") {
        setHistory([]);
        setInput("");
        return;
      }

      const validSections = [
        "about",
        "services",
        "experience",
        "education",
        "projects",
        "contact",
      ];

      if (validSections.includes(cmd)) {
        output = `Executing scroll sequence to module: [${cmd.toUpperCase()}]...`;
        setTimeout(() => scrollTo(`#${cmd}`), 600);
      } else {
        switch (cmd) {
          case "help":
            output =
              "Available commands:\n  whoami     - Print user information\n  skills     - List technical proficiencies\n  details    - View personal data\n  [section]  - Type any section (e.g., education, projects) to navigate\n  email      - Output contact email\n  github     - Display GitHub profile link\n  linkedin   - Display LinkedIn profile link\n  twitter    - Display Twitter profile link\n  neofetch   - Display system information\n  date       - Print current date and time\n  reboot     - Restart the kinetic environment\n  clear      - Clear terminal output";
            break;
          case "whoami":
            output = `${profileData.name}\n${profileData.role} | ${profileData.subRole}`;
            break;
          case "details":
          case "info":
            output = `NAME: ${profileData.name}\nROLE: ${profileData.role}\nLOCATION: ${profileData.location}\nEDUCATION: ${profileData.education}\nFOCUS: React, Django, Full-Stack Web Development`;
            break;
          case "skills":
            // Uses dynamic skills if API fetch succeeded, otherwise uses fallback
            output = dynamicSkills || profileData.skillsList;
            break;
          case "email":
            output = `Contact Email: ${profileData.email}\nPhone: ${profileData.phone}`;
            break;
          case "github":
            output = `GitHub Repository: ${profileData.github}\n(Command+Click or Ctrl+Click to open)`;
            break;
          case "linkedin":
            output = `LinkedIn Network: ${profileData.linkedin}`;
            break;
          case "twitter":
          case "x":
            output = "Twitter/X: Not currently active on this frequency.";
            break;
          case "neofetch":
            output = `
       .--------------.     mohammed@kinetic-env
       |    < / >     |     --------------------
       |   React.js   |     OS: Web Env v1.0
       |   Django     |     Host: React DOM
       '--------------'     Kernel: JavaScript (V8)
        /============\\       Uptime: ${Math.floor(performance.now() / 1000)}s
      /==============\\       Role: ${profileData.role}
                             Stack: React, Django, Tailwind
                             Location: ${profileData.location}
                             Education: ${profileData.education}
                             CPU: Brain (1 core, continuous learning)
                             Memory: High capacity for new tech
            `;
            break;
          case "date":
            output = new Date().toString();
            break;
          case "reboot":
            output = "Rebooting system...";
            setTimeout(() => window.location.reload(), 1200);
            break;
          case "sudo":
            output =
              "mohammed is not in the sudoers file. This incident will be reported.";
            break;
          case "":
            output = "";
            break;
          default:
            if (cmd.startsWith("echo ")) {
              output = rawCmd.substring(5);
            } else {
              output = `zsh: command not found: ${cmd}\nType "help" for a list of available commands.`;
            }
        }
      }

      setHistory((prev) => [...prev, { cmd: rawCmd, output }]);
      setInput("");
    }
  };

  return (
    <section className="min-h-[75vh] flex flex-col justify-center pt-8 sm:pt-16 relative">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&family=Share+Tech+Mono&display=swap');

          .font-terminal {
            font-family: 'Share Tech Mono', monospace;
          }
          .font-ide {
            font-family: 'Fira Code', monospace;
          }
        `}
      </style>

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-[var(--md-sys-color-primary)]/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none" />

      {/* Top Row: Text & Terminal */}
      <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between z-10 mb-12">
        {/* Left Column: Cinematic Typography & Actions */}
        <div className="flex-1 w-full relative z-10 flex flex-col items-start text-left min-w-[280px] sm:min-w-[320px]">
          <FadeIn delay={100}>
            <div className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--md-sys-color-surface-variant)] text-[var(--md-sys-color-on-surface)] font-bold text-xs sm:text-sm mb-8 border border-[var(--md-sys-color-outline-variant)] hover:border-[var(--md-sys-color-primary)] hover:bg-[var(--md-sys-color-primary-container)] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-md cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--md-sys-color-primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--md-sys-color-primary)]"></span>
              </span>
              <span className="font-ide">{profileData.status}</span>
            </div>
          </FadeIn>

          <h1 className="text-[3rem] sm:text-5xl md:text-[3.5rem] lg:text-[4.5rem] font-extrabold tracking-tight leading-[1] text-[var(--md-sys-color-on-surface)] mb-6 font-terminal transition-colors duration-700">
            <span className="block overflow-hidden pb-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 1, 0.5, 1],
                  delay: 0.1,
                }}
                className="inline-block text-[var(--md-sys-color-primary)]"
              >
                Software
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 1, 0.5, 1],
                  delay: 0.2,
                }}
                className="inline-block"
              >
                Developer.
              </motion.span>
            </span>
            <span className="block overflow-hidden mt-3 sm:mt-4">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.25, 1, 0.5, 1],
                  delay: 0.6,
                }}
                className="inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[var(--md-sys-color-on-surface-variant)] font-semibold tracking-wide font-sans"
              >
                {profileData.subRole}
              </motion.span>
            </span>
          </h1>

          <FadeIn delay={400}>
            <p className="text-base sm:text-lg md:text-xl text-[var(--md-sys-color-on-surface)] max-w-[480px] leading-relaxed mb-6 font-medium">
              {profileData.bio}
            </p>
          </FadeIn>
        </div>

        {/* Right Column: Interactive Console */}
        <FadeIn
          delay={700}
          className="block flex-[1.4] w-full max-w-[600px] xl:max-w-[640px] min-w-[280px] lg:ml-auto shrink transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
        >
          <div
            className={`w-full aspect-[4/3] rounded-xl ${showDocs ? docColors.surface : termColors.surface} border ${showDocs ? docColors.border : termColors.border} shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden group hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)] transition-all duration-700`}
          >
            {/* Window Header Bar */}
            <div
              className={`h-12 ${showDocs ? docColors.surfaceVariant : termColors.surfaceVariant} border-b ${showDocs ? docColors.border : termColors.border} flex items-center justify-between px-3 shrink-0 select-none transition-colors duration-700`}
            >
              <div className="flex-1 flex items-center justify-start">
                <div
                  onClick={() => setShowDocs(!showDocs)}
                  className={`p-1.5 rounded-md ${showDocs ? docColors.bgHover : termColors.btnHover} transition-colors cursor-pointer`}
                  title={showDocs ? "Back to Terminal" : "Open Documentation"}
                >
                  {showDocs ? (
                    <ArrowLeft
                      className={`w-4 h-4 ${docColors.textMuted} transition-colors duration-700`}
                    />
                  ) : (
                    <Menu
                      className={`w-4 h-4 ${termColors.textMuted} transition-colors duration-700`}
                    />
                  )}
                </div>
              </div>

              <div
                className={`font-ide text-[12px] font-semibold ${showDocs ? docColors.text : termColors.text} tracking-wider flex items-center gap-2 transition-colors duration-700`}
              >
                {showDocs ? (
                  <>
                    <BookText className="w-3.5 h-3.5" /> Reference Manual
                  </>
                ) : (
                  "mohammed@kinetic-env:~"
                )}
              </div>

              <div className="flex-1 flex items-center justify-end">
                <div className="p-1.5 rounded-full hover:bg-[#cc3333] hover:text-white transition-colors cursor-pointer ml-1 flex items-center justify-center group/close">
                  <X
                    className={`w-4 h-4 ${showDocs ? docColors.textMuted : termColors.textMuted} transition-colors duration-700 group-hover/close:text-white`}
                  />
                </div>
              </div>
            </div>

            {/* Window Body Swapper */}
            {showDocs ? (
              /* Documentation View */
              <div
                className={`flex-1 p-5 overflow-y-auto text-[13px] sm:text-sm ${docColors.textMuted} flex flex-col gap-6 scrollbar-thin ${docColors.scrollThumb} scrollbar-track-transparent transition-colors duration-700`}
              >
                <div>
                  <h3
                    className={`text-lg sm:text-xl font-bold ${docColors.text} mb-2 tracking-wide font-terminal uppercase`}
                  >
                    Terminal Commands
                  </h3>
                  <p className="leading-relaxed">
                    Welcome to the Kinetic Environment. The terminal interface
                    supports standard navigation and execution commands to
                    explore this portfolio.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4
                    className={`text-xs font-bold uppercase tracking-wider ${docColors.text}`}
                  >
                    Navigation Actions
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      {
                        cmd: "about, projects, contact...",
                        desc: "Type any section name to scroll there directly.",
                      },
                      {
                        cmd: "clear",
                        desc: "Clear the terminal output history.",
                      },
                    ].map((item) => (
                      <div key={item.cmd} className="flex flex-col gap-1.5">
                        <code
                          className={`font-ide font-bold px-2.5 py-1.5 rounded-md w-fit bg-[var(--md-sys-color-surface-variant)] ${docColors.primary} border border-[var(--md-sys-color-outline-variant)]`}
                        >
                          {item.cmd}
                        </code>
                        <span className="text-xs font-medium">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4
                    className={`text-xs font-bold uppercase tracking-wider ${docColors.text}`}
                  >
                    System & Data Queries
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      {
                        cmd: "whoami",
                        desc: "Print current user identity and role.",
                      },
                      {
                        cmd: "details / info",
                        desc: "View expanded personal and focus data.",
                      },
                      {
                        cmd: "skills",
                        desc: "List technical proficiencies and tooling.",
                      },
                      {
                        cmd: "email / github / linkedin",
                        desc: "Output respective professional links.",
                      },
                      {
                        cmd: "neofetch",
                        desc: "Display system information and ASCII art.",
                      },
                      {
                        cmd: "date",
                        desc: "Print current system date and time.",
                      },
                      {
                        cmd: "reboot",
                        desc: "Restart the kinetic environment.",
                      },
                    ].map((item) => (
                      <div key={item.cmd} className="flex flex-col gap-1.5">
                        <code
                          className={`font-ide font-bold px-2.5 py-1.5 rounded-md w-fit bg-[var(--md-sys-color-surface-variant)] ${docColors.primary} border border-[var(--md-sys-color-outline-variant)]`}
                        >
                          {item.cmd}
                        </code>
                        <span className="text-xs font-medium">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Terminal View */
              <div
                ref={terminalRef}
                className={`flex-1 p-5 overflow-y-auto font-ide text-[12px] sm:text-[13px] ${termColors.textMuted} flex flex-col gap-3 cursor-text scrollbar-thin ${termColors.scrollThumb} scrollbar-track-transparent transition-colors duration-700`}
                onClick={() =>
                  document.getElementById("terminal-input")?.focus()
                }
              >
                {history.map((entry, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-1 whitespace-pre-wrap break-words"
                  >
                    {entry.cmd && (
                      <div className="flex items-center gap-2">
                        <span
                          className={`${termColors.primary} font-bold transition-colors duration-700`}
                        >
                          ➜
                        </span>
                        <span
                          className={`${termColors.secondary} font-bold transition-colors duration-700`}
                        >
                          ~
                        </span>
                        <span
                          className={`${termColors.text} font-medium transition-colors duration-700`}
                        >
                          {entry.cmd}
                        </span>
                      </div>
                    )}
                    {entry.output && (
                      <div
                        className={`${termColors.textMuted} font-medium leading-relaxed tracking-wide transition-colors duration-700`}
                      >
                        {entry.output}
                      </div>
                    )}
                  </div>
                ))}

                {/* Active Input Line */}
                <div className="flex items-center gap-2 mt-1">
                  <span
                    className={`${termColors.primary} font-bold transition-colors duration-700`}
                  >
                    ➜
                  </span>
                  <span
                    className={`${termColors.secondary} font-bold transition-colors duration-700`}
                  >
                    ~
                  </span>
                  <input
                    id="terminal-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    className={`flex-1 bg-transparent outline-none ${termColors.text} font-ide font-medium ${termColors.placeholder} tracking-wide transition-colors duration-700 w-full`}
                    autoComplete="off"
                    spellCheck="false"
                    autoFocus
                  />
                </div>
              </div>
            )}
          </div>
        </FadeIn>
      </div>

      {/* Bottom Row: External Actions */}
      <FadeIn
        delay={500}
        className="w-full flex flex-col sm:flex-row gap-4 z-10"
      >
        <a
          href="#projects"
          onClick={() => scrollTo("#projects")}
          className="adw-btn adw-btn-primary w-full sm:w-1/2 group flex items-center justify-center gap-3 px-4 py-4 text-sm sm:text-base font-bold whitespace-nowrap cursor-pointer tracking-wide"
        >
          <BookOpen className="w-5 h-5 shrink-0 group-hover:-translate-y-1 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" />
          <span className="font-ide uppercase tracking-wider">
            View My Projects
          </span>
        </a>
        <a
          href={profileData.github}
          target="_blank"
          rel="noreferrer"
          className="adw-btn adw-btn-secondary bg-transparent border-2 w-full sm:w-1/2 flex items-center justify-center gap-3 px-4 py-4 text-sm sm:text-base font-bold hover:bg-[var(--md-sys-color-surface-variant)] whitespace-nowrap cursor-pointer tracking-wide"
        >
          <GitBranch className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" />
          <span className="font-ide uppercase tracking-wider">
            GitHub Profile
          </span>
        </a>
      </FadeIn>
    </section>
  );
};

export default HeroSection;
