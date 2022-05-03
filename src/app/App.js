import Header from '../components/Header';
import Projects from '../components/Projects/Projects';
import AnchorLink from '../functions/AnchorLink';
import '../styling/App.css';

function App() {
  return (
    <div id='wrapper'>
      <div id='header-bg'></div>
      <div id='overlay'></div>
      <Header />
      <AnchorLink text='View Recent Projects' isDown sectionId='projects-bg' />
      <div id='projects-bg'>
        <Projects />
      </div>
    </div>
  );
}

export default App;
