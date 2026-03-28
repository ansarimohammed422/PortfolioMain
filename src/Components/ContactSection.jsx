// import React, { useState } from "react";
// import FadeIn from "./FadeIn";
// import { Shield, Send, Mail, GitBranch, Users, ArrowRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// const KineticInput = ({
//   label,
//   id,
//   type = "text",
//   value,
//   onChange,
//   isTextArea,
//   placeholder,
// }) => {
//   const [focused, setFocused] = useState(false);

//   return (
//     <div className="relative mb-8 font-mono">
//       <div className="flex justify-between items-end mb-2">
//         <label
//           className={`text-[10px] tracking-[0.2em] transition-colors duration-300 uppercase ${focused ? "text-[var(--md-sys-color-primary)]" : "text-[var(--md-sys-color-on-surface-variant)]"}`}
//         >
//           {label} {focused && <span className="animate-pulse">_</span>}
//         </label>
//         {focused && (
//           <span className="text-[9px] text-[var(--md-sys-color-primary)] opacity-60 uppercase tracking-widest">
//             [{value.length} / 256 BYTES]
//           </span>
//         )}
//       </div>

//       <div className="relative group">
//         <div
//           className={`absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 transition-all duration-300 ${focused ? "border-[var(--md-sys-color-primary)] scale-100 opacity-100" : "border-[var(--md-sys-color-outline-variant)] opacity-0 scale-150"}`}
//         />
//         <div
//           className={`absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 transition-all duration-300 ${focused ? "border-[var(--md-sys-color-primary)] scale-100 opacity-100" : "border-[var(--md-sys-color-outline-variant)] opacity-0 scale-150"}`}
//         />

//         {isTextArea ? (
//           <textarea
//             id={id}
//             value={value}
//             onChange={onChange}
//             onFocus={() => setFocused(true)}
//             onBlur={() => setFocused(false)}
//             className="w-full bg-[var(--md-sys-color-surface-variant)] border border-transparent text-[var(--md-sys-color-on-surface)] text-sm px-4 py-4 focus:outline-none transition-colors duration-300 placeholder-[var(--md-sys-color-on-surface-variant)] opacity-80"
//             placeholder={placeholder}
//             rows={4}
//             spellCheck="false"
//           />
//         ) : (
//           <input
//             id={id}
//             type={type}
//             value={value}
//             onChange={onChange}
//             onFocus={() => setFocused(true)}
//             onBlur={() => setFocused(false)}
//             className="w-full bg-[var(--md-sys-color-surface-variant)] border border-transparent text-[var(--md-sys-color-on-surface)] text-sm px-4 py-3 focus:outline-none transition-colors duration-300 placeholder-[var(--md-sys-color-on-surface-variant)] opacity-80"
//             placeholder={placeholder}
//             spellCheck="false"
//           />
//         )}

//         <div className="absolute bottom-0 left-0 h-[2px] bg-[var(--md-sys-color-outline-variant)] w-full overflow-hidden">
//           <motion.div
//             className="h-full bg-[var(--md-sys-color-primary)] shadow-[0_0_8px_var(--md-sys-color-primary)]"
//             initial={{ width: 0 }}
//             animate={{
//               width: `${Math.min((value.length / (isTextArea ? 150 : 30)) * 100, 100)}%`,
//             }}
//             transition={{ ease: "easeOut", duration: 0.2 }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("IDLE"); // IDLE, TRANSMITTING, DELIVERED
//   const [log, setLog] = useState([]);

//   const handleTransmit = (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.message) return;

//     setStatus("TRANSMITTING");
//     setLog([
//       "> INITIALIZING SECURE UPLINK...",
//       "> GENERATING 2048-BIT ENCRYPTION KEY...",
//     ]);

//     setTimeout(() => {
//       setLog((prev) => [
//         ...prev,
//         "> KEY SECURED.",
//         "> PACKAGING DATA PAYLOAD...",
//       ]);

//       setTimeout(() => {
//         setLog((prev) => [
//           ...prev,
//           "> UPLOADING TO SECURE SERVER...",
//           "[||||||||||||||||||||] 100%",
//         ]);

