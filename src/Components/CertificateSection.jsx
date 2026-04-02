// import React, { useState, useEffect } from "react";
// import FadeIn from "./FadeIn";
// import {
//   Braces,
//   Network,
//   CheckCircle,
//   Globe,
//   Activity,
//   Key,
//   Download,
//   Lock,
//   FileText,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { API_BASE_URL } from "../config";

// // --- IMPORTANT: Import your certificate screenshots here! ---
// import introAiImg from "../assets/ai_certificate.png";
// import powerBiImg from "../assets/power_bi_certificate.png";

// const fallbackCertifications = [
//   {
//     id: "intro-ai",
//     method: "GET",
//     endpoint: "/api/v1/certs/intro-ai",
//     title: "Introduction to Artificial Intelligence",
//     issuer: "Simplilearn",
//     period: "Oct 2025",
//     desc: "Certificate code: 9197934. Demonstrated initiative and a commitment to deepening skills and advancing career.",
//     tech: ["AI Fundamentals", "Machine Learning"],
//     img: introAiImg,
//   },
//   {
//     id: "power-bi",
//     method: "GET",
//     endpoint: "/api/v1/certs/power-bi",
//     title: "Power BI for Beginners",
//     issuer: "Simplilearn (Powered by Microsoft)",
//     period: "Oct 2025",
//     desc: "Certificate code: 9197590. Official acknowledgment of completion for Microsoft Courses on the Simplilearn portal.",
//     tech: ["Power BI", "Data Analysis", "Visualization"],
//     img: powerBiImg,
//   },
// ];

// const ApiPlayground = ({ certifications }) => {
//   const [activeCertId, setActiveCertId] = useState(certifications[0]?.id);
//   const [fetchingId, setFetchingId] = useState(null); // Track specifically which ID is being animated
//   // Track which IDs have been successfully "Fetched"
//   const [unlockedIds, setUnlockedIds] = useState(new Set());

//   const activeCert = certifications.find((c) => c.id === activeCertId);
//   const isUnlocked = unlockedIds.has(activeCertId);

//   const handleFetch = () => {
//     if (isUnlocked) return;

//     setFetchingId(activeCertId);
//     setTimeout(() => {
//       setUnlockedIds((prev) => new Set([...prev, activeCertId]));
//       setFetchingId(null);
//     }, 1000);
//   };

//   if (!activeCert) return null;

//   return (
//     <div className="w-full bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[750px] md:h-[700px]">
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&family=Share+Tech+Mono&display=swap');
//           .font-terminal { font-family: 'Share Tech Mono', monospace; }
//           .font-ide { font-family: 'Fira Code', monospace; }
//         `}
//       </style>

