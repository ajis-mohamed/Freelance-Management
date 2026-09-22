import React, { useContext } from 'react'
import { FolderKanban, Heart, ShieldCheck, Sparkles } from 'lucide-react'
import { projectContext } from '../App'

function Footer() {
  const {projectList} = useContext(projectContext)

  return (
    <footer className="w-full border-t border-[#2DD4BF]/15 bg-[#061719] px-4 py-8 font-sans text-gray-400 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Brand & Bio */}
          <div className="md:col-span-1">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#14B8A6]/30 bg-[#14B8A6]/10 text-[#14B8A6]">
                <FolderKanban className="h-4 w-4" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                FreelanceFlow
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Single-page glassmorphism workspace for managing projects, client relations, and revenue streams.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#projects" className="hover:text-[#14B8A6] transition-colors">
                  Projects Overview
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-[#14B8A6] transition-colors">
                  Client Roster
                </a>
              </li>
              <li>
                <a href="#payments" className="hover:text-[#14B8A6] transition-colors">
                  Payments &amp; Ledger
                </a>
              </li>
              <li>
                <a href="#settings" className="hover:text-[#14B8A6] transition-colors">
                  Workspace Settings
                </a>
              </li>
            </ul>
          </div>

          {/* Key Metrics Summary */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white">
              Status Summary
            </h4>
            <div className="flex flex-col gap-1.5 text-xs">
              <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1.5">
                <span>Active Clients</span>
                <span className="font-semibold text-white">{projectList.length}</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1.5">
                <span>Total Projects</span>
                <span className="font-semibold text-white">{projectList.length}</span>
              </div>
            </div>
          </div>

          {/* Badge & Security Note */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white">
              System Health
            </h4>
            <div className="flex items-center gap-2 rounded-xl border border-[#10B981]/20 bg-[#10B981]/10 p-3 text-xs text-[#10B981]">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span>Encrypted Local Storage Active</span>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-6 border-t border-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 FreelanceFlow. All rights reserved.</p>
          
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" />
            <span>using Luminous Glass Style</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 rounded-full border border-[#2DD4BF]/20 bg-[#2DD4BF]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#2DD4BF]">
              <Sparkles className="h-3 w-3" /> v1.0.0
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer