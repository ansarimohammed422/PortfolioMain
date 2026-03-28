// // import {
// //   Terminal,
// //   User,
// //   MonitorSmartphone,
// //   Briefcase,
// //   FolderOpen,
// //   Sun,
// //   Moon,
// // } from "lucide-react";

// // const Navbar = ({ scrolled, activeTab, scrollTo, toggleTheme, isDarkMode }) => {
// //   return (
// //     <header
// //       className={`fixed top-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border-b border-[var(--md-sys-color-outline-variant)] ${
// //         scrolled
// //           ? "header-glass shadow-lg translate-y-0"
// //           : "bg-transparent border-transparent py-2"
// //       }`}
// //     >
// //       <div className="max-w-6xl mx-auto px-4 h-[60px] flex items-center justify-between transition-all duration-700">
// //         <div
// //           className="hidden sm:flex items-center gap-2 text-[var(--md-sys-color-on-surface-variant)] font-medium text-sm group cursor-pointer"
// //           onClick={() => scrollTo("#top")}
// //         >
// //           <Terminal className="w-5 h-5 text-[var(--md-sys-color-primary)] group-hover:rotate-3 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" />
// //           <span className="group-hover:tracking-wide transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
// //             Alex Mercer
// //           </span>
// //         </div>

// //         {/* Navigation View Switcher */}
// //         <nav className="adw-view-switcher flex-1 sm:flex-none justify-center z-10 overflow-x-auto no-scrollbar">
// //           {[
// //             { name: "About", icon: User, id: "#about" },
// //             { name: "Services", icon: MonitorSmartphone, id: "#services" },
// //             { name: "Experience", icon: Briefcase, id: "#experience" },
// //             { name: "Projects", icon: FolderOpen, id: "#projects" },
// //           ].map((item, i) => (
// //             <button
// //               key={i}
// //               onClick={() => scrollTo(item.id)}
// //               className={`adw-view-switcher-item shrink-0 ${activeTab === item.id ? "active" : ""}`}
// //             >
// //               <item.icon className="w-4 h-4" />
// //               <span className="hidden md:block">{item.name}</span>
// //             </button>
// //           ))}
// //         </nav>

// //         {/* Controls */}
// //         <div className="hidden sm:flex items-center gap-4 z-10">
// //           <button
// //             onClick={toggleTheme}
// //             className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--md-sys-color-surface-variant)] hover:scale-105 hover:bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-surface)] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-sm"
// //             aria-label="Toggle Dark Mode"
// //           >
// //             {isDarkMode ? (
// //               <Sun className="w-5 h-5" />
// //             ) : (
// //               <Moon className="w-5 h-5" />
// //             )}
// //           </button>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Navbar;

// // import React from "react";
// // import {
// //   User,
// //   Briefcase,
// //   FolderOpen,
// //   MonitorSmartphone,
// //   Layers,
// //   Terminal,
// //   Moon,
// //   Sun,
// // } from "lucide-react";

// // const DesktopNav = ({ activeTab, scrollTo }) => (
// //   // This wrapper guarantees the navbar is hidden on mobile, overriding any CSS conflicts!
// //   <div className="hidden md:block z-10">
// //     <nav className="adw-view-switcher">
// //       {[
// //         { name: "About", icon: User, id: "#about" },
// //         { name: "Services", icon: MonitorSmartphone, id: "#services" },
// //         { name: "Experience", icon: Briefcase, id: "#experience" },
// //         { name: "Projects", icon: FolderOpen, id: "#projects" },
// //       ].map((item, i) => (
// //         <button
// //           key={i}
// //           onClick={() => scrollTo(item.id)}
// //           className={`adw-view-switcher-item shrink-0 ${activeTab === item.id ? "active" : ""}`}
// //         >
// //           <item.icon className="w-4 h-4" />
// //           <span className="inline-block">{item.name}</span>
// //         </button>
// //       ))}
// //     </nav>
// //   </div>
// // );

