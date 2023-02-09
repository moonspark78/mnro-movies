import { Search } from './Search';
import img from "../images/pngegg.png";
import "./Navbar.css";


const Navbar = () => {


  return (
    <nav className="navbar">
      <div className="nav-logo">
          <a href="#"><img src={img} alt=""/></a>
      </div>
      <div className="nav-title">
          <h1>Mnro Movies</h1>
      <Search/>
      </div>
    </nav>
  );
};

export default Navbar;
