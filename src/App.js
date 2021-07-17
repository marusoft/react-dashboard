import React from "react";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

import "./App.css"

const App = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        hello other pages
      </div>
    </div>
  );
};

export default App;
