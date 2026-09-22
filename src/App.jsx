import { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Details from './Components/Details'
import Project from './Components/Projects'
import Payments from './Components/Payments'
import Footer from './Components/Footer'
import Newproject from './Components/Newproject'

export const projectContext = createContext();

function App() {
  const [projectList, setProjectList] = useState([]);
  const [popup, setPopup] = useState(false)
  const [editpopup, setEditPopup] = useState(false)
  const [updateData, setUpdateData] = useState(null)
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true) // Start loading
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/projects`)
        setProjectList(response.data)
      } catch (error) {
        console.log("Something went wrong", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, [])

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#0b1315', color: '#fff' }}>
        <h2>Loading Workspace...</h2>
      </div>
    )
  }

  return (
    <projectContext.Provider value={{ projectList, setProjectList, popup, setPopup, editpopup, setEditPopup, updateData, setUpdateData, loading }}>
      <Navbar />
      <Hero />
      <Details />
      <Project />
      <Payments />
      <Footer />
    </projectContext.Provider>
  )
}

export default App