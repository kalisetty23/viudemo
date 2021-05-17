/* eslint-disable no-unused-vars */
import React from "react";
import "./Navbar.css";
import { MdTrendingDown } from "react-icons/md";
import { FiUsers, FiSliders, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

import {
 RiPulseFill,
 RiFileTextLine,
 RiGiftLine,
 RiSettings2Line,
 RiShoppingCartLine,
} from "react-icons/ri";

function Navbar() {
 return (
  <section className="navbar">
   <Link to="/" className="navbar-item">
    <RiPulseFill size="1.3em" /> Dashboard
   </Link>
   <Link to="/about" className="navbar-item">
    <RiShoppingCartLine size="1.3em" /> Point Of sale
   </Link>
   <Link to="/portfolio" className="navbar-item">
    <RiFileTextLine size="1.3em" /> Invoice
   </Link>
   <Link to="/shop" className="navbar-item">
    <FiShoppingBag size="1.3em" /> Orders
   </Link>
   <Link to="/blog" className="navbar-item">
    <FiUsers SIZE="1.3EM" /> Customers
   </Link>
   <Link to="/contact" className="navbar-item">
    <FiSliders size="1.3em" /> Reports
   </Link>
   <Link to="/products" className="navbar-item">
    <RiGiftLine size="1.3em" /> Products
   </Link>
   <Link to="/blog" className="navbar-item">
    <RiSettings2Line size="1.3em" /> Settings
   </Link>
   <Link to="/contact" className="navbar-item">
    <MdTrendingDown size="1.3em" /> Returns
   </Link>
  </section>
 );
}
export default Navbar;
