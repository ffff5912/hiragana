import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GridPage from './pages/GridPage'
import PracticePage from './pages/PracticePage'
import ProgressPage from './pages/ProgressPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/grid/:type" element={<GridPage />} />
      <Route path="/practice/:type/:char" element={<PracticePage />} />
      <Route path="/progress" element={<ProgressPage />} />
    </Routes>
  )
}

export default App
