// import { AnimatePresence, motion } from "framer-motion";
// import { BookOpen, TerminalSquare, X } from "lucide-react";
// import { NavLink } from "react-router-dom"; // <-- Imported NavLink

// const morphTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

// const Sidebar = ({ isOpen, onClose }) => {
//   return (
//     <>
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Share+Tech+Mono&display=swap');
//           .font-terminal { font-family: 'Share Tech Mono', monospace; }
//           .font-ide { font-family: 'Fira Code', monospace; }
//         `}
//       </style>

//       {/* Mobile Backdrop */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-black/60 backdrop-blur-md z-[80] sm:hidden"
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
//             className="fixed top-0 left-0 bottom-0 w-full sm:w-80 bg-[var(--md-sys-color-surface)] border-r-2 border-[var(--md-sys-color-outline-variant)] z-[110] shadow-2xl flex flex-col overflow-hidden"
//           >
//             {/* Header */}
//             <div className="h-[70px] flex items-center px-4 sm:px-6 border-b border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface-variant)] shrink-0 gap-2">
//               <button
//                 onClick={onClose}
//                 className="w-10 h-10 -ml-2 flex items-center justify-center rounded-lg bg-transparent text-[var(--md-sys-color-on-surface)] hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-500 group cursor-pointer"
//               >
//                 <motion.div
//                   layoutId="sidebar-icon"
//                   transition={morphTransition}
//                 >
//                   <X className="w-6 h-6 group-hover:-rotate-90 transition-transform duration-500" />
//                 </motion.div>
//               </button>

//               <motion.div
//                 initial={{ opacity: 0, x: 10 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.3, duration: 0.4 }}
//                 className="flex items-center gap-3 text-[var(--md-sys-color-primary)] font-terminal font-bold text-sm tracking-[0.2em] uppercase ml-2"
//               >
//                 <TerminalSquare className="w-5 h-5" />
//                 <span>System_Menu</span>
//               </motion.div>
//             </div>

//             {/* Staggered Body Content */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.4 }}
//               className="p-6 flex-1 overflow-y-auto flex flex-col gap-8 bg-[var(--md-sys-color-background)]"
//             >
//               <div className="flex flex-col gap-4">
//                 <h3 className="font-terminal text-[11px] uppercase tracking-[0.3em] text-[var(--md-sys-color-on-surface-variant)] font-bold px-1">
//                   Applications
//                 </h3>

//                 {/* Blog Entry - Upgraded to NavLink */}
//                 <NavLink
//                   to="/blogs"
//                   onClick={onClose} // Closes sidebar immediately on route change
//                   className={({ isActive }) =>
//                     `flex items-center gap-5 px-5 py-6 rounded-2xl border-2 transition-all duration-500 group shadow-md hover:shadow-xl hover:-translate-y-1 ${
//                       isActive
//                         ? "border-[var(--md-sys-color-primary)] bg-[var(--md-sys-color-surface-variant)] text-[var(--md-sys-color-primary)]"
//                         : "border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface)] hover:bg-[var(--md-sys-color-surface-variant)] hover:border-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-surface)]"
//                     }`
//                   }
//                 >
//                   <div className="w-14 h-14 rounded-xl bg-[var(--md-sys-color-primary-container)] flex items-center justify-center group-hover:scale-110 transition-transform duration-700 shadow-inner">
//                     <BookOpen className="w-7 h-7 text-[var(--md-sys-color-on-primary-container)]" />
//                   </div>
//                   <div className="flex flex-col gap-1.5">
//                     <span className="font-terminal font-bold tracking-widest uppercase text-base transition-colors duration-500">
//                       My_Blogs
//                     </span>
//                     <span className="font-ide text-[11px] text-[var(--md-sys-color-on-surface)] font-bold tracking-tight opacity-80 leading-tight">
//                       Access technical articles and insights
//                     </span>
//                   </div>
//                 </NavLink>
//               </div>

//               {/* System Footer Metadata */}
//               <div className="mt-auto pt-6 border-t border-[var(--md-sys-color-outline-variant)] font-ide text-[10px] uppercase tracking-widest text-[var(--md-sys-color-on-surface-variant)] font-bold flex flex-col gap-2">
//                 <div className="flex items-center gap-2">
//                   <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
//                   <span>Status: Authorized_Access</span>
//                 </div>
//                 <span>Session: Active_0x0FF</span>
//               </div>
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
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const morphTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Smooth Navigation Handler
  const handleBlogNavigation = (e) => {
    // If we are already on the blogs page, just close the menu normally
    if (location.pathname.startsWith("/blogs")) {
      onClose();
      return;
    }

    // Otherwise, intercept the instant route change
    e.preventDefault();
    onClose(); // Start the morph animation immediately

    // Wait for the morph to smoothly establish before swapping out the heavy DOM
    setTimeout(() => {
      navigate("/blogs");
    }, 350);
  };

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
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
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
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="p-6 flex-1 overflow-y-auto flex flex-col gap-8 bg-[var(--md-sys-color-background)]"
            >
              <div className="flex flex-col gap-4">
                <h3 className="font-terminal text-[11px] uppercase tracking-[0.3em] text-[var(--md-sys-color-on-surface-variant)] font-bold px-1">
                  Applications
                </h3>

                {/* Blog Entry - Using custom handler for smooth animation */}
                <NavLink
                  to="/blogs"
                  onClick={handleBlogNavigation}
                  className={({ isActive }) =>
                    `flex items-center gap-5 px-5 py-6 rounded-2xl border-2 transition-all duration-500 group shadow-md hover:shadow-xl hover:-translate-y-1 ${
                      isActive
                        ? "border-[var(--md-sys-color-primary)] bg-[var(--md-sys-color-surface-variant)] text-[var(--md-sys-color-primary)]"
                        : "border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface)] hover:bg-[var(--md-sys-color-surface-variant)] hover:border-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-surface)]"
                    }`
                  }
                >
                  <div className="w-14 h-14 rounded-xl bg-[var(--md-sys-color-primary-container)] flex items-center justify-center group-hover:scale-110 transition-transform duration-700 shadow-inner">
                    <BookOpen className="w-7 h-7 text-[var(--md-sys-color-on-primary-container)]" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-terminal font-bold tracking-widest uppercase text-base transition-colors duration-500">
                      My_Blogs
                    </span>
                    <span className="font-ide text-[11px] text-[var(--md-sys-color-on-surface)] font-bold tracking-tight opacity-80 leading-tight">
                      Access technical articles and insights
                    </span>
                  </div>
                </NavLink>
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
