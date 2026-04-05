// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowLeft,
//   Clock,
//   Calendar,
//   AlertTriangle,
//   Terminal,
//   ChevronRight,
//   Search,
//   XSquare,
// } from "lucide-react";
// import ReactMarkdown from "react-markdown";
// import { API_BASE_URL } from "../config";

// // ==========================================
// // 1. IMAGE URL FORMATTER
// // ==========================================
// const getImageUrl = (path) => {
//   if (!path) return null;
//   if (path.startsWith("http")) return path;
//   const baseUrl = API_BASE_URL.replace(/\/$/, "");
//   const cleanPath = path.startsWith("/") ? path : `/${path}`;
//   return `${baseUrl}${cleanPath}`;
// };

// // ==========================================
// // 2. HELPER COMPONENTS
// // ==========================================
// const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
//   const directions = {
//     up: { y: 40, x: 0 },
//     down: { y: -40, x: 0 },
//     left: { x: 40, y: 0 },
//     right: { x: -40, y: 0 },
//   };

//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         scale: 0.95,
//         filter: "blur(8px)",
//         ...directions[direction],
//       }}
//       whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", x: 0, y: 0 }}
//       viewport={{ once: true, margin: "0px 0px -50px 0px" }}
//       transition={{
//         duration: 1.4,
//         delay: delay / 1000,
//         ease: [0.25, 1, 0.5, 1],
//       }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// };

// // ==========================================
// // 3. SKELETON LOADERS
// // ==========================================
// const SkeletonPulse = ({ className }) => (
//   <div
//     className={`bg-[var(--md-sys-color-outline-variant)] opacity-20 animate-pulse ${className}`}
//   ></div>
// );

// const FeaturedBlogSkeleton = () => (
//   <div className="flex flex-col md:flex-row w-full min-h-[400px] bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] rounded-2xl overflow-hidden mb-12 shadow-sm">
//     <div className="md:w-3/5 h-64 md:h-auto bg-[var(--md-sys-color-surface-variant)] animate-pulse relative">
//       <div className="absolute top-6 left-6 w-32 h-6 bg-[var(--md-sys-color-outline-variant)] opacity-20 animate-pulse rounded-sm" />
//     </div>
//     <div className="md:w-2/5 p-8 sm:p-10 flex flex-col justify-center bg-[var(--md-sys-color-surface)]">
//       <div className="flex gap-4 mb-6">
//         <SkeletonPulse className="w-24 h-4 rounded-sm" />
//         <SkeletonPulse className="w-20 h-4 rounded-sm" />
//       </div>
//       <SkeletonPulse className="w-full h-10 mb-3 rounded-md" />
//       <SkeletonPulse className="w-3/4 h-10 mb-8 rounded-md" />
//       <SkeletonPulse className="w-full h-3 mb-2 rounded-sm" />
//       <SkeletonPulse className="w-full h-3 mb-2 rounded-sm" />
//       <SkeletonPulse className="w-5/6 h-3 mb-8 rounded-sm" />
//     </div>
//   </div>
// );

// const StandardBlogSkeleton = () => (
//   <div className="flex flex-col h-full bg-[var(--md-sys-color-surface-variant)] border border-[var(--md-sys-color-outline-variant)] rounded-xl overflow-hidden shadow-sm">
//     <div className="h-48 w-full bg-[var(--md-sys-color-surface)] animate-pulse border-b border-[var(--md-sys-color-outline-variant)]" />
//     <div className="p-6 flex flex-col flex-1">
//       <div className="flex justify-between mb-4">
//         <SkeletonPulse className="w-20 h-3 rounded-sm" />
//         <SkeletonPulse className="w-12 h-3 rounded-sm" />
//       </div>
//       <SkeletonPulse className="w-full h-6 mb-2 rounded-md" />
//       <SkeletonPulse className="w-2/3 h-6 mb-6 rounded-md" />
//       <SkeletonPulse className="w-full h-3 mb-2 rounded-sm" />
//       <SkeletonPulse className="w-full h-3 mb-2 rounded-sm" />
//     </div>
//   </div>
// );

// // ==========================================
// // 4. BLOG COMPONENTS
// // ==========================================
// const FeaturedBlogCard = ({ blog, onClick }) => (
//   <FadeIn delay={100} direction="up">
//     <div
//       onClick={onClick}
//       className="group relative flex flex-col md:flex-row w-full min-h-[400px] bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] rounded-lg overflow-hidden cursor-pointer transition-all duration-500 hover:border-[var(--md-sys-color-primary)] hover:shadow-lg hover:-translate-y-1 mb-12"
//     >
//       <div className="md:w-3/5 relative overflow-hidden h-64 md:h-auto border-b md:border-b-0 md:border-r border-[var(--md-sys-color-outline-variant)]">
//         {blog.cover_image ? (
//           <img
//             src={getImageUrl(blog.cover_image)}
//             alt={blog.title}
//             className="w-full h-full object-cover grayscale-[0.3] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
//           />
//         ) : (
//           <div className="w-full h-full bg-[var(--md-sys-color-surface-variant)] flex items-center justify-center font-terminal opacity-50">
//             NO_IMAGE_DATA
//           </div>
//         )}
//         <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[var(--md-sys-color-surface)] via-transparent to-transparent opacity-80" />
//         <div className="absolute top-6 left-6 font-terminal text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-md bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] uppercase tracking-[0.2em] shadow-md">
//           LATEST_TRANSMISSION
//         </div>
//       </div>

