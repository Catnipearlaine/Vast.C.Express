import './styles/App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header/Header'
import SideMenu from './components/SideMenu/SideMenu'
import HomePage from './pages/HomePage'
import Project1 from './pages/Project1'
import Project2 from './pages/Project2'
import Project3 from './pages/Project3'
import Project4 from './pages/Project4'
import Project5 from './pages/Project5'

function App() {
  return (
    <Router basename="/Vast.C.Express">
      <ScrollToTop />
      <div className="App">
        <Header />
        <div className="HomepageDesktop">
          <SideMenu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<Project1 />} />
            <Route path="/project1" element={<Project1 />} />
            <Route path="/project2" element={<Project2 />} />
            <Route path="/project3" element={<Project3 />} />
            <Route path="/project4" element={<Project4 />} />
            <Route path="/project5" element={<Project5 />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

function disableRightClick(event) {
  event.preventDefault()
}

document.addEventListener('contextmenu', disableRightClick)

export default App
