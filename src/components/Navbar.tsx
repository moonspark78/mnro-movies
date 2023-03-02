import { Search } from "./Search";
import img from "../images/pngegg.png";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={img} alt="logo mnro movies" />
      </div>
      <div className="nav-title">
        <h1>Mnro Movies</h1>
        <Search />
      </div>
    </nav>
  );
};

