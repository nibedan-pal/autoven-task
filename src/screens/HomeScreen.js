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
        <h3 style={{ padding: "15px" }}>EV Fleet Dashboard </h3>
        <br></br>
        <NavLink activeClassName="active " to="/evfleetdashboard">
          <div style={{ padding: "15px" }}>
            {" "}
            <button
              style={{
                color: "black",
                backgroundColor: "#0d9bdd",
                border: "#0d9bdd",
                height: "40px",
                width: "245px",
                
              }}
            >
              Vehicle Dashboard
            </button>
          </div>
        </NavLink>
      </main>
    </>
  );
};

export default HomeScreen;
