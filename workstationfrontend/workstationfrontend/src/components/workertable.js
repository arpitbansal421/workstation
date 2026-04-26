import React, { useEffect, useState } from "react";
import { getWorkerMetrics } from "../api/api";

const WorkerTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getWorkerMetrics();
    setData(res);
  };

  return (
    <div>
      <h2>Workers</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Working Time</th>
            <th>Idle Time</th>
            <th>Utilization</th>
            <th>Total Units</th>
            <th>Units Per Hour</th>
          </tr>
        </thead>
        <tbody>
          {data.map((w) => (
            <tr key={w.worker_id}>
              <td>{w.worker_id}</td>
              <td>{w.name}</td>
              <td>{w.workingTime}</td>
              <td>{w.idleTime}</td>
              <td>{w.utilization.toFixed(2)}</td>
              <td>{w.totalUnits}</td>
              <td>{w.unitsPerHour.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkerTable;