/* eslint-disable */
import React from 'react'

import ProjectPost from '../../components/ProjectPost/ProjectPost'

const ProjectPage = (props) => (
    <section id='project' className='section projectposts'>
      <ProjectPost md_url={props.md_url} />
    </section>
)

export default ProjectPage
