import React from 'react';
import { Logo } from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return <div className="w-full flex items-center justify-between border-t border-gray-300">
    
    <div className="flex items-center justify-center gap-3 py-3">
      <img src={Logo} className="w-16 h-auto object-contain whitespace-norap" alt="" />
      <p>Resumo</p>
    </div>

    <div className="flex items-center justify-center gap-6">
      <Link to={"/"} className="text-blue-500 text-lg">Home</Link>
      <Link to={"/"} className="text-blue-500 text-lg">Contact</Link>
      <Link to={"/"} className="text-blue-500 text-lg whitespace-norap">Privacy Policy</Link>
    </div>

  </div>;

};

export default Footer;