import {Link} from "react-router-dom"
const NavMenu = () => {
  return (
    <>
      <ul id="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Create</Link></li>
      </ul>
    </>
  );
};

export default NavMenu;
