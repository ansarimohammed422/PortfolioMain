// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, Terminal, BookOpen } from "lucide-react";
// import FadeIn from "./FadeIn";

// const Sidebar = ({ isOpen, onClose }) => {
//   return (
//     <>
//       {/* Mobile Backdrop - Only renders on smaller screens */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] md:hidden"
//           />
//         )}
//       </AnimatePresence>

//       {/* GNOME-style Sidebar Panel */}
//       <motion.div
//         initial={false}
//         animate={{ x: isOpen ? 0 : "-100%" }}
//         transition={{ type: "spring", bounce: 0, duration: 0.5 }}
//         className="fixed top-0 left-0 bottom-0 w-72 bg-[var(--md-sys-color-surface)] border-r border-[var(--md-sys-color-outline-variant)] z-[70] shadow-2xl md:shadow-none flex flex-col"
//       >
//         {/* Sidebar Header Bar */}
//         <div className="h-[60px] flex items-center px-4 border-b border-[var(--md-sys-color-outline-variant)] shrink-0 bg-[var(--md-sys-color-surface)]">
//           {/* Toggle Button Layout Placeholder (Matches Navbar LayoutID) */}
//           <div className="w-10 h-10 shrink-0 flex items-center justify-center">
//             {/* The actual button is rendered via Navbar's layoutId logic in the parent App */}
//           </div>

//           <div className="flex items-center gap-2 text-[var(--md-sys-color-primary)] font-bold text-sm tracking-wide ml-3 cursor-default">
//             <Terminal className="w-5 h-5" />
//             <span>Kinetic_Env</span>
//           </div>
//         </div>

//         {/* Sidebar Content */}
//         <div className="p-3 flex-1 overflow-y-auto bg-[var(--md-sys-color-background)]">
//           <div className="space-y-1">
//             <a
//               href="#blog"
//               onClick={(e) => {
//                 e.preventDefault();
//                 // Replace with your routing logic
//                 console.log("Navigating to Blog...");
//                 if (window.innerWidth < 768) onClose();
//               }}
//               className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[var(--md-sys-color-surface-variant)] text-[var(--md-sys-color-on-surface)] font-medium transition-colors group cursor-pointer"
//             >
//               <div className="w-8 h-8 rounded-lg bg-[var(--md-sys-color-primary-container)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
//                 <BookOpen className="w-4 h-4 text-[var(--md-sys-color-on-primary-container)]" />
//               </div>
//               <span>Read My Blog</span>
//             </a>

//             {/* Add more sidebar items here following the same pattern */}
//           </div>
//         </div>

//         {/* Sidebar Footer Info */}
//         <div className="p-4 border-t border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface)]">
//           <p className="text-[10px] font-bold text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-widest opacity-50">
//             System Version 1.0.0
//           </p>
//         </div>
//       </motion.div>
//     </>
//   );
// };
// export default Sidebar;

// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, Terminal, BookOpen } from "lucide-react";

// const Sidebar = ({ isOpen, onClose }) => {
//   return (
//     <>
//       {/* Mobile Backdrop - Only renders on smaller screens */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] md:hidden"
//           />
//         )}
//       </AnimatePresence>

//       {/* GNOME-style Sidebar Panel */}
//       <motion.div
//         initial={false}
//         animate={{ x: isOpen ? 0 : "-100%" }}
//         transition={{ type: "spring", bounce: 0, duration: 0.5 }}
//         className="fixed top-0 left-0 bottom-0 w-72 bg-[var(--md-sys-color-surface)] border-r border-[var(--md-sys-color-outline-variant)] z-[70] shadow-2xl md:shadow-none flex flex-col"
//       >
//         {/* Sidebar Header Bar */}
//         <div className="h-[60px] flex items-center px-4 border-b border-[var(--md-sys-color-outline-variant)] shrink-0 bg-[var(--md-sys-color-surface)]">
//           {/* --- SHARED MOTION BUTTON START --- */}
//           <div className="w-10 h-10 shrink-0 flex items-center justify-center">
//             {isOpen && (
//               <motion.button
//                 layoutId="sidebar-toggle-btn" // MUST match Navbar layoutId
//                 onClick={onClose}
//                 className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] shadow-md shrink-0"
//                 aria-label="Close Sidebar"
//               >
//                 <motion.div
//                   initial={{ rotate: -90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <X className="w-5 h-5" />
//                 </motion.div>
//               </motion.button>
//             )}
//           </div>
//           {/* --- SHARED MOTION BUTTON END --- */}

