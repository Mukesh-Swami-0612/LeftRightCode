"use client";

import { Terminal, Code2, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function PlaygroundPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-[calc(100vh-64px)] flex overflow-hidden">
      
      {/* File Explorer Sidebar */}
      <div className="w-64 bg-[#0a0a0f] border-r border-white/5 flex flex-col text-sm font-mono text-white/50">
        <div className="p-4 border-b border-white/5 font-semibold text-white/70 tracking-widest uppercase text-xs">
          Explorer
        </div>
        <div className="p-2 space-y-1">
          <div className="px-3 py-1.5 hover:bg-white/5 rounded cursor-pointer flex items-center gap-2">
            <span className="text-blue-400">📄</span> app.ts
          </div>
          <div className="px-3 py-1.5 bg-creative-accent/10 text-creative-accent rounded border border-creative-accent/20 cursor-pointer flex items-center gap-2">
            <span className="text-yellow-400">📄</span> database.cs
          </div>
          <div className="px-3 py-1.5 hover:bg-white/5 rounded cursor-pointer flex items-center gap-2">
            <span className="text-gray-400">📄</span> style.css
          </div>
        </div>
      </div>

      {/* Main Editor */}
      <div className="flex-1 flex flex-col bg-[#050505] relative">
        {/* Animated Background particle effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-creative-accent/5 to-transparent pointer-events-none" />
        
        {/* Editor Tabs */}
        <div className="flex bg-[#0a0a0f] border-b border-white/5">
          <div className="px-4 py-2 border-r border-white/5 bg-[#050505] text-sm font-mono border-t-2 border-t-creative-accent text-white">
            database.cs
          </div>
          <div className="px-4 py-2 border-r border-white/5 text-sm font-mono text-white/40 hover:text-white/60 cursor-pointer transition-colors">
            schema.sql
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 relative p-6 overflow-y-auto">
          <button 
            onClick={handleCopy}
            className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white/50 hover:text-white z-10"
          >
            {copied ? <CheckCircle2 size={16} className="text-green-400" /> : <Copy size={16} />}
          </button>
          
          <div className="font-mono text-[15px] leading-8 text-white/80">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
<span className="text-white/30 mr-4 select-none">1</span><span className="text-pink-400">using</span> System.Data;<br/>
<span className="text-white/30 mr-4 select-none">2</span><span className="text-pink-400">using</span> System.Data.SqlClient;<br/>
<span className="text-white/30 mr-4 select-none">3</span><br/>
<span className="text-white/30 mr-4 select-none">4</span><span className="text-pink-400">public class</span> <span className="text-blue-400">DatabaseEngine</span><br/>
<span className="text-white/30 mr-4 select-none">5</span>&#123;<br/>
<span className="text-white/30 mr-4 select-none">6</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">public void</span> ExecuteCreativeQuery()<br/>
<span className="text-white/30 mr-4 select-none">7</span>&nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/>
<span className="text-white/30 mr-4 select-none">8</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white/40">// Implementing Left -> Right Architecture</span><br/>
<span className="text-white/30 mr-4 select-none">9</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">var</span> query = <span className="text-green-400">"EXECUTE Logic.TransformToCreativity"</span>;<br/>
<span className="text-white/30 mr-4 select-none">10</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(<span className="text-green-400">"Building billion-dollar UI..."</span>);<br/>
<span className="text-white/30 mr-4 select-none">11</span>&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
<span className="text-white/30 mr-4 select-none">12</span>&#125;<br/>
            </motion.div>
          </div>
        </div>

        {/* Console / Output Screen */}
        <div className="h-64 border-t border-white/10 bg-[#020202] flex flex-col">
          <div className="flex items-center px-4 py-2 border-b border-white/5 gap-2 text-white/40 font-mono text-xs">
            <Terminal size={14} /> Output Viewer
          </div>
          <div className="p-4 font-mono text-xs text-white/70 space-y-2 flex-1 overflow-y-auto">
            <div className="text-blue-400">&gt; npm run execute:creative</div>
            <div><span className="text-white/40">[0ms]</span> Compiling logic parameters...</div>
            <div><span className="text-white/40">[12ms]</span> Establishing isolated sandbox environment...</div>
            <div><span className="text-white/40">[45ms]</span> Building billion-dollar UI...</div>
            <div className="text-green-400">&gt; SUCCESS: Code execution finalized.</div>
          </div>
        </div>

      </div>
    </div>
  );
}
