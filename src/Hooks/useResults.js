import { useEffect, useState } from "react";
import Zomoto from "../Api/Zomoto";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // const searchApi = async (searchTerm) => {
  const searchApi = async (searchTerm) => {
    try {
      const response = await Zomoto.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
        },
      });
      //  console.log(response);
      setResults(response.data.restaurants);
    } catch (err) {
      setErrorMessage("something went wrong!");
    }
  };
  // console.log(results);
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
