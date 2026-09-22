import React, { useState, useEffect, useContext } from 'react'
import { projectContext } from '../App'
import axios from 'axios'

function Editpopup({ setEditPopup, updateData }) {

    // Access global project list and its updater function from Context
    const { projectList, setProjectList } = useContext(projectContext)

    // 1. Create a simple state to hold the form input values
    const [projectTitle, setProjectTitle] = useState("")
    const [clientName, setClientName] = useState("")
    const [category, setCategory] = useState("Web Development")
    const [budget, setBudget] = useState("")
    const [deadline, setDeadline] = useState("")
    const [status, setStatus] = useState("In Progress")
    const [paymentStatus, setPaymentStatus] = useState("Unpaid")
    const [progress, setProgress] = useState(0)

    // 2. When the popup opens with project data, fill the inputs automatically
    useEffect(() => {
        if (updateData) {
            setProjectTitle(updateData.projectTitle || "")
            setClientName(updateData.clientName || "")
            setCategory(updateData.category || "Web Development")
            setBudget(updateData.budget || "")
            setDeadline(updateData.deadline ? updateData.deadline.split('T')[0] : "")
            setStatus(updateData.status || "In Progress")
            setPaymentStatus(updateData.paymentStatus || "Unpaid")
            setProgress(updateData.progress || 0)
        }
    }, [updateData])

    // 3. Handle updating the data when the form is submitted
    const handleUpdate = async (e) => {
        e.preventDefault()

        // Get the ID of the project we are editing
        const projectId = updateData.id

        try {
            // Send the updated data to the backend via Axios PUT request
            const response = await axios.put(`${import.meta.env.VITE_API_URL}/updateproject/${projectId}`, {
                projectTitle,
                clientName,
                category,
                budget: Number(budget),
                deadline,
                status,
                paymentStatus,
                progress: Number(progress)
            })

            // Update the local project list UI with the modified project data
            const updatedList = projectList.map((project) => {
                if (project.id === projectId || project._id === projectId) {
                    return response.data.updatedProject || response.data; // Use backend response
                } else {
                    return project; // Keep other projects unchanged
                }
            })

            setProjectList(updatedList)
            setEditPopup(false) // Close the popup window

        } catch (error) {
            console.log("Something went wrong while updating", error)
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#061719]/20 p-4 backdrop-blur-xl font-sans transition-all">
            <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-[#2DD4BF]/20 bg-[#061719]/95 shadow-2xl shadow-[#14B8A6]/10 backdrop-blur-2xl">

                {/* HEADER */}
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                    <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                        <span>Edit Document</span>
                        <span className="font-mono text-xs font-normal text-[#14B8A6] bg-[#14B8A6]/10 border border-[#14B8A6]/20 px-2 py-0.5 rounded-md">
                            updateOne
                        </span>
                    </h2>
                    <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                        onClick={() => setEditPopup(false)}
                    >
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* FORM BODY */}
                <form onSubmit={handleUpdate}>
                    <div className="space-y-4 p-6">

                        {/* Project Title */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                                Project Title
                            </label>
                            <input
                                type="text"
                                value={projectTitle}
                                onChange={(e) => setProjectTitle(e.target.value)}
                                placeholder="e.g. Restaurant Website"
                                className="h-10 w-full rounded-xl border border-[#2DD4BF]/15 bg-white/[0.03] px-3.5 text-sm font-medium text-white placeholder-gray-500 outline-none focus:border-[#14B8A6] focus:bg-white/[0.06] focus:ring-1 focus:ring-[#14B8A6]/50 transition-all"
                                required
                            />
                        </div>

                        {/* Client Name & Category */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                                    Client Name
                                </label>
                                <input
                                    type="text"
                                    value={clientName}
                                    onChange={(e) => setClientName(e.target.value)}
                                    placeholder="Client Name"
                                    className="h-10 w-full rounded-xl border border-[#2DD4BF]/15 bg-white/[0.03] px-3.5 text-sm font-medium text-white placeholder-gray-500 outline-none focus:border-[#14B8A6] focus:bg-white/[0.06] focus:ring-1 focus:ring-[#14B8A6]/50 transition-all"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                                    Category
                                </label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="h-10 w-full rounded-xl border border-[#2DD4BF]/15 bg-[#061719] px-3 text-sm font-medium text-gray-200 outline-none focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6]/50 transition-all cursor-pointer"
                                >
                                    <option className="bg-[#061719] text-white" value="Web Development">Web Development</option>
                                    <option className="bg-[#061719] text-white" value="Mobile App">Mobile App</option>
                                    <option className="bg-[#061719] text-white" value="UI/UX Design">UI/UX Design</option>
                                    <option className="bg-[#061719] text-white" value="Digital Marketing">Digital Marketing</option>
                                </select>
                            </div>
                        </div>

                        {/* Budget & Deadline */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                                    Budget (₹)
                                </label>
                                <input
                                    type="number"
                                    value={budget}
                                    onChange={(e) => setBudget(e.target.value)}
                                    placeholder="25000"
                                    className="h-10 w-full rounded-xl border border-[#2DD4BF]/15 bg-white/[0.03] px-3.5 text-sm font-medium text-white placeholder-gray-500 outline-none focus:border-[#14B8A6] focus:bg-white/[0.06] focus:ring-1 focus:ring-[#14B8A6]/50 transition-all"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                                    Deadline
                                </label>
                                <input
                                    type="date"
                                    value={deadline}
                                    onChange={(e) => setDeadline(e.target.value)}
                                    className="h-10 w-full rounded-xl border border-[#2DD4BF]/15 bg-white/[0.03] px-3.5 text-sm font-medium text-white [color-scheme:dark] outline-none focus:border-[#14B8A6] focus:bg-white/[0.06] focus:ring-1 focus:ring-[#14B8A6]/50 transition-all cursor-pointer"
                                />
                            </div>
                        </div>

                        {/* Status & Payment Status */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                                    Status
                                </label>
                                <select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="h-10 w-full rounded-xl border border-[#2DD4BF]/15 bg-[#061719] px-3 text-sm font-medium text-gray-200 outline-none focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6]/50 transition-all cursor-pointer"
                                >
                                    <option className="bg-[#061719] text-white" value="In Progress">In Progress</option>
                                    <option className="bg-[#061719] text-white" value="Pending">Pending</option>
                                    <option className="bg-[#061719] text-white" value="Completed">Completed</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                                    Payment Status
                                </label>
                                <select
                                    value={paymentStatus}
                                    onChange={(e) => setPaymentStatus(e.target.value)}
                                    className="h-10 w-full rounded-xl border border-[#2DD4BF]/15 bg-[#061719] px-3 text-sm font-medium text-gray-200 outline-none focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6]/50 transition-all cursor-pointer"
                                >
                                    <option className="bg-[#061719] text-white" value="Unpaid">Unpaid</option>
                                    <option className="bg-[#061719] text-white" value="Paid">Paid</option>
                                    <option className="bg-[#061719] text-white" value="Partially Paid">Partially Paid</option>
                                </select>
                            </div>
                        </div>

                        {/* Progress Slider */}
                        <div className="flex flex-col gap-1.5 pt-1">
                            <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-gray-300">
                                <span>Progress</span>
                                <span className="text-[#2DD4BF]">{progress}%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={progress}
                                onChange={(e) => setProgress(e.target.value)}
                                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/10 accent-[#14B8A6]"
                            />
                        </div>

                    </div>

                    {/* FOOTER */}
                    <div className="flex items-center justify-end gap-3 border-t border-white/10 bg-white/[0.02] px-6 py-4">
                        <button
                            type="button"
                            className="h-10 rounded-xl border border-white/10 bg-white/5 px-5 text-xs font-semibold text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                            onClick={() => setEditPopup(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="h-10 rounded-xl bg-gradient-to-r from-[#14B8A6] to-[#10B981] px-5 text-xs font-bold text-[#061719] shadow-md shadow-[#14B8A6]/20 hover:brightness-110 transition-all cursor-pointer"
                        >
                            Update Document
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Editpopup