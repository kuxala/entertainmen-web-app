import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Movies from "./components/movies/Movies";
import Series from "./components/series/Series";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Bookmarks from "./components/bookmarks/Bookmars";
import DesktopNav from "./components/navbar/DesktopNav";
import { useEffect, useState } from "react";
import data from "./data.json";

export default function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [movieData, setMovieData] = useState(data);
  const [focus, setFocus] = useState<boolean>(false);
  const [input, setInput] = useState<any>(null);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {screenWidth > 768 ? <DesktopNav /> : <Navbar />}
      <Search
        focus={focus}
        setFocus={setFocus}
        input={input}
        setInput={setInput}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              movieData={movieData}
              setMovieData={setMovieData}
              focus={focus}
              setFocus={setFocus}
              input={input}
              setInput={setInput}
            />
          }
        />

        <Route
          path="/movies"
          element={<Movies movieData={movieData} setMovieData={setMovieData} />}
        />

        <Route path="/series" element={<Series movieData={movieData} />} />

        <Route
          path="/bookmarks"
          element={<Bookmarks movieData={movieData} />}
        />
      </Routes>
    </>
  );
}
