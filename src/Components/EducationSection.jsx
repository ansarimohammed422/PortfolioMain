// import React, { useState, useEffect } from "react";
// import FadeIn from "./FadeIn";
// import { Database, MapPin } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { API_BASE_URL } from "../config";

// // --- STATIC FALLBACK DATA ---
// const fallbackEducation = [
//   {
//     id: "edu0",
//     degree: "M.Sc. Information Technology",
//     institution: "University of Mumbai, Mumbai",
//     period: "Present",
//     desc: "Currently pursuing a Master's degree, focusing on advanced software architectures, AI, and data science. Actively working on academic research, including a paper on OCR for handwritten English text.",
//   },
//   {
//     id: "edu1",
//     degree: "B.Sc in Information Technology",
//     institution: "Akbar Peerbhoy College, Mumbai",
//     period: "Undergraduate",
//     desc: "Achieved a CGPI of 9.02. Focused on core programming, full-stack web technologies, and database architecture.",
//   },
//   {
//     id: "edu2",
//     degree: "H.S.C (Higher Secondary)",
//     institution: "Elphinstone Tech College, Mumbai",
//     period: "Higher Secondary",
//     desc: "Completed Higher Secondary Certificate with 59.00%. Developed strong foundational skills in technical disciplines.",
//   },
//   {
//     id: "edu3",
//     degree: "S.S.C (Secondary School)",
//     institution: "Anjuman-I-Islam School, Mumbai",
//     period: "Secondary",
//     desc: "Completed Secondary School Certificate with 60.20%.",
//   },
// ];

// const MotherboardModule = ({ edu, i }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className={`relative p-6 sm:p-10 rounded-3xl border border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface)] overflow-hidden transition-all duration-500 cursor-pointer group hover:border-[var(--md-sys-color-primary)] hover:shadow-xl`}
//     >
//       <div
//         className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${isHovered ? "opacity-30" : "opacity-10"}`}
//         style={{
//           backgroundImage:
//             "linear-gradient(90deg, var(--md-sys-color-outline-variant) 1px, transparent 1px), linear-gradient(0deg, var(--md-sys-color-outline-variant) 1px, transparent 1px)",
//           backgroundSize: "24px 24px",
//         }}
//       />

