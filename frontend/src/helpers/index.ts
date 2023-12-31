import {
  allProducts,
  wifiProducts,
  boardProducts,
  sensorProducts,
  icsProducts,
} from "../app/api/data";

// export const getProducts = async()=> allProducts
// export const getSensors = async()=> sensorProducts
// export const getBoards = async()=> boardProducts
// export const getWifi = async()=> wifiProducts
// export const getIcs = async()=> icsProducts


export const getProducts = async () => {
  const res = await fetch(
    "https://akram-44.github.io/api/robotech/products/all.json",
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

export const getSensors = async () => {
  const res = await fetch(
    "https://akram-44.github.io/api/robotech/products/sensors.json",
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Sensors");
  }

  return res.json();
};
export const getBoards = async () => {
  const res = await fetch(
    "https://akram-44.github.io/api/robotech/products/boards.json",
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Boards");
  }

  return res.json();
};
export const getWifi = async () => {
  const res = await fetch(
    "https://akram-44.github.io/api/robotech/products/wireless.json",
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Wireless products");
  }

  return res.json();
};
export const getIcs = async () => {
  const res = await fetch(
    "https://akram-44.github.io/api/robotech/products/ics.json",
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch ICs products");
  }

  return res.json();
};

// Calculate Percentage

export const calculatePercentage = (previousPrice: any, price: any) => {
  return !!parseFloat(price) && !!parseFloat(previousPrice)
    ? (100 - (previousPrice / price) * 100).toFixed(0)
    : 0;
};
