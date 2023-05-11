import NavMenu from "./NavMenu";
import NavHeader from "./NavHeader";

export default function Navbar() {
  return (
    <nav>
      <NavHeader name="Blog-app"></NavHeader>
      <NavMenu></NavMenu>
    </nav>
  );
}