//       {/* LEFT PANEL: Endpoints (Big & Readable) */}
//       <div className="w-full md:w-80 lg:w-96 bg-[var(--md-sys-color-surface-variant)] border-b md:border-b-0 md:border-r border-[var(--md-sys-color-outline-variant)] flex flex-col shrink-0 h-64 md:h-auto">
//         <div className="h-16 border-b border-[var(--md-sys-color-outline-variant)] flex items-center px-6 font-terminal text-base uppercase tracking-widest text-[var(--md-sys-color-on-surface)] font-bold shrink-0">
//           <Network className="w-5 h-5 mr-3 text-[var(--md-sys-color-primary)]" />{" "}
//           System_Registry
//         </div>
//         <div className="flex-1 overflow-y-auto py-4 scrollbar-none">
//           {certifications.map((cert) => {
//             const isCertUnlocked = unlockedIds.has(cert.id);
//             return (
//               <button
//                 key={cert.id}
//                 onClick={() => setActiveCertId(cert.id)}
//                 className={`w-full text-left px-6 py-6 flex flex-col gap-2 transition-all duration-300 border-l-4 ${
//                   activeCertId === cert.id
//                     ? "bg-[var(--md-sys-color-background)] border-[var(--md-sys-color-primary)] shadow-inner"
//                     : "border-transparent hover:bg-black/10 dark:hover:bg-white/5 opacity-60"
//                 }`}
//               >
//                 <div className="flex items-center justify-between w-full">
//                   <span
//                     className={`font-terminal text-xs font-bold ${activeCertId === cert.id ? "text-[var(--md-sys-color-primary)]" : "text-blue-500"}`}
//                   >
//                     {">"} {cert.id.toUpperCase()}
//                   </span>
//                   {isCertUnlocked && (
//                     <CheckCircle className="w-3 h-3 text-green-500" />
//                   )}
//                 </div>
//                 <span className="font-ide text-base font-bold text-[var(--md-sys-color-on-surface)] leading-snug tracking-tight">
//                   {cert.title}
//                 </span>
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* RIGHT PANEL: Execution Space */}
//       <div className="flex-1 flex flex-col min-w-0 bg-[var(--md-sys-color-background)]">
//         {/* URL Bar */}
//         <div className="h-20 border-b border-[var(--md-sys-color-outline-variant)] flex items-center px-6 gap-4 bg-[var(--md-sys-color-surface)] shrink-0">
//           <div className="flex-1 flex items-center bg-[var(--md-sys-color-surface-variant)] rounded-lg px-4 py-3 border border-[var(--md-sys-color-outline-variant)] min-w-0">
//             <Globe className="w-5 h-5 text-[var(--md-sys-color-primary)] mr-3 shrink-0" />
//             <span className="font-ide text-sm sm:text-base text-[var(--md-sys-color-on-surface)] truncate font-bold">
//               <span className="opacity-30">https://api.kinetic.env</span>
//               {activeCert.endpoint}
//             </span>
//           </div>
//           <button
//             onClick={handleFetch}
//             disabled={fetchingId === activeCertId || isUnlocked}
//             className={`shrink-0 px-8 py-3 rounded-lg font-terminal text-sm font-bold tracking-[0.2em] transition-all shadow-lg flex items-center gap-3 ${
//               isUnlocked
//                 ? "bg-green-600/20 text-green-500 border border-green-500 cursor-default"
//                 : fetchingId === activeCertId
//                   ? "bg-gray-500 opacity-50 cursor-not-allowed"
//                   : "bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] hover:scale-105 active:scale-95"
//             }`}
//           >
//             {fetchingId === activeCertId ? (
//               <Activity className="w-5 h-5 animate-spin" />
//             ) : isUnlocked ? (
//               <CheckCircle className="w-5 h-5" />
//             ) : (
//               <Download className="w-5 h-5" />
//             )}
//             {isUnlocked ? "CACHED" : "FETCH"}
//           </button>
//         </div>

