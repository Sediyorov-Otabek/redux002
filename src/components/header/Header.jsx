import React, { memo } from "react";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

import { PiShoppingCartLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Header-removebg-preview.png";

const Header = () => {
  return (
    <div className="container mx-auto  py-5">
      <nav className="flex items-center justify-between gap-5 md:gap-5 lg:gap-20">
        <NavLink to="/">
          <div className="logo w-40">
            <img src={logo} alt="" />
          </div>
        </NavLink>
        <div className="items-center border hidden  lg:flex  px-3 py-3 w-full">
          <select name="" id="">
            <option value="">Home</option>

            <option value="">About</option>

            <option value="">Contact</option>
          </select>
          <form className="flex items-center w-full" action="">
            <input
              className="w-full outline-none px-3 border-l-2"
              type="text"
              placeholder="Searche for item...."
            />
            <CiSearch />
          </form>
        </div>
        <NavLink to="/resume">
          <div className=" hidden sm:flex md:flex lg:flex items-center whitespace-nowrap">
            <CiLocationOn />
            <p>Your Resume</p>
          </div>
        </NavLink>
        <div className="flex open__menu items-center gap-6">
          <NavLink to="/wishlist">
            <div className="flex items-center">
              <CiHeart />
              <p>Wishlist</p>
            </div>
          </NavLink>
          <NavLink to="/cart">
            <div className="flex items-center">
              <PiShoppingCartLight />
              <p>Cart</p>
            </div>
          </NavLink>
          <NavLink to={"/login"}>
            <div className="flex items-center">
              <VscAccount />
              <p>Account</p>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default memo(Header);
