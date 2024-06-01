import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import logo from "../assets/Netflix_Logo_PMS.png";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-50">
      <Link to="/" className="ml-8">
        <img src={logo} alt="Netflix Logo" className="h-20 w-38" />
      </Link>

      {user?.email ? (
        <div className="flex items-center mr-8">
          <Link to="/profile">
            <button className="capitalize pr-4">profile</button>
          </Link>

          <button
            onClick={handleLogout}
            className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer">
            logout
          </button>
        </div>
      ) : (
        <div className="flex items-center mr-8">
          <Link to="/login">
            <button className="capitalize pr-4">Login</button>
          </Link>

          <Link to="/signup">
            <button className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer">
              sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
