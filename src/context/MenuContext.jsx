import { useState, createContext } from "react";
import PropTypes from 'prop-types';

const MenuContext = createContext({});

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, handleMenuClick }}>
      {children}
    </MenuContext.Provider>
  );
};
MenuProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuContext;
