import { useEffect } from "react"
import axiosInstance from "./api/axios"
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Register from './pages/Register'

function App() {

  useEffect(()=>{
    axiosInstance.post('/login')
  },[])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App
