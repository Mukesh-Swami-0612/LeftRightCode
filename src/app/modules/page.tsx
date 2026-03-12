"use client";

import { motion } from "framer-motion";
import { Network, Database, Layers, ShieldCheck, Zap } from "lucide-react";

const NOODLE_DATA = [
  { id: 1, title: "ADO.NET Fundamentals", icon: <Database />, color: "from-blue-500 to-cyan-400", x: 20, y: 20 },
  { id: 2, title: "Connection & Pools", icon: <Network />, color: "from-purple-500 to-pink-500", x: 50, y: 10 },
  { id: 3, title: "Disconnected Logic", icon: <Layers />, color: "from-orange-500 to-yellow-500", x: 70, y: 40 },
  { id: 4, title: "Performance Patterns", icon: <Zap />, color: "from-green-400 to-emerald-600", x: 30, y: 60 },
  { id: 5, title: "Security & Injection", icon: <ShieldCheck />, color: "from-red-500 to-rose-400", x: 80, y: 80 },
];

export default function ModulesPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] p-8 lg:p-16 relative overflow-hidden bg-[#020202]">
      
      {/* Background Neural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Knowledge Graph</h1>
          <p className="text-xl text-white/50 max-w-2xl">
            Explore the neural landscape of database architecture. Concepts are interconnected, showing the real relationship between logic and creative execution.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full h-[600px] glass-card border-white/5 bg-black/40 p-8">
          
          {/* Concept Nodes rendered absolutely based on percentages */}
          {NOODLE_DATA.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, zIndex: 50 }}
              className={`absolute flex flex-col items-center gap-3 cursor-pointer group`}
              style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${node.color} blur-xl opacity-20 group-hover:opacity-60 transition-opacity rounded-full`} />
                <div className={`w-20 h-20 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center relative z-10 overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${node.color} opacity-10`} />
                  <div className="text-white/80 group-hover:text-white transition-colors">
                    {node.icon}
                  </div>
                </div>
              </div>
              <div className="bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 whitespace-nowrap shadow-xl opacity-80 group-hover:opacity-100">
                <span className="font-heading font-semibold text-sm">{node.title}</span>
              </div>
            </motion.div>
          ))}

          {/* SVG Connection Lines simulation */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: 0 }}>
             <path d="M 20% 20% Q 35% 15% 50% 10%" stroke="url(#grad1)" strokeWidth="2" fill="none" className="stroke-dash" />
             <path d="M 50% 10% Q 60% 25% 70% 40%" stroke="url(#grad2)" strokeWidth="2" fill="none" className="stroke-dash" />
             <path d="M 20% 20% Q 25% 40% 30% 60%" stroke="url(#grad3)" strokeWidth="2" fill="none" className="stroke-dash" />
             
             <defs>
               <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#3b82f6" />
                 <stop offset="100%" stopColor="#a855f7" />
               </linearGradient>
               <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#a855f7" />
                 <stop offset="100%" stopColor="#f59e0b" />
               </linearGradient>
             </defs>
          </svg>

        </div>
      </div>
    </div>
  );
}
