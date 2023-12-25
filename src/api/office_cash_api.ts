import {ip} from "./config"
export const getPrice = async () => {
  const url = "http://" + ip + ":10000/office_cash";
  const f = await fetch(url);
  return await f.json();
};
