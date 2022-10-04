import React from 'react'

import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'

import Projects from '../../components/Projects/Projects'
import BlogListPage from '../blog/BlogList'

const HomePage = () => (
    <div id='home-page'>
      <About />
      <Projects />
      <BlogListPage />
      <Contact />
    </div>
)

export default HomePage

