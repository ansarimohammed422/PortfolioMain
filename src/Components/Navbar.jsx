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
//   GraduationCap,
//   Award,
//   FolderOpen,
//   Mail,
// } from "lucide-react";

// const morphTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

// const Navbar = ({
//   scrolled,
//   activeTab,
//   scrollTo,
//   toggleTheme,
//   isDarkMode,
//   toggleSidebar,
//   isSidebarOpen,
// }) => (
//   <header
//     className={`fixed top-0 right-0 z-50 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] border-b border-[var(--md-sys-color-outline-variant)] ${
//       scrolled
//         ? "header-glass shadow-lg py-1"
//         : "bg-transparent border-transparent py-2"
//     } ${isSidebarOpen ? "sm:left-80 left-0" : "left-0"}`}
//   >
//     {/* INJECTING CUSTOM FONTS */}
//     <style>
//       {`
//         @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Share+Tech+Mono&display=swap');
//         .font-terminal { font-family: 'Share Tech Mono', monospace; }
//         .font-ide { font-family: 'Fira Code', monospace; }
//       `}
//     </style>

//     <div className="container mx-auto px-4 h-[60px] flex items-center justify-between transition-all duration-700">
//       {/* Left Side: Morphing Hamburger & Logo */}
//       <div className="flex items-center gap-3 sm:gap-4">
//         <div className="w-10 h-10 shrink-0 relative z-[100]">
//           {!isSidebarOpen && (
//             <motion.button
//               layoutId="sidebar-panel"
//               transition={morphTransition}
//               onClick={toggleSidebar}
//               className="absolute inset-0 flex items-center justify-center rounded-lg bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] shadow-md hover:scale-105 cursor-pointer"
//               style={{ borderRadius: "8px" }}
//             >
//               <motion.div layoutId="sidebar-icon" transition={morphTransition}>
//                 <Menu className="w-4 h-4" />
//               </motion.div>
//             </motion.button>
//           )}
//         </div>

//         <div
//           className="flex items-center gap-2 text-[var(--md-sys-color-on-surface-variant)] group cursor-pointer"
//           onClick={() => scrollTo("#top")}
//         >
//           <Terminal className="w-5 h-5 text-[var(--md-sys-color-primary)]" />
//           {/* Applied Share Tech Mono for the name */}
//           <span className="font-terminal font-bold tracking-tighter text-xl text-[var(--md-sys-color-on-surface)]">
//             Mohammed Ansari
//           </span>
//         </div>
//       </div>

//       {/* Middle: Navigation Links */}
//       <nav className="hidden! md:flex! flex-wrap adw-view-switcher">
//         {[
//           { name: "About", icon: User, id: "#about" },
//           { name: "Services", icon: MonitorSmartphone, id: "#services" },
//           { name: "Education", icon: GraduationCap, id: "#education" },
//           { name: "Certs", icon: Award, id: "#certifications" },
//           { name: "Projects", icon: FolderOpen, id: "#projects" },
//           { name: "Contact", icon: Mail, id: "#contact" },
//         ].map((item) => {
//           const Icon = item.icon;
//           return (
//             <button
//               key={item.id}
//               onClick={() => scrollTo(item.id)}
//               className={`adw-view-switcher-item font-ide font-semibold tracking-tight ${activeTab === item.id ? "active" : ""}`}
//             >
//               <Icon className="w-4 h-4" />
//               <span>{item.name}</span>
//             </button>
//           );
//         })}
//       </nav>

//       <div className="flex items-center gap-3">
//         <button
//           onClick={toggleTheme}
//           className="flex w-10 h-10 items-center justify-center rounded-lg bg-[var(--md-sys-color-surface-variant)] hover:scale-105 transition-all duration-700 text-[var(--md-sys-color-on-surface)]"
//         >
//           {isDarkMode ? (
//             <Sun className="w-4 h-4" />
//           ) : (
//             <Moon className="w-4 h-4" />
//           )}
//         </button>
//       </div>
//     </div>
//   </header>
// );

// export const MobileBottomNav = ({ activeTab, scrollTo }) => (
//   <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[var(--md-sys-color-surface)] border-t border-[var(--md-sys-color-outline-variant)] pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_20px_rgba(0,0,0,0.04)] transition-colors duration-700">
//     <div className="flex justify-around items-center h-16 px-2 font-ide">
//       {[
//         { name: "About", icon: User, id: "#about" },
//         { name: "Services", icon: MonitorSmartphone, id: "#services" },
//         { name: "Education", icon: GraduationCap, id: "#education" },
//         { name: "Certs", icon: Award, id: "#certifications" },
//         { name: "Projects", icon: FolderOpen, id: "#projects" },
//         { name: "Contact", icon: Mail, id: "#contact" },
//       ].map((item, i) => {
//         const isActive = activeTab === item.id;
//         const Icon = item.icon;
//         return (
//           <button
//             key={i}
//             onClick={() => scrollTo(item.id)}
//             className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-300 ${
//               isActive
//                 ? "text-[var(--md-sys-color-on-surface)]"
//                 : "text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-on-surface)]"
//             }`}
//           >
//             <div
//               className={`flex items-center justify-center w-12 h-7 rounded-full transition-all duration-300 ${
//                 isActive
//                   ? "bg-[var(--md-sys-color-primary-container)]"
//                   : "bg-transparent"
//               }`}
//             >
//               <Icon
//                 className={`w-4 h-4 transition-transform duration-300 ${isActive ? "scale-110 text-[var(--md-sys-color-on-primary-container)]" : ""}`}
//               />
//             </div>
//             <span className="text-[9px] font-bold tracking-widest uppercase">
//               {item.name}
//             </span>
//           </button>
//         );
//       })}
//     </div>
//   </nav>
// );

