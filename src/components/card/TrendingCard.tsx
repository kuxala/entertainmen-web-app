import "./TrendingCard.css";
import data from "../../data.json";

function TrendingCard() {
  return (
    <>
      <div className="trending-pictures">
        <div
          id="trending-card"
          style={{
            backgroundImage:
              "url(../../assets/thumbnails/beyond-earth/regular/small.jpg)",
            backgroundSize: "cover",
          }}
        >
          <div id="all-text">
            <div id="texts">
              <p id="year">year</p>
              <p id="movie">Movie</p>
              <p id="pg">PG</p>
            </div>
            <p id="title">Title</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default TrendingCard;
