import React from "react";
import { Navbar } from "../../common";

import "./Header.css";

function Header() {
 return (
  <section className="header">
   <section className="header-top">
    <section className="header-top__logo">
     <a href="/logo.png" className="header-logo">
      <img src="/logo.png" className="header-logos" alt="logo" />
     </a>
    </section>
    <section className="header-top__navbar">
     <section className="header-top__navigation">
      <Navbar />
     </section>
    </section>
   </section>
   <section className="header-bottom"></section>
   <hr className="header-top__seperator" />
  </section>
 );
}

export default Header;
