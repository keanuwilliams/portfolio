import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer';
import AnchorLink from '../functions/AnchorLink';
import '../styling/App.css';

function App() {
  return (
    <div id='wrapper'>
      <div id='header-bg'></div>
      <div id='overlay'></div>
      <Header />
      <AnchorLink text='View More' isDown sectionId='main-bg' />
      <div id='main-bg'>
        <AboutMe />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
