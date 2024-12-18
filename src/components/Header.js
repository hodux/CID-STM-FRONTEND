import React, { useEffect, useState } from "react";
import logo from "../images/stm.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { faL } from "@fortawesome/free-solid-svg-icons";
function Header() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showSignOut, setShowSignOut] = useState(false);
    let token = "";
    let truth = false;
    let {state} = useLocation();
    try{
      truth = state.truth;
    } catch(error){
      console.log(error)
    }
    
    useEffect(() => {
      
        const checkToken = () => {
          let token = "";
          if(truth){
            token = localStorage.getItem('token');
          }
            if(token === null || token === ""){
                console.log(isAuthenticated);
              console.log("truth: " +truth)

            }else{
                setIsAuthenticated(true);
                setShowSignOut(true)
                console.log(isAuthenticated);
            }
          if(truth == null){
            truth = false;
          }
        }
        checkToken();
    }, [navigate, isAuthenticated]);


    const handleSignOut = () => {
      setIsAuthenticated(false)
      truth = false;
      setShowSignOut(false)
      let token = localStorage.getItem('token');
      window.location.reload(); 
    }


  return (
    <>
    <header className="flex items-center justify-between bg-gray-900 p-4 fixed top-0 w-full z-10">
      <div className="flex">
        <Link to="/">
          <img src={logo} alt="CID" className="h-8 w-15 mr-5" />
        </Link>
        <Link to="/" className="text-white hover:underline py-2">
          Home
        </Link>
      </div>

      <div className="flex space-x-5">
        <div>
        {
            isAuthenticated ? (
            <>
                <Link to="/maxsequenceschart" className="text-white hover:underline">Stops chart</Link> 
                <Link to="/fullTripTimeChart" className="text-white hover:underline">Trip time chart</Link> 
          </>
        ):null
        }
        </div>
        <div>
          {!isAuthenticated ? 
            <Link to="/signin" className="text-white hover:underline">Sign in</Link>: null
          }
        </div>
        <div>
          {!isAuthenticated ? 
            <Link to="/signup" className="text-white hover:underline">Sign up</Link>: null
          }
        </div>
        <div>
          {showSignOut ? 
            <Link to="/signin" className="text-red-600 hover:underline text-sm" onClick={handleSignOut}>Sign Out</Link>: null
          }
        </div>
        
        </div>

    </header>
    </>
  );
}

export default Header;
