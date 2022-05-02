import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDiscord,
  faGithub, 
  faInstagram, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styling/App.css';

const Links = () => {
  return (
    <nav>
      <ul>
        <li className='icon-link'>
          <a href='https://github.com/keanuwilliams' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faGithub} className='icon' />
          </a>
          <span class="label">keanuwilliams</span>
        </li>
        <li className='icon-link'>
          <a href='https://www.linkedin.com/in/keanu-williams-50908516a/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} className='icon' />
          </a>
          <span class="label">Keanu Williams</span>
        </li>
        <li className='icon-link'>
          <a href='https://www.instagram.com/keanuwilliams/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faInstagram} className='icon' />
          </a>
          <span class="label">keanuwilliams</span>
        </li>
        <li className='icon-link'>
          <button>
            <FontAwesomeIcon icon={faDiscord} className='icon' />
          </button>
          <span class="label">keanuwilliams#0891</span>
        </li>
        <li className='icon-link'>
          <a href='mailto:keanucwilliams@icloud.com' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faEnvelope} className='icon' />
          </a>
          <span class="label">keanucwilliams@icloud.com</span>
        </li>
      </ul>
    </nav>
  );
}

const Header = () => {
  return(
    <section id='header-group'>
      <header id='header'>
        <h1>Keanu Williams</h1>
        <p>aspiring developer &nbsp;&bull;&nbsp; nerd &nbsp;&bull;&nbsp; casual powerlifter</p>
        <Links />
      </header>
    </section>
  );
}

export default Header;