//           <div className="flex items-center gap-2 text-[var(--md-sys-color-primary)] font-bold text-sm tracking-wide ml-3 cursor-default">
//             <Terminal className="w-5 h-5" />
//             <span>Kinetic_Env</span>
//           </div>
//         </div>

//         {/* Sidebar Content */}
//         <div className="p-3 flex-1 overflow-y-auto bg-[var(--md-sys-color-background)]">
//           <div className="space-y-1">
//             <a
//               href="#blog"
//               onClick={(e) => {
//                 e.preventDefault();
//                 console.log("Navigating to Blog...");
//                 if (window.innerWidth < 768) onClose();
//               }}
//               className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[var(--md-sys-color-surface-variant)] text-[var(--md-sys-color-on-surface)] font-medium transition-colors group cursor-pointer"
//             >
//               <div className="w-8 h-8 rounded-lg bg-[var(--md-sys-color-primary-container)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
//                 <BookOpen className="w-4 h-4 text-[var(--md-sys-color-on-primary-container)]" />
//               </div>
//               <span>Read My Blog</span>
//             </a>
//           </div>
//         </div>

//         {/* Sidebar Footer Info */}
//         <div className="p-4 border-t border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface)]">
//           <p className="text-[10px] font-bold text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-widest opacity-50">
//             System Version 1.0.0
//           </p>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default Sidebar;

// import { AnimatePresence, motion } from "framer-motion";
// import { BookOpen, TerminalSquare, X } from "lucide-react";

// const morphTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

// const Sidebar = ({ isOpen, onClose }) => {
//   return (
//     <>
//       {/* Mobile Backdrop (Hidden on Desktop for Side-by-Side) */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[80] sm:hidden"
//           />
//         )}
//       </AnimatePresence>

//       {/* Morphing Left Sidebar Panel */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             layoutId="sidebar-panel"
//             transition={morphTransition}
//             style={{ borderRadius: "0px" }}
//             className="fixed top-0 left-0 bottom-0 w-full sm:w-80 bg-[var(--md-sys-color-surface)] border-r border-[var(--md-sys-color-outline-variant)] z-[110] shadow-2xl flex flex-col font-mono overflow-hidden"
//           >
//             {/* Header */}
//             <div className="h-[60px] flex items-center px-4 sm:px-6 border-b border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface-variant)] shrink-0 gap-2">
//               {/* Close Button perfectly morphs back to hamburger icon */}
//               <button
//                 onClick={onClose}
//                 className="w-10 h-10 -ml-2 flex items-center justify-center rounded-lg bg-transparent text-[var(--md-sys-color-on-surface-variant)] hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-500 group cursor-pointer"
//               >
//                 <motion.div
//                   layoutId="sidebar-icon"
//                   transition={morphTransition}
//                 >
//                   <X className="w-5 h-5 group-hover:-rotate-90 transition-transform duration-500" />
//                 </motion.div>
//               </button>

//               <motion.div
//                 initial={{ opacity: 0, x: 10 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.3, duration: 0.4 }}
//                 className="flex items-center gap-3 text-[var(--md-sys-color-primary)] font-bold text-xs tracking-[0.2em] uppercase ml-2"
//               >
//                 <TerminalSquare className="w-4 h-4" />
//                 <span>System</span>
//               </motion.div>
//             </div>