// // const MobileBottomNav = ({ activeTab, scrollTo }) => (
// //   <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[var(--md-sys-color-surface)] border-t border-[var(--md-sys-color-outline-variant)] pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_20px_rgba(0,0,0,0.04)] transition-colors duration-700">
// //     <div className="flex justify-around items-center h-16 px-2">
// //       {[
// //         { name: "About", icon: User, id: "#about" },
// //         { name: "Services", icon: MonitorSmartphone, id: "#services" },
// //         { name: "Experience", icon: Briefcase, id: "#experience" },
// //         { name: "Projects", icon: Layers, id: "#projects" },
// //       ].map((item, i) => {
// //         const isActive = activeTab === item.id;
// //         return (
// //           <button
// //             key={i}
// //             onClick={() => scrollTo(item.id)}
// //             className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-300 ${
// //               isActive
// //                 ? "text-[var(--md-sys-color-on-surface)]"
// //                 : "text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)]"
// //             }`}
// //           >
// //             <div
// //               className={`flex items-center justify-center w-14 h-8 rounded-full transition-all duration-300 ${
// //                 isActive
// //                   ? "bg-[var(--md-sys-color-primary-container)]"
// //                   : "bg-transparent"
// //               }`}
// //             >
// //               <item.icon
// //                 className={`w-5 h-5 transition-transform duration-300 ${isActive ? "scale-110 text-[var(--md-sys-color-on-primary-container)]" : ""}`}
// //               />
// //             </div>
// //             <span className="text-[10px] font-bold tracking-wide">
// //               {item.name}
// //             </span>
// //           </button>
// //         );
// //       })}
// //     </div>
// //   </nav>
// // );

// // const Navbar = ({ scrolled, activeTab, scrollTo, toggleTheme, isDarkMode }) => {
// //   return (
// //     <>
// //       {/* Top Header */}
// //       <header
// //         className={`fixed top-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border-b border-[var(--md-sys-color-outline-variant)] ${
// //           scrolled
// //             ? "header-glass shadow-lg translate-y-0"
// //             : "bg-transparent border-transparent py-2"
// //         }`}
// //       >
// //         <div className="max-w-6xl mx-auto px-4 h-[60px] flex items-center justify-between transition-all duration-700">
// //           <div
// //             className="flex items-center gap-2 text-[var(--md-sys-color-on-surface-variant)] font-medium text-sm group cursor-pointer"
// //             onClick={() => scrollTo("#top")}
// //           >
// //             <Terminal className="w-5 h-5 text-[var(--md-sys-color-primary)] group-hover:rotate-3 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" />
// //             <span className="group-hover:tracking-wide transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
// //               Alex Mercer
// //             </span>
// //           </div>

// //           <DesktopNav activeTab={activeTab} scrollTo={scrollTo} />

// //           <div className="flex items-center gap-3 z-10">
// //             <button
// //               onClick={toggleTheme}
// //               className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--md-sys-color-surface-variant)] hover:scale-105 hover:bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-surface)] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-sm"
// //               aria-label="Toggle Dark Mode"
// //             >
// //               {isDarkMode ? (
// //                 <Sun className="w-5 h-5" />
// //               ) : (
// //                 <Moon className="w-5 h-5" />
// //               )}
// //             </button>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Bottom Navigation */}
// //       <MobileBottomNav activeTab={activeTab} scrollTo={scrollTo} />
// //     </>
// //   );
// // };

// // export default Navbar;

// // import React from "react";
// // import {
// //   User,
// //   Briefcase,
// //   FolderOpen,
// //   MonitorSmartphone,
// //   Layers,
// //   Terminal,
// //   Moon,
// //   Sun,
// // } from "lucide-react";

// // const DesktopNav = ({ activeTab, scrollTo }) => (
// //   <div className="hidden md:block z-10">
// //     <nav className="adw-view-switcher">
// //       {[
// //         { name: "About", icon: User, id: "#about" },
// //         { name: "Services", icon: MonitorSmartphone, id: "#services" },
// //         { name: "Experience", icon: Briefcase, id: "#experience" },
// //         { name: "Projects", icon: FolderOpen, id: "#projects" },
// //       ].map((item, i) => (
// //         <button
// //           key={i}
// //           onClick={() => scrollTo(item.id)}
// //           className={`adw-view-switcher-item shrink-0 ${activeTab === item.id ? "active" : ""}`}
// //         >
// //           <item.icon className="w-4 h-4" />
// //           <span className="inline-block">{item.name}</span>
// //         </button>
// //       ))}
// //     </nav>
// //   </div>
// // );

