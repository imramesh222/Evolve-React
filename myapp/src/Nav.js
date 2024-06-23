import './Navbar.css';
function Nav() {
  return (
    <nav className="navbar" style={{display:"flex",fontSize:"40px",textDecoration:"none"}}>
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#home">Home</a></li>
        <li className="navbar-item"><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default Nav;