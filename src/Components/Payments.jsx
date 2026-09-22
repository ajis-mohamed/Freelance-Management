import React, { useContext, useEffect, useState } from 'react'
import { CreditCard, DollarSign, Clock, Briefcase } from 'lucide-react'
import { projectContext } from '../App'

function Payments() {
  const { projectList } = useContext(projectContext)
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculatedTotal = projectList.reduce((sum, item) => sum + Number(item.budget), 0)
    setTotal(calculatedTotal)
  }, [projectList])

  return (
    <section className="w-full bg-[#061719] px-4 py-6 sm:px-6 lg:px-8 font-sans text-gray-100">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
            <CreditCard className="h-6 w-6 text-[#10B981]" />
            <span>Payments &amp; Invoices</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">

          {/* Top 2 Stat Summary Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            {/* Card 1: Total Earnings */}
            <div className="relative flex items-center justify-between rounded-xl border border-[#2DD4BF]/15 bg-white/[0.03] p-5 backdrop-blur-md transition-all hover:border-[#2DD4BF]/30 hover:bg-white/[0.05]">
              <div>
                <p className="mb-1 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                  Total Earnings
                </p>
                <p className="text-2xl font-extrabold tracking-tight text-[#10B981] sm:text-3xl">
                  {total}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#10B981]/20 bg-[#10B981]/10 text-[#10B981]">
                <DollarSign className="h-6 w-6" />
              </div>
            </div>

            {/* Card 2: Pending Invoices */}
            <div className="relative flex items-center justify-between rounded-xl border border-[#2DD4BF]/15 bg-white/[0.03] p-5 backdrop-blur-md transition-all hover:border-[#2DD4BF]/30 hover:bg-white/[0.05]">
              <div>
                <p className="mb-1 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                  Pending Invoices
                </p>
                <p className="text-2xl font-extrabold tracking-tight text-amber-400 sm:text-3xl">
                  ₹28,000
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-amber-400">
                <Clock className="h-6 w-6" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Payments