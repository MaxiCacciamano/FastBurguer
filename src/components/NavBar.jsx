import React, {useState} from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTag } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import {  TbTruckDelivery } from "react-icons/tb";
import {MdFavorite,MdHelp} from "react-icons/md";
import {FaWallet, FaUserFriends} from "react-icons/fa"

export const NavBar = () => {
    const [nav, setNav] = useState(false)
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* configurate NavBar in tree section, 1:Menu, 2:name, 3:the type order  */}
      <div className="flex items-center">
        {/* the menu */}
        <div onClick={()=>setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Fast food <span className="font-bold">Burgerland</span>
        </h1>
        {/* a section/option to choose the type of order, delivery/pickup */}
        <div className="hidden lg:flex items-center bg-grey-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p p-2>pickup</p>
        </div>
      </div>
      {/* search input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] ">
        <AiOutlineSearch className="size={25}" />
        <input
          type="text"
          placeholder="search foods"
          className="bg-transparent p-2 focus:outline-none"
        />
      </div>
      {/* add the cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>

      {/* mobile menu */}
      {/* overlay */}
      {
        nav?<div className="bg-black/80 fixed  w-full h-screen z-10 top-0 left-0"></div>:''
      }
      {/* side drawer menu */}
      <div className={nav?"fixed top-0  left-0 w-[300px] h-screen bg-white z-10 duration-300":
      "fixed top-0  left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
        <AiOutlineClose
        onClick={()=>setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl  p-4 ">
          Food <span className="font-bold">Burgerland</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex cursor-pointer">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4 cursor-pointer" />
               Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4 cursor-pointer"  />
              Wallet
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <BsFillSaveFill size={25} className="mr-4" />
              Best Ones
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
