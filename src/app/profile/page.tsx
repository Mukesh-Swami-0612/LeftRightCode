"use client";

import { motion } from "framer-motion";
import { User, Award, Code2, Zap, GitCommit, Blocks } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-[calc(100vh-64px)] p-8 lg:p-16">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Profile Header Block */}
        <div className="glass-card flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-logic-accent/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-creative-accent/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="w-32 h-32 rounded-full border border-white/20 bg-black/50 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <User size={48} className="text-white/60" />
            <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-creative-accent border-4 border-[#050505] flex items-center justify-center">
              <Award size={14} className="text-white" />
            </div>
          </div>
          
          <div className="flex-1 relative z-10 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <h1 className="text-3xl font-bold">Alex Developer</h1>
              <span className="px-2 py-1 bg-white/10 text-white/80 rounded text-xs font-mono uppercase tracking-wider border border-white/20">Pro Member</span>
            </div>
            <p className="text-white/50 font-mono text-sm max-w-md">Bridging the gap between architecture and execution. Senior Database Engineer.</p>
          </div>
          
          <div className="flex gap-4 relative z-10">
            <div className="text-center px-4">
              <div className="text-3xl font-bold text-logic-accent font-mono mb-1">12</div>
              <div className="text-xs uppercase tracking-widest text-white/40">Modules</div>
            </div>
            <div className="w-[1px] h-12 bg-white/10" />
            <div className="text-center px-4">
              <div className="text-3xl font-bold text-creative-accent font-mono mb-1">8</div>
              <div className="text-xs uppercase tracking-widest text-white/40">Projects</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Skills Radar / List */}
          <div className="glass-card lg:col-span-1 space-y-6">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
              <Zap size={18} className="text-yellow-400" />
              <h3 className="font-semibold">Skill Matrix</h3>
            </div>
            <div className="space-y-4">
              {[
                { name: "ADO.NET Fundamentals", val: 95 },
                { name: "System Architecture", val: 80 },
                { name: "SQL Query Tuning", val: 85 },
                { name: "Creative Problem Solving", val: 90 }
              ].map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-2 text-white/70">
                    <span>{skill.name}</span>
                    <span className="font-mono text-white/40">{skill.val}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.val}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-logic-accent to-creative-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Graph Simulation */}
          <div className="glass-card lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <GitCommit size={18} className="text-creative-accent" />
                <h3 className="font-semibold">Execution History</h3>
              </div>
              <span className="text-xs text-white/40 font-mono">Last 30 Days</span>
            </div>
            
            <div className="grid grid-cols-8 gap-2 opacity-80">
              {Array.from({ length: 32 }).map((_, i) => {
                const intensity = Math.random();
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.02 }}
                    className="aspect-square rounded sm:rounded-md border border-white/5"
                    style={{ 
                      backgroundColor: intensity > 0.7 ? '#a855f7' : intensity > 0.4 ? 'rgba(168, 85, 247, 0.4)' : intensity > 0.1 ? 'rgba(168, 85, 247, 0.1)' : 'rgba(255, 255, 255, 0.02)' 
                    }}
                  />
                );
              })}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-black/40 rounded border border-white/10 text-white/50"><Blocks size={16}/></div>
                <div>
                  <div className="text-sm font-medium">Built "Distributed Order Service"</div>
                  <div className="text-xs text-white/40">Used ADO.NET Disconnected Arch.</div>
                </div>
              </div>
              <div className="text-xs font-mono text-white/30">2 days ago</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
