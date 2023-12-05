import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom'
import Register from './pages/Register'
import Notes from './pages/Notes'

function App() {

  const token = localStorage.getItem('token')

  return (
    <Router>
      <Routes>
        <Route path="/signIn" element={token !== 'undefined' ? <Navigate to={'/'} /> : <Register />} />
        <Route path="/" element={token !== 'undefined' ? <Notes /> : <Navigate to={'/signIn'} />} />
      </Routes>
    </Router>
  )
}

export default App
