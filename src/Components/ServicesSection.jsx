// import React, { useState, useEffect } from "react";
// import FadeIn from "./FadeIn";
// import * as LucideIcons from "lucide-react"; // Import all icons for dynamic rendering
// import { ArrowRight, MonitorSmartphone } from "lucide-react";
// import { API_BASE_URL } from "../config";

// // --- STATIC FALLBACK DATA ---
// const fallbackServices = [
//   {
//     id: "srv1",
//     title: "Full-Stack Web Development",
//     desc: "Building scalable, end-to-end web applications utilizing React for responsive frontends and Django for robust backend logic.",
//     icon: "MonitorSmartphone",
//     span: "md:col-span-2",
//   },
//   {
//     id: "srv2",
//     title: "RESTful API Design",
//     desc: "Developing secure and efficient APIs using Django REST Framework for seamless client-server communication.",
//     icon: "Layers",
//     span: "md:col-span-1",
//   },
//   {
//     id: "srv3",
//     title: "Database Architecture",
//     desc: "Structuring and managing relational databases with MySQL to ensure data integrity and optimal query performance.",
//     icon: "Activity",
//     span: "md:col-span-1",
//   },
//   {
//     id: "srv4",
//     title: "Responsive UI Development",
//     desc: "Crafting modern, mobile-friendly interfaces using Tailwind CSS and HTML/CSS for dynamic user experiences.",
//     icon: "PenTool",
//     span: "md:col-span-1",
//   },
//   {
//     id: "srv5",
//     title: "Version Control & Systems",
//     desc: "Managing code lifecycles with Git and navigating Linux CLI environments for streamlined workflows.",
//     icon: "Zap",
//     span: "md:col-span-1",
//   },
//   {
//     id: "srv6",
//     title: "Core Software Engineering",
//     desc: "Applying multiple programming paradigms (Python, Java, C++) and Object-Oriented principles to solve complex technical challenges.",
//     icon: "Cpu",
//     span: "md:col-span-3",
//   },
// ];

// const ServicesSection = () => {
//   // --- API INTEGRATION STATE ---
//   const [services, setServices] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   // --- FETCH SERVICES FROM DJANGO ---
//   useEffect(() => {
//     fetch(`${API_BASE_URL}api/v1/services/`)
//       .then((res) => {
//         if (!res.ok) throw new Error("Network response was not ok");
//         return res.json();
//       })
//       .then((data) => {
//         setServices(data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error("Failed to fetch services from Django:", error);
//         setServices(fallbackServices); // Use static data on failure
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <section id="services" className="scroll-mt-28">
//       {/* INJECTING CUSTOM FONTS DIRECTLY INTO THE COMPONENT */}
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
//         <div className="flex items-center gap-3 mb-8">
//           <MonitorSmartphone className="w-8 h-8 text-[var(--md-sys-color-primary)]" />
//           <h2 className="font-terminal text-3xl font-bold uppercase tracking-widest text-[var(--md-sys-color-on-surface)]">
//             What I Do
//           </h2>
//         </div>
//       </FadeIn>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {isLoading ? (
//           <div className="md:col-span-3 text-[var(--md-sys-color-primary)] text-sm font-ide tracking-wide animate-pulse">
//             {"> "} FETCHING CAPABILITIES FROM SECURE SERVER...
//           </div>
//         ) : (
//           services.map((s, i) => {
//             const Icon = LucideIcons[s.icon] || LucideIcons.HelpCircle;

//             return (
//               <FadeIn
//                 key={s.id}
//                 delay={i * 150}
//                 direction="up"
//                 className={s.span}
//               >
//                 <div className="service-stealth-card group h-full p-8 flex flex-col relative bg-transparent border-2 border-transparent rounded-2xl transition-all duration-1000 hover:shadow-2xl hover:bg-[var(--md-sys-color-surface)] hover:-translate-y-1">
//                   <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--md-sys-color-primary)] transition-all duration-1000 border border-transparent group-hover:border-[var(--md-sys-color-outline-variant)]">
//                     <Icon className="w-7 h-7 text-[var(--md-sys-color-primary)] group-hover:text-[var(--md-sys-color-on-primary)] transition-colors duration-1000" />
//                   </div>

//                   {/* Title uses font-terminal for impact */}
//                   <h3 className="font-terminal text-xl font-bold mb-3 tracking-wide uppercase text-[var(--md-sys-color-on-surface)] group-hover:text-[var(--md-sys-color-primary)] transition-colors duration-1000">
//                     {s.title}
//                   </h3>

//                   {/* Description uses font-ide for technical readability */}
//                   <p className="font-ide text-sm text-[var(--md-sys-color-on-surface)] opacity-90 tracking-wide leading-relaxed flex-1 font-medium">
//                     {s.desc}
//                   </p>

