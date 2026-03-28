// import { useState } from "react";
// import FadeIn from "./FadeIn";
// import { Database, MapPin } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// const EDUCATION = [
//   {
//     id: "edu1",
//     degree: "M.S. Human-Computer Interaction",
//     institution: "Tech University",
//     period: "2018 - 2020",
//     desc: "Specialized in kinetic motion and structured desktop environment paradigms. Graduated Summa Cum Laude.",
//   },
//   {
//     id: "edu2",
//     degree: "B.S. Software Engineering",
//     institution: "State College",
//     period: "2014 - 2018",
//     desc: "Minor in Digital Arts. Led the open-source Linux design lab.",
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
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${isHovered ? "bg-[var(--md-sys-color-primary)] shadow-[0_0_12px_var(--md-sys-color-primary)] animate-pulse" : "bg-[var(--md-sys-color-outline-variant)] opacity-60"}`}
//             />
//             <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--md-sys-color-on-surface-variant)]">
//               Sync_Lock: Module_{i + 1}
//             </span>
//           </div>
//           <span className="font-mono text-[11px] text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-widest">
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
//           <h3
//             className={`text-2xl sm:text-3xl font-bold tracking-tight uppercase leading-tight transition-colors duration-500 ${isHovered ? "text-[var(--md-sys-color-primary)]" : "text-[var(--md-sys-color-on-surface)]"}`}
//           >
//             {edu.degree}
//           </h3>
//           <div
//             className={`flex items-center gap-3 text-sm font-mono uppercase mt-2 transition-colors duration-500 ${isHovered ? "text-[var(--md-sys-color-primary)]" : "text-[var(--md-sys-color-on-surface-variant)]"}`}
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
//                 <p
//                   className={`text-[var(--md-sys-color-on-surface)] text-base sm:text-lg leading-relaxed font-medium italic border-l-2 pl-6 border-[var(--md-sys-color-primary)]`}
//                 >
//                   "{edu.desc}"
//                 </p>
//                 <div className="mt-8 grid grid-cols-2 gap-4 font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--md-sys-color-on-surface-variant)] opacity-70">
//                   <div className="flex flex-col gap-1">
//                     <span>Checksum: 0xFD{i + 2}B</span>
//                     <span>Period: {edu.period}</span>
//                   </div>
//                   <div className="flex flex-col gap-1 text-right">
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

// const EducationSection = () => (
//   <section id="education" className="scroll-mt-28">
//     <FadeIn>
//       <div className="flex items-center gap-3 mb-4">
//         <Database className="w-8 h-8 text-[var(--md-sys-color-primary)]" />
//         <h2 className="text-3xl font-bold uppercase tracking-widest">
//           System Registry
//         </h2>
//       </div>
//       <p className="text-[var(--md-sys-color-on-surface-variant)] mb-12 max-w-2xl font-mono text-[10px] sm:text-xs opacity-70 uppercase tracking-[0.3em]">
//         Educational modules detected. Hover to initialize data sync and verify
//         academic credentials.
//       </p>
//     </FadeIn>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
//       {EDUCATION.map((edu, i) => (
//         <FadeIn key={edu.id} delay={i * 200}>
//           <MotherboardModule edu={edu} i={i} />
//         </FadeIn>
//       ))}
//     </div>
//   </section>
// );
// export default EducationSection;

import { useState } from "react";
import FadeIn from "./FadeIn";
import { Database, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- BACKEND SCOPE PREPARATION ---
// Later, replace this static array with state populated by your Django API
const educationData = [
  {
    id: "edu1",
    degree: "B.Sc in Information Technology",
    institution: "Akbar Peerbhoy College, Mumbai",
    period: "Undergraduate",
    desc: "Achieved a CGPI of 9.02. Focused on core programming, full-stack web technologies, and database architecture.",
  },
  {
    id: "edu2",
    degree: "H.S.C (Higher Secondary)",
    institution: "Elphinstone Tech College, Mumbai",
    period: "Higher Secondary",
    desc: "Completed Higher Secondary Certificate with 59.00%. Developed strong foundational skills in technical disciplines.",
  },
  {
    id: "edu3",
    degree: "S.S.C (Secondary School)",
    institution: "Anjuman-I-Islam School, Mumbai",
    period: "Secondary",
    desc: "Completed Secondary School Certificate with 60.20%.",
  },
];

const MotherboardModule = ({ edu, i }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative p-6 sm:p-10 rounded-3xl border border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface)] overflow-hidden transition-all duration-500 cursor-pointer group hover:border-[var(--md-sys-color-primary)] hover:shadow-xl`}
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${isHovered ? "bg-[var(--md-sys-color-primary)] shadow-[0_0_12px_var(--md-sys-color-primary)] animate-pulse" : "bg-[var(--md-sys-color-outline-variant)] opacity-60"}`}
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--md-sys-color-on-surface-variant)]">
              Sync_Lock: Module_{i + 1}
            </span>
          </div>
          <span className="font-mono text-[11px] text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-widest">
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
          <h3
            className={`text-2xl sm:text-3xl font-bold tracking-tight uppercase leading-tight transition-colors duration-500 ${isHovered ? "text-[var(--md-sys-color-primary)]" : "text-[var(--md-sys-color-on-surface)]"}`}
          >
            {edu.degree}
          </h3>
          <div
            className={`flex items-center gap-3 text-sm font-mono uppercase mt-2 transition-colors duration-500 ${isHovered ? "text-[var(--md-sys-color-primary)]" : "text-[var(--md-sys-color-on-surface-variant)]"}`}
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
                <p
                  className={`text-[var(--md-sys-color-on-surface)] text-base sm:text-lg leading-relaxed font-medium italic border-l-2 pl-6 border-[var(--md-sys-color-primary)]`}
                >
                  "{edu.desc}"
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--md-sys-color-on-surface-variant)] opacity-70">
                  <div className="flex flex-col gap-1">
                    <span>Checksum: 0xFD{i + 2}B</span>
                    <span>Period: {edu.period}</span>
                  </div>
                  <div className="flex flex-col gap-1 text-right">
                    <span>Auth_Key: Admin</span>
                    <span>Status: persistent_data</span>
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

const EducationSection = () => (
  <section id="education" className="scroll-mt-28">
    <FadeIn>
      <div className="flex items-center gap-3 mb-4">
        <Database className="w-8 h-8 text-[var(--md-sys-color-primary)]" />
        <h2 className="text-3xl font-bold uppercase tracking-widest">
          System Registry
        </h2>
      </div>
      <p className="text-[var(--md-sys-color-on-surface-variant)] mb-12 max-w-2xl font-mono text-[10px] sm:text-xs opacity-70 uppercase tracking-[0.3em]">
        Educational modules detected. Hover to initialize data sync and verify
        academic credentials.
      </p>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
      {educationData.map((edu, i) => (
        <FadeIn key={edu.id} delay={i * 200}>
          <MotherboardModule edu={edu} i={i} />
        </FadeIn>
      ))}
    </div>
  </section>
);
export default EducationSection;
