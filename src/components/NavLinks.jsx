import { Link } from "react-router-dom";

const navLinks = [
  { name: "home", url: "/" },
  { name: "headphones", url: "/headphones" },
  { name: "speakers", url: "/speakers" },
  { name: "earphones", url: "/earphones" },
];

function NavLinks() {
  return (
    <nav>
      <ul className="list-none flex flex-col sm:flex-row uppercase gap-6 justify-between sm:gap-8">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
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
