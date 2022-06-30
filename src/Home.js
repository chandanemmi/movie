import React from "react";
import { useGlobalContext } from "./context";
import Movie from "./Movie";
import Search from "./Search";
export default function Home() {
  const { movie, isLoading } = useGlobalContext();
  console.log("");
  return (
    <div className="container">
      <Search />
      <Movie />
    </div>
  );
}
