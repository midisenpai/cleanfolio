/* eslint-disable */
import React from 'react'

import BlogPost from '../../components/BlogPost/BlogPost'

const BlogPage = (props) => (
    <section id='Blog' className='section blogposts'>
      <BlogPost md_url={props.md_url} />
    </section>
)

export default BlogPage
