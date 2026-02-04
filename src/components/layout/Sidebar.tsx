// components/Sidebar.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__line"></div>
      <div className="sidebar__icon">
        <FontAwesomeIcon icon={faGithub} size="2x" className="fa-icon" />
      </div>
      <div className="sidebar__icon">
        <FontAwesomeIcon icon={faDribbble} size="2x" className="fa-icon" />
      </div>
    </aside>
  );
};

export default Sidebar;
