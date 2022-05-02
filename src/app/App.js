import Header from '../components/Header';
import Projects from '../components/Projects';
import '../styling/App.css';

function App() {
  return (
    <div id='app'>
      <div id='bg'></div>
      <div id='overlay'></div>
      <div>
        <Header />
        <Projects />
      </div>
    </div>
  );
}

export default App;
