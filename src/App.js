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

// Blog posts
import TestPost from './pages/blog/posts/20220928/TestPost'
// import JekyllRevampPost from './pages/blog/posts/2018-10-20-jekyll-revamp/JekyllRevampPost'
// import JekyllTutorialPost from './pages/blog/posts/2018-10-23-jekyll-tutorial/JekyllTutorialPost'

// import TestPost from './pages/blog/posts/20220928/TestPost'
// import TestPost from './pages/blog/posts/20220928/TestPost'
// import TestPost from './pages/blog/posts/20220928/TestPost'
// import TestPost from './pages/blog/posts/20220928/TestPost'

import { blogposts } from './portfolio'


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

                {/* Blog Posts */}
                <Route path='/blog/test' element={<TestPost />} />

                {blogposts.map((blog) => (
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

      // <main>
      // <About />
      // <Contact />
      // <Projects />
      // <Skills />
      // </main>

      // <Route path='/blog/jekyll-revamp' element={<JekyllRevampPost />} />
      // <Route path='/blog/jekyll-tutorial' element={<JekyllTutorialPost />} />
// <Route path='/blog/jekyll-tutorial' element={<BlogPage md_url="/blogs/2018-10-23-jekyll-tutorial/index.md" />} />

// <Route path={blogposts[0].permalink} element={<BlogPage md_url={blogposts[0].md_url} />} />
// <Route path={blogposts[1].permalink} element={<BlogPage md_url={blogposts[1].md_url} />} />
// <Route path={blogposts[2].permalink} element={<BlogPage md_url={blogposts[2].md_url} />} />
// <Route path={blogposts[3].permalink} element={<BlogPage md_url={blogposts[3].md_url} />} />
// <Route path={blogposts[4].permalink} element={<BlogPage md_url={blogposts[4].md_url} />} />


export default App
