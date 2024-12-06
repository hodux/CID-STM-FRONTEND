import React from "react";

function Header() {
  return (
    <header className="flex justify-end  bg-gray-900" >
      <a href="/signin" className="text-blue-500 hover:underline mr-5">Sign in</a>
      <a href="/signup" className="text-blue-500 hover:underline mr-5">Sign up</a>
    </header>
  );
}

export default Header;
