import React from "react";
import Sidebar from "./Sidebar";
import Context from "./Context";
import LeftSide from "./LeftSide";

const Dashboard = () => {
  return (
    <div className="dashboard faj">
      <div className="moraba_vasat">
        <Sidebar />
        <Context />
        <LeftSide />
      </div>
    </div>
  );
};

export default Dashboard;