// // const MobileBottomNav = ({ activeTab, scrollTo }) => (
// //   <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[var(--md-sys-color-surface)] border-t border-[var(--md-sys-color-outline-variant)] pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_20px_rgba(0,0,0,0.04)] transition-colors duration-700">
// //     <div className="flex justify-around items-center h-16 px-2">
// //       {[
// //         { name: "About", icon: User, id: "#about" },
// //         { name: "Services", icon: MonitorSmartphone, id: "#services" },
// //         { name: "Experience", icon: Briefcase, id: "#experience" },
// //         { name: "Projects", icon: Layers, id: "#projects" },
// //       ].map((item, i) => {
// //         const isActive = activeTab === item.id;
// //         return (
// //           <button
// //             key={i}
// //             onClick={() => scrollTo(item.id)}
// //             className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-300 ${
// //               isActive
// //                 ? "text-[var(--md-sys-color-on-surface)]"
// //                 : "text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)]"
// //             }`}
// //           >
// //             <div
// //               className={`flex items-center justify-center w-14 h-8 rounded-full transition-all duration-300 ${
// //                 isActive
// //                   ? "bg-[var(--md-sys-color-primary-container)]"
// //                   : "bg-transparent"
// //               }`}
// //             >
// //               <item.icon
// //                 className={`w-5 h-5 transition-transform duration-300 ${isActive ? "scale-110 text-[var(--md-sys-color-on-primary-container)]" : ""}`}
// //               />
// //             </div>
// //             <span className="text-[10px] font-bold tracking-wide">
// //               {item.name}
// //             </span>
// //           </button>
// //         );
// //       })}
// //     </div>
// //   </nav>
// // );

// // const Navbar = ({ scrolled, activeTab, scrollTo, toggleTheme, isDarkMode }) => {
// //   return (
// //     <>
// //       {/* Top Header */}
// //       <header
// //         className={`fixed top-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border-b border-[var(--md-sys-color-outline-variant)] ${
// //           scrolled
// //             ? "header-glass shadow-lg translate-y-0"
// //             : "bg-transparent border-transparent py-2"
// //         }`}
// //       >
// //         {/* CHANGED: Removed max-w-6xl and mx-auto, replaced with w-full and edge padding */}
// //         <div className="w-full px-4 sm:px-6 lg:px-8 h-[60px] flex items-center justify-between transition-all duration-700">
// //           <div
// //             className="flex items-center gap-2 text-[var(--md-sys-color-on-surface-variant)] font-medium text-sm group cursor-pointer"
// //             onClick={() => scrollTo("#top")}
// //           >
// //             <Terminal className="w-5 h-5 text-[var(--md-sys-color-primary)] group-hover:rotate-3 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" />
// //             <span className="group-hover:tracking-wide transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
// //               Mohammed Ansari
// //             </span>
// //           </div>

// //           <DesktopNav activeTab={activeTab} scrollTo={scrollTo} />

// //           <div className="flex items-center gap-3 z-10">
// //             <button
// //               onClick={toggleTheme}
// //               className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--md-sys-color-surface-variant)] hover:scale-105 hover:bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-surface)] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-sm"
// //               aria-label="Toggle Dark Mode"
// //             >
// //               {isDarkMode ? (
// //                 <Sun className="w-5 h-5" />
// //               ) : (
// //                 <Moon className="w-5 h-5" />
// //               )}
// //             </button>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Bottom Navigation */}
// //       <MobileBottomNav activeTab={activeTab} scrollTo={scrollTo} />
// //     </>
// //   );
// // };

// // export default Navbar;

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Terminal,
//   Moon,
//   Sun,
//   Menu,
//   User,
//   MonitorSmartphone,
//   Briefcase,
//   FolderOpen,
// } from "lucide-react";

