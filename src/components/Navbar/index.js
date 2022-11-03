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
            The books
          </NavLink>
          <NavLink to='/movie' activestyle="true">
            Movies
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>show other quote</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;