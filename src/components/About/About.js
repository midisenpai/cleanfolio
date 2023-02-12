import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
// import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
// import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
// import TwitterIcon from '@mui/icons-material/Twitter';
import TwitterIcon from '@material-ui/icons/Twitter';

import { about } from '../../portfolio'
import './About.css'

// {resume && (
//   <a href={resume}>
//     <span type='button' className='btn btn--outline'>
//       Resume
//     </span>
//   </a>
// )}

// {social.github && (
//  <a
//    href={resume}
//    target="_blank" rel="noopener noreferrer"
//    aria-label='resume'
//    className='link link--icon'
//  >
//    <DescriptionOutlinedIcon />
//  </a>
// )}



const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>An {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>




        {social && (
          <>
          {social.linkedin && (
              <a
                href={social.linkedin}
	        target="_blank" rel="noopener noreferrer"
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}

          {social.github && (
		 <a
               href={social.github}
	       target="_blank" rel="noopener noreferrer"
               aria-label='github'
               className='link link--icon'
		 >
                 <GitHubIcon />
		 </a>
             )}

           {social.youtube && (
		 <a
               href={social.youtube}
	       target="_blank" rel="noopener noreferrer"
               aria-label='youtube'
               className='link link--icon'
		 >
                 <SubscriptionsOutlinedIcon />
		 </a>
             )}


           {social.twitter && (
		 <a
               href={social.twitter}
	       target="_blank" rel="noopener noreferrer"
               aria-label='twitter'
               className='link link--icon'
		 >
                 <TwitterIcon />
		 </a>
             )}

          </>
        )}
      </div>
    </div>
  )
}

export default About
