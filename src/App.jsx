import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import OurServices from './pages/OurServices'
import BookConsultation from './pages/BookConsultation'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="our-services" element={<OurServices />} />
          <Route path="book-a-consultation" element={<BookConsultation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