//       <div className="relative z-10 flex flex-col gap-5">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-4">
//             <div
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${isHovered ? "bg-[var(--md-sys-color-primary)] shadow-[0_0_12px_var(--md-sys-color-primary)] animate-pulse" : "bg-[var(--md-sys-color-outline-variant)]"}`}
//             />
//             {/* Using Fira Code (IDE font) for small technical metadata */}
//             <span className="font-ide text-[10px] font-bold uppercase tracking-widest text-[var(--md-sys-color-on-surface-variant)]">
//               Sync_Lock: Module_{i + 1}
//             </span>
//           </div>
//           <span className="font-ide text-[11px] font-bold text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-widest">
//             {edu.period.split(" - ")[0]}
//           </span>
//         </div>

//         <div className="w-full h-[2px] bg-[var(--md-sys-color-surface-variant)] rounded-full overflow-hidden">
//           <motion.div
//             initial={{ width: 0 }}
//             animate={{ width: isHovered ? "100%" : "8%" }}
//             transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
//             className="h-full rounded-full bg-[var(--md-sys-color-primary)] shadow-[0_0_8px_var(--md-sys-color-primary)]"
//           />
//         </div>

//         <div className="mt-2">
//           {/* Using Share Tech Mono (Hacker/Terminal font) for massive impact on headers */}
//           <h3
//             className={`font-terminal text-2xl sm:text-3xl tracking-wide uppercase leading-tight transition-colors duration-500 ${isHovered ? "text-[var(--md-sys-color-primary)]" : "text-[var(--md-sys-color-on-surface)]"}`}
//           >
//             {edu.degree}
//           </h3>
//           <div
//             className={`flex items-center gap-3 text-sm font-ide uppercase tracking-wide mt-3 transition-colors duration-500 ${isHovered ? "text-[var(--md-sys-color-primary)]" : "text-[var(--md-sys-color-on-surface)] opacity-90"}`}
//           >
//             <MapPin className="w-4 h-4" /> {edu.institution}
//           </div>
//         </div>

//         <AnimatePresence>
//           {isHovered && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               className="overflow-hidden"
//             >
//               <div className="pt-6 mt-4 border-t border-[var(--md-sys-color-outline-variant)]">
//                 {/* Using Fira Code (IDE font) for long-form readability */}
//                 <p
//                   className={`font-ide text-[var(--md-sys-color-on-surface)] text-sm sm:text-base leading-relaxed tracking-wide border-l-2 pl-6 border-[var(--md-sys-color-primary)]`}
//                 >
//                   <span className="text-[var(--md-sys-color-primary)] mr-2">
//                     {">"}
//                   </span>
//                   {edu.desc}
//                 </p>
//                 <div className="mt-8 grid grid-cols-2 gap-4 font-ide text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--md-sys-color-on-surface-variant)]">
//                   <div className="flex flex-col gap-1.5">
//                     <span>Checksum: 0xFD{i + 2}B</span>
//                     <span>Period: {edu.period}</span>
//                   </div>
//                   <div className="flex flex-col gap-1.5 text-right">
//                     <span>Auth_Key: Admin</span>
//                     <span>Status: persistent_data</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       <div
//         className={`absolute top-0 left-0 w-3 h-3 border-l border-t transition-all duration-500 ${isHovered ? "border-[var(--md-sys-color-primary)]" : "border-[var(--md-sys-color-outline-variant)]"}`}
//       />
//       <div
//         className={`absolute bottom-0 right-0 w-3 h-3 border-r border-b transition-all duration-500 ${isHovered ? "border-[var(--md-sys-color-primary)]" : "border-[var(--md-sys-color-outline-variant)]"}`}
//       />
//     </div>
//   );
// };

// const EducationSection = () => {
//   const [education, setEducation] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetch(`${API_BASE_URL}api/v1/education/`)
//       .then((res) => {
//         if (!res.ok) throw new Error("Network response was not ok");
//         return res.json();
//       })
//       .then((data) => {
//         setEducation(data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error("Failed to fetch education data from Django:", error);
//         setEducation(fallbackEducation);
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <section id="education" className="scroll-mt-28">
//       {/* INJECTING CUSTOM FONTS DIRECTLY INTO THE COMPONENT
//         - Share Tech Mono: For terminal-style headings
//         - Fira Code: For readable IDE-style descriptions
//       */}
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

//       <FadeIn>
//         <div className="flex items-center gap-3 mb-4">
//           <Database className="w-8 h-8 text-[var(--md-sys-color-primary)]" />
//           <h2 className="font-terminal text-3xl sm:text-4xl uppercase tracking-widest text-[var(--md-sys-color-on-surface)]">
//             Education
//           </h2>
//         </div>
//         <p className="font-ide text-[var(--md-sys-color-on-surface-variant)] font-bold mb-12 max-w-2xl text-[10px] sm:text-xs uppercase tracking-[0.2em]">
//           Educational modules detected. Hover to initialize data sync and verify
//           academic credentials.
//         </p>
//       </FadeIn>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
//         {isLoading ? (
//           <div className="md:col-span-2 text-[var(--md-sys-color-primary)] text-sm tracking-wide font-ide animate-pulse">
//             Syncing academic registry from secure server...
//           </div>
//         ) : (
//           education.map((edu, i) => (
//             <FadeIn key={edu.id} delay={i * 200}>
//               <MotherboardModule edu={edu} i={i} />
//             </FadeIn>
//           ))
//         )}
//       </div>
//     </section>
//   );
// };

// export default EducationSection;

import React, { useState, useEffect } from "react";
import FadeIn from "./FadeIn";
import { Database, MapPin, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { API_BASE_URL } from "../config";

// --- STATIC FALLBACK DATA (MODIFIED FOR OFFLINE DETECTION) ---
const fallbackEducation = [
  {
    id: "edu0",
    degree: "[Local] M.Sc. Information Technology",
    institution: "University of Mumbai, Mumbai",
    period: "Present",
    desc: "[SYS_WARN: API OFFLINE] Currently pursuing a Master's degree, focusing on advanced software architectures, AI, and data science. Actively working on academic research, including a paper on OCR for handwritten English text.",
  },
  {
    id: "edu1",
    degree: "[Local] B.Sc in Information Technology",
    institution: "Akbar Peerbhoy College, Mumbai",
    period: "Undergraduate",
    desc: "[SYS_WARN: API OFFLINE] Achieved a CGPI of 9.02. Focused on core programming, full-stack web technologies, and database architecture.",
  },
  {
    id: "edu2",
    degree: "[Local] H.S.C (Higher Secondary)",
    institution: "Elphinstone Tech College, Mumbai",
    period: "Higher Secondary",
    desc: "[SYS_WARN: API OFFLINE] Completed Higher Secondary Certificate with 59.00%. Developed strong foundational skills in technical disciplines.",
  },
  {
    id: "edu3",
    degree: "[Local] S.S.C (Secondary School)",
    institution: "Anjuman-I-Islam School, Mumbai",
    period: "Secondary",
    desc: "[SYS_WARN: API OFFLINE] Completed Secondary School Certificate with 60.20%.",
  },
];

const MotherboardModule = ({ edu, i, isOffline }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Added subtle red border tint if offline
      className={`relative p-6 sm:p-10 rounded-3xl border ${isOffline ? "border-red-500/20" : "border-[var(--md-sys-color-outline-variant)]"} bg-[var(--md-sys-color-surface)] overflow-hidden transition-all duration-500 cursor-pointer group hover:border-[var(--md-sys-color-primary)] hover:shadow-xl`}
    >
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${isHovered ? "opacity-30" : "opacity-10"}`}
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--md-sys-color-outline-variant) 1px, transparent 1px), linear-gradient(0deg, var(--md-sys-color-outline-variant) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${isHovered ? "bg-[var(--md-sys-color-primary)] shadow-[0_0_12px_var(--md-sys-color-primary)] animate-pulse" : "bg-[var(--md-sys-color-outline-variant)]"}`}
            />
            {/* Using Fira Code (IDE font) for small technical metadata */}
            <span className="font-ide text-[10px] font-bold uppercase tracking-widest text-[var(--md-sys-color-on-surface-variant)]">
              Sync_Lock: Module_{i + 1}
            </span>
          </div>
          <span className="font-ide text-[11px] font-bold text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-widest">
            {edu.period.split(" - ")[0]}
          </span>
        </div>

        <div className="w-full h-[2px] bg-[var(--md-sys-color-surface-variant)] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "100%" : "8%" }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="h-full rounded-full bg-[var(--md-sys-color-primary)] shadow-[0_0_8px_var(--md-sys-color-primary)]"
          />
        </div>

        <div className="mt-2">
          {/* Using Share Tech Mono (Hacker/Terminal font) for massive impact on headers */}
          <h3
            // Added subtle red tint to title if offline
            className={`font-terminal text-2xl sm:text-3xl tracking-wide uppercase leading-tight transition-colors duration-500 ${isHovered ? "text-[var(--md-sys-color-primary)]" : isOffline ? "text-red-400" : "text-[var(--md-sys-color-on-surface)]"}`}
          >
            {edu.degree}
          </h3>
          <div
            className={`flex items-center gap-3 text-sm font-ide uppercase tracking-wide mt-3 transition-colors duration-500 ${isHovered ? "text-[var(--md-sys-color-primary)]" : "text-[var(--md-sys-color-on-surface)] opacity-90"}`}
          >
            <MapPin className="w-4 h-4" /> {edu.institution}
          </div>
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-4 border-t border-[var(--md-sys-color-outline-variant)]">
                {/* Using Fira Code (IDE font) for long-form readability */}
                <p
                  className={`font-ide text-[var(--md-sys-color-on-surface)] text-sm sm:text-base leading-relaxed tracking-wide border-l-2 pl-6 ${isOffline ? "border-red-500/50" : "border-[var(--md-sys-color-primary)]"}`}
                >
                  <span
                    className={`${isOffline ? "text-red-500" : "text-[var(--md-sys-color-primary)]"} mr-2`}
                  >
                    {">"}
                  </span>
                  {edu.desc}
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 font-ide text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--md-sys-color-on-surface-variant)]">
                  <div className="flex flex-col gap-1.5">
                    <span>Checksum: 0xFD{i + 2}B</span>
                    <span>Period: {edu.period}</span>
                  </div>
                  <div className="flex flex-col gap-1.5 text-right">
                    <span>Auth_Key: Admin</span>
                    {/* Dynamic Status text based on connection */}
                    <span>
                      Status: {isOffline ? "offline_cache" : "persistent_data"}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div
        className={`absolute top-0 left-0 w-3 h-3 border-l border-t transition-all duration-500 ${isHovered ? "border-[var(--md-sys-color-primary)]" : "border-[var(--md-sys-color-outline-variant)]"}`}
      />
      <div
        className={`absolute bottom-0 right-0 w-3 h-3 border-r border-b transition-all duration-500 ${isHovered ? "border-[var(--md-sys-color-primary)]" : "border-[var(--md-sys-color-outline-variant)]"}`}
      />
    </div>
  );
};

const EducationSection = () => {
  const [education, setEducation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(false); // Added offline state

  useEffect(() => {
    fetch(`${API_BASE_URL}api/v1/education/`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setEducation(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch education data from Django:", error);
        setEducation(fallbackEducation);
        setIsOffline(true); // Trigger offline UI
        setIsLoading(false);
      });
  }, []);

  return (
    <section id="education" className="scroll-mt-28">
      {/* INJECTING CUSTOM FONTS DIRECTLY INTO THE COMPONENT
        - Share Tech Mono: For terminal-style headings
        - Fira Code: For readable IDE-style descriptions
      */}
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

      <FadeIn>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <Database className="w-8 h-8 text-[var(--md-sys-color-primary)]" />
            <h2 className="font-terminal text-3xl sm:text-4xl uppercase tracking-widest text-[var(--md-sys-color-on-surface)]">
              Education
            </h2>
          </div>

          {/* Subtle Visual Indicator if API is down */}
          {isOffline && (
            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/50 text-red-500 px-3 py-1.5 rounded-md font-ide text-[10px] sm:text-xs font-bold tracking-widest uppercase animate-pulse">
              <AlertTriangle className="w-4 h-4" /> System_Fallback_Active
            </div>
          )}
        </div>
        <p className="font-ide text-[var(--md-sys-color-on-surface-variant)] font-bold mb-12 max-w-2xl text-[10px] sm:text-xs uppercase tracking-[0.2em]">
          Educational modules detected. Hover to initialize data sync and verify
          academic credentials.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {isLoading ? (
          <div className="md:col-span-2 text-[var(--md-sys-color-primary)] text-sm tracking-wide font-ide animate-pulse">
            Syncing academic registry from secure server...
          </div>
        ) : (
          education.map((edu, i) => (
            <FadeIn key={edu.id} delay={i * 200}>
              <MotherboardModule edu={edu} i={i} isOffline={isOffline} />
            </FadeIn>
          ))
        )}
      </div>
    </section>
  );
};

export default EducationSection;
