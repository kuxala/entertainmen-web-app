import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Trending from "./components/trending/Trending";

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Trending />
    </>
  );
}

export default App;
