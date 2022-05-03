import Header from '../components/Header';
import Projects from '../components/Projects';
import AnchorLink from '../functions/AnchorLink';
import '../styling/App.css';

function App() {
  return (
    <>
      <div id='header-bg'></div>
      <div id='overlay'></div>
      <Header />
      <AnchorLink text='View my Projects' isDown sectionId='projects' />
      <div id='projects-bg'></div>
      <Projects />
    </>
  );
}

export default App;
