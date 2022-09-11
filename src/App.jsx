import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import NavBar from "./NavBar";
import Home from "./Home";
import Shop from './Shop';
import Details from "./Details";
import Checkout from "./Checkout";

/**
 * @description: 
 * @return:
 * @param void
 * @author: Sowjanya Kandra
 * @required: 
*/
export default class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="App">
            <NavBar />
            <div className="auth-wrapper">
              <div>
                <Routes>
                  <Route exact path="/" element={<Login />} />
                  <Route path="/sign-in" element={<Login />} />
                  <Route path="/sign-up" element={<SignUp />} />
                  <Route path="/Home" element={<Home />} />
                  <Route path="/Shop" element={<Shop />} />
                  <Route path="/Details" element={<Details />} />
                  <Route path="/Checkout" element={<Checkout />} />
                </Routes>
              </div>
            </div>
          </div>
        </Router>

      </React.Fragment>
    )
  }
}