//         setTimeout(() => {
//           setStatus("DELIVERED");
//           setLog((prev) => [
//             ...prev,
//             "> TRANSMISSION COMPLETE.",
//             "> CONNECTION TERMINATED.",
//           ]);

//           setTimeout(() => {
//             setStatus("IDLE");
//             setLog([]);
//             setFormData({ name: "", email: "", message: "" });
//           }, 4000);
//         }, 1500);
//       }, 1500);
//     }, 1500);
//   };

//   return (
//     <section id="contact" className="scroll-mt-28 sm:scroll-mt-24 pb-20">
//       <FadeIn>
//         <div className="flex items-center gap-3 mb-8">
//           <Shield className="w-8 h-8 text-[var(--md-sys-color-primary)]" />
//           <h2 className="text-3xl font-bold uppercase tracking-widest">
//             Secure Uplink
//           </h2>
//         </div>
//       </FadeIn>

//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
//         <FadeIn className="lg:col-span-7">
//           <div className="bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] rounded-2xl overflow-hidden shadow-xl">
//             <div className="h-12 bg-[var(--md-sys-color-surface-variant)] border-b border-[var(--md-sys-color-outline-variant)] flex items-center px-4 justify-between font-mono text-[10px] text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-widest select-none">
//               <div className="flex gap-2">
//                 <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
//                 <span className="w-3 h-3 rounded-full bg-yellow-500/50"></span>
//                 <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
//               </div>
//               <span>Terminal_Port_001</span>
//             </div>

//             <div className="p-6 sm:p-10 relative min-h-[420px]">
//               <AnimatePresence mode="wait">
//                 {status === "IDLE" ? (
//                   <motion.form
//                     key="form"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     onSubmit={handleTransmit}
//                     className="flex flex-col h-full"
//                   >
//                     <KineticInput
//                       label="Target_ID (Name)"
//                       id="name"
//                       value={formData.name}
//                       onChange={(e) =>
//                         setFormData({ ...formData, name: e.target.value })
//                       }
//                       placeholder="Enter identification..."
//                     />
//                     <KineticInput
//                       label="Return_Frequency (Email)"
//                       id="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={(e) =>
//                         setFormData({ ...formData, email: e.target.value })
//                       }
//                       placeholder="Enter return signal address..."
//                     />
//                     <KineticInput
//                       label="Payload_Data (Message)"
//                       id="message"
//                       isTextArea
//                       value={formData.message}
//                       onChange={(e) =>
//                         setFormData({ ...formData, message: e.target.value })
//                       }
//                       placeholder="Enter transmission contents..."
//                     />

//                     <button
//                       type="submit"
//                       disabled={
//                         !formData.name || !formData.email || !formData.message
//                       }
//                       className="mt-auto w-full group relative overflow-hidden bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] border border-[var(--md-sys-color-outline-variant)] font-mono font-bold uppercase tracking-[0.3em] py-5 rounded-xl transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
//                     >
//                       <span className="relative z-10 flex items-center justify-center gap-3">
//                         Transmit_Payload{" "}
//                         <Send className="w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
//                       </span>
//                       <div className="absolute inset-0 bg-[var(--md-sys-color-primary)] opacity-0 group-hover:opacity-20 transition-opacity" />
//                     </button>
//                   </motion.form>
//                 ) : (
//                   <motion.div
//                     key="terminal"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="absolute inset-0 bg-[#0a0a0a] p-8 font-mono text-[var(--md-sys-color-primary)] flex flex-col justify-center border border-[var(--md-sys-color-primary)]/30"
//                   >
//                     <div className="flex-1 flex flex-col gap-3 justify-center">
//                       {log.map((line, i) => (
//                         <motion.div
//                           key={i}
//                           initial={{ opacity: 0, x: -10 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           className="text-xs sm:text-sm"
//                         >
//                           {line}
//                         </motion.div>
//                       ))}
//                       {status === "TRANSMITTING" && (
//                         <Activity className="w-6 h-6 animate-spin mt-4 opacity-50" />
//                       )}
//                       {status === "DELIVERED" && (
//                         <motion.div
//                           initial={{ scale: 0 }}
//                           animate={{ scale: 1 }}
//                           className="mt-6 flex flex-col items-center text-center text-[var(--md-sys-color-primary)]"
//                         >
//                           <CheckCircle className="w-16 h-16 mb-4 shadow-[0_0_20px_var(--md-sys-color-primary)] rounded-full" />
//                           <span className="tracking-[0.4em] uppercase text-lg">
//                             Signal Received
//                           </span>
//                         </motion.div>
//                       )}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </FadeIn>

