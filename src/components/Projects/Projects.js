import Project from './Project';
import json from './projects.json';
import '../../styling/App.css';

const Projects = () => {
  return (
    <section id='projects-container'>
      <h2>Recent Projects</h2>
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