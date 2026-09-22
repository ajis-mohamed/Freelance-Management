import React, { useContext, useState , useEffect} from 'react'
import { projectContext } from '../App'

function Details() {
  const { projectList } = useContext(projectContext)

  const [completed, setCompleted] = useState(0)
  useEffect(() => {
    const sum = projectList.reduce((acc, item) => {
      if (Number(item.progress) === 100) {
        acc++
      }
      return acc
    }, 0)

    setCompleted(sum)
  }, [projectList])

  return (
    <section className="w-full bg-[#061719] px-4 py-3 sm:px-6 lg:px-8 font-['Inter',sans-serif]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* Card 1: Total Projects */}
          <div className="relative overflow-hidden rounded-xl border border-[#2DD4BF]/15 bg-white/[0.03] p-5 backdrop-blur-md transition-all hover:border-[#2DD4BF]/30 hover:bg-white/[0.05]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
                Total Projects
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2DD4BF]/15 bg-white/5">
                <svg className="h-5 w-5 text-[#14B8A6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 6 9-6M3 7l9-4 9 4" />
                </svg>
              </div>
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {projectList.length}
              </span>
              <span className="rounded-full border border-[#14B8A6]/20 bg-[#14B8A6]/10 px-2 py-0.5 text-[10px] font-medium text-[#14B8A6]">
                +2 this mo
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[80%] rounded-full bg-[#14B8A6]" />
              </div>
            </div>
          </div>

          {/* Card 2: Active Projects */}
          <div className="relative overflow-hidden rounded-xl border border-[#2DD4BF]/15 bg-white/[0.03] p-5 backdrop-blur-md transition-all hover:border-[#2DD4BF]/30 hover:bg-white/[0.05]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
                Active Projects
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2DD4BF]/15 bg-white/5">
                <svg className="h-5 w-5 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {projectList.length}
              </span>
              <span className="rounded-full border border-[#10B981]/20 bg-[#10B981]/10 px-2 py-0.5 text-[10px] font-medium text-[#10B981]">
                4 on schedule
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[50%] rounded-full bg-[#10B981]" />
              </div>
            </div>
          </div>

          {/* Card 3: Completed */}
          <div className="relative overflow-hidden rounded-xl border border-[#2DD4BF]/15 bg-white/[0.03] p-5 backdrop-blur-md transition-all hover:border-[#2DD4BF]/30 hover:bg-white/[0.05]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
                Completed
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2DD4BF]/15 bg-white/5">
                <svg className="h-5 w-5 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {completed}
              </span>
              <span className="rounded-full border border-[#2DD4BF]/20 bg-[#2DD4BF]/10 px-2 py-0.5 text-[10px] font-medium text-[#2DD4BF]">
                100% accepted
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[100%] rounded-full bg-[#2DD4BF]" />
              </div>
            </div>
          </div>

          {/* Card 4: Pending Payments */}
          <div className="relative overflow-hidden rounded-xl border border-[#2DD4BF]/15 bg-[#061719]/90 backdrop-blur-md p-5 transition-all hover:border-[#2DD4BF]/30 hover:bg-white/[0.05]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
                Pending Payments
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2DD4BF]/15 bg-white/5">
                <svg className="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                ₹28,000
              </span>
              <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 text-[10px] font-medium text-amber-400">
                2 invoices open
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[65%] rounded-full bg-amber-400" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Details