// const Navbar = ({
//   scrolled,
//   activeTab,
//   scrollTo,
//   toggleTheme,
//   isDarkMode,
//   toggleSidebar,
//   isSidebarOpen,
// }) => {
//   return (
//     <header
//       className={`fixed top-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] border-b border-[var(--md-sys-color-outline-variant)] ${
//         scrolled
//           ? "header-glass shadow-lg translate-y-0"
//           : "bg-transparent border-transparent py-2"
//       } ${isSidebarOpen ? "md:left-72 left-0" : "left-0"}`}
//     >
//       <div className="container mx-auto px-4 h-[60px] flex items-center justify-between transition-all duration-700">
//         <div className="flex items-center gap-2 sm:gap-4">
//           {/* Hamburger Menu - Only shows when Sidebar is CLOSED */}
//           {!isSidebarOpen ? (
//             <motion.button
//               layoutId="sidebar-toggle-btn"
//               onClick={toggleSidebar}
//               className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--md-sys-color-surface-variant)] hover:bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-surface)] shadow-sm shrink-0"
//               aria-label="Open Sidebar"
//             >
//               <motion.div
//                 initial={{ rotate: 90, opacity: 0 }}
//                 animate={{ rotate: 0, opacity: 1 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <Menu className="w-5 h-5" />
//               </motion.div>
//             </motion.button>
//           ) : (
//             /* Spacer to keep alignment when button moves to sidebar */
//             <div className="w-10 h-10 shrink-0" />
//           )}

//           <div
//             className="flex items-center gap-2 text-[var(--md-sys-color-on-surface-variant)] font-medium text-sm group cursor-pointer"
//             onClick={() => scrollTo("#top")}
//           >
//             <Terminal className="w-5 h-5 text-[var(--md-sys-color-primary)] group-hover:rotate-3 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" />
//             <span className="hidden sm:inline-block group-hover:tracking-wide transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] font-bold">
//               Mohammed Ansari
//             </span>
//           </div>
//         </div>

//         {/* Desktop Navigation Links */}
//         <nav className="hidden md:inline-flex adw-view-switcher z-10">
//           {[
//             { name: "About", icon: User, id: "#about" },
//             { name: "Services", icon: MonitorSmartphone, id: "#services" },
//             { name: "Experience", icon: Briefcase, id: "#experience" },
//             { name: "Projects", icon: FolderOpen, id: "#projects" },
//           ].map((item) => (
//             <button
//               key={item.id}
//               onClick={() => scrollTo(item.id)}
//               className={`adw-view-switcher-item shrink-0 ${activeTab === item.id ? "active" : ""}`}
//             >
//               <item.icon className="w-4 h-4" />
//               <span>{item.name}</span>
//             </button>
//           ))}
//         </nav>

//         {/* Theme Toggle */}
//         <div className="flex items-center gap-3 z-10">
//           <button
//             onClick={toggleTheme}
//             className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--md-sys-color-surface-variant)] hover:scale-105 hover:bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-surface)] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-sm"
//             aria-label="Toggle Dark Mode"
//           >
//             {isDarkMode ? (
//               <Sun className="w-5 h-5" />
//             ) : (
//               <Moon className="w-5 h-5" />
//             )}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Navbar;

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Terminal,
//   Moon,
//   Sun,
//   Menu,
//   User,
//   MonitorSmartphone,
//   Briefcase,
//   Layers,
// } from "lucide-react";

// /* ---------------- DESKTOP NAV ---------------- */
// const DesktopNav = ({ activeTab, scrollTo }) => (
//   <nav className="hidden md:flex adw-view-switcher z-10">
//     {[
//       { name: "About", icon: User, id: "#about" },
//       { name: "Services", icon: MonitorSmartphone, id: "#services" },
//       { name: "Experience", icon: Briefcase, id: "#experience" },
//       { name: "Projects", icon: Layers, id: "#projects" },
//     ].map((item) => (
//       <button
//         key={item.id}
//         onClick={() => scrollTo(item.id)}
//         className={`adw-view-switcher-item ${
//           activeTab === item.id ? "active" : ""
//         }`}
//       >
//         <item.icon className="w-4 h-4" />
//         <span>{item.name}</span>
//       </button>
//     ))}
//   </nav>
// );

