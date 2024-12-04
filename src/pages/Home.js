import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the Application</h1>
      <div>
        <button>
          <Link to="/signin">SignIn</Link>
        </button>&nbsp;
        <button>
          <Link to="/signup">SignUp</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
