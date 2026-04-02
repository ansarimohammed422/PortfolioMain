// import { useState, useEffect } from "react";
// import { Terminal } from "lucide-react";
// import { ArrowUp } from "lucide-react";

// const Footer = ({ scrollTo }) => {
//   const [time, setTime] = useState("");

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date();
//       setTime(
//         now.toLocaleTimeString("en-US", { hour12: false }) +
//           ":" +
//           now.getMilliseconds().toString().padStart(3, "0").slice(0, 2),
//       );
//     }, 50);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <footer className="relative z-10 border-t border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface)] pt-16 pb-28 md:pb-12 mt-auto overflow-hidden">
//       <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--md-sys-color-primary)] to-transparent opacity-50" />

//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
//           <div className="md:col-span-5 flex flex-col items-start">
//             <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] mb-6 shadow-sm border border-[var(--md-sys-color-outline-variant)]">
//               <Terminal className="w-6 h-6" />
//             </div>
//             <h2 className="text-2xl font-bold mb-2 uppercase tracking-widest text-[var(--md-sys-color-on-surface)]">
//               Kinetic_Env
//             </h2>
//             <p className="text-[var(--md-sys-color-on-surface-variant)] text-sm mb-6 max-w-sm leading-relaxed font-medium">
//               Architecting robust digital experiences through deliberate
//               physics, strict information hierarchy, and human-centric design.
//             </p>
//             <div className="font-mono text-[10px] text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-[0.2em] flex flex-col gap-1 border-l-2 border-[var(--md-sys-color-primary)] pl-3">
//               <span>Sys_Version: 4.0.2</span>
//               <span>Local_Time: {time}</span>
//               <span>Location: Earth_Sector</span>
//             </div>
//           </div>

//           <div className="md:col-span-3 flex flex-col">
//             <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--md-sys-color-on-surface-variant)] mb-6">
//               Directory
//             </h3>
//             <ul className="flex flex-col gap-3 font-mono text-sm font-bold text-[var(--md-sys-color-on-surface)]">
//               {[
//                 "about",
//                 "services",
//                 "education",
//                 "certifications",
//                 "projects",
//               ].map((item) => (
//                 <li key={item}>
//                   <button
//                     onClick={() => scrollTo(`#${item}`)}
//                     className="group flex items-center gap-2 hover:text-[var(--md-sys-color-primary)] transition-colors"
//                   >
//                     <span className="opacity-0 group-hover:opacity-100 text-[var(--md-sys-color-primary)] transition-opacity">
//                       {">"}
//                     </span>
//                     /{item}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="md:col-span-4 flex flex-col justify-between items-start md:items-end text-left md:text-right">
//             <div className="flex flex-col items-start md:items-end gap-2 mb-8">
//               <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--md-sys-color-on-surface-variant)] mb-2">
//                 Network Status
//               </h3>
//               <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-[var(--md-sys-color-surface-variant)] border border-[var(--md-sys-color-outline-variant)]">
//                 <span className="relative flex h-2.5 w-2.5">
//                   <span className="animate-ping absolute h-full w-full rounded-full bg-green-500 opacity-75"></span>
//                   <span className="relative h-2.5 w-2.5 rounded-full bg-green-500"></span>
//                 </span>
//                 <span className="font-bold text-xs uppercase tracking-widest text-[var(--md-sys-color-on-surface)]">
//                   Uplink Active
//                 </span>
//               </div>
//             </div>

//             <button
//               onClick={() => scrollTo("#top")}
//               className="group flex items-center justify-center gap-3 px-6 py-4 w-full md:w-auto rounded-xl bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] font-mono text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-[0_0_20px_var(--md-sys-color-primary)]"
//             >
//               Terminate_Session{" "}
//               <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
//             </button>
//           </div>
//         </div>

//         <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-[var(--md-sys-color-outline-variant)] font-mono text-[10px] text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-[0.2em]">
//           <div>© {new Date().getFullYear()} Mohammed Ansari.</div>
//           <div className="flex items-center gap-4">
//             <span className="hidden sm:inline-block">End of Transmission</span>
//             <span className="w-2 h-2 rounded-full bg-[var(--md-sys-color-outline-variant)]"></span>
//             <span>EOF</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
// export default Footer;

// import { useState, useEffect } from "react";
// import { Terminal, ArrowUp } from "lucide-react";