//         <FadeIn className="lg:col-span-5 flex flex-col gap-4">
//           <div className="bg-[var(--md-sys-color-surface-variant)] p-6 rounded-2xl border border-[var(--md-sys-color-outline-variant)] mb-2">
//             <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--md-sys-color-on-surface-variant)] mb-2">
//               System Status
//             </h3>
//             <div className="flex items-center gap-3 text-sm font-bold text-[var(--md-sys-color-on-surface)]">
//               <span className="relative flex h-3 w-3">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
//               </span>
//               Accepting Direct Connections
//             </div>
//           </div>

//           {[
//             {
//               name: "Global_Mail_Protocol",
//               desc: "hello@example.com",
//               icon: Mail,
//               url: "mailto:hello@example.com",
//             },
//             {
//               name: "Source_Code_Vault",
//               desc: "Access public repositories",
//               icon: GitBranch,
//               url: "https://github.com",
//             },
//             {
//               name: "Professional_Network",
//               desc: "Establish business sync",
//               icon: Users,
//               url: "https://linkedin.com",
//             },
//           ].map((social, i) => {
//             const SocialIcon = social.icon;
//             return (
//               <a
//                 key={i}
//                 href={social.url}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="relative p-6 rounded-2xl bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] hover:border-[var(--md-sys-color-primary)] transition-all duration-500 flex items-center gap-5 group overflow-hidden shadow-sm hover:shadow-xl"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-[var(--md-sys-color-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-0" />
//                 <div className="w-12 h-12 rounded-xl bg-[var(--md-sys-color-surface-variant)] flex items-center justify-center group-hover:bg-[var(--md-sys-color-primary)] transition-colors relative z-10">
//                   <SocialIcon className="w-5 h-5 text-[var(--md-sys-color-on-surface)] group-hover:text-[var(--md-sys-color-on-primary)] transition-colors" />
//                 </div>
//                 <div className="flex-1 relative z-10">
//                   <div className="font-mono text-xs uppercase tracking-widest text-[var(--md-sys-color-primary)] mb-1">
//                     {social.name}
//                   </div>
//                   <div className="text-sm font-bold text-[var(--md-sys-color-on-surface)]">
//                     {social.desc}
//                   </div>
//                 </div>
//                 <ArrowRight className="w-5 h-5 text-[var(--md-sys-color-outline-variant)] group-hover:text-[var(--md-sys-color-primary)] group-hover:translate-x-2 transition-all relative z-10" />
//               </a>
//             );
//           })}
//         </FadeIn>
//       </div>
//     </section>
//   );
// };
// export default ContactSection;

