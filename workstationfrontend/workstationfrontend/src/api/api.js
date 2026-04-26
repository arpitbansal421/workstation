const BASE_URL = "https://workstation-zo05.onrender.com";

export const getWorkerMetrics = async () => {
  const res = await fetch(`${BASE_URL}/v1/api/getWorkerMetrics`);
  return res.json();
};

export const getWorkstationMetrics = async () => {
  const res = await fetch(`${BASE_URL}/v1/api/getWorkstationMetrics`);
  return res.json();
};

export const getFactoryMetrics = async () => {
  const res = await fetch(`${BASE_URL}/v1/api/getFactoryMetrics`);
  return res.json();
};