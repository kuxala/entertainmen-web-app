import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [home, setHome] = useState<boolean>(true);
  const [movie, setMovie] = useState<boolean>(false);
  const [tv, setTv] = useState<boolean>(false);
  const [bookmark, setBookmark] = useState<boolean>(false);

  return (
    <nav>
      <div>
        <img src="../../assets/logo.svg" className="movie-logo" />
      </div>

      <div className="center-nav">
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
