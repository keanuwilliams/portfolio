import '../../styling/App.css';

const Project = ({imgURL, title, description}) => {
  return (
    <div className='project-container'>
      <img className='project-img' src={imgURL} alt={title} />
      <p className='project-title'>{title}</p>
      <p className='project-description'>{description}</p>
    </div>
  );
}

export default Project;