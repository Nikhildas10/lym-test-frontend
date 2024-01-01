import axios from "axios";

export const commonApi = async (method, url, data, header) => {
  const config = {
    method,
    url,
    data,
    headers: header ? header : { "Content-Type": "application/json" },
  };
  return await axios(config)
    .then((result) => {
      return result;
    })
    .catch((result) => {
      return result;
    });
};
