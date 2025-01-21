import { createContext, useState } from "react";
import PropTypes from "prop-types";

const NavLinkContext = createContext();

 export const NavLinkProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <NavLinkContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </NavLinkContext.Provider>
  );
}

NavLinkProvider.propTypes = {
    children: PropTypes.node.isRequired,
    }

export default NavLinkContext;