//         {/* Response Body */}
//         <div className="flex-1 relative p-6 sm:p-10 overflow-y-auto scrollbar-none flex flex-col">
//           <AnimatePresence mode="wait">
//             {!isUnlocked && fetchingId !== activeCertId ? (
//               <motion.div
//                 key={`idle-${activeCertId}`}
//                 initial={{ opacity: 0, scale: 0.98 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 className="flex-1 flex flex-col items-center justify-center text-center p-6"
//               >
//                 <div className="w-24 h-24 rounded-full bg-[var(--md-sys-color-surface-variant)] flex items-center justify-center mb-8 border border-[var(--md-sys-color-outline-variant)] shadow-2xl">
//                   <Lock className="w-12 h-12 text-[var(--md-sys-color-primary)]" />
//                 </div>
//                 <h4 className="font-terminal text-3xl text-[var(--md-sys-color-on-surface)] mb-4 uppercase tracking-[0.2em] font-bold">
//                   Encrypted
//                 </h4>
//                 <p className="font-ide text-base text-[var(--md-sys-color-on-surface-variant)] max-w-sm leading-relaxed mb-10 font-medium">
//                   Resource{" "}
//                   <span className="text-[var(--md-sys-color-primary)] font-bold">
//                     {activeCert.id}
//                   </span>{" "}
//                   requires manual decryption.
//                 </p>
//                 <div className="font-terminal text-sm text-[var(--md-sys-color-primary)] animate-pulse tracking-[0.4em] font-bold border-2 border-[var(--md-sys-color-primary)] px-10 py-4 rounded-full">
//                   EXECUTE_FETCH_TO_VIEW
//                 </div>
//               </motion.div>
//             ) : fetchingId === activeCertId ? (
//               <motion.div
//                 key="fetching"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="flex-1 flex flex-col items-center justify-center font-ide text-base text-[var(--md-sys-color-primary)] gap-6"
//               >
//                 <Activity className="w-16 h-16 animate-spin" />
//                 <div className="tracking-[0.4em] font-bold uppercase text-xl">
//                   Syncing Registry...
//                 </div>
//               </motion.div>
//             ) : (
//               <motion.div
//                 key={`success-${activeCertId}`}
//                 initial={{ opacity: 0, x: 40, filter: "blur(15px)" }}
//                 animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
//                 transition={{ type: "spring", stiffness: 80, damping: 15 }}
//                 className="flex-1 flex flex-col h-full"
//               >
//                 <div className="relative w-full max-w-4xl mx-auto rounded-2xl border-2 border-[var(--md-sys-color-primary)] bg-[var(--md-sys-color-surface)] shadow-[0_0_50px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden h-full">
//                   {/* Header */}
//                   <div className="p-8 border-b border-[var(--md-sys-color-outline-variant)] flex flex-col sm:flex-row justify-between items-start bg-[var(--md-sys-color-surface-variant)] gap-4 shrink-0">
//                     <div>
//                       <div className="font-terminal text-sm text-[var(--md-sys-color-primary)] uppercase tracking-[0.5em] mb-2 flex items-center gap-2 font-bold">
//                         <Key className="w-5 h-5" /> AUTHORIZED_ACCESS
//                       </div>
//                       <h3 className="font-terminal text-3xl sm:text-4xl font-bold text-[var(--md-sys-color-on-surface)] leading-tight uppercase tracking-tight">
//                         {activeCert.title}
//                       </h3>
//                     </div>
//                     <div className="font-ide text-sm font-bold px-5 py-2 bg-[var(--md-sys-color-background)] text-[var(--md-sys-color-primary)] rounded-md border-2 border-[var(--md-sys-color-primary)] self-start whitespace-nowrap shadow-md">
//                       {activeCert.period}
//                     </div>
//                   </div>

//                   {/* Body */}
//                   <div className="p-8 flex-1 overflow-y-auto scrollbar-none flex flex-col gap-10">
//                     <div className="relative w-full rounded-xl overflow-hidden border-2 border-[var(--md-sys-color-outline-variant)] bg-black/40 group/img shadow-2xl">
//                       <img
//                         src={activeCert.img}
//                         alt={activeCert.title}
//                         className="w-full h-auto object-contain block transition-transform duration-1000"
//                       />
//                     </div>

//                     <div className="grid grid-cols-1 gap-8">
//                       <div className="flex flex-col gap-3">
//                         <div className="font-terminal text-sm text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-[0.4em] font-bold">
//                           Organization
//                         </div>
//                         <div className="font-ide text-2xl font-bold text-[var(--md-sys-color-on-surface)] tracking-wide flex items-center gap-4">
//                           <FileText className="w-7 h-7 text-[var(--md-sys-color-primary)]" />{" "}
//                           {activeCert.issuer}
//                         </div>
//                       </div>

