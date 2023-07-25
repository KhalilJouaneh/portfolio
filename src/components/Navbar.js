import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {

  return (
    <div className="header-big-container">
      <nav className="navbar-container mobile-nav">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <div className="flex space-x-4 ml-5 navbar-items">
                0xCO2
            </div>
          </div>

          <div className="flex items-center mr-5">
            {/* Twitter */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
