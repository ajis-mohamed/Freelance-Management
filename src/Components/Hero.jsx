import React from 'react'
import Newproject from './Newproject'
import { projectContext } from '../App'
import { useContext } from 'react'


function Hero() {
  const { popup, setPopup } = useContext(projectContext)
  return (
    <>
      <section className="w-full bg-[#061719] px-4 py-6 sm:px-6 lg:px-8 font-sans">
        <div className="mx-auto max-w-7xl">
          {/* Glassmorphic Container Card */}
          <div className="relative overflow-hidden rounded-2xl border border-[#2DD4BF]/15 bg-gradient-to-r from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-md sm:p-8">

            {/* Subtle Ambient Glow Effect */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#14B8A6]/10 blur-3xl" />

            <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">

              {/* Left Content Area */}
              <div className="flex flex-col items-start gap-2 max-w-2xl">

                {/* Top Tag/Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#2DD4BF]/20 bg-[#2DD4BF]/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-[#14B8A6] uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  Live Overview &amp; Analytics
                </div>

                {/* Main Headline */}
                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Welcome back, <span className="text-[#14B8A6]">Aziz</span>
                </h1>

                {/* Subtitle / Context Text */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  You have <strong className="font-semibold text-gray-200">5 active deliverables</strong> across 3 clients this month. Your next milestone is due in <span className="text-[#14B8A6] font-medium">3 days</span>.
                </p>
              </div>

              {/* Right Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                {/* Primary CTA */}
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-xl bg-[#14B8A6] px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#061719] hover:bg-[#2DD4BF] transition-all shadow-sm shadow-[#14B8A6]/20"
                  onClick={() => setPopup(true)}
                >
                  <svg className="h-4 w-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                  <span>Add Project</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
      <div>
        {
          popup ? <Newproject setPopup={setPopup} /> : ""
        }
      </div>
    </>
  )
}

export default Hero