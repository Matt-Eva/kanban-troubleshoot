import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-yellow-100">
      <nav className="">
        <Link to="/login">Log in</Link>
        <Link to="/boards">Boards</Link>
      </nav>
    </div>
  );
}

export default NavBar;
