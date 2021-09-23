import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

const options = {
  ignoreHeaders: true,
};

const client = applyCaseMiddleware(
  axios.create({
    baseURL: "https://jumptracker-api.herokuapp.com/api/v1",
    // 手元で動かす場合はこちら
    // baseURL: "http://localhost:3001/api/v1",
  }),
  options
);

export default client;
