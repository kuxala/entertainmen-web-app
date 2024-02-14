import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div>
        <img src="../../assets/logo.svg" className="movie-logo" />
      </div>
      <div className="center-nav">
        <div>
          <img src="../../assets/icon-nav-home.svg" className="icon-nav-home" />
        </div>
        <div>
          <img
            src="../../assets/icon-nav-movies.svg"
            className="icon-nav-movies"
          />
        </div>
        <div>
          <img
            src="../../assets/icon-nav-tv-series.svg"
            className="icon-nav-tv"
          />
        </div>
        <div>
          <img
            src="../../assets/icon-nav-bookmark.svg"
            className="icon-nav-bookmark"
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
