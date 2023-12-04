import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Register from './pages/Register'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App
