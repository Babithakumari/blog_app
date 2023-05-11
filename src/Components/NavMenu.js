import NavItem from "./NavItem";

const NavMenu = () => {
  return (
    <>
      <ul id="nav-menu">
        <NavItem name="Home" path="/"></NavItem>
        <NavItem name="New" path="/new"></NavItem>
      </ul>
    </>
  );
};

export default NavMenu;
