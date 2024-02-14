import Bookmarks from "../bookmarks/Bookmars";
import Card from "../card/Card";
import Movies from "../movies/Movies";
import Navbar from "../navbar/Navbar";
import Recommended from "../recommended/Recommended";
import Search from "../search/Search";
import Series from "../series/Series";
import Trending from "../trending/Trending";

function Home() {
  return (
    <>
      <Trending />
      <Recommended />
    </>
  );
}

export default Home;
