import ReactGA from "react-ga4"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'

import Header from './components/Header/Header'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'

import HomePage from './pages/home/Home'
import BlogPage from './pages/blog/Blog'
import BlogListPage from './pages/blog/BlogList'
import ProjectsPage from './pages/projects/Projects'
import ProjectPage from './pages/projects/Project'

// Blog posts
import { blogposts, projects } from './portfolio'

// Projects
// import { ResourceManager } from './projects/Resource-Management-Simulator/src/ResourceManager'
// <Route path='/projects/Resource-Management-Simulator' element={<ResourceManager />} />

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
                <Route path='/blog' element={<BlogListPage />} />
                <Route path='/projects' element={<ProjectsPage />} />

                {/* Projects */}
                {projects.map((project) => (
                  <Route path={project.permalink} element={<ProjectPage md_url={project.md_url} />} />
		))}

                {/* Blog Posts */}
                {blogposts.reverse().map((blog) => (
                  <Route path={blog.permalink} element={<BlogPage md_url={blog.md_url} />} />
		))}

              </Routes>
            </Router>
          </main>

          <ScrollToTop />
          <Footer />
        </div>
  )
}

export default App