// /* ---------------- MOBILE NAV ---------------- */
// const MobileBottomNav = ({ activeTab, scrollTo }) => (
//   <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[var(--md-sys-color-surface)] border-t border-[var(--md-sys-color-outline-variant)] shadow-lg">
//     <div className="flex justify-around items-center h-16">
//       {[
//         { name: "About", icon: User, id: "#about" },
//         { name: "Services", icon: MonitorSmartphone, id: "#services" },
//         { name: "Experience", icon: Briefcase, id: "#experience" },
//         { name: "Projects", icon: Layers, id: "#projects" },
//       ].map((item) => {
//         const isActive = activeTab === item.id;

//         return (
//           <button
//             key={item.id}
//             onClick={() => scrollTo(item.id)}
//             className={`flex flex-col items-center justify-center w-full ${
//               isActive
//                 ? "text-[var(--md-sys-color-primary)]"
//                 : "text-[var(--md-sys-color-on-surface-variant)]"
//             }`}
//           >
//             <item.icon className="w-5 h-5" />
//             <span className="text-[10px] font-bold">{item.name}</span>
//           </button>
//         );
//       })}
//     </div>
//   </nav>
// );

// /* ---------------- MAIN NAVBAR ---------------- */
// const Navbar = ({
//   scrolled,
//   activeTab,
//   scrollTo,
//   toggleTheme,
//   isDarkMode,
//   toggleSidebar,
//   isSidebarOpen,
// }) => {
//   return (
//     <>
//       {/* 🔥 TOP NAVBAR (VISIBLE EVERYWHERE) */}
//       <header
//         className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 border-b ${
//           scrolled
//             ? "header-glass shadow-lg"
//             : "bg-transparent border-transparent py-2"
//         }`}
//       >
//         <div className="w-full px-4 sm:px-6 lg:px-8 h-[60px] flex items-center justify-between">
//           {/* LEFT */}
//           <div className="flex items-center gap-3">
//             {!isSidebarOpen ? (
//               <motion.button
//                 onClick={toggleSidebar}
//                 className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--md-sys-color-surface-variant)]"
//               >
//                 <Menu className="w-5 h-5" />
//               </motion.button>
//             ) : (
//               <div className="w-10 h-10" />
//             )}

//             <div
//               onClick={() => scrollTo("#top")}
//               className="flex items-center gap-2 cursor-pointer"
//             >
//               <Terminal className="w-5 h-5 text-[var(--md-sys-color-primary)]" />
//               <span className="hidden sm:block font-bold">Mohammed Ansari</span>
//             </div>
//           </div>

//           {/* 🔥 CENTER NAV (HIDDEN ONLY ON MOBILE) */}
//           <div className="hidden md:flex justify-center flex-1">
//             <DesktopNav activeTab={activeTab} scrollTo={scrollTo} />
//           </div>

//           {/* RIGHT */}
//           <button
//             onClick={toggleTheme}
//             className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--md-sys-color-surface-variant)]"
//           >
//             {isDarkMode ? (
//               <Sun className="w-5 h-5" />
//             ) : (
//               <Moon className="w-5 h-5" />
//             )}
//           </button>
//         </div>
//       </header>

//       {/* 🔥 MOBILE NAVBAR */}
//       <MobileBottomNav activeTab={activeTab} scrollTo={scrollTo} />
//     </>
//   );
// };

// export default Navbar;

import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Moon,
  Sun,
  Menu,
  User,
  MonitorSmartphone,
  Briefcase,
  Layers,
  GraduationCap,
  Award,
  FolderOpen,
  Mail,
} from "lucide-react";

const morphTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

