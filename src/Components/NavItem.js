const NavItem = ({ name, path }) => {
  return (
    <>
      <li className="nav-item">
        <a href={path}>{name}</a>
      </li>
    </>
  );
};

export default NavItem;
