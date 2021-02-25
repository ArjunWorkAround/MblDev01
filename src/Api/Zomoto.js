import axios from "axios";

export default axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1",

  headers: {
    "user-key": "8a3140e79d6f9a49db161b8fe42928a2",
  },
});