// // --- BACKEND SCOPE PREPARATION ---
// // Later, replace this static object with state populated by your Django API
// const footerData = {
//   systemName: "Kinetic_Env_MA",
//   bio: "Architecting robust web applications utilizing full-stack technologies (React, Django) and structured programming principles.",
//   version: "1.0.0",
//   location: "Mumbai, Maharashtra, IN",
//   copyrightName: "Mohammed Ansari",
// };

// const Footer = ({ scrollTo }) => {
//   const [time, setTime] = useState("");

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date();
//       setTime(
//         now.toLocaleTimeString("en-US", { hour12: false }) +
//           ":" +
//           now.getMilliseconds().toString().padStart(3, "0").slice(0, 2),
//       );
//     }, 50);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <footer className="relative z-10 border-t border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface)] pt-16 pb-28 md:pb-12 mt-auto overflow-hidden">
//       <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--md-sys-color-primary)] to-transparent opacity-50" />

//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
//           <div className="md:col-span-5 flex flex-col items-start">
//             <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] mb-6 shadow-sm border border-[var(--md-sys-color-outline-variant)]">
//               <Terminal className="w-6 h-6" />
//             </div>
//             <h2 className="text-2xl font-bold mb-2 uppercase tracking-widest text-[var(--md-sys-color-on-surface)]">
//               {footerData.systemName}
//             </h2>
//             <p className="text-[var(--md-sys-color-on-surface-variant)] text-sm mb-6 max-w-sm leading-relaxed font-medium">
//               {footerData.bio}
//             </p>
//             <div className="font-mono text-[10px] text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-[0.2em] flex flex-col gap-1 border-l-2 border-[var(--md-sys-color-primary)] pl-3">
//               <span>Sys_Version: {footerData.version}</span>
//               <span>Local_Time: {time}</span>
//               <span>Location: {footerData.location}</span>
//             </div>
//           </div>

//           <div className="md:col-span-3 flex flex-col">
//             <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--md-sys-color-on-surface-variant)] mb-6">
//               Directory
//             </h3>
//             <ul className="flex flex-col gap-3 font-mono text-sm font-bold text-[var(--md-sys-color-on-surface)]">
//               {[
//                 "about",
//                 "services",
//                 "education",
//                 "certifications",
//                 "projects",
//                 "contact",
//               ].map((item) => (
//                 <li key={item}>
//                   <button
//                     onClick={() => scrollTo(`#${item}`)}
//                     className="group flex items-center gap-2 hover:text-[var(--md-sys-color-primary)] transition-colors"
//                   >
//                     <span className="opacity-0 group-hover:opacity-100 text-[var(--md-sys-color-primary)] transition-opacity">
//                       {">"}
//                     </span>
//                     /{item}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="md:col-span-4 flex flex-col justify-between items-start md:items-end text-left md:text-right">
//             <div className="flex flex-col items-start md:items-end gap-2 mb-8">
//               <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--md-sys-color-on-surface-variant)] mb-2">
//                 Network Status
//               </h3>
//               <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-[var(--md-sys-color-surface-variant)] border border-[var(--md-sys-color-outline-variant)]">
//                 <span className="relative flex h-2.5 w-2.5">
//                   <span className="animate-ping absolute h-full w-full rounded-full bg-green-500 opacity-75"></span>
//                   <span className="relative h-2.5 w-2.5 rounded-full bg-green-500"></span>
//                 </span>
//                 <span className="font-bold text-xs uppercase tracking-widest text-[var(--md-sys-color-on-surface)]">
//                   Uplink Active
//                 </span>
//               </div>
//             </div>

//             <button
//               onClick={() => scrollTo("#top")}
//               className="group flex items-center justify-center gap-3 px-6 py-4 w-full md:w-auto rounded-xl bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] font-mono text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-[0_0_20px_var(--md-sys-color-primary)]"
//             >
//               Terminate_Session{" "}
//               <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
//             </button>
//           </div>
//         </div>

//         <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-[var(--md-sys-color-outline-variant)] font-mono text-[10px] text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-[0.2em]">
//           <div>
//             © {new Date().getFullYear()} {footerData.copyrightName}.
//           </div>
//           <div className="flex items-center gap-4">
//             <span className="hidden sm:inline-block">End of Transmission</span>
//             <span className="w-2 h-2 rounded-full bg-[var(--md-sys-color-outline-variant)]"></span>
//             <span>EOF</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
// export default Footer;

import { useState, useEffect } from "react";
import { Terminal, ArrowUp } from "lucide-react";

