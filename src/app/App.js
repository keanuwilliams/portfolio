import Header from '../components/Header';
import Projects from '../components/Projects';
import '../styling/App.css';

function App() {
  return (
    <div>
      <div id='bg'></div>
      <div id='overlay'></div>
      <Header />
      <span id='projects-link-container'>
        <a href='#projects' id='projects-link'>View My Projects</a>
      </span>
      <Projects />
    </div>
  );
}

export default App;