//                   <div className="mt-6 flex items-center font-ide text-[10px] font-bold tracking-[0.2em] text-[var(--md-sys-color-primary)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-1000 uppercase">
//                     VIEW CAPABILITIES <ArrowRight className="w-3 h-3 ml-2" />
//                   </div>
//                 </div>
//               </FadeIn>
//             );
//           })
//         )}
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import React, { useState, useEffect } from "react";
import FadeIn from "./FadeIn";
import * as LucideIcons from "lucide-react"; // Import all icons for dynamic rendering
import { ArrowRight, MonitorSmartphone } from "lucide-react";
import { API_BASE_URL } from "../config";

// --- STATIC FALLBACK DATA ---
// Subtly appended [Local] to titles to indicate API is offline
const fallbackServices = [
  {
    id: "srv1",
    title: "Full-Stack Web Development [Local]",
    desc: "Building scalable, end-to-end web applications utilizing React for responsive frontends and Django for robust backend logic.",
    icon: "MonitorSmartphone",
    span: "md:col-span-2",
  },
  {
    id: "srv2",
    title: "RESTful API Design [Local]",
    desc: "Developing secure and efficient APIs using Django REST Framework for seamless client-server communication.",
    icon: "Layers",
    span: "md:col-span-1",
  },
  {
    id: "srv3",
    title: "Database Architecture [Local]",
    desc: "Structuring and managing relational databases with MySQL to ensure data integrity and optimal query performance.",
    icon: "Activity",
    span: "md:col-span-1",
  },
  {
    id: "srv4",
    title: "Responsive UI Development [Local]",
    desc: "Crafting modern, mobile-friendly interfaces using Tailwind CSS and HTML/CSS for dynamic user experiences.",
    icon: "PenTool",
    span: "md:col-span-1",
  },
  {
    id: "srv5",
    title: "Version Control & Systems [Local]",
    desc: "Managing code lifecycles with Git and navigating Linux CLI environments for streamlined workflows.",
    icon: "Zap",
    span: "md:col-span-1",
  },
  {
    id: "srv6",
    title: "Core Software Engineering [Local]",
    desc: "Applying multiple programming paradigms (Python, Java, C++) and Object-Oriented principles to solve complex technical challenges.",
    icon: "Cpu",
    span: "md:col-span-3",
  },
];

const ServicesSection = () => {
  // --- API INTEGRATION STATE ---
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- FETCH SERVICES FROM DJANGO ---
  useEffect(() => {
    fetch(`${API_BASE_URL}api/v1/services/`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setServices(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch services from Django:", error);
        setServices(fallbackServices); // Use static data on failure
        setIsLoading(false);
      });
  }, []);

  return (
    <section id="services" className="scroll-mt-28">
      {/* INJECTING CUSTOM FONTS DIRECTLY INTO THE COMPONENT */}
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
        <div className="flex items-center gap-3 mb-8">
          <MonitorSmartphone className="w-8 h-8 text-[var(--md-sys-color-primary)]" />
          <h2 className="font-terminal text-3xl font-bold uppercase tracking-widest text-[var(--md-sys-color-on-surface)]">
            What I Do
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {isLoading ? (
          <div className="md:col-span-3 text-[var(--md-sys-color-primary)] text-sm font-ide tracking-wide animate-pulse">
            {"> "} FETCHING CAPABILITIES FROM SECURE SERVER...
          </div>
        ) : (
          services.map((s, i) => {
            const Icon = LucideIcons[s.icon] || LucideIcons.HelpCircle;

            return (
              <FadeIn
                key={s.id}
                delay={i * 150}
                direction="up"
                className={s.span}
              >
                <div className="service-stealth-card group h-full p-8 flex flex-col relative bg-transparent border-2 border-transparent rounded-2xl transition-all duration-1000 hover:shadow-2xl hover:bg-[var(--md-sys-color-surface)] hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--md-sys-color-primary)] transition-all duration-1000 border border-transparent group-hover:border-[var(--md-sys-color-outline-variant)]">
                    <Icon className="w-7 h-7 text-[var(--md-sys-color-primary)] group-hover:text-[var(--md-sys-color-on-primary)] transition-colors duration-1000" />
                  </div>

                  {/* Title uses font-terminal for impact */}
                  <h3 className="font-terminal text-xl font-bold mb-3 tracking-wide uppercase text-[var(--md-sys-color-on-surface)] group-hover:text-[var(--md-sys-color-primary)] transition-colors duration-1000">
                    {s.title}
                  </h3>

                  {/* Description uses font-ide for technical readability */}
                  <p className="font-ide text-sm text-[var(--md-sys-color-on-surface)] opacity-90 tracking-wide leading-relaxed flex-1 font-medium">
                    {s.desc}
                  </p>

                  <div className="mt-6 flex items-center font-ide text-[10px] font-bold tracking-[0.2em] text-[var(--md-sys-color-primary)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-1000 uppercase">
                    VIEW CAPABILITIES <ArrowRight className="w-3 h-3 ml-2" />
                  </div>
                </div>
              </FadeIn>
            );
          })
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
