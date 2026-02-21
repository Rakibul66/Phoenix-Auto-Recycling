"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { FAQS } from "@/lib/constants"
import { Search, Command, ArrowRight, ShieldCheck, Cpu } from "lucide-react"

export const FaqGrid = () => {
  const reduceMotion = useReducedMotion()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedIdx, setSelectedIdx] = useState(0)

  const categories = useMemo(() => ["All", ...Array.from(new Set(FAQS.map(f => f.category)))], [])

  const filteredFaqs = useMemo(() => {
    return FAQS.filter(item => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory
      const matchesQuery = item.question.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, searchQuery])

  const activeItem = filteredFaqs[selectedIdx] || filteredFaqs[0]

  return (
    <section className="relative w-full overflow-hidden bg-black py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6">
        
        {/* Header - Minimalist */}
        <div className="mb-10 flex flex-col justify-between gap-6 border-b border-white/5 pb-8 sm:mb-16 sm:pb-12 lg:flex-row lg:items-end">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary sm:tracking-[0.4em]">System Documentation</p>
            </div>
            <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white sm:text-5xl md:text-7xl">
              Valley <span className="text-neutral-700 not-italic">Intell.</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-4 font-mono text-[10px] text-neutral-600 sm:gap-6">
            <div className="flex flex-col items-end">
              <span>DB_STATUS</span>
              <span className="text-primary">ONLINE</span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="flex flex-col items-end">
              <span>LATENCY</span>
              <span className="text-white">12ms</span>
            </div>
          </div>
        </div>

        {/* MAIN CONSOLE */}
        <div className="grid h-full w-full gap-px overflow-hidden rounded-[2rem] border border-white/5 bg-white/5 lg:min-h-[650px] lg:grid-cols-12">
          
          {/* COL 1: NAVIGATION */}
          <div className="bg-neutral-950 p-4 sm:p-6 lg:col-span-2 lg:p-8">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-widest text-neutral-600">Index Filters</p>
            <div className="flex flex-col gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setSelectedIdx(0); }}
                  className={`group flex items-center justify-between rounded-lg px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-all ${
                    activeCategory === cat 
                    ? "bg-primary text-black shadow-[0_0_20px_rgba(21,178,91,0.2)]" 
                    : "text-neutral-500 hover:bg-white/5 hover:text-neutral-200"
                  }`}
                >
                  {cat}
                  <Command size={10} className={activeCategory === cat ? "opacity-100" : "opacity-0"} />
                </button>
              ))}
            </div>
          </div>

          {/* COL 2: SEARCH & FEED */}
          <div className="bg-neutral-900/50 p-0 lg:col-span-4 lg:border-x lg:border-white/5">
            <div className="sticky top-0 z-10 border-b border-white/5 bg-neutral-950/20 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-black/40 px-4 py-2.5 text-sm">
                <Search size={14} className="text-neutral-600" />
                <input 
                  placeholder="Query Keywords..." 
                  className="bg-transparent text-xs font-medium text-white outline-none placeholder:text-neutral-700"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div className="max-h-[320px] overflow-y-auto p-4 scrollbar-hide sm:max-h-[420px] lg:h-[520px] lg:max-h-none">
              <div className="space-y-1">
                {filteredFaqs.map((faq, idx) => (
                  <button
                    key={faq.question}
                    onClick={() => setSelectedIdx(idx)}
                    className={`group relative w-full rounded-xl p-5 text-left transition-all ${
                      selectedIdx === idx ? "bg-white/5 ring-1 ring-white/10" : "hover:bg-white/[0.02]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-[9px] ${selectedIdx === idx ? "text-primary" : "text-neutral-800"}`}>
                        {idx < 9 ? `0${idx + 1}` : idx + 1}
                      </span>
                      <p className={`text-xs font-bold uppercase tracking-tight transition-colors ${
                        selectedIdx === idx ? "text-white" : "text-neutral-500 group-hover:text-neutral-300"
                      }`}>
                        {faq.question}
                      </p>
                    </div>
                    {selectedIdx === idx && (
                      <motion.div layoutId="activeInd" className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-primary" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* COL 3: CONTENT VIEW */}
          <div className="relative flex flex-col justify-center bg-black p-6 sm:p-8 lg:col-span-6 lg:p-12">
            <AnimatePresence mode="wait">
              {activeItem ? (
                <motion.div
                  key={activeItem.question}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8 sm:space-y-10"
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="h-px w-8 bg-primary/40" />
                      <span className="text-[9px] font-black uppercase tracking-[0.5em] text-primary">Protocol Response</span>
                    </div>
                    <h4 className="text-2xl font-black uppercase tracking-tighter text-white sm:text-3xl lg:text-5xl">
                      {activeItem.question}
                    </h4>
                    <div className="max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
                      {activeItem.answer}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 border-t border-white/5 pt-8 sm:gap-6 sm:pt-10">
                    <div className="flex items-center gap-2 text-neutral-500">
                      <ShieldCheck size={16} className="text-primary" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Verified Info</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-500">
                      <Cpu size={16} className="text-primary" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Live Dispatcher Sync</span>
                    </div>
                    <button className="flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-[10px] font-black uppercase tracking-widest text-black transition-transform hover:scale-105 active:scale-95 sm:ml-auto sm:w-auto">
                      Call Support
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-800">Void Entry // Filter Results</p>
                </div>
              )}
            </AnimatePresence>

            {/* Subtle Terminal Decoration */}
            <div className="absolute bottom-10 right-10 hidden opacity-20 lg:block">
               <pre className="font-mono text-[7px] leading-tight text-primary uppercase">
                 {`[system_node_04]\nstate: localized\nsecure_link: established`}
               </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
