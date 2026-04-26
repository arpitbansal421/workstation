import React, { useEffect, useState } from "react";
import { getFactoryMetrics } from "../api/api";

const FactoryTable = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getFactoryMetrics();
    setData(res);
  };

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>Factory</h2>
      <table border="1" cellPadding="8">
        <tbody>
          <tr>
            <td>Total Production</td>
            <td>{data.totalProduction}</td>
          </tr>
          <tr>
            <td>Total Working Time</td>
            <td>{data.totalWorkingTime}</td>
          </tr>
          <tr>
            <td>Average Utilization</td>
            <td>{data.avgUtilization.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Average Production Rate</td>
            <td>{data.avgProductionRate.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FactoryTable;