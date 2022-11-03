import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/book' activestyle="true">
            TLOTR books
          </NavLink>
          <NavLink to='/character' activestyle="true">
            TLOTR characters
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>Show me a TLOTR quote</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;