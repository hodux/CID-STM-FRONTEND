import React, {useEffect, useState} from "react";
import logo from "../images/stm.png";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
function Header() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        const checkToken = () => {
            let token = localStorage.getItem('token');
            if(token == null || token === ""){
                console.log(isAuthenticated);
            }else{
                setIsAuthenticated(true);
                console.log(isAuthenticated);
            }
        }
        checkToken();
    }, [navigate, isAuthenticated]);
  return (
    <header className="flex items-center justify-between bg-gray-900 p-4 fixed top-0 w-full z-10">
      <div className="flex">
        <Link to="/"><img src={logo} alt="CID" className="h-8 w-15 mr-5" /></Link>
        <Link to="/" className="text-white hover:underline py-2">Home</Link>
      </div>

      <div className="flex space-x-5">
        {
            isAuthenticated ?
                <Link to="/maxsequenceschart" className="text-white hover:underline">Stops chart</Link> : null
        }
        <Link to="/signin" className="text-white hover:underline">Sign in</Link>
        <Link to="/signup" className="text-white hover:underline">Sign up</Link>
      </div>
    </header>
  );
}

export default Header;
