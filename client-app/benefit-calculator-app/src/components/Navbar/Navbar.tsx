import { NavLink } from "react-router-dom";
import './Navbar.scss'

const Navbar: React.FC = () => {
    return (
      <nav className="primary-nav">
        <div className="title">Benefit Calculator</div>
        <div>|</div>
        <NavLink to="/Search">Search Benefits</NavLink>
        <NavLink to="/Rules">View Rules</NavLink>
      </nav>
    );
  };
  
  export default Navbar;