import React from "react";
import Logo from '../assetts/logo.png'

const Header = () => {
  return (
    <>
      <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img
          className="w-30 ml-3 "
          src={Logo}
          alt="App Logo"
        />
      </div>
    </>
  );
};

export default Header;