//                       <div className="bg-[var(--md-sys-color-surface-variant)]/50 border-l-4 border-[var(--md-sys-color-primary)] p-8 rounded-r-2xl">
//                         <p className="font-ide text-lg text-[var(--md-sys-color-on-surface)] leading-relaxed tracking-tight font-medium">
//                           {activeCert.desc}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="mt-auto flex flex-wrap gap-4 pt-4">
//                       {activeCert.tech?.map((t) => (
//                         <span
//                           key={t}
//                           className="font-ide px-5 py-2 bg-[var(--md-sys-color-surface-variant)] border-2 border-[var(--md-sys-color-outline-variant)] text-[var(--md-sys-color-on-surface)] rounded-xl text-sm uppercase font-bold tracking-widest shadow-md"
//                         >
//                           {t}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="h-14 bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] flex items-center justify-center font-terminal text-xs font-bold uppercase tracking-[0.6em] shrink-0">
//                     <CheckCircle className="w-5 h-5 mr-3" /> VERIFIED_DATA_ASSET
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// const CertificationsSection = () => {
//   const [certifications, setCertifications] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetch(`${API_BASE_URL}api/v1/certificates/`)
//       .then((res) => (res.ok ? res.json() : []))
//       .then((data) => {
//         setCertifications(data.length > 0 ? data : fallbackCertifications);
//         setIsLoading(false);
//       })
//       .catch(() => {
//         setCertifications(fallbackCertifications);
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <section id="certifications" className="scroll-mt-28">
//       <FadeIn>
//         <div className="flex items-center gap-4 mb-6">
//           <Braces className="w-12 h-12 text-[var(--md-sys-color-primary)]" />
//           <h2 className="font-terminal text-4xl sm:text-6xl font-bold uppercase tracking-widest text-[var(--md-sys-color-on-surface)]">
//             Certificates
//           </h2>
//         </div>
//         <p className="font-ide text-[var(--md-sys-color-on-surface)] mb-16 max-w-4xl text-base sm:text-lg uppercase tracking-[0.3em] font-bold opacity-80">
//           {">"} AUTHORIZED ACCESS ONLY. EXECUTE API CALLS TO SYNC CREDENTIALS.
//         </p>
//       </FadeIn>

//       <FadeIn delay={150}>
//         {isLoading ? (
//           <div className="w-full h-[600px] flex items-center justify-center bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] rounded-2xl shadow-2xl">
//             <span className="text-[var(--md-sys-color-primary)] font-ide text-base tracking-[0.5em] animate-pulse flex items-center gap-4 uppercase font-bold">
//               <Activity className="w-8 h-8 animate-spin" /> Pinging Nodes...
//             </span>
//           </div>
//         ) : (
//           <ApiPlayground certifications={certifications} />
//         )}
//       </FadeIn>
//     </section>
//   );
// };

// export default CertificationsSection;

