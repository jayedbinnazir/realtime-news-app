import { Button, Box } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../../provider/AuthProvider";

export const NavBar = () => {

  const { user , logOut } = useAuth()

  const handleLogout=()=>{
    logOut()
    .then(()=>console.log('user loggedout'))
    .catch(error=>console.log(error))
  }

  return (
    <div className="navbar  border-2 bg-slate-200 ">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-[#706F6F]  font-thin	 ">
          Home
        </a>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case  text-[#706F6F] font-thin	 ">
          About
        </a>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case  text-[#706F6F] font-thin	 ">
          Career
        </a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <Button
          size="small"
          variant="contained"
          disableElevation
          sx={{ bgcolor: "text.secondary", marginRight: "2px" }}
        >
          Profile
        </Button>
        {
          user ?  <Button
          size="small"
          variant="contained"
          disableElevation
          sx={{ bgcolor: "black" }}
          LinkComponent={NavLink}
          onClick={handleLogout}
        >
          Logout
        </Button> : <Button
          size="small"
          variant="contained"
          disableElevation
          sx={{ bgcolor: "black" }}
          LinkComponent={NavLink}
          to={'/login'}
        >
          Login
        </Button>
        }
      </div>
    </div>
  );
};
