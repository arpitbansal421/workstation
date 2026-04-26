import React from "react";
import WorkerTable from "./components/workertable";
import WorkstationTable from "./components/workstationtable"
import FactoryTable from "./components/factorytable";
import "./App.css";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Factory Dashboard</h1>

      <FactoryTable />
      <br />
      <WorkerTable />
      <br />
      <WorkstationTable />
    </div>
  );
};

export default App;