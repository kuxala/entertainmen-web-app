import "./Navbar.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [home, setHome] = useState<boolean>(true);
  const [movie, setMovie] = useState<boolean>(false);
  const [tv, setTv] = useState<boolean>(false);
  const [bookmark, setBookmark] = useState<boolean>(false);
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
    <nav>
      <Link to="/">
        <div
          onClick={() => {
            window.location.reload();
          }}
        >
          <img src="../../assets/logo.svg" className="movie-logo" />
        </div>
      </Link>
      <div className="center-nav">
        <Link to="/">
          <div
            onClick={() => {
              setHome(true);
              setMovie(false);
              setTv(false);
              setBookmark(false);
            }}
          >
            <img
              src="../../assets/icon-nav-home.svg"
              className={home ? "light" : "null"}
            />
          </div>
        </Link>
        <Link to="/movies">
          <div
            onClick={() => {
              setMovie(!movie);
              setHome(false);
              setTv(false);
              setBookmark(false);
            }}
          >
            <img
              src="../../assets/icon-nav-movies.svg"
              className={movie ? "light" : "null"}
            />
          </div>
        </Link>
        <Link to="series">
          <div
            onClick={() => {
              setTv(!tv);
              setHome(false);
              setMovie(false);
              setBookmark(false);
            }}
          >
            <img
              src="../../assets/icon-nav-tv-series.svg"
              className={tv ? "light" : "null"}
            />
          </div>
        </Link>
        <Link to="bookmarks">
          <div
            onClick={() => {
              setTv(false);
              setHome(false);
              setMovie(false);
              setBookmark(!bookmark);
            }}
          >
            <img
              src="../../assets/icon-nav-bookmark.svg"
              className={bookmark ? "light" : "null"}
            />
          </div>
        </Link>
      </div>
      <div>
        <img
          src="../../assets/image-avatar.png"
          width="24px"
          className="avatar"
        />
      </div>
    </nav>
  );
}
export default Navbar;