//       <div className="md:w-2/5 p-8 sm:p-10 flex flex-col justify-center relative z-10 bg-[var(--md-sys-color-surface)] md:bg-transparent">
//         <div className="flex items-center gap-4 text-[11px] font-ide font-bold text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-widest mb-6">
//           <span className="flex items-center gap-1.5">
//             <Calendar className="w-4 h-4 text-[var(--md-sys-color-primary)]" />{" "}
//             {blog.published_date}
//           </span>
//           <span className="flex items-center gap-1.5">
//             <Clock className="w-4 h-4 text-[var(--md-sys-color-primary)]" />{" "}
//             {blog.read_time} MIN
//           </span>
//         </div>
//         <h3 className="font-terminal text-3xl sm:text-4xl font-bold mb-4 uppercase leading-tight transition-colors duration-300 text-[var(--md-sys-color-on-surface)] group-hover:text-[var(--md-sys-color-primary)]">
//           {blog.title}
//         </h3>
//         <p className="font-ide text-sm sm:text-base text-[var(--md-sys-color-on-surface-variant)] leading-relaxed mb-8 flex-1">
//           {blog.excerpt}
//         </p>
//         <div className="flex items-center justify-between pt-6 border-t border-[var(--md-sys-color-outline-variant)]">
//           <div className="flex flex-wrap gap-2">
//             {blog.tag_list?.slice(0, 2).map((tag) => (
//               <span
//                 key={tag}
//                 className="text-[10px] font-ide font-bold uppercase tracking-[0.2em] text-[var(--md-sys-color-primary)] bg-[var(--md-sys-color-primary)]/10 px-3 py-1.5 rounded-lg border border-[var(--md-sys-color-primary)]/20"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//           <span className="text-[var(--md-sys-color-primary)] group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2 font-terminal text-xs uppercase tracking-widest font-bold">
//             DECRYPT <ChevronRight className="w-5 h-5" />
//           </span>
//         </div>
//       </div>
//     </div>
//   </FadeIn>
// );

// const StandardBlogCard = ({ blog, onClick, delayIndex }) => (
//   <FadeIn delay={delayIndex * 150} direction="up" className="h-full">
//     <div
//       onClick={onClick}
//       className="group flex flex-col h-full bg-[var(--md-sys-color-surface-variant)] border border-[var(--md-sys-color-outline-variant)] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-[var(--md-sys-color-primary)] hover:shadow-md hover:-translate-y-1"
//     >
//       <div className="h-48 w-full overflow-hidden relative border-b border-[var(--md-sys-color-outline-variant)] shrink-0">
//         {blog.cover_image ? (
//           <img
//             src={getImageUrl(blog.cover_image)}
//             alt={blog.title}
//             className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
//           />
//         ) : (
//           <div className="w-full h-full bg-[var(--md-sys-color-background)] flex items-center justify-center font-terminal opacity-50">
//             NO_IMAGE
//           </div>
//         )}
//       </div>

//       <div className="p-6 flex flex-col flex-1">
//         <div className="flex items-center justify-between text-[10px] font-ide font-bold text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-widest mb-4">
//           <span>{blog.published_date}</span>
//           <span className="flex items-center gap-1">
//             <Clock className="w-3 h-3" /> {blog.read_time}M
//           </span>
//         </div>
//         <h3 className="font-terminal text-xl font-bold mb-3 uppercase leading-snug transition-colors duration-300 text-[var(--md-sys-color-on-surface)] group-hover:text-[var(--md-sys-color-primary)]">
//           {blog.title}
//         </h3>
//         <p className="font-ide text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed mb-6 flex-1 line-clamp-2">
//           {blog.excerpt}
//         </p>
//         <div className="mt-auto pt-4 border-t border-[var(--md-sys-color-outline-variant)] flex items-center justify-between opacity-80 group-hover:opacity-100 transition-opacity">
//           <div className="flex gap-2">
//             {blog.tag_list?.slice(0, 1).map((tag) => (
//               <span
//                 key={tag}
//                 className="text-[9px] font-ide font-bold uppercase tracking-[0.2em] text-[var(--md-sys-color-primary)] border border-[var(--md-sys-color-primary)]/30 px-2 py-1 rounded-md bg-[var(--md-sys-color-primary)]/5"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//           <ChevronRight className="w-4 h-4 text-[var(--md-sys-color-primary)] group-hover:translate-x-1 transition-transform" />
//         </div>
//       </div>
//     </div>
//   </FadeIn>
// );

// const BlogReader = ({ blog, onClose }) => (
//   <FadeIn direction="up">
//     <div className="w-full container mx-auto bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] rounded-lg overflow-hidden shadow-lg">
//       <div className="px-6 py-4 border-b border-[var(--md-sys-color-outline-variant)] flex items-center justify-between bg-[var(--md-sys-color-surface-variant)] sticky top-0 z-20">
//         <button
//           onClick={onClose}
//           className="flex items-center gap-2 font-ide text-xs font-bold uppercase tracking-widest text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] transition-colors"
//         >
//           <ArrowLeft className="w-4 h-4" /> Terminate_Connection
//         </button>
//         <div className="font-terminal text-xs text-[var(--md-sys-color-primary)] tracking-[0.3em] uppercase">
//           LOG_{blog.slug || "SYS"}
//         </div>
//       </div>

