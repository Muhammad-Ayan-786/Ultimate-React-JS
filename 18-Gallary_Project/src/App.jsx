import { useEffect, useState } from "react"
import axios from "axios"
import Navbar from "./components/Header/Navbar"
import Main from "./components/main/Main"

const App = () => {

  const [contentObj, setContentObj] = useState([])
  const [page, setPage] = useState(2)

  const loadImages = async () => {
    const { data } = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
    setContentObj(data);
  }

  useEffect(() => {
    loadImages();
  }, [page])

  return (
    <div className='w-full h-screen flex flex-col'>

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN GALLARY */}
      <Main contentObj={contentObj} setContentObj={setContentObj} page={page} setPage={setPage} />

    </div>
  )
}

export default App