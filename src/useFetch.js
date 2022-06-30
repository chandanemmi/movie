import React, { useEffect, useState } from "react";
export const API_URL = `https://www.omdbapi.com/?&apikey=5096e285`;

export default function useFetch(apiParams) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setMovie(data.Search || data);
        setIsError({ show: "false", msg: "" });
        setIsLoading(false);
      } else {
        setIsError({ show: "true", msg: data.Error });
      }
      console.log(data.Search);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const timerout = setTimeout(() => getMovie(`${API_URL}${apiParams}`), 700);
    return () => clearTimeout(timerout);
  }, [apiParams]);
  return { isLoading, isError, movie };
}

// http://www.omdbapi.com/?i=tt3896198&apikey=5096e285