//       <div className="p-8 sm:p-12 border-b border-[var(--md-sys-color-outline-variant)] relative overflow-hidden">
//         <div className="flex flex-wrap items-center gap-4 text-[11px] font-ide font-bold text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-widest mb-6 relative z-10">
//           <span className="flex items-center gap-1.5">
//             <Calendar className="w-4 h-4 text-[var(--md-sys-color-primary)]" />{" "}
//             {blog.published_date}
//           </span>
//           <span className="flex items-center gap-1.5">
//             <Clock className="w-4 h-4 text-[var(--md-sys-color-primary)]" />{" "}
//             {blog.read_time} MIN READ
//           </span>
//         </div>
//         <h1 className="font-terminal text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[1.1] text-[var(--md-sys-color-on-surface)] relative z-10">
//           {blog.title}
//         </h1>
//       </div>

//       {blog.cover_image && (
//         <div className="w-full h-64 sm:h-96 border-b border-[var(--md-sys-color-outline-variant)] relative">
//           <img
//             src={getImageUrl(blog.cover_image)}
//             alt="Cover"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[var(--md-sys-color-surface)] via-[var(--md-sys-color-surface)]/20 to-transparent opacity-90" />
//         </div>
//       )}

//       <div className="p-8 sm:p-12 bg-[var(--md-sys-color-surface)]">
//         <div className="max-w-none">
//           <ReactMarkdown
//             components={{
//               h1: ({ node, ...props }) => (
//                 <h1
//                   className="font-terminal text-3xl sm:text-4xl font-bold uppercase tracking-wide text-[var(--md-sys-color-on-surface)] mt-12 mb-6"
//                   {...props}
//                 />
//               ),
//               h2: ({ node, ...props }) => (
//                 <h2
//                   className="font-terminal text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[var(--md-sys-color-on-surface)] mt-10 mb-5 border-b border-[var(--md-sys-color-outline-variant)] pb-2"
//                   {...props}
//                 />
//               ),
//               h3: ({ node, ...props }) => (
//                 <h3
//                   className="font-terminal text-xl sm:text-2xl font-bold uppercase tracking-wide text-[var(--md-sys-color-on-surface)] mt-8 mb-4"
//                   {...props}
//                 />
//               ),
//               p: ({ node, ...props }) => (
//                 <p
//                   className="font-ide text-base sm:text-lg text-[var(--md-sys-color-on-surface-variant)] leading-relaxed tracking-wide mb-6"
//                   {...props}
//                 />
//               ),
//               a: ({ node, ...props }) => (
//                 <a
//                   className="text-[var(--md-sys-color-primary)] font-bold no-underline hover:underline"
//                   {...props}
//                 />
//               ),
//               strong: ({ node, ...props }) => (
//                 <strong
//                   className="text-[var(--md-sys-color-on-surface)] font-bold"
//                   {...props}
//                 />
//               ),
//               ul: ({ node, ...props }) => (
//                 <ul
//                   className="font-ide text-[var(--md-sys-color-on-surface-variant)] list-disc list-outside ml-6 mb-6 space-y-2 text-base sm:text-lg"
//                   {...props}
//                 />
//               ),
//               ol: ({ node, ...props }) => (
//                 <ol
//                   className="font-ide text-[var(--md-sys-color-on-surface-variant)] list-decimal list-outside ml-6 mb-6 space-y-2 text-base sm:text-lg"
//                   {...props}
//                 />
//               ),
//               li: ({ node, ...props }) => <li className="pl-2" {...props} />,
//               blockquote: ({ node, ...props }) => (
//                 <blockquote
//                   className="border-l-4 border-[var(--md-sys-color-primary)] bg-[var(--md-sys-color-surface-variant)] px-6 py-4 mb-6 rounded-r-xl italic font-ide text-[var(--md-sys-color-on-surface-variant)] shadow-sm"
//                   {...props}
//                 />
//               ),

//               /* =======================================
//                  UPDATED CODE BLOCK RENDERER
//                  ======================================= */
//               code: ({ node, inline, className, children, ...props }) => {
//                 const match = /language-(\w+)/.exec(className || "");
//                 return !inline ? (
//                   // IDE/Terminal Block - Forced Dark Background with BRIGHT text
//                   <div className="rounded-xl overflow-hidden mb-6 border border-[#3A4A2B] bg-[#0E120A] shadow-lg">
//                     {/* Header Bar */}
//                     <div className="bg-[#161D10] px-4 py-2 text-[10px] font-terminal uppercase tracking-widest text-[#A5D27E] flex items-center gap-2 border-b border-[#3A4A2B]">
//                       <Terminal className="w-3 h-3" />{" "}
//                       {match ? match[1] : "CODE_BLOCK"}
//                     </div>
//                     {/* Code Content */}
//                     <pre className="p-5 overflow-x-auto">
//                       <code
//                         className="font-ide text-sm sm:text-base text-[#E3EAD8] leading-relaxed block"
//                         {...props}
//                       >
//                         {children}
//                       </code>
//                     </pre>
//                   </div>
//                 ) : (
//                   // Inline Code - Bold surface text
//                   <code
//                     className="font-ide text-[var(--md-sys-color-on-surface)] font-bold bg-[var(--md-sys-color-surface-variant)] border border-[var(--md-sys-color-outline-variant)] px-1.5 py-0.5 rounded-md text-[0.85em]"
//                     {...props}
//                   >
//                     {children}
//                   </code>
//                 );
//               },
//             }}
//           >
//             {blog.content}
//           </ReactMarkdown>
//         </div>
//       </div>
//     </div>
//   </FadeIn>
// );

