// import { useState, useEffect } from "react";
// import HeroSection from "./Components/HeroSection";
// import ContactSection from "./Components/ContactSection";
// import ProjectsSection from "./Components/ProjectSection";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import AboutSection from "./Components/AboutSection";
// import ServicesSection from "./Components/ServicesSection";
// import EducationSection from "./Components/EducationSection";
// import Sidebar from "./Components/SideBar";
// import { motion } from "framer-motion";
// import { LayoutGroup } from "framer-motion";
// import CertificationsSection from "./Components/CertificateSection";
// import { MobileBottomNav } from "./Components/Navbar";
// import BlogsPage from "./Pages/Blogs"; // <-- Import your BlogsPage component

// export default function App() {
//   const [activeTab, setActiveTab] = useState("#about");
//   const [scrolled, setScrolled] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Toggle Dark Mode Logic
//   // const toggleTheme = () => setIsDarkMode(!isDarkMode);
//   const toggleTheme = (e) => {
//     const isDark = !isDarkMode;

//     // 1. Check if the browser supports the View Transitions API
//     if (!document.startViewTransition || !e) {
//       setIsDarkMode(isDark);
//       return;
//     }

//     // 2. Get click coordinates
//     const x = e.clientX;
//     const y = e.clientY;

//     // 3. Calculate how far the circle needs to grow to cover the whole screen
//     const endRadius = Math.hypot(
//       Math.max(x, window.innerWidth - x),
//       Math.max(y, window.innerHeight - y),
//     );

//     // 4. Start the transition
//     const transition = document.startViewTransition(() => {
//       setIsDarkMode(isDark); // The state change happens here
//     });

//     // 5. Animate the circular mask
//     transition.ready.then(() => {
//       document.documentElement.animate(
//         {
//           clipPath: [
//             `circle(0px at ${x}px ${y}px)`,
//             `circle(${endRadius}px at ${x}px ${y}px)`,
//           ],
//         },
//         {
//           duration: 800, // Smooth deliberate speed
//           easing: "ease-in-out",
//           pseudoElement: "::view-transition-new(root)", // Animate the incoming theme
//         },
//       );
//     });
//   };

//   useEffect(() => {
//     if (isDarkMode) document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//   }, [isDarkMode]);

//   // Handle Navbar styling and scroll spy
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);