// --- BACKEND SCOPE PREPARATION ---
const footerData = {
  systemName: "Kinetic_Env_MA",
  bio: "Architecting robust web applications utilizing full-stack technologies (React, Django) and structured programming principles.",
  version: "1.0.0",
  location: "Mumbai, Maharashtra, IN",
  copyrightName: "Mohammed Ansari",
};

const Footer = ({ scrollTo }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", { hour12: false }) +
          ":" +
          now.getMilliseconds().toString().padStart(3, "0").slice(0, 2),
      );
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative z-10 border-t border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface)] pt-16 pb-28 md:pb-12 mt-auto overflow-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&family=Share+Tech+Mono&display=swap');
          .font-terminal { font-family: 'Share Tech Mono', monospace; }
          .font-ide { font-family: 'Fira Code', monospace; }
        `}
      </style>

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--md-sys-color-primary)] to-transparent opacity-50" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] mb-6 shadow-sm border border-[var(--md-sys-color-outline-variant)]">
              <Terminal className="w-6 h-6" />
            </div>
            {/* System Name Header */}
            <h2 className="font-terminal text-2xl font-bold mb-3 uppercase tracking-widest text-[var(--md-sys-color-on-surface)]">
              {footerData.systemName}
            </h2>
            {/* Bio with IDE font for better reading flow */}
            <p className="font-ide text-[var(--md-sys-color-on-surface)] text-sm mb-8 max-w-sm leading-relaxed font-medium opacity-90">
              {footerData.bio}
            </p>
            {/* System Metadata with high-contrast label colors */}
            <div className="font-ide text-[11px] text-[var(--md-sys-color-on-surface)] font-bold uppercase tracking-wider flex flex-col gap-2 border-l-2 border-[var(--md-sys-color-primary)] pl-4">
              <div className="flex items-center gap-2">
                <span className="text-[var(--md-sys-color-primary)]">
                  SYS_VERSION:
                </span>{" "}
                {footerData.version}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--md-sys-color-primary)]">
                  LOCAL_TIME:
                </span>{" "}
                {time}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--md-sys-color-primary)]">
                  LOCATION:
                </span>{" "}
                {footerData.location}
              </div>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col">
            <h3 className="font-terminal text-xs uppercase tracking-[0.3em] text-[var(--md-sys-color-primary)] mb-8 font-bold">
              Directory
            </h3>
            <ul className="flex flex-col gap-4 font-ide text-sm font-bold text-[var(--md-sys-color-on-surface)]">
              {[
                "about",
                "services",
                "education",
                "certifications",
                "projects",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(`#${item}`)}
                    className="group flex items-center gap-2 hover:text-[var(--md-sys-color-primary)] transition-all uppercase tracking-wide"
                  >
                    <span className="opacity-0 group-hover:opacity-100 text-[var(--md-sys-color-primary)] transition-all translate-x-[-10px] group-hover:translate-x-0">
                      {">"}
                    </span>
                    /{item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col justify-between items-start md:items-end text-left md:text-right">
            <div className="flex flex-col items-start md:items-end gap-3 mb-10">
              <h3 className="font-terminal text-xs uppercase tracking-[0.3em] text-[var(--md-sys-color-primary)] mb-1 font-bold">
                Network_Status
              </h3>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-lg bg-[var(--md-sys-color-surface-variant)] border border-[var(--md-sys-color-outline-variant)] shadow-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative h-3 w-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                </span>
                <span className="font-ide font-bold text-xs uppercase tracking-[0.2em] text-[var(--md-sys-color-on-surface)]">
                  Uplink_Active
                </span>
              </div>
            </div>

            <button
              onClick={() => scrollTo("#top")}
              className="group flex items-center justify-center gap-4 px-8 py-5 w-full md:w-auto rounded-xl bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] font-terminal text-sm font-bold uppercase tracking-[0.3em] transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-[0_0_25px_var(--md-sys-color-primary)]"
            >
              Terminate_Session{" "}
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-2 transition-transform" />
            </button>
          </div>
        </div>

        {/* Legal and EOF section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-10 border-t border-[var(--md-sys-color-outline-variant)] font-ide text-[11px] text-[var(--md-sys-color-on-surface)] font-bold uppercase tracking-[0.2em] opacity-70">
          <div>
            © {new Date().getFullYear()} {footerData.copyrightName}.
            ALL_RIGHTS_RESERVED
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline-block">End_Of_Transmission</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--md-sys-color-primary)] animate-pulse"></span>
              <span>EOF</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