// // ==========================================
// // 5. MAIN PAGE EXPORT
// // ==========================================
// export default function BlogsPage() {
//   const [blogs, setBlogs] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeBlog, setActiveBlog] = useState(null);

//   // Search State
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetch(`${API_BASE_URL}api/v1/blogs/`)
//       .then((res) => {
//         if (!res.ok) throw new Error("API Response Not OK");
//         return res.json();
//       })
//       .then((data) => {
//         setBlogs(data || []);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         setError("SYS_ERR: CONNECTION REFUSED. UNABLE TO REACH UPLINK.");
//         setIsLoading(false);
//       });
//   }, []);

//   const filteredBlogs = blogs.filter((blog) => {
//     const query = searchQuery.toLowerCase();
//     return (
//       blog.title?.toLowerCase().includes(query) ||
//       blog.excerpt?.toLowerCase().includes(query) ||
//       blog.tag_list?.some((tag) => tag.toLowerCase().includes(query))
//     );
//   });

//   const openReader = (blog) => {
//     setActiveBlog(blog);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const closeReader = () => {
//     setActiveBlog(null);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const isSearching = searchQuery.length > 0;

//   return (
//     <div className="py-20 px-4 sm:px-6 container mx-auto min-h-screen mb-10">
//       <FadeIn>
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
//           <div className="flex items-center gap-4">
//             <Terminal className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--md-sys-color-primary)]" />
//             <h2 className="font-terminal text-4xl sm:text-6xl font-bold uppercase tracking-widest text-[var(--md-sys-color-on-surface)]">
//               Intelligence
//             </h2>
//           </div>
//         </div>
//       </FadeIn>

//       <AnimatePresence mode="wait">
//         {isLoading ? (
//           <motion.div
//             key="loading"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <FeaturedBlogSkeleton />
//             <div className="flex items-center gap-4 mb-8">
//               <div className="h-[1px] flex-1 bg-[var(--md-sys-color-outline-variant)] opacity-50" />
//               <span className="font-terminal text-xs uppercase tracking-[0.4em] text-[var(--md-sys-color-primary)] font-bold animate-pulse">
//                 DECRYPTING_ARCHIVES...
//               </span>
//               <div className="h-[1px] flex-1 bg-[var(--md-sys-color-outline-variant)] opacity-50" />
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//               <StandardBlogSkeleton />
//               <StandardBlogSkeleton />
//               <StandardBlogSkeleton />
//             </div>
//           </motion.div>
//         ) : error ? (
//           <motion.div
//             key="error"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="py-20 flex flex-col items-center justify-center border border-red-500/30 bg-red-500/5 rounded-xl w-full"
//           >
//             <AlertTriangle className="w-12 h-12 text-red-500 mb-4 animate-pulse" />
//             <div className="font-terminal text-red-500 text-lg sm:text-xl font-bold tracking-widest uppercase text-center px-4">
//               {error}
//             </div>
//           </motion.div>
//         ) : activeBlog ? (
//           <motion.div
//             key="reader"
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -20 }}
//           >
//             <BlogReader blog={activeBlog} onClose={closeReader} />
//           </motion.div>
//         ) : (
//           <motion.div
//             key="grid"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <FadeIn delay={100}>
//               <div className="mb-10 w-full max-w-2xl font-ide relative group md:mr-auto">
//                 <div className="absolute inset-0 bg-[var(--md-sys-color-primary)] opacity-0 group-focus-within:opacity-5 blur-xl transition-opacity duration-500" />
//                 <div className="relative flex items-center bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] rounded-xl px-5 py-4 focus-within:border-[var(--md-sys-color-primary)] focus-within:shadow-md transition-all duration-300">
//                   <span className="text-[var(--md-sys-color-primary)] font-bold mr-4 animate-pulse">
//                     {">"}
//                   </span>
//                   <input
//                     type="text"
//                     placeholder="QUERY_LOGS (Search by title, tag, or keyword)..."
//                     className="bg-transparent border-none outline-none w-full text-[var(--md-sys-color-on-surface)] text-xs sm:text-sm placeholder:text-[var(--md-sys-color-on-surface-variant)] font-medium uppercase tracking-widest"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                   />
//                   {searchQuery ? (
//                     <button
//                       onClick={() => setSearchQuery("")}
//                       className="ml-3 opacity-50 hover:opacity-100 hover:text-[var(--md-sys-color-primary)] transition-colors"
//                     >
//                       <XSquare className="w-5 h-5" />
//                     </button>
//                   ) : (
//                     <Search className="w-5 h-5 text-[var(--md-sys-color-primary)] opacity-50 ml-3" />
//                   )}
//                 </div>
//               </div>
//             </FadeIn>