//       const sections = [
//         "#about",
//         "#services",
//         "#experience",
//         "#education",
//         "#projects",
//         "#contact",
//       ];
//       for (const section of sections.reverse()) {
//         const el = document.querySelector(section);
//         if (el && window.scrollY >= el.offsetTop - 250) {
//           setActiveTab(section);
//           break;
//         }
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollTo = (id) => {
//     const el = document.querySelector(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   // 1. Add this state inside your App component
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // 2. Add this useEffect to handle the "Escape" key (very GNOME-like behavior)
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "Escape" && isSidebarOpen) {
//         setIsSidebarOpen(false);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [isSidebarOpen]);

//   // 3. (Optional) Prevent scrolling when sidebar is open on MOBILE only
//   useEffect(() => {
//     if (isSidebarOpen && window.innerWidth < 768) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//   }, [isSidebarOpen]);

//   // Global Style Injection
//   useEffect(() => {
//     const style = document.createElement("style");
//     style.innerHTML = `
//       :root {
//         --md-sys-color-background: #FAFBEF;
//         --md-sys-color-surface: #F4F6E9;
//         --md-sys-color-surface-variant: #E2E6D5;
//         --md-sys-color-outline: #757A6B;
//         --md-sys-color-outline-variant: #C6CAB9;
//         --md-sys-color-primary: #435033;
//         --md-sys-color-on-primary: #FFFFFF;
//         --md-sys-color-primary-container: #CEE7B4;
//         --md-sys-color-on-primary-container: #161F0A;
//         --md-sys-color-secondary-container: #DFE8CC;
//         --md-sys-color-on-secondary-container: #1C2311;
//         --md-sys-color-tertiary-container: #E7EEDB;
//         --md-sys-color-on-tertiary-container: #232A19;
//         --md-sys-color-on-surface: #1B1C16;
//         --md-sys-color-on-surface-variant: #44493C;
//       }

//       .dark {
//         --md-sys-color-background: #0E120A;
//         --md-sys-color-surface: #161D10;
//         --md-sys-color-surface-variant: #3A4A2B;
//         --md-sys-color-outline: #8B997A;
//         --md-sys-color-outline-variant: #3A4A2B;
//         --md-sys-color-primary: #A5D27E;
//         --md-sys-color-on-primary: #1A2D08;
//         --md-sys-color-primary-container: #2E4515;
//         --md-sys-color-on-primary-container: #C2F098;
//         --md-sys-color-secondary-container: #394B25;
//         --md-sys-color-on-secondary-container: #D8F2B8;
//         --md-sys-color-tertiary-container: #2B3D1B;
//         --md-sys-color-on-tertiary-container: #BDD1A8;
//         --md-sys-color-on-surface: #E3EAD8;
//         --md-sys-color-on-surface-variant: #C3CCB6;
//       }

//       html { scroll-behavior: smooth; }

//       body {
//         background-color: var(--md-sys-color-background);
//         color: var(--md-sys-color-on-surface);
//         font-family: system-ui, -apple-system, "Inter", sans-serif;
//         overflow-x: hidden;
//         transition: background-color 0.5s ease, color 0.5s ease;
//       }

//       ::selection {
//         background: var(--md-sys-color-primary);
//         color: var(--md-sys-color-on-primary);
//       }

//       ::-webkit-scrollbar { width: 12px; background: transparent; }
//       ::-webkit-scrollbar-thumb {
//         background-color: var(--md-sys-color-outline-variant);
//         border-radius: 10px;
//         border: 3px solid var(--md-sys-color-background);
//       }

//       .bg-sys-bg { background-color: var(--md-sys-color-background); }
//       .text-sys-on-surface { color: var(--md-sys-color-on-surface); }

//       .header-glass {
//         background-color: color-mix(in srgb, var(--md-sys-color-background) 70%, transparent);
//         backdrop-filter: blur(20px);
//         -webkit-backdrop-filter: blur(20px);
//       }

//       @keyframes float-blob {
//         0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
//         33% { transform: translate(40px, -40px) scale(1.05) rotate(120deg); }
//         66% { transform: translate(-20px, 20px) scale(0.95) rotate(240deg); }
//         100% { transform: translate(0px, 0px) scale(1) rotate(360deg); }
//       }
//       @keyframes float-avatar {
//         0%, 100% { transform: translateY(0px) rotate(0deg); }
//         50% { transform: translateY(-10px) rotate(1deg); }
//       }
//       @keyframes spin-slow {
//         from { transform: rotate(0deg); }
//         to { transform: rotate(360deg); }
//       }
//       @keyframes shimmer {
//         0% { background-position: 200% center; }
//         100% { background-position: -200% center; }
//       }

//       .animate-blob-1 { animation: float-blob 35s infinite ease-in-out alternate; }
//       .animate-blob-2 { animation: float-blob 40s infinite ease-in-out alternate-reverse; }
//       .animate-float { animation: float-avatar 10s infinite ease-in-out; }
//       .animate-spin-slow { animation: spin-slow 12s infinite linear; }

//       .adw-boxed-list {
//         background: var(--md-sys-color-surface);
//         border-radius: 12px;
//         border: 1px solid var(--md-sys-color-outline-variant);
//         box-shadow: 0 4px 20px rgba(0,0,0,0.02);
//         overflow: hidden;
//         transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
//       }
//       .adw-boxed-list-item {
//         border-bottom: 1px solid var(--md-sys-color-outline-variant);
//         transition: all 0.6s ease;
//       }
//       .adw-boxed-list-item:last-child { border-bottom: none; }
//       .adw-boxed-list-item:hover {
//         background: var(--md-sys-color-surface-variant);
//         padding-left: 1.25rem;
//       }

//       .adw-btn {
//         border-radius: 8px;
//         font-weight: 600;
//         transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
//         position: relative;
//         overflow: hidden;
//       }
//       .adw-btn-primary {
//         background: var(--md-sys-color-primary);
//         color: var(--md-sys-color-on-primary);
//         box-shadow: 0 4px 14px color-mix(in srgb, var(--md-sys-color-primary) 30%, transparent);
//       }
//       .adw-btn-primary:hover {
//         transform: translateY(-2px) scale(1.01);
//         box-shadow: 0 8px 24px color-mix(in srgb, var(--md-sys-color-primary) 50%, transparent);
//       }
//       .adw-btn-primary:active { transform: scale(0.96); }

//       .adw-btn-secondary {
//         background: var(--md-sys-color-surface);
//         color: var(--md-sys-color-primary);
//         border: 1px solid var(--md-sys-color-outline-variant);
//       }
//       .adw-btn-secondary:hover {
//         background: var(--md-sys-color-surface-variant);
//         transform: translateY(-2px);
//       }
//       .adw-btn-secondary:active { transform: scale(0.96); }

//       .adw-view-switcher {
//         background: var(--md-sys-color-surface-variant);
//         border-radius: 8px;
//         padding: 4px;
//         display: inline-flex;
//         border: 1px solid var(--md-sys-color-outline-variant);
//       }
//       .adw-view-switcher-item {
//         border-radius: 6px;
//         padding: 6px 16px;
//         font-weight: 600;
//         color: var(--md-sys-color-on-surface-variant);
//         transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
//         display: flex;
//         align-items: center;
//         gap: 8px;
//         font-size: 0.875rem;
//       }
//       .adw-view-switcher-item:hover:not(.active) {
//         background: color-mix(in srgb, var(--md-sys-color-surface) 50%, transparent);
//         color: var(--md-sys-color-on-surface);
//         transform: scale(1.02);
//       }
//       .adw-view-switcher-item.active {
//         background: var(--md-sys-color-surface);
//         color: var(--md-sys-color-primary);
//         box-shadow: 0 4px 12px rgba(0,0,0,0.05);
//         transform: scale(1.02);
//       }
//     `;
//     document.head.appendChild(style);
//     return () => document.head.removeChild(style);
//   }, []);

//   return (
//     <LayoutGroup>
//       {/* 1. Main Flex Container: This allows the sidebar and content to sit side-by-side */}
//       <div className="relative min-h-screen bg-sys-bg text-sys-on-surface transition-colors duration-1000 overflow-hidden font-sans flex">
//         {/* MASSIVE AMBIENT BACKGROUND ANIMATIONS (Kept outside so they don't shift) */}
//         <div className="fixed inset-0 pointer-events-none z-0 opacity-40 dark:opacity-20 transition-opacity duration-1000">
//           <motion.div
//             animate={{
//               x: [0, 40, -20, 0],
//               y: [0, -40, 20, 0],
//               rotate: [0, 90, 180, 360],
//               scale: [1, 1.05, 0.95, 1],
//             }}
//             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//             className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[100px] bg-[var(--md-sys-color-primary-container)] mix-blend-multiply dark:mix-blend-screen"
//           />
//           <motion.div
//             animate={{
//               x: [0, -20, 40, 0],
//               y: [0, 20, -40, 0],
//               rotate: [360, 180, 90, 0],
//               scale: [1, 0.95, 1.05, 1],
//             }}
//             transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
//             className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] bg-[var(--md-sys-color-secondary-container)] mix-blend-multiply dark:mix-blend-screen"
//           />
//         </div>

//         {/* 2. THE SIDEBAR: Sits on the left */}
//         <Sidebar
//           isOpen={isSidebarOpen}
//           onClose={() => setIsSidebarOpen(false)}
//         />

//         {/* 3. MAIN CONTENT WRAPPER: This div handles the shifting logic */}
//         <div
//           className={`flex-1 flex flex-col min-w-0 min-h-screen transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isSidebarOpen ? "md:ml-80" : "ml-0"}`}
//         >
//           <Navbar
//             scrolled={scrolled}
//             activeTab={activeTab}
//             scrollTo={scrollTo}
//             toggleTheme={toggleTheme}
//             isDarkMode={isDarkMode}
//             toggleSidebar={() => setIsSidebarOpen(true)}
//             isSidebarOpen={isSidebarOpen}
//           />

//           <MobileBottomNav activeTab={activeTab} scrollTo={scrollTo} />

//           <main
//             id="top"
//             className="relative z-10 w-full container mx-auto px-6 pt-32 space-y-32 flex-grow"
//           >
//             <HeroSection scrollTo={scrollTo} isDarkMode={isDarkMode} />
//             <AboutSection isDarkMode={isDarkMode} />
//             <ServicesSection />
//             <EducationSection />
//             <CertificationsSection />
//             <ProjectsSection isDarkMode={isDarkMode} />
//             <ContactSection />
//           </main>

//           <Footer scrollTo={scrollTo} />
//         </div>
//       </div>
//     </LayoutGroup>
//   );
// }

import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"; // <-- Added Router imports
import HeroSection from "./Components/HeroSection";
import ContactSection from "./Components/ContactSection";
import ProjectsSection from "./Components/ProjectSection";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutSection from "./Components/AboutSection";
import ServicesSection from "./Components/ServicesSection";
import EducationSection from "./Components/EducationSection";
import Sidebar from "./Components/SideBar";
import CertificationsSection from "./Components/CertificateSection";
import { MobileBottomNav } from "./Components/Navbar";
import BlogsPage from "./Pages/Blogs"; // <-- Import your BlogsPage component

import { motion, LayoutGroup } from "framer-motion";

// --- Extracted Home Content ---
const HomeContent = ({ scrollTo, isDarkMode }) => (
  <>
    <HeroSection scrollTo={scrollTo} isDarkMode={isDarkMode} />
    <AboutSection isDarkMode={isDarkMode} />
    <ServicesSection />
    <EducationSection />
    <CertificationsSection />
    <ProjectsSection isDarkMode={isDarkMode} />
    <ContactSection />
  </>
);

export default function App() {
  const [activeTab, setActiveTab] = useState("#about");
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Toggle Dark Mode Logic (View Transitions API)
  const toggleTheme = (e) => {
    const isDark = !isDarkMode;

    if (!document.startViewTransition || !e) {
      setIsDarkMode(isDark);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = document.startViewTransition(() => {
      setIsDarkMode(isDark);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 800,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  };

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  // Handle Navbar styling and scroll spy (Only run on Home Page)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Only calculate active tabs if we are on the home page
      if (location.pathname === "/") {
        const sections = [
          "#about",
          "#services",
          "#experience",
          "#education",
          "#projects",
          "#contact",
        ];
        for (const section of sections.reverse()) {
          const el = document.querySelector(section);
          if (el && window.scrollY >= el.offsetTop - 250) {
            setActiveTab(section);
            break;
          }
        }
      } else if (location.pathname.startsWith("/blogs")) {
        setActiveTab("/blogs"); // Keep blogs highlighted in nav if needed
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Handle page transitions (Scroll to top on page change, or scroll to hash)
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Advanced ScrollTo that handles cross-page navigation
  const scrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate(`/${id}`); // Jump back to home page and then scroll to hash
    } else {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Sidebar Keyboard Support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSidebarOpen]);

  // Sidebar Scroll Lock (Mobile)
  useEffect(() => {
    if (isSidebarOpen && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isSidebarOpen]);

  // Global Style Injection (GNOME / M3E Olive Green)
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      :root {
        --md-sys-color-background: #FAFBEF;
        --md-sys-color-surface: #F4F6E9;
        --md-sys-color-surface-variant: #E2E6D5;
        --md-sys-color-outline: #757A6B;
        --md-sys-color-outline-variant: #C6CAB9;
        --md-sys-color-primary: #435033;
        --md-sys-color-on-primary: #FFFFFF;
        --md-sys-color-primary-container: #CEE7B4;
        --md-sys-color-on-primary-container: #161F0A;
        --md-sys-color-secondary-container: #DFE8CC;
        --md-sys-color-on-secondary-container: #1C2311;
        --md-sys-color-tertiary-container: #E7EEDB;
        --md-sys-color-on-tertiary-container: #232A19;
        --md-sys-color-on-surface: #1B1C16;
        --md-sys-color-on-surface-variant: #44493C;
      }

      .dark {
        --md-sys-color-background: #0E120A;
        --md-sys-color-surface: #161D10;
        --md-sys-color-surface-variant: #3A4A2B;
        --md-sys-color-outline: #8B997A;
        --md-sys-color-outline-variant: #3A4A2B;
        --md-sys-color-primary: #A5D27E;
        --md-sys-color-on-primary: #1A2D08;
        --md-sys-color-primary-container: #2E4515;
        --md-sys-color-on-primary-container: #C2F098;
        --md-sys-color-secondary-container: #394B25;
        --md-sys-color-on-secondary-container: #D8F2B8;
        --md-sys-color-tertiary-container: #2B3D1B;
        --md-sys-color-on-tertiary-container: #BDD1A8;
        --md-sys-color-on-surface: #E3EAD8;
        --md-sys-color-on-surface-variant: #C3CCB6;
      }

      html { scroll-behavior: smooth; }

      body {
        background-color: var(--md-sys-color-background);
        color: var(--md-sys-color-on-surface);
        font-family: system-ui, -apple-system, "Inter", sans-serif;
        overflow-x: hidden;
        transition: background-color 0.5s ease, color 0.5s ease;
      }

      ::selection {
        background: var(--md-sys-color-primary);
        color: var(--md-sys-color-on-primary);
      }

      ::-webkit-scrollbar { width: 12px; background: transparent; }
      ::-webkit-scrollbar-thumb {
        background-color: var(--md-sys-color-outline-variant);
        border-radius: 10px;
        border: 3px solid var(--md-sys-color-background);
      }

      .bg-sys-bg { background-color: var(--md-sys-color-background); }
      .text-sys-on-surface { color: var(--md-sys-color-on-surface); }

      .header-glass {
        background-color: color-mix(in srgb, var(--md-sys-color-background) 70%, transparent);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
      }

      @keyframes float-blob {
        0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
        33% { transform: translate(40px, -40px) scale(1.05) rotate(120deg); }
        66% { transform: translate(-20px, 20px) scale(0.95) rotate(240deg); }
        100% { transform: translate(0px, 0px) scale(1) rotate(360deg); }
      }
      @keyframes float-avatar {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(1deg); }
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes shimmer {
        0% { background-position: 200% center; }
        100% { background-position: -200% center; }
      }

      .animate-blob-1 { animation: float-blob 35s infinite ease-in-out alternate; }
      .animate-blob-2 { animation: float-blob 40s infinite ease-in-out alternate-reverse; }
      .animate-float { animation: float-avatar 10s infinite ease-in-out; }
      .animate-spin-slow { animation: spin-slow 12s infinite linear; }

      .adw-boxed-list {
        background: var(--md-sys-color-surface);
        border-radius: 12px;
        border: 1px solid var(--md-sys-color-outline-variant);
        box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        overflow: hidden;
        transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
      }
      .adw-boxed-list-item {
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
        transition: all 0.6s ease;
      }
      .adw-boxed-list-item:last-child { border-bottom: none; }
      .adw-boxed-list-item:hover {
        background: var(--md-sys-color-surface-variant);
        padding-left: 1.25rem;
      }

      .adw-btn {
        border-radius: 8px;
        font-weight: 600;
        transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        position: relative;
        overflow: hidden;
      }
      .adw-btn-primary {
        background: var(--md-sys-color-primary);
        color: var(--md-sys-color-on-primary);
        box-shadow: 0 4px 14px color-mix(in srgb, var(--md-sys-color-primary) 30%, transparent);
      }
      .adw-btn-primary:hover {
        transform: translateY(-2px) scale(1.01);
        box-shadow: 0 8px 24px color-mix(in srgb, var(--md-sys-color-primary) 50%, transparent);
      }
      .adw-btn-primary:active { transform: scale(0.96); }

      .adw-btn-secondary {
        background: var(--md-sys-color-surface);
        color: var(--md-sys-color-primary);
        border: 1px solid var(--md-sys-color-outline-variant);
      }
      .adw-btn-secondary:hover {
        background: var(--md-sys-color-surface-variant);
        transform: translateY(-2px);
      }
      .adw-btn-secondary:active { transform: scale(0.96); }

      .adw-view-switcher {
        background: var(--md-sys-color-surface-variant);
        border-radius: 8px;
        padding: 4px;
        display: inline-flex;
        border: 1px solid var(--md-sys-color-outline-variant);
      }
      .adw-view-switcher-item {
        border-radius: 6px;
        padding: 6px 16px;
        font-weight: 600;
        color: var(--md-sys-color-on-surface-variant);
        transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.875rem;
      }
      .adw-view-switcher-item:hover:not(.active) {
        background: color-mix(in srgb, var(--md-sys-color-surface) 50%, transparent);
        color: var(--md-sys-color-on-surface);
        transform: scale(1.02);
      }
      .adw-view-switcher-item.active {
        background: var(--md-sys-color-surface);
        color: var(--md-sys-color-primary);
        box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        transform: scale(1.02);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <LayoutGroup>
      <div className="relative min-h-screen bg-sys-bg text-sys-on-surface transition-colors duration-1000 overflow-hidden font-sans flex">
        {/* AMBIENT BACKGROUND ANIMATIONS */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-40 dark:opacity-20 transition-opacity duration-1000">
          <motion.div
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -40, 20, 0],
              rotate: [0, 90, 180, 360],
              scale: [1, 1.05, 0.95, 1],
            }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[100px] bg-[var(--md-sys-color-primary-container)] mix-blend-multiply dark:mix-blend-screen"
          />
          <motion.div
            animate={{
              x: [0, -20, 40, 0],
              y: [0, 20, -40, 0],
              rotate: [360, 180, 90, 0],
              scale: [1, 0.95, 1.05, 1],
            }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] bg-[var(--md-sys-color-secondary-container)] mix-blend-multiply dark:mix-blend-screen"
          />
        </div>

        {/* SIDEBAR */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* MAIN CONTENT WRAPPER */}
        <div
          className={`flex-1 flex flex-col min-w-0 min-h-screen transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isSidebarOpen ? "md:ml-80" : "ml-0"}`}
        >
          <Navbar
            scrolled={scrolled}
            activeTab={activeTab}
            scrollTo={scrollTo}
            toggleTheme={toggleTheme}
            isDarkMode={isDarkMode}
            toggleSidebar={() => setIsSidebarOpen(true)}
            isSidebarOpen={isSidebarOpen}
          />

          <MobileBottomNav activeTab={activeTab} scrollTo={scrollTo} />

          <main
            id="top"
            className="relative z-10 w-full container mx-auto px-6 pt-32 space-y-32 flex-grow"
          >
            <Routes>
              {/* Home Page Route */}
              <Route
                path="/"
                element={
                  <HomeContent scrollTo={scrollTo} isDarkMode={isDarkMode} />
                }
              />

              {/* Blogs Grid Route */}
              <Route path="/blogs" element={<BlogsPage />} />

              {/* Individual Blog Route (Slug) */}
              <Route path="/blogs/:slug" element={<BlogsPage />} />
            </Routes>
          </main>

          <Footer scrollTo={scrollTo} />
        </div>
      </div>
    </LayoutGroup>
  );
}
