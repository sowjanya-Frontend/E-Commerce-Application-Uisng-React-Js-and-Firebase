import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import defaultuserImage from './Images/DefaultUserIcon.jpg';
import { useSelector } from 'react-redux';
import { selectCount } from './store/cart';
import { logout } from "./FireBase";
import { loggedInuserName } from "./store/user";


function NavBar() {
  const count = useSelector(selectCount);
  const userName = useSelector(loggedInuserName);

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-light navbar-bg">
        <div className="container-fluid">
          <Link className="navbar-brand" to={'/Home'}>
            E-Commerce App
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={'/sign-in'}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/sign-up'}>
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/Home'}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/Shop'}>
                  Shop
                </Link>
              </li>

            </ul>
            <form className="d-flex nav-bar-right" role="search">
              <button type="button" class="btn btn-default" title="added items count">
                <Link className="nav-link" to={'/Details'}>
                  Cart
                </Link>
                <span class="badge badge-dark">{count}</span>
              </button>

              <div className="nav-item dropdown cursor-auto" title={userName}>
                <a href="#" data-toggle="dropdown" id="navbarDropdownMenuLink" className="cursor-auto nav-item nav-link user-action" aria-haspopup="true" aria-expanded="false"><img src={defaultuserImage} className="avatar" alt="Avatar" width="40" height="40" /></a>
              </div>
              <button className="btn btn-default" type="button" onClick={() => logout()}>LogOut</button>

            </form>


          </div>
        </div>
      </nav>


    </React.Fragment>
  )
}
export default NavBar;