import React, { useState } from "react";
import FadeIn from "./FadeIn";
import {
  Shield,
  Send,
  Mail,
  GitBranch,
  Users,
  ArrowRight,
  Phone,
  Activity,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- BACKEND SCOPE PREPARATION ---
// Later, replace this static object with state populated by your Django API
const contactData = {
  status: "Accepting Direct Connections",
  email: "ansarimohammed122@gmail.com",
  phone: "+91 9326797184",
  github: "https://github.com", // Replace with your actual GitHub link later
  linkedin: "https://www.linkedin.com/in/mohammed-ansari-690524266",
};

const KineticInput = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  isTextArea,
  placeholder,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative mb-8 font-mono">
      <div className="flex justify-between items-end mb-2">
        <label
          className={`text-[10px] tracking-[0.2em] transition-colors duration-300 uppercase ${focused ? "text-[var(--md-sys-color-primary)]" : "text-[var(--md-sys-color-on-surface-variant)]"}`}
        >
          {label} {focused && <span className="animate-pulse">_</span>}
        </label>
        {focused && (
          <span className="text-[9px] text-[var(--md-sys-color-primary)] opacity-60 uppercase tracking-widest">
            [{value.length} / 256 BYTES]
          </span>
        )}
      </div>

      <div className="relative group">
        <div
          className={`absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 transition-all duration-300 ${focused ? "border-[var(--md-sys-color-primary)] scale-100 opacity-100" : "border-[var(--md-sys-color-outline-variant)] opacity-0 scale-150"}`}
        />
        <div
          className={`absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 transition-all duration-300 ${focused ? "border-[var(--md-sys-color-primary)] scale-100 opacity-100" : "border-[var(--md-sys-color-outline-variant)] opacity-0 scale-150"}`}
        />

        {isTextArea ? (
          <textarea
            id={id}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full bg-[var(--md-sys-color-surface-variant)] border border-transparent text-[var(--md-sys-color-on-surface)] text-sm px-4 py-4 focus:outline-none transition-colors duration-300 placeholder-[var(--md-sys-color-on-surface-variant)] opacity-80"
            placeholder={placeholder}
            rows={4}
            spellCheck="false"
          />
        ) : (
          <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full bg-[var(--md-sys-color-surface-variant)] border border-transparent text-[var(--md-sys-color-on-surface)] text-sm px-4 py-3 focus:outline-none transition-colors duration-300 placeholder-[var(--md-sys-color-on-surface-variant)] opacity-80"
            placeholder={placeholder}
            spellCheck="false"
          />
        )}

        <div className="absolute bottom-0 left-0 h-[2px] bg-[var(--md-sys-color-outline-variant)] w-full overflow-hidden">
          <motion.div
            className="h-full bg-[var(--md-sys-color-primary)] shadow-[0_0_8px_var(--md-sys-color-primary)]"
            initial={{ width: 0 }}
            animate={{
              width: `${Math.min((value.length / (isTextArea ? 150 : 30)) * 100, 100)}%`,
            }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          />
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("IDLE"); // IDLE, TRANSMITTING, DELIVERED
  const [log, setLog] = useState([]);

  const handleTransmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("TRANSMITTING");
    setLog([
      "> INITIALIZING SECURE UPLINK...",
      "> GENERATING 2048-BIT ENCRYPTION KEY...",
    ]);

    setTimeout(() => {
      setLog((prev) => [
        ...prev,
        "> KEY SECURED.",
        "> PACKAGING DATA PAYLOAD...",
      ]);

      setTimeout(() => {
        setLog((prev) => [
          ...prev,
          "> UPLOADING TO SECURE SERVER...",
          "[||||||||||||||||||||] 100%",
        ]);

        setTimeout(() => {
          setStatus("DELIVERED");
          setLog((prev) => [
            ...prev,
            "> TRANSMISSION COMPLETE.",
            "> CONNECTION TERMINATED.",
          ]);

          setTimeout(() => {
            setStatus("IDLE");
            setLog([]);
            setFormData({ name: "", email: "", message: "" });
          }, 4000);
        }, 1500);
      }, 1500);
    }, 1500);
  };

  const socialLinks = [
    {
      name: "Global_Mail_Protocol",
      desc: contactData.email,
      icon: Mail,
      url: `mailto:${contactData.email}`,
    },
    {
      name: "Direct_Comms_Link",
      desc: contactData.phone,
      icon: Phone,
      url: `tel:${contactData.phone.replace(/\s/g, "")}`,
    },
    {
      name: "Source_Code_Vault",
      desc: "Access public repositories",
      icon: GitBranch,
      url: contactData.github,
    },
    {
      name: "Professional_Network",
      desc: "Establish business sync",
      icon: Users,
      url: contactData.linkedin,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-28 sm:scroll-mt-24 pb-20">
      <FadeIn>
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-8 h-8 text-[var(--md-sys-color-primary)]" />
          <h2 className="text-3xl font-bold uppercase tracking-widest">
            Secure Uplink
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <FadeIn className="lg:col-span-7">
          <div className="bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] rounded-2xl overflow-hidden shadow-xl">
            <div className="h-12 bg-[var(--md-sys-color-surface-variant)] border-b border-[var(--md-sys-color-outline-variant)] flex items-center px-4 justify-between font-mono text-[10px] text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-widest select-none">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/50"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
              </div>
              <span>Terminal_Port_001</span>
            </div>

            <div className="p-6 sm:p-10 relative min-h-[420px]">
              <AnimatePresence mode="wait">
                {status === "IDLE" ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleTransmit}
                    className="flex flex-col h-full"
                  >
                    <KineticInput
                      label="Target_ID (Name)"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Enter identification..."
                    />
                    <KineticInput
                      label="Return_Frequency (Email)"
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="Enter return signal address..."
                    />
                    <KineticInput
                      label="Payload_Data (Message)"
                      id="message"
                      isTextArea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Enter transmission contents..."
                    />

                    <button
                      type="submit"
                      disabled={
                        !formData.name || !formData.email || !formData.message
                      }
                      className="mt-auto w-full group relative overflow-hidden bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] border border-[var(--md-sys-color-outline-variant)] font-mono font-bold uppercase tracking-[0.3em] py-5 rounded-xl transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        Transmit_Payload{" "}
                        <Send className="w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-[var(--md-sys-color-primary)] opacity-0 group-hover:opacity-20 transition-opacity" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="terminal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#0a0a0a] p-8 font-mono text-[var(--md-sys-color-primary)] flex flex-col justify-center border border-[var(--md-sys-color-primary)]/30"
                  >
                    <div className="flex-1 flex flex-col gap-3 justify-center">
                      {log.map((line, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-xs sm:text-sm"
                        >
                          {line}
                        </motion.div>
                      ))}
                      {/* Note: If you don't have these imported from framer-motion/lucide, make sure CheckCircle and Activity are imported at the top! */}
                      {status === "TRANSMITTING" && (
                        <div className="w-6 h-6 animate-spin mt-4 border-2 border-[var(--md-sys-color-primary)] border-t-transparent rounded-full opacity-50" />
                      )}
                      {status === "DELIVERED" && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="mt-6 flex flex-col items-center text-center text-[var(--md-sys-color-primary)]"
                        >
                          {/* Placeholder for CheckCircle icon to avoid import errors if it wasn't there */}
                          <div className="w-16 h-16 mb-4 shadow-[0_0_20px_var(--md-sys-color-primary)] rounded-full flex items-center justify-center border-4 border-[var(--md-sys-color-primary)]">
                            <div className="w-6 h-10 border-r-4 border-b-4 border-[var(--md-sys-color-primary)] transform rotate-45 -mt-2"></div>
                          </div>
                          <span className="tracking-[0.4em] uppercase text-lg">
                            Signal Received
                          </span>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-[var(--md-sys-color-surface-variant)] p-6 rounded-2xl border border-[var(--md-sys-color-outline-variant)] mb-2">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--md-sys-color-on-surface-variant)] mb-2">
              System Status
            </h3>
            <div className="flex items-center gap-3 text-sm font-bold text-[var(--md-sys-color-on-surface)]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              {contactData.status}
            </div>
          </div>

          {socialLinks.map((social, i) => {
            const SocialIcon = social.icon;
            return (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="relative p-6 rounded-2xl bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] hover:border-[var(--md-sys-color-primary)] transition-all duration-500 flex items-center gap-5 group overflow-hidden shadow-sm hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--md-sys-color-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-0" />
                <div className="w-12 h-12 rounded-xl bg-[var(--md-sys-color-surface-variant)] flex items-center justify-center group-hover:bg-[var(--md-sys-color-primary)] transition-colors relative z-10">
                  <SocialIcon className="w-5 h-5 text-[var(--md-sys-color-on-surface)] group-hover:text-[var(--md-sys-color-on-primary)] transition-colors" />
                </div>
                <div className="flex-1 relative z-10 overflow-hidden">
                  <div className="font-mono text-xs uppercase tracking-widest text-[var(--md-sys-color-primary)] mb-1">
                    {social.name}
                  </div>
                  <div className="text-sm font-bold text-[var(--md-sys-color-on-surface)] truncate">
                    {social.desc}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-[var(--md-sys-color-outline-variant)] group-hover:text-[var(--md-sys-color-primary)] group-hover:translate-x-2 transition-all relative z-10" />
              </a>
            );
          })}
        </FadeIn>
      </div>
    </section>
  );
};
export default ContactSection;
