import logo from "../assets/profile.png"
import "../styles/navbar.css";


function Navbar() {
  return (
    <nav className="navbar">
        <div className="nav-content">
            <div className="nav-profile">
                <img src={logo} alt="img" />
                <h3>Vishal Rajbhar</h3>
            </div>
            <ul>
                <li><a href="#projects">Work</a></li>
                <span className="sep">|</span>
                <li><a href="#about">About me</a></li>
            </ul>
            <div className="nav-button">
                <a href="#contact">Get in touch</a>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;