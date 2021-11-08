const Navbar = () => {
  return (
    <div>
      <div className="logo-nav">
        <div className="logo">Tribute</div>
        <nav className="nav">
          <ul className="nav-ul">
            <li className="nav-link">
              <a href="#footer">About</a>
            </li>
            <li className="nav-link">
              <a href="#tribute-info">Info</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
