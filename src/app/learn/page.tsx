"use client";

import { motion } from "framer-motion";
import { Database, Server, Component, Code, Play } from "lucide-react";
import { useState } from "react";

export default function LearnPage() {
  const [activeTab, setActiveTab] = useState("schema");

  return (
    <div className="split-container min-h-[calc(100vh-64px)]">
      
      {/* LEFT ZONE: THEORY & ARCHITECTURE */}
      <div className="zone-logic overflow-y-auto pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl mx-auto w-full space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">1. ADO.NET Architecture</h1>
            <p className="text-white/60">
              Understanding the foundational blocks of database connectivity in the .NET ecosystem.
              We split this into the Connected and Disconnected models.
            </p>
          </div>

          {/* Interactive Concept Map */}
          <div className="glass-card bg-[#0A0A0A]">
            <h3 className="text-sm font-mono text-white/40 mb-6 uppercase tracking-wider">Concept.Map</h3>
            
            <div className="space-y-6">
              {/* Connected Node */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-xl border border-logic-accent/20 bg-logic-accent/5 cursor-pointer relative group"
              >
                <div className="absolute inset-0 bg-logic-accent/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl blur-md" />
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-logic-accent/20 flex items-center justify-center text-logic-accent">
                    <Server size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Connected Architecture</h4>
                    <p className="text-sm text-white/50 mt-1">Direct pipeline to the database. Uses SqlConnection, SqlCommand, SqlDataReader.</p>
                  </div>
                </div>
              </motion.div>

              <div className="flex justify-center">
                <div className="w-[1px] h-8 bg-white/20" />
              </div>

              {/* Disconnected Node */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:border-white/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60">
                    <Database size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Disconnected Architecture</h4>
                    <p className="text-sm text-white/50 mt-1">In-memory data representation. Uses DataSet, DataTable, DataAdapter.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-logic-accent/5 border border-logic-accent/20">
             <h4 className="text-logic-accent font-semibold mb-2 flex items-center gap-2"><Component size={18}/> Real-World Metaphor</h4>
             <p className="text-sm text-white/70 leading-relaxed">
               Think of the library. Connected is asking the librarian a question and waiting for the answer. Disconnected is the librarian photocopying the entire book section and giving it to you to take home.
             </p>
          </div>

        </motion.div>
      </div>


      {/* RIGHT ZONE: PLAYGROUND & EXECUTION */}
      <div className="zone-creative border-l border-white/5 bg-[#05020A]">
        
        <div className="w-full max-w-2xl mx-auto h-[700px] flex flex-col glass-card p-0 overflow-hidden border-creative-accent/20">
          
          {/* IDE Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex gap-4 text-xs font-mono text-white/50">
              <button 
                onClick={() => setActiveTab('schema')}
                className={`transition-colors ${activeTab === 'schema' ? 'text-creative-accent' : 'hover:text-white'}`}
              >
                setup.sql
              </button>
              <button 
                onClick={() => setActiveTab('code')}
                className={`transition-colors ${activeTab === 'code' ? 'text-creative-accent' : 'hover:text-white'}`}
              >
                Program.cs
              </button>
            </div>
            <button className="flex items-center gap-2 text-xs font-bold bg-creative-accent text-white px-3 py-1.5 rounded hover:bg-creative-accent/80 transition-colors">
              <Play size={12} /> RUN
            </button>
          </div>

          {/* IDE Body */}
          <div className="flex-1 p-6 font-mono text-sm overflow-y-auto bg-[#0a0a0f]">
            {activeTab === 'schema' ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <pre className="text-white/80">
<span className="text-creative-accent">CREATE TABLE</span> Users (<br/>
&nbsp;&nbsp;Id <span className="text-pink-400">INT PRIMARY KEY IDENTITY(1,1)</span>,<br/>
&nbsp;&nbsp;Name <span className="text-pink-400">NVARCHAR(100)</span>,<br/>
&nbsp;&nbsp;Role <span className="text-pink-400">NVARCHAR(50)</span><br/>
);<br/><br/>
<span className="text-creative-accent">INSERT INTO</span> Users (Name, Role)<br/>
<span className="text-creative-accent">VALUES</span> <br/>
&nbsp;&nbsp;(<span className="text-green-400">'Alice Programmer'</span>, <span className="text-green-400">'Admin'</span>),<br/>
&nbsp;&nbsp;(<span className="text-green-400">'Bob Designer'</span>, <span className="text-green-400">'User'</span>);
                </pre>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <pre className="text-white/80 leading-relaxed">
<span className="text-pink-400">using</span> System;<br/>
<span className="text-pink-400">using</span> System.Data.SqlClient;<br/><br/>

<span className="text-pink-400">class</span> <span className="text-blue-400">Program</span><br/>
&#123;<br/>
&nbsp;&nbsp;<span className="text-pink-400">static void</span> Main()<br/>
&nbsp;&nbsp;&#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white/40">// 1. Establish the connection</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">string</span> connStr = <span className="text-green-400">"Server=.;Database=AppDB;"</span>;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">using</span> (SqlConnection conn = <span className="text-creative-accent">new</span> SqlConnection(connStr))<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;conn.Open();<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SqlCommand cmd = <span className="text-creative-accent">new</span> SqlCommand(<span className="text-green-400">"SELECT * FROM Users"</span>, conn);<br/><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white/40">// 2. Execute via Connected Architecture</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SqlDataReader reader = cmd.ExecuteReader();<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">while</span> (reader.Read())<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(reader[<span className="text-green-400">"Name"</span>]);<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
&nbsp;&nbsp;&#125;<br/>
&#125;
                </pre>
              </motion.div>
            )}
          </div>

          {/* Output Console */}
          <div className="h-48 border-t border-white/10 bg-black/60 p-4 font-mono text-xs overflow-y-auto">
            <div className="text-white/30 flex items-center gap-2 mb-2">
              <Terminal size={12}/> Console Output
            </div>
            <div className="text-white/70">
              $ compiling...<br/>
              $ build succeeded.<br/>
              &gt; Alice Programmer<br/>
              &gt; Bob Designer<br/>
              <span className="text-green-400 mt-2 block">Connection successfully closed automatically by using statement.</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
