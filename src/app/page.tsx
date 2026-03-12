"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Cpu, Braces, Code2 } from "lucide-react";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="split-container min-h-[calc(100vh-64px)]">
      
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-logic-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-creative-accent/20 rounded-full blur-[120px] pointer-events-none" />

      {/* LEFT ZONE: LOGIC */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="zone-logic"
      >
        <div className="space-y-6 max-w-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-logic-accent/10 border border-logic-accent/20 text-logic-accent text-sm font-medium">
            <Cpu size={16} /> Architecture & Logic
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Think <br /><span className="text-white">Left.</span>
          </h1>
          
          <p className="text-xl text-white/60 leading-relaxed font-body">
            Master systems design, algorithms, and architectural patterns. Understand the deep mechanics before writing a single line.
          </p>

          {/* Logic Visual block */}
          <div className="glass-card mt-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-logic-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <span className="font-mono text-sm text-white/50">System.Architecture</span>
              <Terminal size={16} className="text-white/30" />
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex items-center gap-4 text-white/70">
                <div className="w-12 h-12 rounded border border-logic-accent/30 flex items-center justify-center bg-logic-accent/10">DB</div>
                <div className="h-[1px] flex-1 bg-white/20 relative">
                  <motion.div 
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute inset-0 bg-logic-accent"
                  />
                </div>
                <div className="w-12 h-12 rounded border border-logic-accent/30 flex items-center justify-center bg-logic-accent/10">API</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* RIGHT ZONE: CREATIVE & CODE */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="zone-creative"
      >
        <div className="space-y-6 max-w-lg lg:ml-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-creative-accent/10 border border-creative-accent/20 text-creative-accent text-sm font-medium">
            <Braces size={16} /> Execution & Build
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Build <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-creative-accent to-pink-500">Right.</span>
          </h1>
          
          <p className="text-xl text-white/60 leading-relaxed font-body">
            Transform logical models into high-performance, production-ready code. See your architecture come alive instantly.
          </p>

          {/* Code Play Visual Block */}
          <div className="glass-card mt-12 bg-[#0d0d12] border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-creative-accent/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="font-mono text-xs text-white/50">execute.ts</span>
            </div>
            <pre className="font-mono text-sm leading-relaxed overflow-x-auto text-white/80">
              <span className="text-pink-400">const</span> system = <span className="text-creative-accent">new</span> Architecture()
              <br/>
              system.<span className="text-blue-400">connect</span>(&#123;
              <br/>
              &nbsp;&nbsp;database: <span className="text-green-400">'postgresql'</span>,
              <br/>
              &nbsp;&nbsp;poolSize: <span className="text-orange-400">20</span>
              <br/>
              &#125;)
              <br/><br/>
              <span className="text-white/40">// Output stream ready...</span>
            </pre>
          </div>

          <div className="pt-8 flex gap-4">
            <a href="/learn" className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
              <Code2 size={20} /> Start Learning
            </a>
            <a href="/playground" className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors group">
              Open Playground <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Floating cross-zone animation logic indicator */}
        <motion.div 
          className="absolute left-[-24px] top-1/2 w-12 h-12 bg-creative-accent hidden lg:flex rounded-xl rotate-45 items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.4)] z-50 border-2 border-[#0A0515]"
          animate={{ 
            rotate: [45, 225, 405],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <div className="-rotate-45 text-white"><ArrowRight size={20} /></div>
        </motion.div>

      </motion.div>
    </div>
  );
}