// export default Navbar;
import React from "react";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
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
  Home, // <-- Added Home icon
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
}) => {
  const location = useLocation();
  const isBlogsPage = location.pathname.startsWith("/blogs");

  return (
    <header
      className={`fixed top-0 right-0 z-50 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] border-b border-[var(--md-sys-color-outline-variant)] ${
        scrolled
          ? "header-glass shadow-lg py-1"
          : "bg-transparent border-transparent py-2"
      } ${isSidebarOpen ? "sm:left-80 left-0" : "left-0"}`}
    >
      {/* INJECTING CUSTOM FONTS */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Share+Tech+Mono&display=swap');
          .font-terminal { font-family: 'Share Tech Mono', monospace; }
          .font-ide { font-family: 'Fira Code', monospace; }
        `}
      </style>

      <div className="container mx-auto px-4 h-[60px] flex items-center justify-between transition-all duration-700">
        {/* Left Side: Morphing Hamburger & Logo */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 shrink-0 relative z-[100]">
            {!isSidebarOpen && (
              <motion.button
                layoutId="sidebar-panel"
                transition={morphTransition}
                onClick={toggleSidebar}
                className="absolute inset-0 flex items-center justify-center rounded-lg bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] shadow-md hover:scale-105 cursor-pointer"
                style={{ borderRadius: "8px" }}
              >
                <motion.div
                  layoutId="sidebar-icon"
                  transition={morphTransition}
                >
                  <Menu className="w-4 h-4" />
                </motion.div>
              </motion.button>
            )}
          </div>

          <div
            className="flex items-center gap-2 text-[var(--md-sys-color-on-surface-variant)] group cursor-pointer"
            onClick={() => scrollTo("#top")}
          >
            <Terminal className="w-5 h-5 text-[var(--md-sys-color-primary)]" />
            <span className="font-terminal font-bold tracking-tighter text-xl text-[var(--md-sys-color-on-surface)]">
              Mohammed Ansari
            </span>
          </div>
        </div>

        {/* Middle: Navigation Links OR Home Button */}
        <nav className="hidden! md:flex! flex-wrap adw-view-switcher">
          {isBlogsPage ? (
            /* Return Home Button for Blogs Page */
            <Link
              to="/"
              className="adw-view-switcher-item font-ide font-semibold tracking-tight"
            >
              <Home className="w-4 h-4" />
              <span>Return to Portfolio</span>
            </Link>
          ) : (
            /* Standard Sections Map for Home Page */
            [
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
                  className={`adw-view-switcher-item font-ide font-semibold tracking-tight ${activeTab === item.id ? "active" : ""}`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </button>
              );
            })
          )}
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
};

export const MobileBottomNav = ({ activeTab, scrollTo }) => {
  const location = useLocation();
  const isBlogsPage = location.pathname.startsWith("/blogs");

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[var(--md-sys-color-surface)] border-t border-[var(--md-sys-color-outline-variant)] pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_20px_rgba(0,0,0,0.04)] transition-colors duration-700">
      <div className="flex justify-around items-center h-16 px-2 font-ide">
        {isBlogsPage ? (
          /* Mobile Return Home Button for Blogs Page */
          <Link
            to="/"
            className="flex flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-300 text-[var(--md-sys-color-primary)]"
          >
            <div className="flex items-center justify-center w-12 h-7 rounded-full transition-all duration-300 bg-[var(--md-sys-color-primary-container)]">
              <Home className="w-4 h-4 scale-110 text-[var(--md-sys-color-on-primary-container)]" />
            </div>
            <span className="text-[9px] font-bold tracking-widest uppercase">
              Return Home
            </span>
          </Link>
        ) : (
          /* Standard Sections Map for Mobile */
          [
            { name: "About", icon: User, id: "#about" },
            { name: "Services", icon: MonitorSmartphone, id: "#services" },
            { name: "Education", icon: GraduationCap, id: "#education" },
            { name: "Certs", icon: Award, id: "#certifications" },
            { name: "Projects", icon: FolderOpen, id: "#projects" },
            { name: "Contact", icon: Mail, id: "#contact" },
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
                <span className="text-[9px] font-bold tracking-widest uppercase">
                  {item.name}
                </span>
              </button>
            );
          })
        )}
      </div>
    </nav>
  );
};

export default Navbar;
