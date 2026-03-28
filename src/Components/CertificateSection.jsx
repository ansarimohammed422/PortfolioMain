import { useState, useEffect } from "react";
import FadeIn from "./FadeIn";
import {
  Braces,
  Network,
  CheckCircle,
  Globe,
  Activity,
  Shield,
  Key,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const CERTIFICATIONS = [
  {
    id: "react",
    method: "GET",
    endpoint: "/api/v1/certs/react",
    title: "Advanced React Patterns",
    issuer: "Frontend Masters",
    period: "2023",
    desc: "Deep dive into React performance, custom hooks, concurrent rendering, and complex state management.",
    tech: ["React", "Hooks", "Performance"],
  },
  {
    id: "django",
    method: "GET",
    endpoint: "/api/v1/certs/django",
    title: "Django Backend Architecture",
    issuer: "Django Software Foundation",
    period: "2022",
    desc: "Scalable ORM querying, REST Framework integration, and secure authentication flows.",
    tech: ["Python", "Django", "PostgreSQL"],
  },
  {
    id: "fullstack",
    method: "POST",
    endpoint: "/api/v1/verify/fullstack",
    title: "Full-Stack Web Engineering",
    issuer: "Tech Institute",
    period: "2024",
    desc: "End-to-end development pipeline from database schema design to responsive UI implementation.",
    tech: ["Next.js", "Node.js", "CI/CD"],
  },
];
const ApiPlayground = () => {
  const [activeCertId, setActiveCertId] = useState(CERTIFICATIONS[0].id);
  const [requestState, setRequestState] = useState("idle"); // 'idle' | 'fetching' | 'success'
  const [activeTab, setActiveTab] = useState("preview"); // 'preview' | 'raw' | 'headers'
  const activeCert = CERTIFICATIONS.find((c) => c.id === activeCertId);

  const handleFetch = (id) => {
    if (
      activeCertId === id &&
      requestState === "success" &&
      activeTab === "preview"
    )
      return;

    setActiveCertId(id);
    setRequestState("fetching");
    setActiveTab("preview");

    setTimeout(() => {
      setRequestState("success");
    }, 800);
  };

  useEffect(() => {
    handleFetch(CERTIFICATIONS[0].id);
  }, []);

  return (
    <div className="w-full bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[500px] md:h-[450px]">
      {/* LEFT PANEL: Endpoint Sidebar */}
      <div className="w-full md:w-64 lg:w-72 bg-[var(--md-sys-color-surface-variant)] border-b md:border-b-0 md:border-r border-[var(--md-sys-color-outline-variant)] flex flex-col shrink-0">
        <div className="h-12 border-b border-[var(--md-sys-color-outline-variant)] flex items-center px-4 font-mono text-[10px] uppercase tracking-widest text-[var(--md-sys-color-on-surface-variant)] font-bold">
          <Network className="w-3 h-3 mr-2" /> Endpoints
        </div>
        <div className="flex-1 overflow-y-auto py-2">
          {CERTIFICATIONS.map((cert) => (
            <button
              key={cert.id}
              onClick={() => handleFetch(cert.id)}
              className={`w-full text-left px-4 py-3 flex flex-col gap-1 transition-all duration-300 border-l-2 ${
                activeCertId === cert.id
                  ? "bg-[var(--md-sys-color-background)] border-[var(--md-sys-color-primary)]"
                  : "border-transparent hover:bg-black/5 dark:hover:bg-white/5"
              }`}
            >
              <span className="font-mono text-[10px] font-bold text-[var(--md-sys-color-on-surface)]">
                <span
                  className={`${cert.method === "GET" ? "text-blue-500" : "text-green-500"} mr-2`}
                >
                  {cert.method}
                </span>
                {cert.id}
              </span>
              <span className="font-sans text-xs text-[var(--md-sys-color-on-surface-variant)] truncate">
                {cert.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL: Request / Response Viewer */}
      <div className="flex-1 flex flex-col min-w-0 bg-[var(--md-sys-color-background)]">
        {/* URL Bar */}
        <div className="h-12 border-b border-[var(--md-sys-color-outline-variant)] flex items-center px-4 gap-4 bg-[var(--md-sys-color-surface)]">
          <div className="flex-1 flex items-center bg-[var(--md-sys-color-surface-variant)] rounded-md px-3 py-1.5 border border-[var(--md-sys-color-outline-variant)]">
            <Globe className="w-3 h-3 text-[var(--md-sys-color-on-surface-variant)] mr-2" />
            <span className="font-mono text-[10px] sm:text-xs text-[var(--md-sys-color-on-surface)] truncate">
              <span className="opacity-50">https://api.portfolio.dev</span>
              {activeCert?.endpoint}
            </span>
          </div>
          <button
            onClick={() => handleFetch(activeCertId)}
            className="shrink-0 px-4 py-1.5 bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] rounded-md font-mono text-[10px] sm:text-xs font-bold hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            SEND
          </button>
        </div>

        {/* Response Viewer Header */}
        <div className="h-8 border-b border-[var(--md-sys-color-outline-variant)] flex items-center px-4 justify-between font-mono text-[10px] uppercase tracking-widest text-[var(--md-sys-color-on-surface-variant)]">
          <div className="flex items-center gap-4 h-full">
            <button
              onClick={() => setActiveTab("preview")}
              className={`h-full flex items-center transition-colors hover:text-[var(--md-sys-color-on-surface)] ${activeTab === "preview" ? "border-b-2 border-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-surface)]" : "border-b-2 border-transparent"}`}
            >
              Preview
            </button>
            <button
              onClick={() => setActiveTab("raw")}
              className={`h-full flex items-center transition-colors hover:text-[var(--md-sys-color-on-surface)] ${activeTab === "raw" ? "border-b-2 border-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-surface)]" : "border-b-2 border-transparent"}`}
            >
              Raw Payload
            </button>
            <button
              onClick={() => setActiveTab("headers")}
              className={`h-full flex items-center transition-colors hover:text-[var(--md-sys-color-on-surface)] ${activeTab === "headers" ? "border-b-2 border-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-surface)]" : "border-b-2 border-transparent"}`}
            >
              Headers (4)
            </button>
          </div>
          {requestState === "success" && (
            <div className="flex items-center gap-4 hidden sm:flex">
              <span className="text-green-500 font-bold flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> 200 OK
              </span>
              <span>Time: 142ms</span>
              <span>Size: 1.2 KB</span>
            </div>
          )}
        </div>

        {/* Response Body */}
        <div className="flex-1 relative overflow-hidden p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {requestState === "fetching" && (
              <motion.div
                key="fetching"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center font-mono text-xs text-[var(--md-sys-color-primary)] gap-4"
              >
                <Activity className="w-6 h-6 animate-spin" />
                <span>Awaiting response from server...</span>
              </motion.div>
            )}

            {requestState === "success" && activeCert && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                className="w-full h-full"
              >
                {/* TAB 1: PREVIEW */}
                {activeTab === "preview" && (
                  <div className="relative w-full h-full max-w-2xl mx-auto rounded-xl border border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface)] shadow-lg overflow-hidden flex flex-col group hover:border-[var(--md-sys-color-primary)] transition-colors duration-500">
                    {/* Watermark */}
                    <div className="absolute -right-8 -bottom-8 opacity-5 text-[var(--md-sys-color-on-surface)] pointer-events-none transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700">
                      <Shield className="w-48 h-48" />
                    </div>

                    {/* Header */}
                    <div className="p-6 border-b border-[var(--md-sys-color-outline-variant)] flex justify-between items-start bg-[var(--md-sys-color-surface-variant)] relative z-10">
                      <div>
                        <div className="font-mono text-[10px] text-[var(--md-sys-color-primary)] uppercase tracking-[0.2em] mb-1 flex items-center gap-2">
                          <Key className="w-3 h-3" /> Verified Credential
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[var(--md-sys-color-on-surface)]">
                          {activeCert.title}
                        </h3>
                      </div>
                      <div className="font-mono text-xs font-bold px-3 py-1 bg-[var(--md-sys-color-background)] rounded border border-[var(--md-sys-color-outline-variant)]">
                        {activeCert.period}
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex-1 flex flex-col relative z-10">
                      <div className="font-mono text-[10px] text-[var(--md-sys-color-on-surface-variant)] uppercase tracking-widest mb-1">
                        Issuer
                      </div>
                      <div className="text-sm font-bold text-[var(--md-sys-color-on-surface)] mb-4">
                        {activeCert.issuer}
                      </div>

                      <p className="text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed font-medium mb-6">
                        {activeCert.desc}
                      </p>

                      {/* Tech Tags */}
                      <div className="mt-auto flex flex-wrap gap-2">
                        {activeCert.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-1 bg-[var(--md-sys-color-surface-variant)] border border-[var(--md-sys-color-outline-variant)] text-[var(--md-sys-color-on-surface)] rounded font-mono text-[9px] uppercase tracking-wider font-bold"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="h-8 bg-green-500/10 border-t border-green-500/20 flex items-center justify-center font-mono text-[9px] text-green-600 font-bold uppercase tracking-[0.3em] relative z-10">
                      <CheckCircle className="w-3 h-3 mr-2" /> Signature Valid
                    </div>
                  </div>
                )}

                {/* TAB 2: RAW PAYLOAD */}
                {activeTab === "raw" && (
                  <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-[#333] p-6 font-mono text-[10px] sm:text-xs text-green-400 overflow-auto shadow-inner">
                    <pre className="whitespace-pre-wrap break-all">
                      {JSON.stringify(activeCert, null, 2)}
                    </pre>
                  </div>
                )}

                {/* TAB 3: HEADERS */}
                {activeTab === "headers" && (
                  <div className="w-full h-full bg-[var(--md-sys-color-surface)] rounded-xl border border-[var(--md-sys-color-outline-variant)] font-mono text-[10px] sm:text-xs text-[var(--md-sys-color-on-surface)] overflow-hidden flex flex-col shadow-inner">
                    <div className="grid grid-cols-3 bg-[var(--md-sys-color-surface-variant)] p-3 sm:p-4 border-b border-[var(--md-sys-color-outline-variant)] font-bold uppercase tracking-widest text-[var(--md-sys-color-on-surface-variant)]">
                      <div className="col-span-1">Key</div>
                      <div className="col-span-2">Value</div>
                    </div>
                    <div className="p-3 sm:p-4 flex flex-col gap-4 overflow-auto">
                      <div className="grid grid-cols-3 border-b border-[var(--md-sys-color-outline-variant)]/50 pb-4">
                        <div className="col-span-1 opacity-70">
                          content-type
                        </div>
                        <div className="col-span-2 text-[var(--md-sys-color-primary)] break-all">
                          application/json; charset=utf-8
                        </div>
                      </div>
                      <div className="grid grid-cols-3 border-b border-[var(--md-sys-color-outline-variant)]/50 pb-4">
                        <div className="col-span-1 opacity-70">
                          cache-control
                        </div>
                        <div className="col-span-2 text-[var(--md-sys-color-primary)] break-all">
                          public, max-age=3600
                        </div>
                      </div>
                      <div className="grid grid-cols-3 border-b border-[var(--md-sys-color-outline-variant)]/50 pb-4">
                        <div className="col-span-1 opacity-70">
                          x-powered-by
                        </div>
                        <div className="col-span-2 text-[var(--md-sys-color-primary)] break-all">
                          Kinetic_Engine_v4
                        </div>
                      </div>
                      <div className="grid grid-cols-3">
                        <div className="col-span-1 opacity-70">
                          strict-transport-security
                        </div>
                        <div className="col-span-2 text-[var(--md-sys-color-primary)] break-all">
                          max-age=31536000; includeSubDomains
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const CertificationsSection = () => (
  <section id="certifications" className="scroll-mt-28">
    <FadeIn>
      <div className="flex items-center gap-3 mb-4">
        <Braces className="w-8 h-8 text-[var(--md-sys-color-primary)]" />
        <h2 className="text-3xl font-bold uppercase tracking-widest">
          API Workspace
        </h2>
      </div>
      <p className="text-[var(--md-sys-color-on-surface-variant)] mb-12 max-w-2xl font-mono text-[10px] sm:text-xs opacity-70 uppercase tracking-[0.3em]">
        Interactive REST client. Execute endpoints to retrieve decrypted
        certification payloads.
      </p>
    </FadeIn>

    <FadeIn delay={150}>
      <ApiPlayground />
    </FadeIn>
  </section>
);

export default CertificationsSection;
