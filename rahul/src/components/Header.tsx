import { NavLink, Link } from 'react-router-dom';
import heroImgUrl from "../assets/home/rahul-nav.svg"

export const Header = () => {

  return (
    <div data-animation="default" data-collapse="none" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
      <div className="grid-navbar">
        <nav role="navigation" className="nav-menu w-nav-menu">
          <Link to="/" className="w-inline-block w--current">
            <img src={heroImgUrl} loading="lazy" alt="Hero image" className="mycv" />
          </Link>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link w-nav-link ${isActive ? 'w--current' : ''}`}
          >
            About
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => `nav-link w-nav-link ${isActive ? 'w--current' : ''}`}
          >
            Projects
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-link w-nav-link ${isActive ? 'w--current' : ''}`}
          >
            Contact
          </NavLink>
        </nav>
        <div id="w-node-bc339dbc-2a59-0847-4b81-c02c2ccf17dd-2ccf17b1" className="menu-button w-nav-button">
          <div className="menu-button-icon w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