//             {filteredBlogs.length === 0 ? (
//               <div className="py-20 text-[var(--md-sys-color-on-surface-variant)] text-sm tracking-widest font-terminal uppercase flex flex-col items-center justify-center gap-4">
//                 <XSquare className="w-10 h-10 opacity-50" />
//                 <span>NO_MATCHING_RECORDS_FOUND</span>
//               </div>
//             ) : (
//               <>
//                 {!isSearching && filteredBlogs.length > 0 && (
//                   <FeaturedBlogCard
//                     blog={filteredBlogs[0]}
//                     onClick={() => openReader(filteredBlogs[0])}
//                   />
//                 )}
//                 {!isSearching && filteredBlogs.length > 1 && (
//                   <FadeIn delay={200}>
//                     <div className="flex items-center gap-4 mb-8">
//                       <div className="h-[1px] flex-1 bg-[var(--md-sys-color-outline-variant)] opacity-50" />
//                       <span className="font-terminal text-xs uppercase tracking-[0.4em] text-[var(--md-sys-color-on-surface-variant)] font-bold">
//                         ARCHIVED_TRANSMISSIONS
//                       </span>
//                       <div className="h-[1px] flex-1 bg-[var(--md-sys-color-outline-variant)] opacity-50" />
//                     </div>
//                   </FadeIn>
//                 )}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
//                   {(isSearching ? filteredBlogs : filteredBlogs.slice(1)).map(
//                     (blog, i) => (
//                       <StandardBlogCard
//                         key={blog.id || blog.slug}
//                         blog={blog}
//                         delayIndex={isSearching ? i + 1 : i + 2}
//                         onClick={() => openReader(blog)}
//                       />
//                     ),
//                   )}
//                 </div>
//               </>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Calendar,
  AlertTriangle,
  Terminal,
  ChevronRight,
  Search,
  XSquare,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import { API_BASE_URL } from "../config";

