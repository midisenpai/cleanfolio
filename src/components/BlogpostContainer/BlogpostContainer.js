import uniqid from 'uniqid'
// import GitHubIcon from '@material-ui/icons/GitHub'
// import LaunchIcon from '@material-ui/icons/Launch'
// import './ProjectContainer.css'

const BlogpostContainer = ({ post }) => (
  <div className='blogpost'>
    <h3><a href={post.permalink}>{post.title}</a></h3>

    <p className='project__description'>{post.body}</p>
    {post.stack && (
      <ul className='project__stack'>
        {post.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
)

export default BlogpostContainer
