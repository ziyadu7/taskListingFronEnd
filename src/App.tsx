import { Route, Routes, BrowserRouter as Router, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Register from './pages/Register'
import Notes from './pages/Notes'

function App() {

  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/signIn')
    }
  })
  return (
    <Router>
      <Routes>
        <Route path="/signIn" element={<Register />} />
        <Route path="/" element={<Notes/>} />
      </Routes>
    </Router>
  )
}

export default App