// ==========================================
// 1. IMAGE URL FORMATTER & CONSTANTS
// ==========================================
const getImageUrl = (path) => {
  if (!path) return null;
  if (path.startsWith("http")) return path;
  const baseUrl = API_BASE_URL.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

// Deliberate, smooth GNOME-style fluid morph transition
const morphTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

// ==========================================
// 2. HELPER COMPONENTS
// ==========================================
const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
        filter: "blur(8px)",
        ...directions[direction],
      }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{
        duration: 1.4,
        delay: delay / 1000,
        ease: [0.25, 1, 0.5, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ==========================================
// 3. SKELETON LOADERS
// ==========================================
const SkeletonPulse = ({ className }) => (
  <div
    className={`bg-[var(--md-sys-color-outline-variant)] opacity-20 animate-pulse ${className}`}
  ></div>
);

const FeaturedBlogSkeleton = () => (
  <div className="flex flex-col md:flex-row w-full min-h-[400px] bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] rounded-2xl overflow-hidden mb-12 shadow-sm">
    <div className="md:w-3/5 h-64 md:h-auto bg-[var(--md-sys-color-surface-variant)] animate-pulse relative">
      <div className="absolute top-6 left-6 w-32 h-6 bg-[var(--md-sys-color-outline-variant)] opacity-20 animate-pulse rounded-sm" />
    </div>
    <div className="md:w-2/5 p-8 sm:p-10 flex flex-col justify-center bg-[var(--md-sys-color-surface)]">
      <div className="flex gap-4 mb-6">
        <SkeletonPulse className="w-24 h-4 rounded-sm" />
        <SkeletonPulse className="w-20 h-4 rounded-sm" />
      </div>
      <SkeletonPulse className="w-full h-10 mb-3 rounded-md" />
      <SkeletonPulse className="w-3/4 h-10 mb-8 rounded-md" />
      <SkeletonPulse className="w-full h-3 mb-2 rounded-sm" />
      <SkeletonPulse className="w-full h-3 mb-2 rounded-sm" />
      <SkeletonPulse className="w-5/6 h-3 mb-8 rounded-sm" />
    </div>
  </div>
);

const StandardBlogSkeleton = () => (
  <div className="flex flex-col h-full bg-[var(--md-sys-color-surface-variant)] border border-[var(--md-sys-color-outline-variant)] rounded-xl overflow-hidden shadow-sm">
    <div className="h-48 w-full bg-[var(--md-sys-color-surface)] animate-pulse border-b border-[var(--md-sys-color-outline-variant)]" />
    <div className="p-6 flex flex-col flex-1">
      <div className="flex justify-between mb-4">
        <SkeletonPulse className="w-20 h-3 rounded-sm" />
        <SkeletonPulse className="w-12 h-3 rounded-sm" />
      </div>
      <SkeletonPulse className="w-full h-6 mb-2 rounded-md" />
      <SkeletonPulse className="w-2/3 h-6 mb-6 rounded-md" />
      <SkeletonPulse className="w-full h-3 mb-2 rounded-sm" />
      <SkeletonPulse className="w-full h-3 mb-2 rounded-sm" />
    </div>
  </div>
);

// ==========================================
// 4. BLOG COMPONENTS (With layoutId Morphing)
// ==========================================
const FeaturedBlogCard = ({ blog, onClick }) => (
  <FadeIn delay={100} direction="up">
    <motion.div
      layoutId={`card-${blog.id || blog.slug}`}
      transition={morphTransition}
      onClick={onClick}
      className="group relative flex flex-col md:flex-row w-full min-h-[400px] bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] rounded-lg overflow-hidden cursor-pointer transition-all duration-500 hover:border-[var(--md-sys-color-primary)] hover:shadow-lg hover:-translate-y-1 mb-12"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none box-shadow-[inset_0_0_20px_var(--md-sys-color-primary)]" />

      {/* Featured Image - Morph Target */}
      <motion.div
        layoutId={`image-${blog.id || blog.slug}`}
        transition={morphTransition}
        className="md:w-3/5 relative overflow-hidden h-64 md:h-auto border-b md:border-b-0 md:border-r border-[var(--md-sys-color-outline-variant)]"
      >
        {blog.cover_image ? (
          <img
            src={getImageUrl(blog.cover_image)}
            alt={blog.title}
            className="w-full h-full object-cover grayscale-[0.3] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-[var(--md-sys-color-surface-variant)] flex items-center justify-center font-terminal opacity-50">
            NO_IMAGE_DATA
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[var(--md-sys-color-surface)] via-transparent to-transparent opacity-80" />
        <div className="absolute top-6 left-6 font-terminal text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-md bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] uppercase tracking-[0.2em] shadow-md">
          LATEST_TRANSMISSION
        </div>
      </motion.div>

      {/* Featured Content */}
      <div className="md:w-2/5 p-8 sm:p-10 flex flex-col justify-center relative z-10 bg-[var(--md-sys-color-surface)] md:bg-transparent">
        <div className="flex items-center gap-4 text-[11px] font-ide font-bold text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-widest mb-6">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[var(--md-sys-color-primary)]" />{" "}
            {blog.published_date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[var(--md-sys-color-primary)]" />{" "}
            {blog.read_time} MIN
          </span>
        </div>

        {/* Title - Morph Target */}
        <motion.h3
          layoutId={`title-${blog.id || blog.slug}`}
          transition={morphTransition}
          className="font-terminal text-3xl sm:text-4xl font-bold mb-4 uppercase leading-tight transition-colors duration-300 text-[var(--md-sys-color-on-surface)] group-hover:text-[var(--md-sys-color-primary)]"
        >
          {blog.title}
        </motion.h3>

        <p className="font-ide text-sm sm:text-base text-[var(--md-sys-color-on-surface-variant)] leading-relaxed mb-8 flex-1">
          {blog.excerpt}
        </p>
        <div className="flex items-center justify-between pt-6 border-t border-[var(--md-sys-color-outline-variant)]">
          <div className="flex flex-wrap gap-2">
            {blog.tag_list?.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-ide font-bold uppercase tracking-[0.2em] text-[var(--md-sys-color-primary)] bg-[var(--md-sys-color-primary)]/10 px-3 py-1.5 rounded-lg border border-[var(--md-sys-color-primary)]/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-[var(--md-sys-color-primary)] group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2 font-terminal text-xs uppercase tracking-widest font-bold">
            DECRYPT <ChevronRight className="w-5 h-5" />
          </span>
        </div>
      </div>
    </motion.div>
  </FadeIn>
);

const StandardBlogCard = ({ blog, onClick, delayIndex }) => (
  <FadeIn delay={delayIndex * 150} direction="up" className="h-full">
    <motion.div
      layoutId={`card-${blog.id || blog.slug}`}
      transition={morphTransition}
      onClick={onClick}
      className="group flex flex-col h-full bg-[var(--md-sys-color-surface-variant)] border border-[var(--md-sys-color-outline-variant)] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-[var(--md-sys-color-primary)] hover:shadow-md hover:-translate-y-1"
    >
      {/* Image - Morph Target */}
      <motion.div
        layoutId={`image-${blog.id || blog.slug}`}
        transition={morphTransition}
        className="h-48 w-full overflow-hidden relative border-b border-[var(--md-sys-color-outline-variant)] shrink-0"
      >
        {blog.cover_image ? (
          <img
            src={getImageUrl(blog.cover_image)}
            alt={blog.title}
            className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full bg-[var(--md-sys-color-background)] flex items-center justify-center font-terminal opacity-50">
            NO_IMAGE
          </div>
        )}
        <div className="absolute inset-0 bg-[var(--md-sys-color-primary)] mix-blend-multiply opacity-10 group-hover:opacity-0 transition-opacity duration-700" />
      </motion.div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between text-[10px] font-ide font-bold text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-widest mb-4">
          <span>{blog.published_date}</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {blog.read_time}M
          </span>
        </div>

        {/* Title - Morph Target */}
        <motion.h3
          layoutId={`title-${blog.id || blog.slug}`}
          transition={morphTransition}
          className="font-terminal text-xl font-bold mb-3 uppercase leading-snug transition-colors duration-300 text-[var(--md-sys-color-on-surface)] group-hover:text-[var(--md-sys-color-primary)]"
        >
          {blog.title}
        </motion.h3>

        <p className="font-ide text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed mb-6 flex-1 line-clamp-2">
          {blog.excerpt}
        </p>
        <div className="mt-auto pt-4 border-t border-[var(--md-sys-color-outline-variant)] flex items-center justify-between opacity-80 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-2">
            {blog.tag_list?.slice(0, 1).map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-ide font-bold uppercase tracking-[0.2em] text-[var(--md-sys-color-primary)] border border-[var(--md-sys-color-primary)]/30 px-2 py-1 rounded-md bg-[var(--md-sys-color-primary)]/5"
              >
                {tag}
              </span>
            ))}
          </div>
          <ChevronRight className="w-4 h-4 text-[var(--md-sys-color-primary)] group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  </FadeIn>
);

const BlogReader = ({ blog, onClose }) => (
  // We use motion.div as the root to morph from the card layoutId
  <motion.div
    layoutId={`card-${blog.id || blog.slug}`}
    transition={morphTransition}
    className="w-full container mx-auto bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] rounded-lg overflow-hidden shadow-lg"
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="px-6 py-4 border-b border-[var(--md-sys-color-outline-variant)] flex items-center justify-between bg-[var(--md-sys-color-surface-variant)] sticky top-0 z-20"
    >
      <button
        onClick={onClose}
        className="flex items-center gap-2 font-ide text-xs font-bold uppercase tracking-widest text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Terminate_Connection
      </button>
      <div className="font-terminal text-xs text-[var(--md-sys-color-primary)] tracking-[0.3em] uppercase">
        LOG_{blog.slug || "SYS"}
      </div>
    </motion.div>

    <div className="p-8 sm:p-12 border-b border-[var(--md-sys-color-outline-variant)] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex flex-wrap items-center gap-4 text-[11px] font-ide font-bold text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-widest mb-6 relative z-10"
      >
        <span className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4 text-[var(--md-sys-color-primary)]" />{" "}
          {blog.published_date}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-[var(--md-sys-color-primary)]" />{" "}
          {blog.read_time} MIN READ
        </span>
      </motion.div>

      {/* Title - Morph Target */}
      <motion.h1
        layoutId={`title-${blog.id || blog.slug}`}
        transition={morphTransition}
        className="font-terminal text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[1.1] text-[var(--md-sys-color-on-surface)] relative z-10"
      >
        {blog.title}
      </motion.h1>
    </div>

    {blog.cover_image && (
      // Image - Morph Target
      <motion.div
        layoutId={`image-${blog.id || blog.slug}`}
        transition={morphTransition}
        className="w-full h-64 sm:h-96 border-b border-[var(--md-sys-color-outline-variant)] relative"
      >
        <img
          src={getImageUrl(blog.cover_image)}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--md-sys-color-surface)] via-[var(--md-sys-color-surface)]/20 to-transparent opacity-90" />
      </motion.div>
    )}

    {/* Delayed Fade In for Content so it doesn't appear until morph finishes */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="p-8 sm:p-12 bg-[var(--md-sys-color-surface)]"
    >
      <div className="max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => (
              <h1
                className="font-terminal text-3xl sm:text-4xl font-bold uppercase tracking-wide text-[var(--md-sys-color-on-surface)] mt-12 mb-6"
                {...props}
              />
            ),
            h2: ({ node, ...props }) => (
              <h2
                className="font-terminal text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[var(--md-sys-color-on-surface)] mt-10 mb-5 border-b border-[var(--md-sys-color-outline-variant)] pb-2"
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                className="font-terminal text-xl sm:text-2xl font-bold uppercase tracking-wide text-[var(--md-sys-color-on-surface)] mt-8 mb-4"
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p
                className="font-ide text-base sm:text-lg text-[var(--md-sys-color-on-surface-variant)] leading-relaxed tracking-wide mb-6"
                {...props}
              />
            ),
            a: ({ node, ...props }) => (
              <a
                className="text-[var(--md-sys-color-primary)] font-bold no-underline hover:underline"
                {...props}
              />
            ),
            strong: ({ node, ...props }) => (
              <strong
                className="text-[var(--md-sys-color-on-surface)] font-bold"
                {...props}
              />
            ),
            ul: ({ node, ...props }) => (
              <ul
                className="font-ide text-[var(--md-sys-color-on-surface-variant)] list-disc list-outside ml-6 mb-6 space-y-2 text-base sm:text-lg"
                {...props}
              />
            ),
            ol: ({ node, ...props }) => (
              <ol
                className="font-ide text-[var(--md-sys-color-on-surface-variant)] list-decimal list-outside ml-6 mb-6 space-y-2 text-base sm:text-lg"
                {...props}
              />
            ),
            li: ({ node, ...props }) => <li className="pl-2" {...props} />,
            blockquote: ({ node, ...props }) => (
              <blockquote
                className="border-l-4 border-[var(--md-sys-color-primary)] bg-[var(--md-sys-color-surface-variant)] px-6 py-4 mb-6 rounded-r-xl italic font-ide text-[var(--md-sys-color-on-surface-variant)] shadow-sm"
                {...props}
              />
            ),
            code: ({ node, inline, className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || "");
              return !inline ? (
                <div className="rounded-xl overflow-hidden mb-6 border border-[#3A4A2B] bg-[#0E120A] shadow-lg">
                  <div className="bg-[#161D10] px-4 py-2 text-[10px] font-terminal uppercase tracking-widest text-[#A5D27E] flex items-center gap-2 border-b border-[#3A4A2B]">
                    <Terminal className="w-3 h-3" />{" "}
                    {match ? match[1] : "CODE_BLOCK"}
                  </div>
                  <pre className="p-5 overflow-x-auto">
                    <code
                      className="font-ide text-sm sm:text-base text-[#E3EAD8] leading-relaxed block"
                      {...props}
                    >
                      {children}
                    </code>
                  </pre>
                </div>
              ) : (
                <code
                  className="font-ide text-[var(--md-sys-color-on-surface)] font-bold bg-[var(--md-sys-color-surface-variant)] border border-[var(--md-sys-color-outline-variant)] px-1.5 py-0.5 rounded-md text-[0.85em]"
                  {...props}
                >
                  {children}
                </code>
              );
            },
          }}
        >
          {blog.content}
        </ReactMarkdown>
      </div>
    </motion.div>
  </motion.div>
);

