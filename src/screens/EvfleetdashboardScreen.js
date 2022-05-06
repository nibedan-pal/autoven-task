import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import OrderMain from "../components/evfleetdashboard/OrderMain";

const Evfleetdashboardcreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <OrderMain />
      </main>
    </>
  );
};

export default Evfleetdashboardcreen;
