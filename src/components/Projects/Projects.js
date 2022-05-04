import Project from './Project';
import json from './projects.json';
import '../../styling/App.css';

const Projects = () => {
  return (
    <section className='subcontainer' id='recent-projects'>
      <a className='subtitle' href='#recent-projects'>
        <h2>Recent Projects</h2>
      </a>
      <div id='projects'>
        {Object.keys(json).map((e, i) => 
          <Project key={i} 
            title={json[e].title} description={json[e].description} 
            githubURL={json[e].githubURL}
            imgURL={process.env.PUBLIC_URL+json[e].imgURL} 
          />
        )}
      </div>
    </section>
  );
}

export default Projects;