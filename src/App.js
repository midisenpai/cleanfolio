import ReactGA from "react-ga4"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'

import Header from './components/Header/Header'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'

// import About from './components/About/About'
// import Contact from './components/Contact/Contact'
// import Projects from './components/Projects/Projects'
// import Skills from './components/Skills/Skills'


import HomePage from './pages/home/Home'
import BlogPage from './pages/blog/Blog'
import ProjectsPage from './pages/projects/Projects'

import './App.css'

ReactGA.initialize("G-H9N6ZLJ1PK");
ReactGA.send("pageview");

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
        <div id='top' className={`${themeName} app`}>
          <Header />

          <main>
            <Router>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/blog' element={<BlogPage />} />
                <Route path='/projects' element={<ProjectsPage />} />
              </Routes>
            </Router>
          </main>



          <ScrollToTop />
          <Footer />
        </div>
  )
}

      // <main>
      // <About />
      // <Contact />
      // <Projects />
      // <Skills />
      // </main>




export default App