import React, { useState, useEffect } from "react";
import FadeIn from "./FadeIn";
import {
  Braces,
  Network,
  CheckCircle,
  Globe,
  Activity,
  Key,
  Download,
  Lock,
  FileText,
  AlertTriangle, // <-- Imported AlertTriangle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { API_BASE_URL } from "../config";

// --- IMPORTANT: Import your certificate screenshots here! ---
import introAiImg from "../assets/ai_certificate.png";
import powerBiImg from "../assets/power_bi_certificate.png";

// --- STATIC FALLBACK DATA (MODIFIED FOR OFFLINE DETECTION) ---
const fallbackCertifications = [
  {
    id: "intro-ai",
    method: "GET",
    endpoint: "/api/v1/certs/intro-ai",
    title: "[Local] Introduction to Artificial Intelligence",
    issuer: "Simplilearn",
    period: "Oct 2025",
    desc: "[SYS_WARN: API OFFLINE] Certificate code: 9197934. Demonstrated initiative and a commitment to deepening skills and advancing career.",
    tech: ["AI Fundamentals", "Machine Learning"],
    img: introAiImg,
  },
  {
    id: "power-bi",
    method: "GET",
    endpoint: "/api/v1/certs/power-bi",
    title: "[Local] Power BI for Beginners",
    issuer: "Simplilearn (Powered by Microsoft)",
    period: "Oct 2025",
    desc: "[SYS_WARN: API OFFLINE] Certificate code: 9197590. Official acknowledgment of completion for Microsoft Courses on the Simplilearn portal.",
    tech: ["Power BI", "Data Analysis", "Visualization"],
    img: powerBiImg,
  },
];

const ApiPlayground = ({ certifications }) => {
  const [activeCertId, setActiveCertId] = useState(certifications[0]?.id);
  const [fetchingId, setFetchingId] = useState(null); // Track specifically which ID is being animated
  // Track which IDs have been successfully "Fetched"
  const [unlockedIds, setUnlockedIds] = useState(new Set());

  const activeCert = certifications.find((c) => c.id === activeCertId);
  const isUnlocked = unlockedIds.has(activeCertId);

  const handleFetch = () => {
    if (isUnlocked) return;

    setFetchingId(activeCertId);
    setTimeout(() => {
      setUnlockedIds((prev) => new Set([...prev, activeCertId]));
      setFetchingId(null);
    }, 1000);
  };

  if (!activeCert) return null;

  return (
    <div className="w-full bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[750px] md:h-[700px]">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&family=Share+Tech+Mono&display=swap');
          .font-terminal { font-family: 'Share Tech Mono', monospace; }
          .font-ide { font-family: 'Fira Code', monospace; }
        `}
      </style>

      {/* LEFT PANEL: Endpoints (Big & Readable) */}
      <div className="w-full md:w-80 lg:w-96 bg-[var(--md-sys-color-surface-variant)] border-b md:border-b-0 md:border-r border-[var(--md-sys-color-outline-variant)] flex flex-col shrink-0 h-64 md:h-auto">
        <div className="h-16 border-b border-[var(--md-sys-color-outline-variant)] flex items-center px-6 font-terminal text-base uppercase tracking-widest text-[var(--md-sys-color-on-surface)] font-bold shrink-0">
          <Network className="w-5 h-5 mr-3 text-[var(--md-sys-color-primary)]" />{" "}
          System_Registry
        </div>
        <div className="flex-1 overflow-y-auto py-4 scrollbar-none">
          {certifications.map((cert) => {
            const isCertUnlocked = unlockedIds.has(cert.id);
            return (
              <button
                key={cert.id}
                onClick={() => setActiveCertId(cert.id)}
                className={`w-full text-left px-6 py-6 flex flex-col gap-2 transition-all duration-300 border-l-4 ${
                  activeCertId === cert.id
                    ? "bg-[var(--md-sys-color-background)] border-[var(--md-sys-color-primary)] shadow-inner"
                    : "border-transparent hover:bg-black/10 dark:hover:bg-white/5 opacity-60"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`font-terminal text-xs font-bold ${activeCertId === cert.id ? "text-[var(--md-sys-color-primary)]" : "text-blue-500"}`}
                  >
                    {">"} {cert.id.toUpperCase()}
                  </span>
                  {isCertUnlocked && (
                    <CheckCircle className="w-3 h-3 text-green-500" />
                  )}
                </div>
                <span className="font-ide text-base font-bold text-[var(--md-sys-color-on-surface)] leading-snug tracking-tight">
                  {cert.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT PANEL: Execution Space */}
      <div className="flex-1 flex flex-col min-w-0 bg-[var(--md-sys-color-background)]">
        {/* URL Bar */}
        <div className="h-20 border-b border-[var(--md-sys-color-outline-variant)] flex items-center px-6 gap-4 bg-[var(--md-sys-color-surface)] shrink-0">
          <div className="flex-1 flex items-center bg-[var(--md-sys-color-surface-variant)] rounded-lg px-4 py-3 border border-[var(--md-sys-color-outline-variant)] min-w-0">
            <Globe className="w-5 h-5 text-[var(--md-sys-color-primary)] mr-3 shrink-0" />
            <span className="font-ide text-sm sm:text-base text-[var(--md-sys-color-on-surface)] truncate font-bold">
              <span className="opacity-30">https://api.kinetic.env</span>
              {activeCert.endpoint}
            </span>
          </div>
          <button
            onClick={handleFetch}
            disabled={fetchingId === activeCertId || isUnlocked}
            className={`shrink-0 px-8 py-3 rounded-lg font-terminal text-sm font-bold tracking-[0.2em] transition-all shadow-lg flex items-center gap-3 ${
              isUnlocked
                ? "bg-green-600/20 text-green-500 border border-green-500 cursor-default"
                : fetchingId === activeCertId
                  ? "bg-gray-500 opacity-50 cursor-not-allowed"
                  : "bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] hover:scale-105 active:scale-95"
            }`}
          >
            {fetchingId === activeCertId ? (
              <Activity className="w-5 h-5 animate-spin" />
            ) : isUnlocked ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <Download className="w-5 h-5" />
            )}
            {isUnlocked ? "CACHED" : "FETCH"}
          </button>
        </div>

        {/* Response Body */}
        <div className="flex-1 relative p-6 sm:p-10 overflow-y-auto scrollbar-none flex flex-col">
          <AnimatePresence mode="wait">
            {!isUnlocked && fetchingId !== activeCertId ? (
              <motion.div
                key={`idle-${activeCertId}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col items-center justify-center text-center p-6"
              >
                <div className="w-24 h-24 rounded-full bg-[var(--md-sys-color-surface-variant)] flex items-center justify-center mb-8 border border-[var(--md-sys-color-outline-variant)] shadow-2xl">
                  <Lock className="w-12 h-12 text-[var(--md-sys-color-primary)]" />
                </div>
                <h4 className="font-terminal text-3xl text-[var(--md-sys-color-on-surface)] mb-4 uppercase tracking-[0.2em] font-bold">
                  Encrypted
                </h4>
                <p className="font-ide text-base text-[var(--md-sys-color-on-surface-variant)] max-w-sm leading-relaxed mb-10 font-medium">
                  Resource{" "}
                  <span className="text-[var(--md-sys-color-primary)] font-bold">
                    {activeCert.id}
                  </span>{" "}
                  requires manual decryption.
                </p>
                <div className="font-terminal text-sm text-[var(--md-sys-color-primary)] animate-pulse tracking-[0.4em] font-bold border-2 border-[var(--md-sys-color-primary)] px-10 py-4 rounded-full">
                  EXECUTE_FETCH_TO_VIEW
                </div>
              </motion.div>
            ) : fetchingId === activeCertId ? (
              <motion.div
                key="fetching"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col items-center justify-center font-ide text-base text-[var(--md-sys-color-primary)] gap-6"
              >
                <Activity className="w-16 h-16 animate-spin" />
                <div className="tracking-[0.4em] font-bold uppercase text-xl">
                  Syncing Registry...
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={`success-${activeCertId}`}
                initial={{ opacity: 0, x: 40, filter: "blur(15px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                className="flex-1 flex flex-col h-full"
              >
                <div className="relative w-full max-w-4xl mx-auto rounded-2xl border-2 border-[var(--md-sys-color-primary)] bg-[var(--md-sys-color-surface)] shadow-[0_0_50px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden h-full">
                  {/* Header */}
                  <div className="p-8 border-b border-[var(--md-sys-color-outline-variant)] flex flex-col sm:flex-row justify-between items-start bg-[var(--md-sys-color-surface-variant)] gap-4 shrink-0">
                    <div>
                      <div className="font-terminal text-sm text-[var(--md-sys-color-primary)] uppercase tracking-[0.5em] mb-2 flex items-center gap-2 font-bold">
                        <Key className="w-5 h-5" /> AUTHORIZED_ACCESS
                      </div>
                      <h3 className="font-terminal text-3xl sm:text-4xl font-bold text-[var(--md-sys-color-on-surface)] leading-tight uppercase tracking-tight">
                        {activeCert.title}
                      </h3>
                    </div>
                    <div className="font-ide text-sm font-bold px-5 py-2 bg-[var(--md-sys-color-background)] text-[var(--md-sys-color-primary)] rounded-md border-2 border-[var(--md-sys-color-primary)] self-start whitespace-nowrap shadow-md">
                      {activeCert.period}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8 flex-1 overflow-y-auto scrollbar-none flex flex-col gap-10">
                    <div className="relative w-full rounded-xl overflow-hidden border-2 border-[var(--md-sys-color-outline-variant)] bg-black/40 group/img shadow-2xl">
                      <img
                        src={activeCert.img}
                        alt={activeCert.title}
                        className="w-full h-auto object-contain block transition-transform duration-1000"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                      <div className="flex flex-col gap-3">
                        <div className="font-terminal text-sm text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-[0.4em] font-bold">
                          Organization
                        </div>
                        <div className="font-ide text-2xl font-bold text-[var(--md-sys-color-on-surface)] tracking-wide flex items-center gap-4">
                          <FileText className="w-7 h-7 text-[var(--md-sys-color-primary)]" />{" "}
                          {activeCert.issuer}
                        </div>
                      </div>

                      <div className="bg-[var(--md-sys-color-surface-variant)]/50 border-l-4 border-[var(--md-sys-color-primary)] p-8 rounded-r-2xl">
                        <p className="font-ide text-lg text-[var(--md-sys-color-on-surface)] leading-relaxed tracking-tight font-medium">
                          {activeCert.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-4 pt-4">
                      {activeCert.tech?.map((t) => (
                        <span
                          key={t}
                          className="font-ide px-5 py-2 bg-[var(--md-sys-color-surface-variant)] border-2 border-[var(--md-sys-color-outline-variant)] text-[var(--md-sys-color-on-surface)] rounded-xl text-sm uppercase font-bold tracking-widest shadow-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="h-14 bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] flex items-center justify-center font-terminal text-xs font-bold uppercase tracking-[0.6em] shrink-0">
                    <CheckCircle className="w-5 h-5 mr-3" /> VERIFIED_DATA_ASSET
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const CertificationsSection = () => {
  const [certifications, setCertifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(false); // --- Added Offline State ---

  useEffect(() => {
    fetch(`${API_BASE_URL}api/v1/certificates/`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          setCertifications(data);
        } else {
          setCertifications(fallbackCertifications);
          setIsOffline(true);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch certifications:", error);
        setCertifications(fallbackCertifications);
        setIsOffline(true); // --- Trigger Offline UI ---
        setIsLoading(false);
      });
  }, []);

  return (
    <section id="certifications" className="scroll-mt-28">
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <Braces className="w-12 h-12 text-[var(--md-sys-color-primary)]" />
            <h2 className="font-terminal text-4xl sm:text-6xl font-bold uppercase tracking-widest text-[var(--md-sys-color-on-surface)]">
              Certificates
            </h2>
          </div>

          {/* --- Subtle Offline Indicator --- */}
          {isOffline && (
            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/50 text-red-500 px-3 py-1.5 rounded-md font-ide text-[10px] sm:text-xs font-bold tracking-widest uppercase animate-pulse w-fit">
              <AlertTriangle className="w-4 h-4" /> System_Fallback_Active
            </div>
          )}
        </div>
        <p className="font-ide text-[var(--md-sys-color-on-surface)] mb-16 max-w-4xl text-base sm:text-lg uppercase tracking-[0.3em] font-bold opacity-80">
          {">"} AUTHORIZED ACCESS ONLY. EXECUTE API CALLS TO SYNC CREDENTIALS.
        </p>
      </FadeIn>

      <FadeIn delay={150}>
        {isLoading ? (
          <div className="w-full h-[600px] flex items-center justify-center bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] rounded-2xl shadow-2xl">
            <span className="text-[var(--md-sys-color-primary)] font-ide text-base tracking-[0.5em] animate-pulse flex items-center gap-4 uppercase font-bold">
              <Activity className="w-8 h-8 animate-spin" /> Pinging Nodes...
            </span>
          </div>
        ) : (
          <ApiPlayground certifications={certifications} />
        )}
      </FadeIn>
    </section>
  );
};

export default CertificationsSection;
