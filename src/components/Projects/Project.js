import '../../styling/App.css';

const Project = ({imgURL, githubURL, title, description}) => {
  return (
    <div className='project-container'>
      <img className='project-img' src={imgURL} alt={title} />
      <a className='project-title' href={githubURL} target='_blank' rel='noreferrer'>
        <p>{title}</p>
      </a>
      <p className='project-description'>{description}</p>
    </div>
  );
}

export default Project;