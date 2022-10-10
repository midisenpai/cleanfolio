import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

// <li key={uniqid()} className='skills__list-item btn btn--plain'>

const Skills = () => {
  if (!skills.length) return null


  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Languages</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
