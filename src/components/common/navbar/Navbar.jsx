/* eslint-disable no-unused-vars */
import React from 'react';
import './Navbar.css';
import { MdTrendingDown } from "react-icons/md";
import { FiUsers, FiSliders, FiShoppingBag } from "react-icons/fi";


import { RiPulseFill, RiFileTextLine, RiGiftLine, RiSettings2Line, RiShoppingCartLine } from "react-icons/ri";


function Navbar() {
    return (

        <
        section className = "navbar" >



        <
        a href = "/"
        className = "navbar-item" > < RiPulseFill size = "1.3em" / > Dashboard < /a>  <
        a href = "/about"
        className = "navbar-item" > < RiShoppingCartLine size = "1.3em" / > Point Of sale < /a> <
        a href = "/portfolio"
        className = "navbar-item" > < RiFileTextLine size = "1.3em" / > Invoice < /a>  <
        a href = "/shop"
        className = "navbar-item" > < FiShoppingBag size = "1.3em" / > Orders < /a>  <
        a href = "/blog"
        className = "navbar-item" > < FiUsers SIZE = "1.3EM" / > Customers < /a>  <
        a href = "/contact"
        className = "navbar-item" > < FiSliders size = "1.3em" / > Reports < /a>  <
        a href = "/Products"
        className = "navbar-item" > < RiGiftLine size = "1.3em" / > Products < /a> <
        a href = "/blog"
        className = "navbar-item" > < RiSettings2Line size = "1.3em" / > Settings < /a>  <
        a href = "/contact"
        className = "navbar-item" > < MdTrendingDown size = "1.3em" / > Returns < /a>




        <
        /section>

    )
}
export default Navbar;