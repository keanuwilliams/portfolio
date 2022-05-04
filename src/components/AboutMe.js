import '../styling/App.css';

const AboutMe = () => {
  return (
    <section className='subcontainer' id='about-me-container'>
      <a className='subtitle' href='#about-me-container'>
        <h2>About Me</h2>
      </a>
      <p id='about-text'>
        Hi, I'm Keanu from Hawaii! I love programming, walking, or lifting weights on my
        free time. Feel free to connect with me with the links above or take a look at some of my
        work with the links below.
      </p>
    </section>
  );
}

export default AboutMe;