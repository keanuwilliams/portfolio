import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import '../styling/functions.css';

const AnchorLink = ({ text, isDown=false, sectionId }) => {
  let icon = <FontAwesomeIcon icon={faArrowDown} />
  if (!isDown) icon = <FontAwesomeIcon icon={faArrowUp} />

  return (
    <span className='anchor-link-container'>
      <button className='anchor-link' onClick={() => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
          inline: 'start'
        });
      }}>
        {icon}
        &nbsp; {text} &nbsp;
        {icon}
      </button>
    </span>
  );
}

export default AnchorLink;