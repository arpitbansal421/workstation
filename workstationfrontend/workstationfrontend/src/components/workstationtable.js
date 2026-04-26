import React, { useEffect, useState } from "react";
import { getWorkstationMetrics } from "../api/api";

const WorkstationTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getWorkstationMetrics();
    setData(res);
  };

  return (
    <div>
      <h2>Workstations</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Occupancy Time</th>
            <th>Utilization</th>
            <th>Total Units</th>
            <th>Throughput</th>
          </tr>
        </thead>
        <tbody>
          {data.map((s) => (
            <tr key={s.workstation_id}>
              <td>{s.workstation_id}</td>
              <td>{s.name}</td>
              <td>{s.occupancyTime}</td>
              <td>{s.utilization.toFixed(2)}</td>
              <td>{s.totalUnits}</td>
              <td>{s.throughput.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkstationTable;