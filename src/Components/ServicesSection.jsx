// import FadeIn from "./FadeIn";
// import {
//   MonitorSmartphone,
//   PenTool,
//   Layers,
//   Activity,
//   Zap,
//   Cpu,
//   ArrowRight,
// } from "lucide-react";
// const SERVICES = [
//   {
//     id: "srv1",
//     title: "Frontend Engineering",
//     desc: "Building scalable, highly interactive React and Next.js web applications.",
//     icon: MonitorSmartphone,
//     span: "md:col-span-2",
//   },
//   {
//     id: "srv2",
//     title: "Interface Design",
//     desc: "Crafting user-centric interfaces adhering strictly to Human Interface Guidelines.",
//     icon: PenTool,
//     span: "md:col-span-1",
//   },
//   {
//     id: "srv3",
//     title: "Design Systems",
//     desc: "Architecting robust, token-driven component libraries for enterprise scaling.",
//     icon: Layers,
//     span: "md:col-span-1",
//   },
//   {
//     id: "srv4",
//     title: "Kinetic Motion",
//     desc: "Implementing deliberate, physics-based animations.",
//     icon: Activity,
//     span: "md:col-span-1",
//   },
//   {
//     id: "srv5",
//     title: "Performance Audit",
//     desc: "Optimizing V8 execution and rendering pipelines.",
//     icon: Zap,
//     span: "md:col-span-1",
//   },
//   {
//     id: "srv6",
//     title: "Technical Consulting",
//     desc: "Strategic guidance on modern web architecture.",
//     icon: Cpu,
//     span: "md:col-span-3",
//   },
// ];

// const ServicesSection = () => (
//   <section id="services" className="scroll-mt-28">
//     <FadeIn>
//       <div className="flex items-center gap-3 mb-8">
//         <MonitorSmartphone className="w-8 h-8 text-[var(--md-sys-color-primary)]" />
//         <h2 className="text-3xl font-bold">What I Do</h2>
//       </div>
//     </FadeIn>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       {SERVICES.map((s, i) => {
//         const Icon = s.icon;
//         return (
//           <FadeIn key={s.id} delay={i * 150} direction="up" className={s.span}>
//             <div className="service-stealth-card group h-full p-8 flex flex-col relative bg-transparent border-2 border-transparent rounded-2xl transition-all duration-1000 hover:shadow-2xl hover:bg-[var(--md-sys-color-surface)] hover:-translate-y-1">
//               <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--md-sys-color-primary)] transition-all duration-1000 border border-transparent group-hover:border-[var(--md-sys-color-outline-variant)]">
//                 <Icon className="w-7 h-7 text-[var(--md-sys-color-primary)] group-hover:text-[var(--md-sys-color-on-primary)] transition-colors duration-1000" />
//               </div>
//               <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--md-sys-color-primary)] transition-colors duration-1000">
//                 {s.title}
//               </h3>
//               <p className="text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed flex-1 font-medium">
//                 {s.desc}
//               </p>
//               <div className="mt-6 flex items-center text-xs font-bold text-[var(--md-sys-color-primary)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-1000">
//                 VIEW CAPABILITIES <ArrowRight className="w-3 h-3 ml-2" />
//               </div>
//             </div>
//           </FadeIn>
//         );
//       })}
//     </div>
//   </section>
// );
// export default ServicesSection;

import FadeIn from "./FadeIn";
import {
  MonitorSmartphone,
  PenTool,
  Layers,
  Activity,
  Zap,
  Cpu,
  ArrowRight,
} from "lucide-react";

// --- BACKEND SCOPE PREPARATION ---
// Later, replace this static array with state populated by your Django API
const servicesData = [
  {
    id: "srv1",
    title: "Full-Stack Web Development",
    desc: "Building scalable, end-to-end web applications utilizing React for responsive frontends and Django for robust backend logic.",
    icon: MonitorSmartphone,
    span: "md:col-span-2",
  },
  {
    id: "srv2",
    title: "RESTful API Design",
    desc: "Developing secure and efficient APIs using Django REST Framework for seamless client-server communication.",
    icon: Layers,
    span: "md:col-span-1",
  },
  {
    id: "srv3",
    title: "Database Architecture",
    desc: "Structuring and managing relational databases with MySQL to ensure data integrity and optimal query performance.",
    icon: Activity,
    span: "md:col-span-1",
  },
  {
    id: "srv4",
    title: "Responsive UI Development",
    desc: "Crafting modern, mobile-friendly interfaces using Tailwind CSS and HTML/CSS for dynamic user experiences.",
    icon: PenTool,
    span: "md:col-span-1",
  },
  {
    id: "srv5",
    title: "Version Control & Systems",
    desc: "Managing code lifecycles with Git and navigating Linux CLI environments for streamlined workflows.",
    icon: Zap,
    span: "md:col-span-1",
  },
  {
    id: "srv6",
    title: "Core Software Engineering",
    desc: "Applying multiple programming paradigms (Python, Java, C++) and Object-Oriented principles to solve complex technical challenges.",
    icon: Cpu,
    span: "md:col-span-3",
  },
];

const ServicesSection = () => (
  <section id="services" className="scroll-mt-28">
    <FadeIn>
      <div className="flex items-center gap-3 mb-8">
        <MonitorSmartphone className="w-8 h-8 text-[var(--md-sys-color-primary)]" />
        <h2 className="text-3xl font-bold">What I Do</h2>
      </div>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {servicesData.map((s, i) => {
        const Icon = s.icon;
        return (
          <FadeIn key={s.id} delay={i * 150} direction="up" className={s.span}>
            <div className="service-stealth-card group h-full p-8 flex flex-col relative bg-transparent border-2 border-transparent rounded-2xl transition-all duration-1000 hover:shadow-2xl hover:bg-[var(--md-sys-color-surface)] hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--md-sys-color-primary)] transition-all duration-1000 border border-transparent group-hover:border-[var(--md-sys-color-outline-variant)]">
                <Icon className="w-7 h-7 text-[var(--md-sys-color-primary)] group-hover:text-[var(--md-sys-color-on-primary)] transition-colors duration-1000" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--md-sys-color-primary)] transition-colors duration-1000">
                {s.title}
              </h3>
              <p className="text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed flex-1 font-medium">
                {s.desc}
              </p>
              <div className="mt-6 flex items-center text-xs font-bold text-[var(--md-sys-color-primary)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-1000">
                VIEW CAPABILITIES <ArrowRight className="w-3 h-3 ml-2" />
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  </section>
);
export default ServicesSection;