// ==========================================
// 5. MAIN PAGE EXPORT
// ==========================================
export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeBlog, setActiveBlog] = useState(null);

  // Search State
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`${API_BASE_URL}api/v1/blogs/`)
      .then((res) => {
        if (!res.ok) throw new Error("API Response Not OK");
        return res.json();
      })
      .then((data) => {
        setBlogs(data || []);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("SYS_ERR: CONNECTION REFUSED. UNABLE TO REACH UPLINK.");
        setIsLoading(false);
      });
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    const query = searchQuery.toLowerCase();
    return (
      blog.title?.toLowerCase().includes(query) ||
      blog.excerpt?.toLowerCase().includes(query) ||
      blog.tag_list?.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  const openReader = (blog) => {
    setActiveBlog(blog);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeReader = () => {
    setActiveBlog(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isSearching = searchQuery.length > 0;

  return (
    <div className="py-20 px-4 sm:px-6 container mx-auto min-h-screen mb-10">
      <FadeIn>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-4">
            <Terminal className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--md-sys-color-primary)]" />
            <h2 className="font-terminal text-4xl sm:text-6xl font-bold uppercase tracking-widest text-[var(--md-sys-color-on-surface)]">
              Intelligence
            </h2>
          </div>
        </div>
      </FadeIn>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
          >
            <FeaturedBlogSkeleton />
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] flex-1 bg-[var(--md-sys-color-outline-variant)] opacity-50" />
              <span className="font-terminal text-xs uppercase tracking-[0.4em] text-[var(--md-sys-color-primary)] font-bold animate-pulse">
                DECRYPTING_ARCHIVES...
              </span>
              <div className="h-[1px] flex-1 bg-[var(--md-sys-color-outline-variant)] opacity-50" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <StandardBlogSkeleton />
              <StandardBlogSkeleton />
              <StandardBlogSkeleton />
            </div>
          </motion.div>
        ) : error ? (
          <motion.div
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="py-20 flex flex-col items-center justify-center border border-red-500/30 bg-red-500/5 rounded-xl w-full"
          >
            <AlertTriangle className="w-12 h-12 text-red-500 mb-4 animate-pulse" />
            <div className="font-terminal text-red-500 text-lg sm:text-xl font-bold tracking-widest uppercase text-center px-4">
              {error}
            </div>
          </motion.div>
        ) : activeBlog ? (
          <motion.div
            key="reader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
          >
            <BlogReader blog={activeBlog} onClose={closeReader} />
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
          >
            <FadeIn delay={100}>
              <div className="mb-10 w-full max-w-2xl font-ide relative group md:mr-auto">
                <div className="absolute inset-0 bg-[var(--md-sys-color-primary)] opacity-0 group-focus-within:opacity-5 blur-xl transition-opacity duration-500" />
                <div className="relative flex items-center bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] rounded-xl px-5 py-4 focus-within:border-[var(--md-sys-color-primary)] focus-within:shadow-md transition-all duration-300">
                  <span className="text-[var(--md-sys-color-primary)] font-bold mr-4 animate-pulse">
                    {">"}
                  </span>
                  <input
                    type="text"
                    placeholder="QUERY_LOGS (Search by title, tag, or keyword)..."
                    className="bg-transparent border-none outline-none w-full text-[var(--md-sys-color-on-surface)] text-xs sm:text-sm placeholder:text-[var(--md-sys-color-on-surface-variant)] font-medium uppercase tracking-widest"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery ? (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="ml-3 opacity-50 hover:opacity-100 hover:text-[var(--md-sys-color-primary)] transition-colors"
                    >
                      <XSquare className="w-5 h-5" />
                    </button>
                  ) : (
                    <Search className="w-5 h-5 text-[var(--md-sys-color-primary)] opacity-50 ml-3" />
                  )}
                </div>
              </div>
            </FadeIn>

            {filteredBlogs.length === 0 ? (
              <div className="py-20 text-[var(--md-sys-color-on-surface-variant)] text-sm tracking-widest font-terminal uppercase flex flex-col items-center justify-center gap-4">
                <XSquare className="w-10 h-10 opacity-50" />
                <span>NO_MATCHING_RECORDS_FOUND</span>
              </div>
            ) : (
              <>
                {!isSearching && filteredBlogs.length > 0 && (
                  <FeaturedBlogCard
                    blog={filteredBlogs[0]}
                    onClick={() => openReader(filteredBlogs[0])}
                  />
                )}
                {!isSearching && filteredBlogs.length > 1 && (
                  <FadeIn delay={200}>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-[1px] flex-1 bg-[var(--md-sys-color-outline-variant)] opacity-50" />
                      <span className="font-terminal text-xs uppercase tracking-[0.4em] text-[var(--md-sys-color-on-surface-variant)] font-bold">
                        ARCHIVED_TRANSMISSIONS
                      </span>
                      <div className="h-[1px] flex-1 bg-[var(--md-sys-color-outline-variant)] opacity-50" />
                    </div>
                  </FadeIn>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                  {(isSearching ? filteredBlogs : filteredBlogs.slice(1)).map(
                    (blog, i) => (
                      <StandardBlogCard
                        key={blog.id || blog.slug}
                        blog={blog}
                        delayIndex={isSearching ? i + 1 : i + 2}
                        onClick={() => openReader(blog)}
                      />
                    ),
                  )}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
