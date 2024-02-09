import { Link } from "react-router-dom";
import reactLogo from "../../assets/react.svg";

export default function Navbar() {
  return (
    <>
      <header>
        <img src={reactLogo} alt="" />
        <nav>
          <Link to="/shop">Shop</Link>
          <Link to="/monsters">Scary Monsters</Link>
          <Link to="/spells">Search for Spells</Link>
        </nav>
      </header>
    </>
  );
}
