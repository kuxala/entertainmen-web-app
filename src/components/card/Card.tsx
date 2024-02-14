import data from "../../data.json";
import "./Card.css";

const title = data.map((x) => {
  return x.title;
});

function Card() {
  return (
    <div id="card">
      <img
        src="../../assets/thumbnails/beyond-earth/regular/small.jpg"
        id="image"
      />
      <div id="all-texts">
        <div id="text">
          <p>year</p>
          <p>Movie</p>
          <p>PG</p>
        </div>
        <p id="card-title">TITLE</p>
      </div>
    </div>
  );
}

export default Card;
