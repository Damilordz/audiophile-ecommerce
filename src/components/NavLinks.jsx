import { useContext } from "react";
import { Link } from "react-router-dom";
import NavLinkContext from "../context/NavLinkContext";

const navLinks = [
  { name: "home", url: "/" },
  { name: "headphones", url: "/headphones" },
  { name: "speakers", url: "/speakers" },
  { name: "earphones", url: "/earphones" },
];

function NavLinks() {
  const { setActiveLink } = useContext(NavLinkContext);

  const handleActiveLink = (name) => {
    if (name === "home") {
      setActiveLink("");
      return;
    } else {
      setActiveLink(name);
    }
  };

  return (
    <nav>
      <ul className="list-none flex flex-col sm:flex-row uppercase gap-6 justify-between md:justify-start sm:gap-8">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              onClick={() => handleActiveLink(link.name)}
              to={link.url}
              className={`cursor-pointer hover:text-primary transition-colors duration-300 `}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