//             {/* Staggered Body Content */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.4 }}
//               className="p-6 flex-1 overflow-y-auto flex flex-col gap-8 bg-[var(--md-sys-color-background)]"
//             >
//               {/* Single Blog Entry */}
//               <a
//                 href="#"
//                 className="flex items-center gap-4 px-5 py-5 rounded-2xl border border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface)] hover:bg-[var(--md-sys-color-surface-variant)] hover:border-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-surface)] transition-all duration-500 group shadow-sm hover:shadow-xl hover:-translate-y-1"
//               >
//                 <div className="w-12 h-12 rounded-xl bg-[var(--md-sys-color-primary-container)] flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
//                   <BookOpen className="w-6 h-6 text-[var(--md-sys-color-on-primary-container)]" />
//                 </div>
//                 <div className="flex flex-col gap-1">
//                   <span className="font-bold tracking-widest uppercase text-sm group-hover:text-[var(--md-sys-color-primary)] transition-colors duration-500">
//                     My Blogs
//                   </span>
//                   <span className="text-[10px] text-[var(--md-sys-color-on-surface-variant)] opacity-70 tracking-wide">
//                     Read the latest articles
//                   </span>
//                 </div>
//               </a>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };
// export default Sidebar;

import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, TerminalSquare, X } from "lucide-react";

const morphTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Share+Tech+Mono&display=swap');
          .font-terminal { font-family: 'Share Tech Mono', monospace; }
          .font-ide { font-family: 'Fira Code', monospace; }
        `}
      </style>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[80] sm:hidden"
          />
        )}
      </AnimatePresence>

      {/* Morphing Left Sidebar Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layoutId="sidebar-panel"
            transition={morphTransition}
            style={{ borderRadius: "0px" }}
            className="fixed top-0 left-0 bottom-0 w-full sm:w-80 bg-[var(--md-sys-color-surface)] border-r-2 border-[var(--md-sys-color-outline-variant)] z-[110] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="h-[70px] flex items-center px-4 sm:px-6 border-b border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface-variant)] shrink-0 gap-2">
              <button
                onClick={onClose}
                className="w-10 h-10 -ml-2 flex items-center justify-center rounded-lg bg-transparent text-[var(--md-sys-color-on-surface)] hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-500 group cursor-pointer"
              >
                <motion.div
                  layoutId="sidebar-icon"
                  transition={morphTransition}
                >
                  <X className="w-6 h-6 group-hover:-rotate-90 transition-transform duration-500" />
                </motion.div>
              </button>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="flex items-center gap-3 text-[var(--md-sys-color-primary)] font-terminal font-bold text-sm tracking-[0.2em] uppercase ml-2"
              >
                <TerminalSquare className="w-5 h-5" />
                <span>System_Menu</span>
              </motion.div>
            </div>

            {/* Staggered Body Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="p-6 flex-1 overflow-y-auto flex flex-col gap-8 bg-[var(--md-sys-color-background)]"
            >
              <div className="flex flex-col gap-4">
                <h3 className="font-terminal text-[11px] uppercase tracking-[0.3em] text-[var(--md-sys-color-on-surface-variant)] font-bold px-1">
                  Applications
                </h3>

                {/* Blog Entry - Enhanced Readability */}
                <a
                  href="#"
                  className="flex items-center gap-5 px-5 py-6 rounded-2xl border-2 border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface)] hover:bg-[var(--md-sys-color-surface-variant)] hover:border-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-surface)] transition-all duration-500 group shadow-md hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-[var(--md-sys-color-primary-container)] flex items-center justify-center group-hover:scale-110 transition-transform duration-700 shadow-inner">
                    <BookOpen className="w-7 h-7 text-[var(--md-sys-color-on-primary-container)]" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-terminal font-bold tracking-widest uppercase text-base group-hover:text-[var(--md-sys-color-primary)] transition-colors duration-500">
                      My_Blogs
                    </span>
                    <span className="font-ide text-[11px] text-[var(--md-sys-color-on-surface)] font-bold tracking-tight opacity-80 leading-tight">
                      Access technical articles and insights
                    </span>
                  </div>
                </a>
              </div>

              {/* System Footer Metadata */}
              <div className="mt-auto pt-6 border-t border-[var(--md-sys-color-outline-variant)] font-ide text-[10px] uppercase tracking-widest text-[var(--md-sys-color-on-surface-variant)] font-bold flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span>Status: Authorized_Access</span>
                </div>
                <span>Session: Active_0x0FF</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
