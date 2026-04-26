const BASE_URL = "https://workstation-zo05.onrender.com";

export const getWorkerMetrics = async () => {
  const res = await fetch(`${BASE_URL}/getWorkerMetrics`);
  return res.json();
};

export const getWorkstationMetrics = async () => {
  const res = await fetch(`${BASE_URL}/getWorkstationMetrics`);
  return res.json();
};

export const getFactoryMetrics = async () => {
  const res = await fetch(`${BASE_URL}/getFactoryMetrics`);
  return res.json();
};