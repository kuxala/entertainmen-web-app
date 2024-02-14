import Card from "../card/Card";
import Navbar from "../navbar/Navbar";
import Recommended from "../recommended/Recommended";
import Search from "../search/Search";
import Trending from "../trending/Trending";
function Home() {
  return (
    <>
      <Navbar />
      <Search />
      <Trending />
      <Recommended />
    </>
  );
}

export default Home;
