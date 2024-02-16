import { Link } from "react-router-dom";
import "./DesktopNav.css";
import { useState } from "react";

function DesktopNav() {
  const [home, setHome] = useState<boolean>(true);
  const [movie, setMovie] = useState<boolean>(false);
  const [tv, setTv] = useState<boolean>(false);
  const [bookmark, setBookmark] = useState<boolean>(false);

  return (
    <>
      <nav id="desktop-nav">
        <div className="center-nav-desktop">
          <Link to="/">
            <div
              onClick={() => {
                setHome(true);
                setMovie(false);
                setTv(false);
                setBookmark(false);
              }}
            >
              <img src="../../assets/logo.svg" className="movie-logo" />
            </div>
          </Link>

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
                setMovie(true);
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
                setTv(true);
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
                setBookmark(true);
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
    </>
  );
}
export default DesktopNav;
