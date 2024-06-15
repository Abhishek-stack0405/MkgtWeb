import React from 'react';
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <header className="flex h-20 justify-center mx-auto">
  
    <img
      src={logo}
      alt="Logo"
      className="h-20 "
    />
 
</header>

  );
}

export default Header;