const Navbar = ({
  scrolled,
  activeTab,
  scrollTo,
  toggleTheme,
  isDarkMode,
  toggleSidebar,
  isSidebarOpen,
}) => (
  // <header
  //   className={`fixed top-0 right-0 left-0 z-50 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] border-b border-[var(--md-sys-color-outline-variant)] ${
  //     scrolled
  //       ? "header-glass shadow-lg py-1"
  //       : "bg-transparent border-transparent py-2"
  //   }`}
  // >
  //
  <header
    className={`fixed top-0 right-0 z-50 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] border-b border-[var(--md-sys-color-outline-variant)] ${
      scrolled
        ? "header-glass shadow-lg py-1"
        : "bg-transparent border-transparent py-2"
    } ${isSidebarOpen ? "sm:left-80 left-0" : "left-0"}`}
  >
    <div className="container mx-auto px-4 h-[60px] flex items-center justify-between transition-all duration-700">
      {/* Left Side: Morphing Hamburger & Logo */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Placeholder container to maintain width when button unmounts */}
        <div className="w-10 h-10 shrink-0 relative z-[100]">
          {!isSidebarOpen && (
            <motion.button
              layoutId="sidebar-panel"
              transition={morphTransition}
              onClick={toggleSidebar}
              className="absolute inset-0 flex items-center justify-center rounded-lg bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] shadow-md hover:scale-105 cursor-pointer"
              style={{ borderRadius: "8px" }}
            >
              <motion.div layoutId="sidebar-icon" transition={morphTransition}>
                <Menu className="w-4 h-4" />
              </motion.div>
            </motion.button>
          )}
        </div>

        <div
          className="flex items-center gap-2 text-[var(--md-sys-color-on-surface-variant)] font-medium text-sm group cursor-pointer"
          onClick={() => scrollTo("#top")}
        >
          <Terminal className="w-5 h-5 text-[var(--md-sys-color-primary)]" />
          <span className="font-bold tracking-tight">Mohammed Ansari</span>
        </div>
      </div>

      {/* Middle: Navigation Links */}
      <nav className="hidden! md:flex! flex-wrap adw-view-switcher">
        {[
          { name: "About", icon: User, id: "#about" },
          { name: "Services", icon: MonitorSmartphone, id: "#services" },
          { name: "Education", icon: GraduationCap, id: "#education" },
          { name: "Certs", icon: Award, id: "#certifications" },
          { name: "Projects", icon: FolderOpen, id: "#projects" },
          { name: "Contact", icon: Mail, id: "#contact" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`adw-view-switcher-item ${activeTab === item.id ? "active" : ""}`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Right Side: Theme Toggle */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="flex w-10 h-10 items-center justify-center rounded-lg bg-[var(--md-sys-color-surface-variant)] hover:scale-105 transition-all duration-700 text-[var(--md-sys-color-on-surface)]"
        >
          {isDarkMode ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  </header>
);

export const MobileBottomNav = ({ activeTab, scrollTo }) => (
  <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[var(--md-sys-color-surface)] border-t border-[var(--md-sys-color-outline-variant)] pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_20px_rgba(0,0,0,0.04)] transition-colors duration-700">
    <div className="flex justify-around items-center h-16 px-2">
      {[
        { name: "About", icon: User, id: "#about" },
        { name: "Services", icon: MonitorSmartphone, id: "#services" },
        { name: "Certs", icon: Award, id: "#certifications" },
        { name: "Projects", icon: Layers, id: "#projects" },
      ].map((item, i) => {
        const isActive = activeTab === item.id;
        const Icon = item.icon;
        return (
          <button
            key={i}
            onClick={() => scrollTo(item.id)}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-300 ${
              isActive
                ? "text-[var(--md-sys-color-on-surface)]"
                : "text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)]"
            }`}
          >
            <div
              className={`flex items-center justify-center w-12 h-7 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-[var(--md-sys-color-primary-container)]"
                  : "bg-transparent"
              }`}
            >
              <Icon
                className={`w-4 h-4 transition-transform duration-300 ${isActive ? "scale-110 text-[var(--md-sys-color-on-primary-container)]" : ""}`}
              />
            </div>
            <span className="text-[9px] font-bold tracking-wide">
              {item.name}
            </span>
          </button>
        );
      })}
    </div>
  </nav>
);
export default Navbar;
