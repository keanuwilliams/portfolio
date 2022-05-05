import '../../styling/App.css';

const Project = ({imgURL, githubURL, siteURL, title, description}) => {
  return (
    <div className='project-container'>
      <a href={imgURL}>
        <img className='project-img' src={imgURL} alt={title} />
      </a>
      <a className='project-title' href={githubURL} target='_blank' rel='noreferrer'>
        <p>{title}</p>
      </a>
      <p className='project-description'>{description}</p>
      {siteURL && <a className='project-site' href={siteURL} target='_blank' rel='noreferrer'> View Site</a>}
    </div>
  );
}

export default Project;