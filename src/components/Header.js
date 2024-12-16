import React from "react";
import logo from "../images/stm.png"

function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-900 p-4">
      <div className="flex">
        <a href="/"><img src={logo} alt="CID" className="h-8 w-15 mr-5" /></a>
        <a href="/" className="text-white hover:underline py-2">Home</a>
      </div>

      {/* add if ternaire if signed up = true, show profile if false show sign in sign up */}
      <div className="flex space-x-5">
        <a href="/signin" className="text-white hover:underline">Sign in</a>
        <a href="/signup" className="text-white hover:underline">Sign up</a>
      </div>

    </header>
  );
}

export default Header;
