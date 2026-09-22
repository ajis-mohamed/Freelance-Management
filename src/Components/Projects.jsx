import React from 'react'
import { FolderKanban, Plus, Edit3, Trash2 } from 'lucide-react'
import { useContext } from 'react'
import { projectContext } from '../App'
import Newproject from './Newproject'
import axios from 'axios'
import Editpopup from './Editpopup'

function Project() {
  const { projectList, setProjectList, popup, setPopup, editpopup, setEditPopup, updateData, setUpdateData } = useContext(projectContext)

  const handleDelete = (id) => {
    async function deleteData() {
      try {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteproject/${id}`);
        setProjectList(response.data);
      } catch (error) {
        console.log("something went wrong", error);
      }
    }

    deleteData();
  }
  console.log("RENDER CHECK - projectList length is:", projectList.length);
  console.log("RENDER CHECK - projectList data is:", projectList);
  return (
    <>
      <section className="w-full bg-[#061719] px-4 py-6 sm:px-6 lg:px-8 font-sans text-gray-100">
        <div className="mx-auto max-w-7xl">

          {/* Section Header */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
              <FolderKanban className="h-6 w-6 text-[#14B8A6]" />
              <span>Projects ({projectList.length})</span>
            </h2>
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-lg bg-[#14B8A6] px-3 py-1.5 text-xs font-semibold text-[#061719] hover:bg-[#2DD4BF] transition-colors shadow-sm"
              onClick={() => setPopup(true)}
            >
              <Plus className="h-3.5 w-3.5 stroke-[2.5]" />
              <span>New Project</span>
            </button>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {
              projectList && projectList.map((item) => (
                // 1. Added the key prop here (critical for React lists)
                <div
                  key={item._id || item.id}
                  className="relative flex flex-col justify-between rounded-xl border border-[#2DD4BF]/15 bg-white/[0.03] p-5 backdrop-blur-md transition-all hover:border-[#2DD4BF]/30 hover:bg-white/[0.05]"
                >
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="rounded-md border border-[#14B8A6]/30 bg-[#14B8A6]/10 px-2.5 py-0.5 text-xs font-semibold text-[#14B8A6]">
                        {item.projectTitle}
                      </span>
                      <span className="rounded-full border border-[#14B8A6]/30 bg-[#14B8A6]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#14B8A6]">
                        {item.status}
                      </span>
                    </div>

                    <h3 className="mb-1 text-lg font-bold text-white tracking-tight">
                      {item.projectTitle}
                    </h3>

                    <p className="mb-4 text-xs text-gray-400">
                      Client: <span className="font-medium text-gray-200">{item.clientName}</span>
                    </p>
                  </div>

                  <div>
                    <div className="mb-4">
                      <div className="mb-1.5 flex justify-between text-xs text-gray-400">
                        <span>Progress</span>
                        <span className="font-semibold text-gray-200">{item.progress}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#14B8A6] to-[#10B981] transition-all duration-300"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-3 text-xs">
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">Budget</p>
                        <p className="text-sm font-bold text-white">₹{item.budget}</p>
                      </div>

                      <div className="flex gap-1">
                        <button
                          type="button"
                          className="rounded-lg border border-white/10 bg-white/5 p-2 text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                          onClick={() => {
                            setEditPopup(true)
                            setUpdateData(item)
                          }}
                        >
                          <Edit3 className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          className="rounded-lg border border-red-500/20 bg-red-500/10 p-2 text-red-400 hover:bg-red-500/20 transition-colors cursor-pointer"
                          // 2. Fallback to _id if item.id is undefined from MongoDB
                          onClick={() => handleDelete(item._id || item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <div>
        {
          popup ? <Newproject setPopup={setPopup} /> : ""
        }
      </div>
      <div>
        {
          editpopup ? <Editpopup setEditPopup={setEditPopup} updateData={updateData} /> : ""
        }
      </div>
    </>
  )
}

export default Project