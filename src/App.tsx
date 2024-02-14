import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Movies from "./components/movies/Movies";
import Series from "./components/series/Series";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Bookmarks from "./components/bookmarks/Bookmars";
import DesktopNav from "./components/navbar/DesktopNav";
import { useEffect, useState } from "react";

export default function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </>
  );
}
