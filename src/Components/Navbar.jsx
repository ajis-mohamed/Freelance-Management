import React, { useContext, useState } from 'react'
import Newproject from './Newproject'
import { projectContext } from '../App'

function Navbar() {
    const { popup, setPopup } = useContext(projectContext)
    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-[#2DD4BF]/20 bg-[#061719]/80 backdrop-blur-xl font-sans">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">

                    {/* Left Section: Brand Logo & Navigation Links */}
                    <div className="flex items-center gap-6 md:gap-8">

                        {/* Brand Logo */}
                        <div className="flex items-center gap-2.5 shrink-0 select-none group cursor-pointer">
                            <div className="flex flex-col">
                                <span className=" text-3xl sm:text-xl font-semibold tracking-tight text-white flex items-center gap-1 font-['Playfair_Display',serif]">
                                    Go<span className="text-[#2DD4BF] font-normal">Launch</span>
                                </span>
                                <span className="text-[9px] font-bold tracking-[0.2em] text-[#ffffff]/90 uppercase -mt-0.5 font-['Plus_Jakarta_Sans',sans-serif]">
                                    Workspace
                                </span>
                            </div>
                        </div>
                    </div>


                    {/* Right Section: Search Bar, Actions, Profile */}
                    <div className="flex items-center gap-3 sm:gap-4">

                        {/* Glass Search Input */}
                        <div className="hidden lg:flex items-center gap-2.5 rounded-xl border border-[#2DD4BF]/15 bg-white/[0.03] px-3.5 py-2 text-gray-400 focus-within:border-[#14B8A6] focus-within:bg-white/[0.06] focus-within:ring-1 focus-within:ring-[#14B8A6]/50 transition-all">
                            <svg className="h-4 w-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search projects, clients, or payments..."
                                className="w-56 xl:w-80 bg-transparent text-xs text-gray-100 placeholder-gray-500 focus:outline-none"
                            />
                            <span className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] font-mono text-gray-400">
                                ⌘K
                            </span>
                        </div>

                        {/* Primary CTA Button */}
                        <button
                            type="button"
                            className="group relative flex items-center gap-1.5 overflow-hidden rounded-xl bg-gradient-to-r from-[#14B8A6] to-[#10B981] px-3.5 py-2 text-xs font-bold text-[#061719] shadow-md shadow-[#14B8A6]/20 hover:shadow-lg hover:shadow-[#14B8A6]/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                            onClick={() => setPopup(true)}
                        >
                            <svg className="h-4 w-4 stroke-[2.5] transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                            <span className="hidden sm:inline">New Project</span>
                            <span className="sm:hidden">New</span>
                        </button>

                        {/* User Profile Badge */}
                        <div className="flex items-center gap-3 border-l border-white/10 pl-3 sm:pl-4">
                            <div className="relative cursor-pointer">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2DD4BF]/40 bg-gradient-to-tr from-[#14B8A6]/20 to-[#2DD4BF]/10 text-xs font-bold text-[#2DD4BF] shadow-inner">
                                    AM
                                </div>
                                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#061719] bg-[#10B981]" />
                            </div>

                            <div className="hidden xl:flex flex-col">
                                <span className="text-xs font-bold leading-tight text-white">
                                    Aziz Mohamed
                                </span>
                                <span className="text-[10px] font-medium text-gray-400">
                                    Freelance Pro
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
            <div>
                {
                    popup ? <Newproject setPopup={setPopup} /> : ""
                }
            </div>
        </>

    )
}

export default Navbar