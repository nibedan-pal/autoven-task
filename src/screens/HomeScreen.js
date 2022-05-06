import React from "react";
import Header from "../components/Header";
import Sidebar from "./../components/sidebar";
import { Link, NavLink } from "react-router-dom";
const HomeScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
      
        <Header />
        <NavLink
                activeClassName="active "
                to="/orders"
              >
                <button className="text col-lg-4 col-md-6 me-auto ">View Dashboard</button>
              </NavLink>
      </main>
    </>
  );
};

export default HomeScreen;
