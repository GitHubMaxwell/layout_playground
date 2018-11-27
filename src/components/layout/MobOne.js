import React, { Fragment } from "react";
import MenuBar from "./MenuBar.js";
import Search from "./Search.js";
export default function MobOne() {
  return (
    // <div className="mob-container">
    //   <nav className="menu-container">
    //     <img src="https://via.placeholder.com/50" alt="Democracy Lab Logo" />

    //     {/* Hamburger */}
    //     {/* Sign Up/Log In should be a pop up modal maybe */}
    //     <ul>
    //       <li>About</li>
    //     </ul>
    //   </nav>
    // </div>
    <Fragment>
      <MenuBar />
      <Search />
    </Fragment>
  );
}
